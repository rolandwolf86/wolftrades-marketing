import Image from "next/image";
import Link from "next/link";
import { AnimatedStats } from "@/components/AnimatedStats";
import { CTAButton } from "@/components/CTAButton";
import { FeatureTabs } from "@/components/FeatureTabs";
import { HallOfFameCarousel } from "@/components/HallOfFameCarousel";
import { HomeHero } from "@/components/HomeHero";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { PricingCard } from "@/components/PricingCard";
import {
  START_FREE_URL,
  WOLFPACK_MONTHLY_URL,
  WOLFPACK_PRO_URL,
} from "@/lib/links";
import { PRICING, PROMO } from "@/lib/pricing";
import { buildPageMetadata, ORG_JSON_LD } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Process, not signals. Proof, not hype.",
  description:
    "A complete trading environment built by a verified 7-figure trader — live sessions, daily watchlist, scanner, AI coach, and a 2,500+ trader community.",
  path: "/",
});

const STATS = [
  { value: "2500", suffix: "+", label: "Traders Inside" },
  { value: "10", suffix: "+", label: "Seven-Figure Students" },
  { value: "2", suffix: "", label: "Eight-Figure Students" },
  { value: "25", prefix: "$", suffix: "M+", label: "Jack Kellogg Career" },
  { value: "7", suffix: "", label: "Years Teaching" },
] as const;

const ROLAND_PROOF: ReadonlyArray<string> = [
  "Trading live on camera since 2017",
  "10+ seven-figure students trained",
  "2 eight-figure students",
  "Tim Grittani: “He has my respect.”",
];

const TIMELINE_PHOTOS = [
  {
    src: "/images/roland/HUGE CONFERENCE.JPG",
    alt: "Roland presenting to a packed trader conference",
    year: "2024",
    caption: "Trader & Investor Summit",
  },
  {
    src: "/images/roland/roland-teaching-hero.jpg",
    alt: "Roland teaching at NYC Bootcamp 2024",
    year: "2024",
    caption: "NYC Bootcamp — 30+ traders",
  },
  {
    src: "/images/roland/wolf hero teaching.JPG",
    alt: "Roland teaching at the whiteboard",
    year: "2024",
    caption: "Live workshop",
  },
  {
    src: "/images/roland/wolfpack-group-drone.jpg",
    alt: "Wolfpack at Tahoe retreat 2024",
    year: "2024",
    caption: "Wolfpack Tahoe Retreat",
  },
  {
    src: "/images/roland/CLASSROOM4.JPG",
    alt: "Wolf Trades classroom in session",
    year: "2024",
    caption: "Bootcamp classroom",
  },
  {
    src: "/images/roland/dallasgroup.JPG",
    alt: "Wolfpack Dallas meetup",
    year: "2024",
    caption: "Dallas meetup",
  },
  {
    src: "/images/roland/roland-teaching-wide.jpg",
    alt: "Roland teaching during a live session",
    year: "2024",
    caption: "Live session",
  },
  {
    src: "/images/roland/roland-laptop.jpg",
    alt: "Roland at laptop daily prep",
    year: "2024",
    caption: "Daily morning prep",
  },
  {
    src: "/images/roland/roland-tahoe-sunset.jpg",
    alt: "Roland at Tahoe sunset deck",
    year: "2024",
    caption: "Teaching above the clouds",
  },
  {
    src: "/images/roland/wolfpack-group-arms.jpg",
    alt: "Wolfpack community photo",
    year: "2024",
    caption: "The Pack — Tahoe 2024",
  },
];

const FREE_FEATURES = [
  "Daily watchlist",
  "Community preview",
  "Risk calculator",
  "Basic journal",
];

const WOLFPACK_FEATURES = [
  "Everything in Free",
  "Live sessions every market day",
  "Full replay library",
  "Trader Therapy",
  "Roland’s playbook",
  "Journal + analytics",
  "Community",
];

const PRO_FEATURES = [
  "Everything in Wolfpack",
  "Wolf Scanner",
  "Wolf AI",
  "Edge Lab",
  "Backtest Lab",
];

