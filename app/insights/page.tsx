import Link from "next/link";
import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getAllInsights } from "@/lib/insights";

export const metadata: Metadata = buildPageMetadata({
  title: "Insights",
  description:
    "Notes from inside Wolf Trades — process, proof, and what the work actually looks like.",
  path: "/insights",
});

export default function InsightsIndex() {
  const posts = getAllInsights();

  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
      <header className="mb-12 md:mb-16">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-gray">
          Insights
        </p>
        <h1 className="mt-3 font-display text-5xl font-black uppercase leading-none text-parchment md:text-7xl">
          Notes from the desk.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-parchment/80 md:text-lg">
          Process, proof, and a long arc of small decisions. No hype, no
          urgency, no guru language.
        </p>
      </header>

      <ul className="flex flex-col divide-y divide-white/5 border-y border-white/5">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/insights/${post.slug}`}
              className="group flex flex-col gap-2 py-6 transition hover:bg-black2 md:flex-row md:items-baseline md:justify-between md:gap-8 md:py-8"
            >
              <div className="flex flex-col gap-2 md:flex-1">
                <h2 className="font-display text-2xl font-black uppercase leading-tight text-parchment transition group-hover:text-parchment md:text-3xl">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed text-parchment/70 md:text-base">
                  {post.description}
                </p>
              </div>
              <div className="flex shrink-0 items-baseline gap-4 text-xs uppercase tracking-[0.25em] text-gray md:flex-col md:items-end md:gap-1">
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
                <span aria-hidden className="text-parchment/60">
                  Read →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
