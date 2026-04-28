import { NextResponse } from "next/server";
import { z } from "zod";
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
  intent: z.enum(["wolfpack", "pro", "apex", "platform", "general"]).optional(),
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

  const [supabaseResult, resendResult] = await Promise.allSettled([
    insertLead(lead),
    notifyLead(lead),
  ]);

  const supabaseError =
    supabaseResult.status === "rejected"
      ? String(supabaseResult.reason)
      : supabaseResult.value.error;
  const resendError =
    resendResult.status === "rejected"
      ? String(resendResult.reason)
      : resendResult.value.error;

  if (supabaseError && resendError) {
    return NextResponse.json(
      { error: "Lead capture failed", supabase: supabaseError, resend: resendError },
      { status: 502 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      stored: !supabaseError,
      notified: !resendError,
      // Surface partial-failure detail so we can monitor without retrying:
      ...(supabaseError ? { supabaseError } : {}),
      ...(resendError ? { resendError } : {}),
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
