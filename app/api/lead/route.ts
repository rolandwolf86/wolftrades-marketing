import { NextResponse } from "next/server";
import { z } from "zod";
import { sendToGHL, type GHLLeadPayload } from "@/lib/ghl";
import {
  resend,
  LEAD_NOTIFICATION_FROM,
  LEAD_NOTIFICATION_TO,
} from "@/lib/resend";
import { getServiceSupabase } from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const leadSchema = z.object({
  email: z.string().email(),
  name: z.string().trim().min(1).max(120).optional(),
  phone: z.string().trim().min(5).max(40).optional(),
  source: z.string().trim().max(80).optional(),
  intent: z
    .enum([
      "watchlist",
      "risk",
      "journal",
      "scanner",
      "wolfpack",
      "apex",
      "platform",
      "general",
    ])
    .optional(),
  notes: z.string().trim().max(2000).optional(),
  // APEX application extensions:
  accountSize: z.string().trim().max(80).optional(),
  experience: z.string().trim().max(80).optional(),
  challenge: z.string().trim().max(2000).optional(),
  whyApex: z.string().trim().max(2000).optional(),
});

type Lead = z.infer<typeof leadSchema>;

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }
  const lead = parsed.data;

  const [supabaseResult, resendResult, ghlResult] = await Promise.allSettled([
    insertLead(lead),
    notifyLead(lead),
    syncToGHL(lead),
  ]);

  const supabaseError =
    supabaseResult.status === "rejected"
      ? String(supabaseResult.reason)
      : supabaseResult.value.error;
  const resendError =
    resendResult.status === "rejected"
      ? String(resendResult.reason)
      : resendResult.value.error;
  const ghlError =
    ghlResult.status === "rejected"
      ? String(ghlResult.reason)
      : ghlResult.value.error;

  // Only hard-fail if every downstream is broken — otherwise we still have at
  // least one record of the lead and the user can be salvaged manually.
  if (supabaseError && resendError && ghlError) {
    return NextResponse.json(
      {
        error: "Lead capture failed",
        supabase: supabaseError,
        resend: resendError,
        ghl: ghlError,
      },
      { status: 502 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      stored: !supabaseError,
      notified: !resendError,
      synced: !ghlError,
      ...(supabaseError ? { supabaseError } : {}),
      ...(resendError ? { resendError } : {}),
      ...(ghlError ? { ghlError } : {}),
    },
    { status: 200 },
  );
}

async function insertLead(
  lead: Lead,
): Promise<{ error: string | null }> {
  const supabase = getServiceSupabase();
  if (!supabase) return { error: "Supabase not configured" };

  const { error } = await supabase.from("leads").insert({
    email: lead.email,
    name: lead.name ?? null,
    phone: lead.phone ?? null,
    source: lead.source ?? null,
    intent: lead.intent ?? null,
    notes: lead.notes ?? null,
    account_size: lead.accountSize ?? null,
    experience: lead.experience ?? null,
    challenge: lead.challenge ?? null,
    why_apex: lead.whyApex ?? null,
  });

  return { error: error ? error.message : null };
}

async function notifyLead(
  lead: Lead,
): Promise<{ error: string | null }> {
  if (!resend) return { error: "Resend not configured" };

  const subject = `New lead — ${lead.email}${lead.intent ? ` (${lead.intent})` : ""}`;
  const lines = [
    `Email: ${lead.email}`,
    lead.name ? `Name: ${lead.name}` : null,
    lead.phone ? `Phone: ${lead.phone}` : null,
    lead.intent ? `Intent: ${lead.intent}` : null,
    lead.source ? `Source: ${lead.source}` : null,
    lead.accountSize ? `Account size: ${lead.accountSize}` : null,
    lead.experience ? `Experience: ${lead.experience}` : null,
    lead.challenge ? `\nBiggest challenge:\n${lead.challenge}` : null,
    lead.whyApex ? `\nWhy APEX:\n${lead.whyApex}` : null,
    lead.notes ? `\nNotes:\n${lead.notes}` : null,
  ].filter(Boolean) as string[];

  const result = await resend.emails.send({
    from: LEAD_NOTIFICATION_FROM,
    to: LEAD_NOTIFICATION_TO,
    subject,
    text: lines.join("\n"),
    replyTo: lead.email,
  });

  return { error: result.error ? result.error.message : null };
}

async function syncToGHL(
  lead: Lead,
): Promise<{ error: string | null }> {
  // Tags help the GHL workflow route to the right pipeline.
  // Always include "wolf-trades-marketing" + the intent (or source) so the
  // workflow can branch by intent without re-parsing the source string.
  const tags = ["wolf-trades-marketing"];
  if (lead.intent) tags.push(lead.intent);
  if (lead.source) tags.push(lead.source);

  const payload: GHLLeadPayload = {
    email: lead.email,
    first_name: lead.name ?? undefined,
    phone: lead.phone ?? undefined,
    source: lead.source ?? undefined,
    intent: lead.intent ?? undefined,
    tags,
    account_size: lead.accountSize ?? undefined,
    experience: lead.experience ?? undefined,
    challenge: lead.challenge ?? undefined,
    why_apex: lead.whyApex ?? undefined,
    notes: lead.notes ?? undefined,
  };

  return sendToGHL(payload);
}
