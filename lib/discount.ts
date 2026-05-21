// Promo-code capture helper (client-side).
//
// Discount codes (LAUNCH97, LAUNCH147, ...) are validated and redeemed entirely
// in GHL — this codebase never decides what a code does. We
// only *record* which code a lead arrived with, for revenue attribution, by
// reading it from a `?disc=` query param and persisting it to a cookie so it
// survives navigation through /start, /apex, etc. before the form is submitted.

const COOKIE_NAME = "wt_disc";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days
const CODE_PATTERN = /^[A-Za-z0-9_-]{2,40}$/;

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${name}=([^;]*)`),
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${COOKIE_MAX_AGE_SECONDS}; samesite=lax`;
}

// Returns the normalized (uppercased) discount code the visitor arrived with,
// or null if none is present/valid. `?disc=` wins over the persisted cookie;
// when present and valid it is also written back to the cookie.
export function getDiscountCode(): string | null {
  if (typeof window === "undefined") return null;

  const fromQuery = new URLSearchParams(window.location.search).get("disc");
  if (fromQuery && CODE_PATTERN.test(fromQuery)) {
    const normalized = fromQuery.toUpperCase();
    writeCookie(COOKIE_NAME, normalized);
    return normalized;
  }

  const fromCookie = readCookie(COOKIE_NAME);
  if (fromCookie && CODE_PATTERN.test(fromCookie)) {
    return fromCookie.toUpperCase();
  }

  return null;
}