const APEX_FEATURES = [
  "DM access to Roland",
  "Real-time trade alerts",
  "Personal trade review",
  "3 years Wolfpack Pro included",
  "APEX alumni — lifetime",
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
      />
      {/* SECTION 1 — HERO */}
      <HomeHero />

      {/* SECTION 2 — ANIMATED PROOF STRIP */}
      <section className="border-y border-white/5 bg-black2 py-16">
        <AnimatedStats stats={STATS} />
      </section>

      {/* SECTION 3 — ROLAND IDENTITY */}
      <section className="bg-black md:min-h-[500px]">
        <div className="grid md:grid-cols-[55fr_45fr]">
          <div className="relative h-[55vw] md:h-auto md:min-h-[500px]">
            <Image
              src="/images/roland/roland-standing.jpg"
              alt="Roland Wolf"
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover object-top"
              priority
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(to right, transparent 70%, #0a0a0a 100%)",
              }}
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-12 md:px-16 md:py-16">
            <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
              Roland Wolf · Verified 7-Figure Trader
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-parchment md:text-5xl">
              I&rsquo;ve traded Nasdaq live every day since 2017.
              <br />
              This is what I built.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-parchment/80">
              Not a course. Not a signal room. A complete trading environment —
              built by a trader who actually does it every day.
            </p>
            <ul className="mt-8 space-y-3">
              {ROLAND_PROOF.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-base font-medium text-parchment/80"
                >
                  <span aria-hidden className="text-bull">
                    ✓
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButton href={WOLFPACK_MONTHLY_URL} variant="primary">
                Join Wolfpack
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FEATURE TABS */}
      <section className="border-y border-white/5 bg-black2 py-20">
        <div className="mx-auto mb-12 w-full max-w-7xl px-6">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
            The Complete Trading System
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
            Everything you need. One place.
          </h2>
        </div>
        <FeatureTabs />
      </section>

      {/* SECTION 5 — HALL OF FAME CAROUSEL */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-7xl">
          <HallOfFameCarousel
            eyebrow="The Wolf Hall of Fame"
            headline="The results speak."
          />

          <p className="mt-6 max-w-3xl text-xs leading-5 text-parchment/52">
            Results are not typical and are shown for educational context only.
            Trading involves risk and no outcome is guaranteed.
          </p>

          <div className="mt-10">
            <Link
              href="/results"
              className="font-display text-sm uppercase tracking-wider text-bull hover:underline"
            >
              See All Results →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — GRITTANI */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-parchment/60">
            Endorsed. Unsolicited. Unpaid.
          </p>
          <blockquote className="mt-8 font-display text-5xl leading-[0.95] text-parchment md:text-7xl">
            &ldquo;He has my respect.&rdquo;
          </blockquote>
          <p className="mt-8 max-w-3xl border-l-2 border-parchment/30 pl-6 text-lg italic leading-8 text-parchment/85">
            &ldquo;If I were looking to jump into a new service and see what I
            could pick up and maybe get a couple new ideas, this is probably
            where I would start.&rdquo;
          </p>
          <p className="mt-4 max-w-3xl border-l-2 border-parchment/30 pl-6 text-base italic leading-7 text-parchment/70">
            &ldquo;He has no idea that I&rsquo;m putting any of this in here.
            He didn&rsquo;t ask me to say any of this, there&rsquo;s no
            affiliate hookup or anything like that, this is all just my honest
            opinion.&rdquo;
          </p>
          <p className="mt-6 text-sm text-gray">
            — Tim Grittani · Trading Tickers 2 ·
            Unsolicited · Unpaid
          </p>
        </div>
      </section>

      {/* SECTION 7 — TIMELINE PHOTO CAROUSEL */}
      <section className="overflow-hidden border-y border-white/5 bg-black py-16">
        <PhotoCarousel
          photos={TIMELINE_PHOTOS}
          variant="timeline"
          eyebrow="10 Years of Wolf Trades"
          headline="The Pack Has Been Here."
        />
      </section>

      {/* SECTION 8 — FOUR TIER PRICING */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-7xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
            Start Where You Are
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
            Four paths. One destination.
          </h2>
          <div className="mt-6 max-w-2xl space-y-1">
            <p className="font-display text-lg leading-tight text-parchment md:text-xl">
              Free gives you the map.
            </p>
            <p className="font-display text-lg leading-tight text-parchment md:text-xl">
              Wolfpack gives you the room.
            </p>
            <p className="font-display text-lg leading-tight text-parchment md:text-xl">
              Pro gives you the toolkit.
            </p>
            <p className="font-display text-lg leading-tight text-parchment md:text-xl">
              APEX gives you me personally in your corner.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <PricingCard
              name="Free"
              price="$0"
              description="Start with Roland's daily watchlist and community preview."
              features={FREE_FEATURES}
              ctaLabel="Start Free"
              ctaHref={START_FREE_URL}
              ctaVariant="secondary"
              className="order-4 md:order-1"
            />
            <PricingCard
              name="Wolfpack"
              price={PRICING.wolfpack.monthly}
              cadence="mo"
              description="The complete trading environment."
              features={WOLFPACK_FEATURES}
              ctaLabel="Join Wolfpack"
              ctaHref={WOLFPACK_MONTHLY_URL}
              ctaVariant="primary"
              badge="Most Popular"
              featured
              promo={PROMO.wolfpack}
              className="order-1 md:order-2"
            />
            <PricingCard
              name="Wolfpack Pro"
              price={PRICING.pro.monthly}
              cadence="mo"
              description="Same room. Sharper tools."
              features={PRO_FEATURES}
              ctaLabel="See Pro"
              ctaHref={WOLFPACK_PRO_URL}
              ctaVariant="secondary"
              promo={PROMO.pro}
              className="order-2 md:order-3"
            />
            <PricingCard
              name="APEX 1-on-1"
              price="Application Only"
              priceVariant="compact"
              description="Direct mentorship with Roland. 4 months. Max 10 traders per cohort."
              features={APEX_FEATURES}
              ctaLabel="Apply Now"
              ctaHref="/apex"
              ctaVariant="secondary"
              apexAccent
              footnote="No public price. Phone close only."
              className="order-3 md:order-4"
            />
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="border-t border-white/10 bg-black px-6 py-20 text-center">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-5xl leading-none text-parchment md:text-7xl">
            Stop guessing. Start operating.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-parchment/78">
            Join the room. Study the process. Use the tools. Build your edge.
          </p>
          <div className="mx-auto mt-10 mb-8 max-w-2xl space-y-1">
            <p className="font-display text-xl leading-tight text-parchment md:text-2xl">
              Free gives you the map.
            </p>
            <p className="font-display text-xl leading-tight text-parchment md:text-2xl">
              Wolfpack gives you the room.
            </p>
            <p className="font-display text-xl leading-tight text-parchment md:text-2xl">
              Pro gives you the toolkit.
            </p>
            <p className="font-display text-xl leading-tight text-parchment md:text-2xl">
              APEX gives you me personally in your corner.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton href={WOLFPACK_MONTHLY_URL} variant="primary">
              Join Wolfpack
            </CTAButton>
            <CTAButton href="/apex" variant="secondary">
              Apply for APEX 1-on-1
            </CTAButton>
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.14em] text-parchment/52">
            <Link
              href={START_FREE_URL}
              className="text-bull transition-colors hover:underline"
            >
              Get Roland&rsquo;s Free Watchlist
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
