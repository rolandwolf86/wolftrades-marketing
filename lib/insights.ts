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
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return INSIGHTS.find((p) => p.slug === slug);
}

export function getAllInsights(): ReadonlyArray<Insight> {
  return [...INSIGHTS].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}
