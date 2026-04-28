import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import {
  COMMUNITY_URL,
  PRO_MONTHLY_URL,
  START_FREE_URL,
  WOLFPACK_MONTHLY_URL,
} from "@/lib/links";

const PROOF_POINTS = [
  "Jack Kellogg: $13M+",
  "Brian: $10M in 2024",
  "10+ seven-figure students",
  "2,500+ traders inside",
] as const;

const RHYTHM = [
  {
    time: "Sunday",
    title: "Weekly Watchlist",
    body: "The week starts with structure: names in play, key levels, catalysts, and context before Monday opens.",
  },
  {
    time: "Every Morning",
    title: "Daily In-Depth Watchlist",
    body: "A focused read on the market before the bell so you know what matters before volatility starts.",
  },
  {
    time: "Market Hours",
    title: "Live Sessions",
    body: "Roland's live workflow during the trading day: prep, execution, risk, patience, and review in real time.",
  },
  {
    time: "Friday",
    title: "Trader Therapy",
    body: "The reset most traders skip: discipline, mistakes, hesitation, overtrading, and what needs to change next week.",
  },
  {
    time: "Always",
    title: "Journal + Playbook Builder",
    body: "Turn decisions into records, records into rules, and rules into a process you can review.",
  },
] as const;

const PLATFORM_TOOLS = [
  "Live room",
  "Morning watchlists",
  "Trade journal",
  "Risk calculator",
  "Playbook Builder",
  "Scanner",
  "Wolf AI Coach",
  "Edge Lab",
] as const;

