// GoHighLevel Inbound Webhook — server-side only.
// Set GHL_WEBHOOK_URL in Vercel project env. Webhook is configured inside GHL
// (Workflows → trigger: Inbound Webhook). The workflow maps the JSON body
// below into Contact fields, tags, pipeline stage, etc. — change those rules
// inside GHL, not here.

export const GHL_WEBHOOK_URL = process.env.GHL_WEBHOOK_URL;

export interface GHLLeadPayload {
  email: string;
  first_name?: string;
  phone?: string;
  source?: string;
  intent?: string;
  tags?: string[];
  // APEX application extras — only present on /apex submissions:
  account_size?: string;
  experience?: string;
  challenge?: string;
  why_apex?: string;
  notes?: string;
}

export async function sendToGHL(
  payload: GHLLeadPayload,
): Promise<{ error: string | null }> {
  if (!GHL_WEBHOOK_URL) return { error: "GHL not configured" };

  try {
    const res = await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { error: `GHL webhook ${res.status}: ${text.slice(0, 200)}` };
    }
    return { error: null };
  } catch (err) {
    return { error: err instanceof Error ? err.message : String(err) };
  }
}
