import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://wolftrades.com";

export const SITE_NAME = "Wolf Trades";

const DEFAULT_OG = "/og-default.png";

export interface BuildPageMetadataInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
}

export function buildPageMetadata(input: BuildPageMetadataInput): Metadata {
  const url = `${SITE_URL}${input.path}`;
  const og = input.ogImage ?? DEFAULT_OG;
  const ogType = input.type ?? "website";

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: SITE_NAME,
      type: ogType,
      images: [{ url: og, width: 1200, height: 630, alt: input.title }],
      locale: "en_US",
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [og],
    },
    ...(input.noIndex
      ? { robots: { index: false, follow: false } }
      : undefined),
  };
}

export const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logos/wt-icon-white.png`,
  sameAs: [] as string[],
} as const;

export const PERSON_JSON_LD_ROLAND = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roland Wolf",
  url: `${SITE_URL}/about`,
  jobTitle: "Trader, Educator",
  worksFor: { "@type": "Organization", name: SITE_NAME },
} as const;
