// All public marketing CTAs route through the /start gateway page.
// /register on the app is reachable ONLY by the /start form submission.
export const START_FREE_URL = "/start";
export const APP_REGISTER_URL = "https://app.wolftrades.com/register";
export const LOGIN_URL = "https://app.wolftrades.com/login";

export const WOLFPACK_MONTHLY_URL = "/wolfpack#pricing";
export const WOLFPACK_ANNUAL_URL = "/wolfpack#annual";

// GHL order page is paused until pricing, copy, contrast, and proof are verified.
export const WOLFPACK_CHECKOUT_URL = "/wolfpack#pricing";

// TODO: Confirm dedicated annual GHL order path before sending traffic.
export const WOLFPACK_ANNUAL_CHECKOUT_URL = "/wolfpack#pricing";

// Wolfpack Pro is now an in-funnel upsell only — no public /pro page.
// Pro is reachable post-Wolfpack inside the platform; not from marketing.

// On /go specifically: Join Wolfpack routes to the sales page.
// Start Free is the only direct app link in that funnel.
export const PRICING_URL = WOLFPACK_MONTHLY_URL;
export const COMMUNITY_URL = WOLFPACK_MONTHLY_URL;

export const YOUTUBE_URL = "https://youtube.com/@rolandwolftrades";
export const INSTAGRAM_URL = "https://instagram.com/rolandwolftrades";
export const TIKTOK_URL = "https://tiktok.com/@rolandwolftrades";

export const MARKET_MASTERS_URL = "https://youtube.com/@rolandwolftrades";
