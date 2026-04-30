import Image from "next/image";
import Link from "next/link";
import {
  INSTAGRAM_URL,
  START_FREE_URL,
  TIKTOK_URL,
  YOUTUBE_URL,
} from "@/lib/links";

const FOOTER_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "/wolfpack", label: "Wolfpack" },
  { href: "/pro", label: "Pro" },
  { href: "/apex", label: "APEX" },
  { href: "/platform", label: "Platform" },
  { href: "/results", label: "Results" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
];

const SOCIAL_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: INSTAGRAM_URL, label: "Instagram" },
  { href: TIKTOK_URL, label: "TikTok" },
  { href: YOUTUBE_URL, label: "YouTube" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 bg-black2">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/logos/wt-wolf-icon-v2.png"
                alt="Wolf Trades"
                width={40}
                height={40}
                className="w-8 h-8 object-contain flex-shrink-0"
              />
              <Image
                src="/images/logos/wt-wordmark-dark.png"
                alt="Wolf Trades"
                width={200}
                height={63}
                className="h-6 w-auto object-contain object-left"
              />
            </div>
            <p className="mt-2 max-w-xs text-sm text-gray">
              The trading operating system for serious traders.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
            <nav aria-label="Footer">
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 md:grid-cols-3">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-display text-sm uppercase tracking-wider text-parchment/80 hover:text-bull"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="mb-3 text-xs uppercase tracking-wider text-gray">
                Follow Roland
              </p>
              <ul className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-parchment/70 transition-colors hover:text-bull"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-gray md:flex-row md:items-center md:justify-between">
          <span>&copy; {year} Wolf Trades LLC</span>
          <Link
            href={START_FREE_URL}
            className="text-xs text-bull transition-colors hover:underline"
          >
            Get Roland&apos;s weekly watchlist →
          </Link>
        </div>

        <div className="mt-4 border-t border-white/5 pt-4">
          <p className="max-w-3xl text-xs leading-relaxed text-gray/60">
            Trading involves risk. Results are not typical. Wolf Trades
            provides education, tools, and community — not financial advice or
            guarantees of any kind. Wolf Trades LLC · All rights reserved ·{" "}
            {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
