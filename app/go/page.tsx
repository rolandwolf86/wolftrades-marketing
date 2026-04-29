import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  INSTAGRAM_URL,
  PRICING_URL,
  TIKTOK_URL,
  YOUTUBE_URL,
} from "@/lib/links";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Links",
  description:
    "Join Wolfpack, start free, review results, or apply for APEX with Wolf Trades.",
};

type ContentLink = {
  label: string;
  href: string;
  external?: boolean;
};

const contentLinks: ReadonlyArray<ContentLink> = [
  {
    label: "📺 Watch Roland Trade Live",
    href: YOUTUBE_URL,
    external: true,
  },
  {
    label: "📈 See Student Results",
    href: "/results",
  },
  {
    label: "🐺 Follow on Instagram",
    href: INSTAGRAM_URL,
    external: true,
  },
  {
    label: "📱 Follow on TikTok",
    href: TIKTOK_URL,
    external: true,
  },
];

export default function GoPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.identity}>
          <div className={styles.logoFrame}>
            <Image
              src="/wolf-trades-logo-horizontal-dark.png"
              alt="Wolf Trades"
              width={140}
              height={32}
              priority
              className={styles.logo}
            />
          </div>
          <p className={styles.identityLine}>
            Roland Wolf · Verified 7-Figure Nasdaq Trader · Teaching Since 2018
          </p>
        </header>

        <section className={styles.offer} aria-labelledby="wolfpack-offer">
          <p className={styles.eyebrow}>
            The Wolfpack — Where Serious Traders Work
          </p>
          <h1 id="wolfpack-offer" className={styles.headline}>
            Join 2,500+ traders getting Roland&apos;s daily watchlist, live
            sessions, and the full trading operating system.
          </h1>
          <p className={styles.priceLine}>
            $127/mo — or start free, no card required
          </p>
          <div className={styles.ctaStack}>
            <a
              href={PRICING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
            >
              Join the Wolfpack — $127/mo →
            </a>
            <a
              href="/start"
              className={styles.secondaryCta}
            >
              Start Free — No Card Required →
            </a>
          </div>
        </section>

        <section className={styles.proofStrip} aria-label="Wolf Trades proof">
          <div>
            <strong>2,500+</strong>
            <span>Traders</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Eight-Figure Students</span>
          </div>
          <div>
            <strong>Since</strong>
            <span>2018</span>
          </div>
        </section>

        <section className={styles.grittani} aria-label="Tim Grittani quote">
          <p className={styles.eyebrow}>
            Endorsed by Tim Grittani · $15M+ Verified Trader
          </p>
          <blockquote className={styles.quote}>
            “If I were looking to jump into a new service and see what I could
            pick up and maybe get a couple new ideas, this is probably where I
            would start.”
          </blockquote>
          <p className={styles.attribution}>
            — Tim Grittani · Trading Tickers 2 · Unsolicited · Unpaid
          </p>
        </section>

        <section className={styles.apex} aria-labelledby="apex-offer">
          <span className={styles.apexBadge}>2 Spots Left · May 1</span>
          <h2 id="apex-offer" className={styles.apexTitle}>
            APEX 1-on-1 Mentorship
          </h2>
          <p className={styles.apexSubline}>
            4 months. Direct access to Roland. Maximum 10 traders per cohort.
          </p>
          <p className={styles.apexNote}>Application only. No public price.</p>
          <Link href="/apex" className={styles.apexCta}>
            Apply for APEX →
          </Link>
        </section>

        <nav className={styles.contentLinks} aria-label="Wolf Trades links">
          {contentLinks.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pill}
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className={styles.pill}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <footer className={styles.footer}>
          © 2026 Wolf Trades · No financial advice implied · Results not typical
        </footer>
      </div>
    </main>
  );
}
