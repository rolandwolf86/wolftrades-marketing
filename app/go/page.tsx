import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Links",
  description: "Wolf Trades — links.",
};

type GoLink = {
  label: string;
  href: string;
  featured?: boolean;
  external?: boolean;
};

// Roland: swap placeholder URLs in this list when ready.
const LINKS: ReadonlyArray<GoLink> = [
  // TODO: real latest YouTube video URL
  { label: "▶ Latest Video", href: "https://youtube.com/@wolftrades", external: true },
  { label: "Start Free — No Card Required", href: "/start", featured: true },
  {
    label: "Join Wolfpack — $97/mo",
    href: "https://join.wolftrades.com",
    external: true,
  },
  { label: "Apply for APEX — 2 Spots Left", href: "/apex" },
  // TODO: real Market Masters podcast URL
  {
    label: "Market Masters Podcast",
    href: "https://podcasts.apple.com",
    external: true,
  },
  // TODO: real Instagram URL
  {
    label: "Follow on Instagram",
    href: "https://instagram.com/",
    external: true,
  },
  // TODO: real TikTok URL
  { label: "Follow on TikTok", href: "https://tiktok.com/", external: true },
  // TODO: real YouTube channel URL
  {
    label: "Subscribe on YouTube",
    href: "https://youtube.com/@wolftrades",
    external: true,
  },
];

export default function GoPage() {
  return (
    <section className="bg-black">
      <div className="mx-auto w-full max-w-md px-6 py-16">
        <div className="text-center">
          <span
            aria-hidden
            className="inline-flex h-14 w-14 items-center justify-center border border-gold/40 bg-black2 font-display text-lg text-gold"
          >
            WT
          </span>
          <h1 className="mt-5 font-display text-3xl text-parchment">
            Wolf Trades
          </h1>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gray">
            Operate Like a Professional Trader
          </p>
        </div>

        <ul className="mt-12 space-y-3">
          {LINKS.map((link) => {
            const linkClasses = `block w-full border px-5 py-4 text-center font-display text-sm uppercase tracking-wider transition-colors ${
              link.featured
                ? "border-gold bg-gold text-black hover:opacity-90"
                : "border-white/10 bg-black2 text-parchment hover:border-gold hover:text-gold"
            }`;
            return (
              <li key={link.label}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClasses}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link href={link.href} className={linkClasses}>
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
