import type { Metadata } from "next";
import Link from "next/link";
import {
  INSTAGRAM_URL,
  MARKET_MASTERS_URL,
  START_FREE_URL,
  TIKTOK_URL,
  WOLFPACK_MONTHLY_URL,
  YOUTUBE_URL,
} from "@/lib/links";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Wolf Trades - Links",
  description:
    "Wolf Trades. Start free, join Wolfpack, review results, or apply for APEX.",
};

type LinkBlock = {
  label: string;
  sublabel?: string;
  href: string;
  external?: boolean;
  badge?: { kind: "live" | "soon"; text: string };
  muted?: boolean;
};

const LINKS: ReadonlyArray<LinkBlock> = [
  {
    label: "Join Wolfpack - $127/mo",
    sublabel: "Daily live sessions and real watchlists",
    href: WOLFPACK_MONTHLY_URL,
    external: true,
  },
  {
    label: "Wolf Trades Results",
    sublabel: "See what traders are building",
    href: "/results",
  },
  {
    label: "Apply for APEX",
    sublabel: "Application-only mentorship",
    href: "/apex",
    badge: { kind: "live", text: "Apply" },
  },
  {
    label: "Latest Video",
    sublabel: "Watch on YouTube",
    href: YOUTUBE_URL,
    external: true,
  },
  {
    label: "Market Masters Podcast",
    sublabel: "Episodes and clips on the Wolf Trades YouTube channel",
    href: MARKET_MASTERS_URL,
    external: true,
  },
  {
    label: "Instagram",
    href: INSTAGRAM_URL,
    external: true,
  },
  {
    label: "TikTok",
    href: TIKTOK_URL,
    external: true,
  },
  {
    label: "YouTube",
    href: YOUTUBE_URL,
    external: true,
  },
];

export default function GoPage() {
  return (
    <div className={styles.page}>
      <div className={styles.atmosphere} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <main className={styles.shell}>
        <header className={styles.brand}>
          <h1 className={styles.wordmark}>
            <span className={styles.wolfWord}>Wolf</span>
            <span className={styles.wordmarkDivider} aria-hidden="true">
              {" "}
            </span>
            <span className={styles.tradesWord}>Trades</span>
          </h1>
          <p className={styles.proof}>
            Verified 7-figure Nasdaq trader
            <span className={styles.proofDot} aria-hidden="true">
              /
            </span>
            2,500+ traders inside
          </p>
        </header>

        <a
          href={START_FREE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.primary}
        >
          <span className={styles.primaryLabel}>Start Trading Free</span>
          <span className={styles.primarySublabel}>
            No card required / Join 2,500+ traders
          </span>
        </a>

        <ul className={styles.links}>
          {LINKS.map((link, index) => {
            const delay = `${250 + index * 75}ms`;
            const linkClass = `${styles.link} ${
              link.muted ? styles.linkMuted : ""
            }`.trim();

            const inner = (
              <>
                <span className={styles.linkBody}>
                  <span className={styles.linkLabel}>{link.label}</span>
                  {link.sublabel ? (
                    <span className={styles.linkSublabel}>{link.sublabel}</span>
                  ) : null}
                </span>
                {link.badge ? (
                  <span
                    className={`${styles.badge} ${
                      link.badge.kind === "live"
                        ? styles.badgeLive
                        : styles.badgeSoon
                    }`}
                  >
                    {link.badge.kind === "live" ? (
                      <span className={styles.badgeDot} aria-hidden="true" />
                    ) : null}
                    {link.badge.text}
                  </span>
                ) : (
                  <span className={styles.linkArrow} aria-hidden="true">
                    {">"}
                  </span>
                )}
              </>
            );

            return (
              <li
                key={link.label}
                className={styles.linkItem}
                style={{ animationDelay: delay }}
              >
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link href={link.href} className={linkClass}>
                    {inner}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <footer className={styles.quote}>
          <p className={styles.quoteText}>
            Direct trading workflow. Real platform. Start free.
          </p>
          <p className={styles.quoteAttr}>Wolfpack starts at $127/mo.</p>
        </footer>
      </main>
    </div>
  );
}
