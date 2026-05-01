import { NextResponse } from "next/server";
import { GHL_WEBHOOK_URL } from "@/lib/ghl";
import { resend } from "@/lib/resend";
import { getServiceSupabase } from "@/lib/supabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Status = "ok" | "missing_config" | "error";

interface ServiceCheck {
  name: string;
  status: Status;
  detail?: string;
}

// Read-only health probe for the lead-capture pipeline. Each downstream is
// checked without firing real lead-style writes (no test contacts in GHL,
// no test emails sent, no spurious leads-table inserts).
export async function GET() {
  const [supabase, resendCheck, ghl] = await Promise.all([
    checkSupabase(),
    checkResend(),
    checkGHL(),
  ]);

  const services: ServiceCheck[] = [supabase, resendCheck, ghl];
  const allOk = services.every((s) => s.status === "ok");

  return NextResponse.json(
    {
      status: allOk ? "ok" : "degraded",
      checked_at: new Date().toISOString(),
      services,
    },
    { status: allOk ? 200 : 503 },
  );
}

async function checkSupabase(): Promise<ServiceCheck> {
  const client = getServiceSupabase();
  if (!client) {
    return {
      name: "supabase",
      status: "missing_config",
      detail: "NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set",
    };
  }
  try {
    const { error } = await client
      .from("leads")
      .select("id", { count: "exact", head: true })
      .limit(1);
    if (error) {
      return { name: "supabase", status: "error", detail: error.message };
    }
    return { name: "supabase", status: "ok" };
  } catch (err) {
    return {
      name: "supabase",
      status: "error",
      detail: err instanceof Error ? err.message : String(err),
    };
  }
}

async function checkResend(): Promise<ServiceCheck> {
  if (!resend) {
    return {
      name: "resend",
      status: "missing_config",
      detail: "RESEND_API_KEY not set",
    };
  }
  // Don't make an API call — production keys are typically scoped to
  // "send only" and don't have permission to list domains. The actual
  // lead-capture flow only calls resend.emails.send(), so presence of
  // the key here is the strongest signal we can give without a real
  // send. If the key is wrong, /api/lead surfaces the error in
  // response.body.resendError when a real lead comes in.
  return { name: "resend", status: "ok" };
}

async function checkGHL(): Promise<ServiceCheck> {
  if (!GHL_WEBHOOK_URL) {
    return {
      name: "ghl",
      status: "missing_config",
      detail: "GHL_WEBHOOK_URL not set",
    };
  }
  // Don't ping the webhook — it would create test contacts in the workflow.
  // Presence of the URL is the strongest signal we can give without side
  // effects. A real failure shows up in /api/lead as ghlError.
  return { name: "ghl", status: "ok" };
}
