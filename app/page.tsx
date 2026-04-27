import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { HomeHero } from "@/components/HomeHero";
import { ProofBar } from "@/components/ProofBar";
import { Reveal } from "@/components/Reveal";
import { TestimonialQuote } from "@/components/TestimonialQuote";
import { TickerTape } from "@/components/TickerTape";
import { TierCard } from "@/components/TierCard";

const SCREENSHOTS: ReadonlyArray<{
  src: string;
  alt: string;
  caption: string;
}> = [
  {
    src: "/screenshots/chat.png",
    alt: "Wolf Trades chat rooms — general channel with role badges and member list",
    caption:
      "Wolf Trades community chat — live role badges, 8-figure traders visible",
  },
  {
    src: "/screenshots/wolf-ai.png",
    alt: "Wolf AI Coach — radar visualization, five modes, market pulse panel",
    caption:
      "Wolf AI Coach — 5 modes, radar visualization, market pulse panel",
  },
  {
    src: "/screenshots/scanner.png",
    alt: "Wolf Scanner — real-time table of momentum tickers with price and volume columns",
    caption: "Wolf Scanner — 10,968 stocks, real-time momentum data",
  },
  {
    src: "/screenshots/edge-lab.png",
    alt: "Edge Lab — equity curve, win rate, recent trades and P&L breakdown",
    caption: "Edge Lab — 1,025 trades analyzed, equity curve, win rate",
  },
  {
    src: "/screenshots/community.png",
    alt: "Community feed — trader posts, embedded videos, live discussion",
    caption: "Community feed — real trade posts, WIN badges, live discussion",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Ticker strip — transition between hero and Grittani section */}
      <section className="h-11 bg-black2 border-y border-parchment/[0.06]">
        <TickerTape className="h-full" />
      </section>

      {/* Grittani endorsement */}
      <section className="border-y border-white/5 bg-black2">
        <div className="mx-auto w-full max-w-5xl px-6 py-20 md:py-28">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            Endorsed. Unsolicited. Unpaid.
          </p>
          <blockquote className="mt-8 font-display text-5xl leading-[0.95] text-parchment md:text-7xl">
            “He has my respect.”
          </blockquote>

          <p className="mt-8 max-w-3xl text-lg italic text-parchment/90">
            “If I were looking to jump into a new service and see what I could
            pick up and maybe get a couple new ideas, this is probably where I
            would start.”
          </p>
          <p className="mt-3 text-sm text-gray">
            — Tim Grittani, $15M+ verified trader · Trading Tickers 2
          </p>

          <p className="mt-10 max-w-3xl text-base text-parchment/80">
            “He has no idea that I’m putting any of this in here. He didn’t ask
            me to say any of this, there’s no affiliate hookup or anything like
            that, this is all just my honest opinion.”
          </p>
          <p className="mt-3 text-sm text-gray">— Tim Grittani</p>

          {/* TODO: swap for Mux player when asset ready */}
          <div
            className="mt-12 flex aspect-video w-full items-center justify-center border-2 border-gold bg-[linear-gradient(90deg,#111111_25%,#1a1a1a_50%,#111111_75%)] bg-[length:200%_100%] text-center animate-shimmer motion-reduce:animate-none"
          >
            <span className="px-6 font-display text-base uppercase tracking-wider text-gold md:text-xl">
              [ Tim Grittani — Trading Tickers 2 — Video Coming ]
            </span>
          </div>
        </div>
      </section>

      <Reveal>
        <ProofBar
          points={[
            { value: "2,500+", label: "Traders Inside" },
            { value: "2", label: "Eight-Figure Students" },
            { value: "10+", label: "Seven-Figure Students" },
            { value: "30+", label: "Six-Figure Students" },
          ]}
        />
      </Reveal>

      {/* What Wolf Trades Is */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-5xl px-6 py-24">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            The Operating System
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-parchment md:text-6xl">
            Not a course. Not a Discord. Not a guru.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-lg text-parchment/85">
            <p>
              Wolf Trades is a trading operating system. Every tool a serious
              trader needs, in one place, built by someone who actually trades.
            </p>
            <p>
              Daily live sessions with Roland. Sunday Weekly Watchlist before
              the week opens. Daily morning watchlist before the bell. Friday
              Trader Therapy for the mental side. Trade journal that imports
              your real broker data. Risk calculator. Playbook Builder. Wolf
              Scanner. Wolf AI Coach. Edge Lab. Backtest Lab. A community of
              2,500+ traders doing the work.
            </p>
            <p className="text-parchment">This is where serious traders work.</p>
          </div>
          <div className="mt-10">
            <CTAButton href="/start" variant="primary">
              Start Free
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Inside the platform — real screenshots */}
      <section className="bg-black2 border-t border-white/5">
        <div className="mx-auto w-full max-w-7xl px-6 py-20">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            Inside the Platform
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-parchment md:text-5xl">
            See what a trading operating system looks like.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SCREENSHOTS.map((shot) => (
              <figure key={shot.src} className="flex flex-col">
                <div className="relative aspect-video w-full overflow-hidden border border-gold/40 bg-black">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-3 text-xs uppercase tracking-wider text-gray">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Tier comparison */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <h2 className="font-display text-4xl text-parchment md:text-5xl">
            Find your level.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Wolfpack */}
            <Reveal className="flex flex-col" delayMs={0}>
              <TierCard
                tier="wolfpack"
                name="Wolfpack"
                price="$127"
                cadence="month"
                description="The foundation. Daily live sessions, watchlists, journal, community, and every tool a working trader needs."
                features={[
                  "Daily live sessions with Roland",
                  "Sunday Weekly Watchlist",
                  "Daily morning watchlist",
                  "Friday Trader Therapy",
                  "Trading journal + broker import",
                  "Risk calculator",
                  "Playbook Builder",
                  "Full content library",
                  "2,500+ trader community",
                ]}
                cta={
                  <CTAButton
                    href="https://join.wolftrades.com"
                    variant="primary"
                  >
                    Join Wolfpack
                  </CTAButton>
                }
              />
              <p className="mt-3 text-sm text-gray">
                or $997/yr — save $527
              </p>
              <p className="mt-1 text-sm text-gold">
                Annual members: you’ll hear from us about APEX.
              </p>
            </Reveal>

            {/* Wolfpack Pro — featured */}
            <Reveal className="relative flex flex-col" delayMs={100}>
              <span className="absolute -top-3 left-6 z-10 bg-gold px-3 py-1 font-display text-xs uppercase tracking-wider text-black">
                Most Complete
              </span>
              <TierCard
                tier="pro"
                name="Wolfpack Pro"
                price="$197"
                cadence="month"
                description="Everything in Wolfpack plus the full edge layer. Scanner, AI, advanced analytics, and backtesting."
                features={[
                  "Everything in Wolfpack",
                  "Wolf Scanner — 10,968 stocks real-time",
                  "Wolf AI Coach — 5 modes",
                  "Edge Lab advanced analytics",
                  "Backtest Lab",
                  "Advanced broker import",
                ]}
                featured
                cta={
                  <CTAButton
                    href="https://join.wolftrades.com/pro"
                    variant="primary"
                  >
                    Join Pro
                  </CTAButton>
                }
              />
            </Reveal>

            {/* APEX */}
            <Reveal className="relative flex flex-col" delayMs={200}>
              <span className="absolute -top-3 left-6 z-10 bg-bear px-3 py-1 font-display text-xs uppercase tracking-wider text-parchment">
                2 Spots Left
              </span>
              <TierCard
                tier="apex"
                name="APEX"
                price="Application"
                cadence="only"
                description="4 months. 1-on-1 with Roland. Maximum 10 traders per cohort. Cohort 1 starts May 1. 2 spots remaining."
                features={[
                  "Direct 1-on-1 with Roland daily",
                  "Private APEX channels",
                  "Tue/Thu Group Mastermind",
                  "Direct Roland DM access",
                  "In-person cohort meetup",
                  "Lifetime Wolfpack access (Founding Cohort)",
                ]}
                cta={
                  <CTAButton href="/apex" variant="primary">
                    Apply Now
                  </CTAButton>
                }
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Student wins */}
      <section className="bg-black2 border-y border-white/5">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            Real Traders. Real Results.
          </p>
          <h2 className="mt-4 font-display text-4xl text-parchment md:text-5xl">
            The proof is in the Pack.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal delayMs={0}>
              <TestimonialQuote
                quote="He was finding different points in the chart patterns to take his longs, and he was actually having good performance without a herd of sheep on his back."
                attribution="Tim Grittani"
                role="$15M+ verified trader · Trading Tickers 2"
              />
            </Reveal>
            <Reveal delayMs={100}>
              <TestimonialQuote
                quote="Roland's really taught me on how to limit my exposure to the downside while making exponential gains to the upside."
                attribution="Michael Huddie"
                role="Clover Trading"
              />
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Reveal delayMs={0}>
              <div className="font-display text-4xl text-gold">$13M+</div>
              <div className="mt-1 text-sm uppercase tracking-wider text-parchment/80">
                Jack Kellogg — career profits
              </div>
            </Reveal>
            <Reveal delayMs={100}>
              <div className="font-display text-4xl text-gold">$10M</div>
              <div className="mt-1 text-sm uppercase tracking-wider text-parchment/80">
                Brian @wareagletrader — 2024
              </div>
            </Reveal>
            <Reveal delayMs={200}>
              <div className="font-display text-4xl text-gold">~$1M</div>
              <div className="mt-1 text-sm uppercase tracking-wider text-parchment/80">
                Brandon Hanna — approaching
              </div>
            </Reveal>
          </div>

          <div className="mt-12">
            <CTAButton href="/results" variant="secondary">
              See All Results
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black2">
        <div className="mx-auto w-full max-w-5xl px-6 py-24 text-center">
          <h2 className="font-display text-5xl text-parchment md:text-7xl">
            Stop trading alone.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-parchment/85">
            Get inside the platform free. See the system. Meet the Pack. Decide
            for yourself.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <CTAButton href="/start" variant="primary">
              Start Free
            </CTAButton>
            <CTAButton href="/platform" variant="ghost">
              Learn More
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
