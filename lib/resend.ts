import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

export const resend = apiKey ? new Resend(apiKey) : null;

export const LEAD_NOTIFICATION_FROM =
  process.env.RESEND_FROM_EMAIL ?? "Wolf Trades <noreply@wolftrades.com>";

export const LEAD_NOTIFICATION_TO =
  process.env.RESEND_NOTIFY_EMAIL ?? "roland@rwtrades.com";
