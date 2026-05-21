// Canonical link/URL registry for the marketing site.
// Merged from feat/marketing-conversion (Mesut — GHL checkout constants) and
// feat/marketing-pages (Victor — page routes + promo codes). Checkout CTAs use
// the GHL_* constants directly; there are no Pro/legacy checkout aliases.

// All public lead-capture CTAs route through the /start gateway page.
// /register on the app is reachable ONLY by the /start form submission.
export const START_FREE_URL = "/start";
export const APP_REGISTER_URL = "https://app.wolftrades.com/register";
export const LOGIN_URL = "https://app.wolftrades.com/login";

// The platform app — where the live trading room + member account live.
export const APP_URL = "https://app.wolftrades.com";

// ---- GHL checkout / Payment Links ----
// Checkout is handled by GoHighLevel (Authorize.Net via GHL order forms). Each
// URL is a GHL-hosted order/payment link. Discount codes (LAUNCH97, LAUNCH147)
// and the legacy-member discount are configured inside GHL — nothing about
// pricing or discounts lives in this codebase. GHL also owns the full payment
// lifecycle (it posts to the platform-side inbound webhook), so there is no
// payment webhook receiver here.
// These use the NEXT_PUBLIC_ prefix so the values are available in client
// bundles too (lib/links.ts is imported by client components) — Next inlines
// NEXT_PUBLIC_* at build time, so they must be set in the build environment,
// not just at runtime. The URLs are GHL order forms — public, not secrets.
// If an env var is unset (dev/preview), we fall back to the on-page pricing
// anchor so links never 404.
const FALLBACK_PRICING_ANCHOR = "/wolfpack#pricing";

function checkoutUrl(value: string | undefined): string {
  return value && value.startsWith("https://")
    ? value
    : FALLBACK_PRICING_ANCHOR;
}

export const GHL_WOLFPACK_MONTHLY_URL = checkoutUrl(
  process.env.NEXT_PUBLIC_GHL_WOLFPACK_MONTHLY_URL,
);
export const GHL_WOLFPACK_ANNUAL_URL = checkoutUrl(
  process.env.NEXT_PUBLIC_GHL_WOLFPACK_ANNUAL_URL,
);
export const GHL_PRO_MONTHLY_URL = checkoutUrl(
  process.env.NEXT_PUBLIC_GHL_PRO_MONTHLY_URL,
);
export const GHL_PRO_ANNUAL_URL = checkoutUrl(
  process.env.NEXT_PUBLIC_GHL_PRO_ANNUAL_URL,
);
export const GHL_LEGACY_PRO_URL = checkoutUrl(
  process.env.NEXT_PUBLIC_GHL_LEGACY_PRO_URL,
);
export const GHL_LEGACY_PRO_ANNUAL_URL = checkoutUrl(
  process.env.NEXT_PUBLIC_GHL_LEGACY_PRO_ANNUAL_URL,
);

// ---- Marketing page routes (informational, not checkout) ----
export const WOLFPACK_PRO_URL = "/pro";
// Lifetime-member loyalty surface ($40/mo or $399/yr Pro forever).
// Discoverable by direct link only — not in primary nav.
export const LEGACY_UPGRADE_URL = "/legacy-upgrade";

// ---- Back-compat aliases ----
// Existing page components import these names. They now resolve to the GHL
// checkout links above. Remove these aliases once all consumers reference the
// GHL_* names directly.
export const WOLFPACK_MONTHLY_URL = GHL_WOLFPACK_MONTHLY_URL;
export const WOLFPACK_ANNUAL_URL = GHL_WOLFPACK_ANNUAL_URL;
export const WOLFPACK_CHECKOUT_URL = GHL_WOLFPACK_MONTHLY_URL;
export const WOLFPACK_ANNUAL_CHECKOUT_URL = GHL_WOLFPACK_ANNUAL_URL;

// On /go specifically: Join Wolfpack routes to the sales page.
// Start Free is the only direct app link in that funnel.
export const PRICING_URL = GHL_WOLFPACK_MONTHLY_URL;
export const COMMUNITY_URL = GHL_WOLFPACK_MONTHLY_URL;

// ---- Launch promo codes ----
// Shown as PromoCodeBadge copy on pricing surfaces. Validation/redemption is
// entirely in GHL. First-period price: LAUNCH97 → $97 first month Wolfpack;
// LAUNCH147 → $147 first month Pro.
export const PROMO_CODE_WOLFPACK = "LAUNCH97";
export const PROMO_CODE_PRO = "LAUNCH147";

// ---- Social ----
export const YOUTUBE_URL = "https://youtube.com/@rolandwolftrades";
export const INSTAGRAM_URL = "https://instagram.com/rolandwolftrades";
export const TIKTOK_URL = "https://tiktok.com/@rolandwolftrades";

export const MARKET_MASTERS_URL = "https://youtube.com/@rolandwolftrades";
