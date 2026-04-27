import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Wolf Trades — Links",
  description:
    "Wolf Trades. Endorsed by Tim Grittani. 2,500+ traders inside.",
  // Linktree-style page — no robots.noindex; Roland may want it discoverable.
};

type LinkBlock = {
  label: string;
  sublabel?: string;
  href: string;
  external?: boolean;
  badge?:
    | { kind: "live"; text: string }
    | { kind: "soon"; text: string };
  muted?: boolean;
};

// Roland: replace [PLACEHOLDER] hrefs as URLs become available.
const LINKS: ReadonlyArray<LinkBlock> = [
  {
    label: "▶  Latest Video",
    sublabel: "Watch on YouTube",
    href: "https://youtube.com/@wolftrades", // [PLACEHOLDER — pin to actual latest video URL]
    external: true,
  },
  {
    label: "Join Wolfpack — $127/mo",
    sublabel: "Daily live sessions · Real watchlists",
    href: "https://join.wolftrades.com",
    external: true,
  },
  {
    label: "Apply for APEX — 2 Spots Left",
    sublabel: "Cohort 1 · Starts May 1",
    href: "/apex",
    badge: { kind: "live", text: "2 Spots" },
  },
  {
    label: "Market Masters Podcast",
    sublabel: "Coming soon — Episode 1 with Tim Grittani",
    href: "#", // [PLACEHOLDER — podcast URL]
    muted: true,
    badge: { kind: "soon", text: "Coming Soon" },
  },
  {
    label: "Wolf Trades Results",
    sublabel: "See what traders are building",
    href: "/results",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/", // [PLACEHOLDER]
    external: true,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/", // [PLACEHOLDER]
    external: true,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@wolftrades", // [PLACEHOLDER]
    external: true,
  },
];

const FREE_SIGNUP_URL = "https://app.wolftrades.com/register";

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
              {" "}
            </span>
            <span className={styles.tradesWord}>Trades</span>
          </h1>
          <p className={styles.proof}>
            Endorsed by Tim Grittani
            <span className={styles.proofDot} aria-hidden="true">
              ·
            </span>
            2,500+ traders inside
          </p>
        </header>

        <a
          href={FREE_SIGNUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.primary}
        >
          <span className={styles.primaryLabel}>Start Trading Free</span>
          <span className={styles.primarySublabel}>
            No card required · Join 2,500+ traders
          </span>
        </a>

        <ul className={styles.links}>
          {LINKS.map((link, index) => {
            // Stagger entrance: kicks off after primary CTA settles (~250ms),
            // then 75ms between each block.
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
                      <span
                        className={styles.badgeDot}
                        aria-hidden="true"
                      />
                    ) : null}
                    {link.badge.text}
                  </span>
                ) : (
                  <span className={styles.linkArrow} aria-hidden="true">
                    →
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
          <p className={styles.quoteText}>“He has my respect.”</p>
          <p className={styles.quoteAttr}>
            — Tim Grittani, $15M+ verified trader
          </p>
        </footer>
      </main>
    </div>
  );
}
