import { buildPageMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "next/link";
import {
  INSTAGRAM_URL,
  TIKTOK_URL,
  WOLFPACK_MONTHLY_URL,
  YOUTUBE_URL,
} from "@/lib/links";
import styles from "./page.module.css";

export const metadata = buildPageMetadata({
  title: "Links",
  description:
    "Wolf Trades. Start with the free watchlist or join 2,500+ traders inside Wolfpack.",
  path: "/go",
});

type ActionLink = {
  label: string;
  description?: string;
  href: string;
  external?: boolean;
  variant?: "default" | "primary" | "apex" | "social";
};

const actionLinks: ActionLink[] = [
  {
    label: "📈 Student Results",
    href: "/results",
    variant: "default",
  },
  {
    label: "📺 Watch Roland Trade",
    href: YOUTUBE_URL,
    external: true,
    variant: "social",
  },
  {
    label: "🐺 Instagram",
    href: INSTAGRAM_URL,
    external: true,
    variant: "social",
  },
  {
    label: "📱 TikTok",
    href: TIKTOK_URL,
    external: true,
    variant: "social",
  },
  {
    label: "🎙️ Market Masters Podcast",
    href: YOUTUBE_URL,
    external: true,
    variant: "default",
  },
];

export default function GoPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        {/* SECTION 1 — IDENTITY HEADER */}
        <header className={styles.identity}>
          <div className="flex items-center justify-center mb-2">
            <Image
              src="/images/logos/wt-lockup-horizontal-white.png"
              alt="Wolf Trades"
              width={1200}
              height={300}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>
          <p className={styles.identityLine}>
            Verified 7-figure Nasdaq trader · Trading live since 2017 ·
            2,500+ traders
          </p>
        </header>

        {/* SECTION 2 — VSL PLACEHOLDER */}
        <div
          className={styles.vslPlaceholder}
          role="img"
          aria-label="Watch this first"
        >
          <div className={styles.vslInner}>
            <span className={styles.vslIcon} aria-hidden>
              ▶
            </span>
            <p className={styles.vslLabel}>
              Watch this first — how Wolf Trades works
            </p>
          </div>
        </div>

        {/* SECTION 3 — FREE TOOLS (PRIMARY) */}
        <p className={styles.sectionLabel}>
          Start here — free, no card required
        </p>
        <section className={styles.freeTools} aria-label="Free tools">
          <Link
            href="/start?intent=watchlist"
            className={`${styles.toolCard} ${styles.primaryTool}`}
          >
            <span>
              {"Get the Free Watchlist "}
              <span aria-hidden>→</span>
            </span>
            <small>
              Roland&apos;s daily market prep — names, levels, catalysts.
              Every morning before the bell.
            </small>
          </Link>
          <Link href="/start?intent=risk" className={styles.toolCard}>
            <span>Free Risk Calculator</span>
            <small>
              Position sizing and risk/reward built for how momentum traders
              actually trade.
            </small>
          </Link>
          <Link href="/start?intent=journal" className={styles.toolCard}>
            <span>Free Trading Journal</span>
            <small>
              Track your trades, measure your edge. No card, no commitment.
            </small>
          </Link>
        </section>

        {/* SECTION 4 — PAID PATH */}
        <section className={styles.paidPath} aria-label="Wolfpack">
          <p className={styles.routeLabel}>Wolfpack</p>
          <h2>Join 2,500+ traders</h2>
          <p>
            Live trading every day. Daily watchlist. Trader Therapy. Full
            replay library. Roland&apos;s playbook. Scanner. Wolf AI.{" "}
            {"$147/month"}.
          </p>
          <Link href={WOLFPACK_MONTHLY_URL} className={styles.pathCta}>
            Join Wolfpack →
          </Link>
        </section>

        {/* SECTION 5 — PROOF STRIP */}
        <section className={styles.proofStrip} aria-label="Wolf Trades proof">
          <div className={styles.proofItem}>
            <p className={styles.proofStat}>{"$25M+"}</p>
            <p className={styles.proofLabel}>Jack Kellogg</p>
          </div>
          <div className={styles.proofDivider} aria-hidden />
          <div className={styles.proofItem}>
            <p className={styles.proofStat}>{"$10M+"}</p>
            <p className={styles.proofLabel}>Brian — $10M in 2024</p>
          </div>
          <div className={styles.proofDivider} aria-hidden />
          <div className={styles.proofItem}>
            <p className={styles.proofStat}>10+</p>
            <p className={styles.proofLabel}>Seven-figure students</p>
          </div>
        </section>

        {/* SECTION 6 — APEX CARD */}
        <section className={styles.apexCard} aria-label="APEX application">
          <span className={styles.apexBadge}>
            Applications open · Cohorts of 10
          </span>
          <p className={styles.apexLabel}>APEX 1-on-1</p>
          <h2>Direct mentorship with Roland</h2>
          <p>Application only. No public price.</p>
          <Link href="/apex" className={styles.apexCta}>
            Apply for APEX →
          </Link>
        </section>

        {/* SECTION 7 — GRITTANI */}
        <section
          className={styles.grittani}
          aria-label="Tim Grittani endorsement"
        >
          <p className={styles.grittaniLabel}>
            Endorsed · Unsolicited · Unpaid
          </p>
          <blockquote className={styles.grittaniQuote}>
            &ldquo;He has my respect.&rdquo;
          </blockquote>
          <p className={styles.grittaniAttribution}>
            — Tim Grittani · Trading Tickers 2
          </p>
        </section>

        {/* SECTION 8 — ACTION LINKS */}
        <nav
          className={styles.actionGrid}
          aria-label="More Wolf Trades links"
        >
          {actionLinks.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionLink}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={styles.actionLink}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* SECTION 9 — FINAL LINE */}
        <p className={styles.finalLine}>
          Start with the free watchlist. Build the system from there.
        </p>

        <footer className={styles.footer}>
          © 2026 Wolf Trades · No financial advice implied · Results not
          typical
        </footer>
      </div>
    </main>
  );
}
