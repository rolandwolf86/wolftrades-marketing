// Conversion-event helpers for Meta Pixel + TikTok Pixel.
//
// The pixel <script> tags are injected by <PixelLoader /> in the root layout
// (only when the corresponding NEXT_PUBLIC_*_PIXEL_ID env var is set). These
// helpers are safe to call unconditionally: they no-op during SSR and no-op if
// the pixel never loaded (env unset, blocked by an ad blocker, etc.).
//
// Event mapping (locked by coordination):
//   form submit success      -> Meta "Lead",                 TikTok "SubmitForm"
//   successful app redirect  -> Meta "CompleteRegistration",  TikTok "CompleteRegistration"

interface EventProps {
  intent?: string;
  value?: number;
  currency?: string;
}

type Fbq = (
  command: string,
  eventName: string,
  params?: Record<string, unknown>,
) => void;

interface Ttq {
  track: (eventName: string, params?: Record<string, unknown>) => void;
}

declare global {
  interface Window {
    fbq?: Fbq;
    ttq?: Ttq;
  }
}

function fire(metaEvent: string, tiktokEvent: string, props?: EventProps): void {
  if (typeof window === "undefined") return;
  const params = props ? { ...props } : undefined;
  try {
    window.fbq?.("track", metaEvent, params);
  } catch {
    /* pixel not ready / blocked — ignore */
  }
  try {
    window.ttq?.track(tiktokEvent, params);
  } catch {
    /* pixel not ready / blocked — ignore */
  }
}

// Fire on a successful lead-form submission (before any redirect).
export function trackLead(props?: EventProps): void {
  fire("Lead", "SubmitForm", props);
}

// Fire immediately before redirecting the visitor to the app's /register.
export function trackRegistration(props?: EventProps): void {
  fire("CompleteRegistration", "CompleteRegistration", props);
}

export {};
