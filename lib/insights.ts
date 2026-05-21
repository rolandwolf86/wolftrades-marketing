export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; quote: string; attribution: string; context?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "spotlight"; studentSlug: string };

export interface Insight {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  author: { name: string; href?: string };
  heroImage?: string;
  body: ReadonlyArray<InsightBlock>;
  /** Hide from index + sitemap and noindex the page until copy lands. */
  draft?: boolean;
}

export const INSIGHTS: ReadonlyArray<Insight> = [
  {
    slug: "welcome",
    title: "Welcome to Wolf Trades — the launch story",
    description:
      "Why Wolf Trades exists, who it's for, and what comes next. Roland's note on launch day.",
    publishedAt: "2026-05-11",
    author: { name: "Roland Wolf", href: "/about" },
    heroImage: "/images/roland/wolf hero teaching.JPG",
    body: [],
    draft: true, // hidden for launch — unhide when Claudia's copy lands
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return INSIGHTS.find((p) => p.slug === slug);
}

/** Published (non-draft) posts, newest first. Drives the index + sitemap. */
export function getAllInsights(): ReadonlyArray<Insight> {
  return INSIGHTS.filter((p) => !p.draft).sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}
