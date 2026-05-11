import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/metadata";
import { INSIGHTS } from "@/lib/insights";

const STATIC_ROUTES: ReadonlyArray<string> = [
  "",
  "about",
  "wolfpack",
  "apex",
  "platform",
  "live",
  "events",
  "results",
  "start",
  "go",
  "insights",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = STATIC_ROUTES.map((path) => ({
    url: path ? `${SITE_URL}/${path}` : SITE_URL,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.7,
  }));

  const insightEntries = INSIGHTS.map((post) => ({
    url: `${SITE_URL}/insights/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...insightEntries];
}