const OFFERS = [
  {
    name: "Free",
    price: "No card",
    body: "Create an account, look inside, and see the workflow before you pay.",
    cta: "Start Free",
    href: START_FREE_URL,
  },
  {
    name: "Wolfpack",
    price: "$127/mo",
    body: "Daily live sessions, watchlists, journal, community, and the operating rhythm for serious traders.",
    cta: "Join Wolfpack",
    href: WOLFPACK_MONTHLY_URL,
  },
  {
    name: "Wolfpack Pro",
    price: "$197/mo",
    body: "Everything in Wolfpack plus the scanner, AI coach, analytics, and backtesting layer.",
    cta: "Join Pro",
    href: PRO_MONTHLY_URL,
  },
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-xs uppercase tracking-[0.24em] text-gold">
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,168,76,0.12),transparent_34%,transparent_70%,rgba(22,163,74,0.06))]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-6 pb-16 pt-12 md:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.08fr)] md:pb-24 md:pt-20">
          <div className="flex min-h-[520px] flex-col justify-center md:min-h-[640px]">
            <SectionLabel>
              VERIFIED 7-FIGURE NASDAQ TRADER{" "}
              <span aria-hidden="true">{"\u00B7"}</span> TEACHING SINCE 2018
            </SectionLabel>
            <h1 className="mt-5 max-w-4xl font-display text-[4rem] font-black uppercase leading-[0.88] text-parchment sm:text-[5.3rem] md:text-[6.4rem]">
              OPERATE LIKE A PROFESSIONAL TRADER.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-parchment/82 md:text-xl">
              Wolf Trades gives serious traders Roland&apos;s live workflow: daily
              sessions, morning watchlists, Sunday prep, Friday Trader Therapy,
              journaling, Playbook Builder, and the tools to build a repeatable
              edge.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={START_FREE_URL} variant="primary">
                Start Free
              </CTAButton>
              <CTAButton href={WOLFPACK_MONTHLY_URL} variant="secondary">
                Join Wolfpack
              </CTAButton>
            </div>
            <p className="mt-6 max-w-2xl text-sm uppercase tracking-[0.14em] text-parchment/60">
              Free tier: no card, no payment.
            </p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden border border-white/10 bg-black2 md:min-h-[640px]">
            <div className="absolute left-0 top-0 z-10 flex w-full items-center justify-between border-b border-white/10 bg-black/85 px-4 py-3">
              <span className="font-display text-xs uppercase tracking-[0.2em] text-parchment/70">
                Command Center
              </span>
              <span className="font-display text-xs uppercase tracking-[0.2em] text-gold">
                Live Workflow
              </span>
            </div>
            <Image
              src="/screenshots/chat.png"
              alt="Wolf Trades community command center"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-left-top opacity-95"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_45%,#0a0a0a_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 z-10 grid grid-cols-2 border-t border-white/10 bg-black/90 md:grid-cols-4">
              {["Prep", "Execute", "Review", "Build"].map((item) => (
                <div key={item} className="border-r border-white/10 px-4 py-4 last:border-r-0">
                  <p className="font-display text-sm uppercase tracking-[0.16em] text-parchment">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black2">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-x-6 gap-y-3 px-6 py-5">
          {PROOF_POINTS.map((point) => (
            <span
              key={point}
              className="font-display text-sm uppercase tracking-[0.12em] text-parchment/82"
            >
              {point}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <SectionLabel>Operating Rhythm</SectionLabel>
            <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
              The week has a system.
            </h2>
          </div>
          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {RHYTHM.map((item) => (
              <article
                key={item.time}
                className="grid gap-4 py-6 md:grid-cols-[180px_260px_minmax(0,1fr)] md:items-start"
              >
                <p className="font-display text-sm uppercase tracking-[0.22em] text-gold">
                  {item.time}
                </p>
                <h3 className="font-display text-3xl leading-none text-parchment">
                  {item.title}
                </h3>
                <p className="max-w-3xl text-base leading-7 text-parchment/74">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black2">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:py-28">
          <div>
            <SectionLabel>Platform System</SectionLabel>
            <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
              Not a course. A workflow.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-parchment/78">
            <p>
              Wolf Trades is built around the way a working trader actually
              operates: prepare the market, execute with defined risk, review
              the decision, document the setup, and improve the process.
            </p>
            <p>
              The education is live, the tools are practical, and the standard
              is proof-first. You are not buying motivation. You are stepping
              into a repeatable operating rhythm.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_0.82fr] md:py-28">
          <div>
            <SectionLabel>Platform Preview</SectionLabel>
            <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
              The desk for your trading day.
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
              {PLATFORM_TOOLS.map((tool) => (
                <div key={tool} className="bg-black2 px-4 py-5">
                  <p className="font-display text-sm uppercase tracking-[0.16em] text-parchment/82">
                    {tool}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton href="/platform" variant="secondary">
                Explore Platform
              </CTAButton>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden border border-white/10 bg-black2 sm:min-h-[460px]">
            <Image
              src="/screenshots/edge-lab.png"
              alt="Wolf Trades Edge Lab analytics"
              fill
              loading="eager"
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover object-left-top"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black2">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
          <div>
            <SectionLabel>Playbook Builder</SectionLabel>
            <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
              TURN YOUR SETUPS INTO A REPEATABLE PROCESS.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-[1fr_260px]">
            <p className="text-lg leading-8 text-parchment/78">
              Document your setups, screenshots, rules, conditions, and review
              notes so you stop relying on memory when the market is moving.
            </p>
            <div className="border border-gold/50 bg-black p-5">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">
                Build the rule
              </p>
              <p className="mt-4 text-sm leading-6 text-parchment/70">
                Entry criteria, invalidation, risk plan, screenshot evidence,
                and post-trade review in one documented setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.95fr_1.05fr] md:py-28">
          <div className="border-l-2 border-gold pl-6">
            <SectionLabel>Roland Wolf</SectionLabel>
            <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
              Personality-led. Proof-first. Direct.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-parchment/78">
            <p>
              Roland has traded Nasdaq momentum live since 2017 and has taught
              traders since 2018. The site should feel like the media desk
              around that workflow: direct commentary, visible process, and
              tools that support the work.
            </p>
            <p className="text-parchment">
              The tone is simple: no hype, no shortcuts, no borrowed authority.
              Watch the process, use the tools, and decide from the evidence.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black2">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-28">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>Offers</SectionLabel>
              <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
                Choose the level that fits.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-parchment/68">
              Start free with no card. Upgrade when the platform and workflow
              make sense for where you are.
            </p>
          </div>
          <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-3">
            {OFFERS.map((offer) => (
              <article key={offer.name} className="bg-black p-6 md:p-8">
                <p className="font-display text-sm uppercase tracking-[0.22em] text-gold">
                  {offer.name}
                </p>
                <p className="mt-4 font-display text-5xl text-parchment">
                  {offer.price}
                </p>
                <p className="mt-5 min-h-[88px] text-base leading-7 text-parchment/72">
                  {offer.body}
                </p>
                <div className="mt-7">
                  <CTAButton href={offer.href} variant="primary">
                    {offer.cta}
                  </CTAButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-14 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <SectionLabel>APEX</SectionLabel>
            <h2 className="mt-3 font-display text-3xl leading-none text-parchment md:text-5xl">
              Application-only mentorship for traders ready for direct review.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-parchment/72">
              APEX is separate from the public pricing ladder. No public price,
              no checkout button, and no automatic enrollment.
            </p>
          </div>
          <CTAButton href="/apex" variant="secondary">
            Apply for APEX
          </CTAButton>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black2">
        <div className="mx-auto w-full max-w-5xl px-6 py-20 text-center md:py-28">
          <h2 className="font-display text-5xl leading-none text-parchment md:text-7xl">
            See the workflow before you commit.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-parchment/78">
            Start free, walk through the platform, and use the same front door
            whether you are here for the live room, the tools, or the community.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton href={START_FREE_URL} variant="primary">
              Start Free
            </CTAButton>
            <CTAButton href={COMMUNITY_URL} variant="secondary">
              Members Area
            </CTAButton>
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.14em] text-parchment/52">
            Free tier: no card, no payment.
          </p>
        </div>
      </section>
    </>
  );
}
