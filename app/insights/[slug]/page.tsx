import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { VerifiedQuote } from "@/components/VerifiedQuote";
import {
  INSIGHTS,
  getInsightBySlug,
  type Insight,
  type InsightBlock,
} from "@/lib/insights";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return INSIGHTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getInsightBySlug(params.slug);
  if (!post) {
    return buildPageMetadata({
      title: "Insight not found",
      description: "This post is unavailable.",
      path: `/insights/${params.slug}`,
      noIndex: true,
    });
  }
  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/insights/${post.slug}`,
    type: "article",
    publishedTime: new Date(post.publishedAt).toISOString(),
    ogImage: post.heroImage,
    noIndex: post.draft ?? false,
  });
}

export default function InsightPage({ params }: PageProps) {
  const post = getInsightBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/insights"
        className="inline-block text-xs uppercase tracking-[0.3em] text-gray transition hover:text-parchment"
      >
        ← All insights
      </Link>

      <header className="mt-8 flex flex-col gap-4">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-gray">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          {" · "}
          {post.author.href ? (
            <Link href={post.author.href} className="hover:text-parchment">
              {post.author.name}
            </Link>
          ) : (
            <span>{post.author.name}</span>
          )}
        </p>
        <h1 className="font-display text-4xl font-black uppercase leading-[0.95] text-parchment md:text-6xl">
          {post.title}
        </h1>
        <p className="text-lg leading-relaxed text-parchment/80 md:text-xl">
          {post.description}
        </p>
      </header>

      {post.heroImage ? (
        <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden border border-white/5">
          <Image
            src={post.heroImage}
            alt={post.title}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover object-center"
            priority
          />
        </div>
      ) : null}

      <InsightBody post={post} />
    </article>
  );
}

function InsightBody({ post }: { post: Insight }) {
  if (post.body.length === 0) {
    return (
      <div className="mt-12 border border-white/5 bg-black2 p-6 text-sm text-gray">
        Draft pending. Body will populate when copy lands.
      </div>
    );
  }

  return (
    <div className="mt-12 flex flex-col gap-6">
      {post.body.map((block, i) => (
        <BlockRenderer key={i} block={block} />
      ))}
    </div>
  );
}

function BlockRenderer({ block }: { block: InsightBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-base leading-relaxed text-parchment/85 md:text-lg">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 className="mt-6 font-display text-3xl font-black uppercase leading-tight text-parchment md:text-4xl">
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <VerifiedQuote
          quote={block.quote}
          attribution={block.attribution}
          context={block.context}
        />
      );
    case "image":
      return (
        <figure className="my-4">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/5">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
            />
          </div>
          {block.caption ? (
            <figcaption className="mt-2 text-xs uppercase tracking-[0.2em] text-gray">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    case "spotlight":
      // StudentSpotlight requires fully-shaped student data. Wire from
      // post copy once Claudia drafts the spotlight bodies.
      return null;
  }
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
