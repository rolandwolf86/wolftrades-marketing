// All public marketing CTAs route through the /start gateway page.
// /register on the app is reachable ONLY by the /start form submission.
export const START_FREE_URL = "/start";
export const APP_REGISTER_URL = "https://app.wolftrades.com/register";
export const LOGIN_URL = "https://app.wolftrades.com/login";

export const WOLFPACK_MONTHLY_URL = "/wolfpack#pricing";
export const WOLFPACK_ANNUAL_URL = "/wolfpack#annual";
export const WOLFPACK_PRO_URL = "/pro";
export const WOLFPACK_PRO_CHECKOUT_URL = "/pro#pricing";

// Mesut owns the GHL/Stripe checkout URLs. Until those are wired, marketing
// CTAs deep-link into the on-page pricing section.
export const WOLFPACK_CHECKOUT_URL = "/wolfpack#pricing";
export const WOLFPACK_ANNUAL_CHECKOUT_URL = "/wolfpack#pricing";

// Lifetime-member loyalty surface ($40/mo or $399/yr Pro forever).
// Discoverable by direct link only — not in primary nav.
export const LEGACY_UPGRADE_URL = "/legacy-upgrade";
export const LEGACY_UPGRADE_CHECKOUT_URL = "/legacy-upgrade#claim";

// Launch promo codes shown as PromoCodeBadge on pricing surfaces.
// First-period price: LAUNCH97 → $97 first month Wolfpack;
// LAUNCH147 → $147 first month Pro.
export const PROMO_CODE_WOLFPACK = "LAUNCH97";
export const PROMO_CODE_PRO = "LAUNCH147";

// On /go specifically: Join Wolfpack routes to the sales page.
// Start Free is the only direct app link in that funnel.
export const PRICING_URL = WOLFPACK_MONTHLY_URL;
export const COMMUNITY_URL = WOLFPACK_MONTHLY_URL;

export const YOUTUBE_URL = "https://youtube.com/@rolandwolftrades";
export const INSTAGRAM_URL = "https://instagram.com/rolandwolftrades";
export const TIKTOK_URL = "https://tiktok.com/@rolandwolftrades";

export const MARKET_MASTERS_URL = "https://youtube.com/@rolandwolftrades";
