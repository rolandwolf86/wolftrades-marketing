import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { HallOfFameCarousel } from "@/components/HallOfFameCarousel";
import { Hero } from "@/components/Hero";
import { PricingCard } from "@/components/PricingCard";
import {
  GHL_PRO_ANNUAL_URL,
  GHL_PRO_MONTHLY_URL,
  START_FREE_URL,
} from "@/lib/links";
import { PRICING, PROMO } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Wolfpack Pro",
  description:
    "Wolfpack Pro — same room, sharper tools. +$50/mo unlocks Wolf Scanner, Wolf AI, Edge Lab, and Backtest Lab.",
};

const TOOLKIT = [
  {
    name: "Wolf Scanner",
    eyebrow: "Find Movement",
    body: "Filter the tape for momentum, liquidity, and price behavior worth reviewing — without faking certainty.",
    image: "/screenshots/scanner.png",
    alt: "Wolf Scanner table",
  },
  {
    name: "Wolf AI",
    eyebrow: "Review",
    body: "Ask better questions after the trade. Pattern recognition and behavior prompts that force clearer thinking.",
    image: "/screenshots/wolf-ai.png",
    alt: "Wolf AI Coach interface",
  },
  {
    name: "Edge Lab",
    eyebrow: "Inspect",
    body: "Win rate by setup, P&L by time of day, average winner vs loser, hold-time review. Inspect what your real edge looks like.",
    image: "/screenshots/edge-lab.png",
    alt: "Edge Lab analytics",
  },
  {
    name: "Backtest Lab",
    eyebrow: "Test",
    body: "Run setups against historical data. See the truth about a pattern before you bet it live.",
    image: "/screenshots/community.png",
    alt: "Backtest Lab interface",
  },
] as const;

const PRO_FOR: ReadonlyArray<string> = [
  "You already use Wolfpack and want more depth",
  "You're ready to systematize your process",
  "You want analytics on your own behavior",
  "You want a scanner that fits how you trade",
  "You want to test setups before betting them",
];

const PRO_NOT_FOR: ReadonlyArray<string> = [
  "You haven't traded yet",
  "You want signals to copy",
  "You don't want to review your trades",
  "You'll only watch the room — never use the toolkit",
];

const PRO_FAQ = [
  {
    q: "I'm already in Wolfpack — how do I upgrade?",
    a: "Upgrade from inside the platform. Your existing subscription credits toward the Pro rate. No downtime, no double-billing.",
  },
  {
    q: "Is Pro just more tools, or a different room?",
    a: "Same room. Same live sessions. Same Trader Therapy. Pro adds the toolkit on top — Scanner, Wolf AI, Edge Lab, Backtest Lab.",
  },
  {
    q: "Can I downgrade?",
    a: "Anytime. Cancel Pro and you stay on Wolfpack at the standard rate. No contracts.",
  },
  {
    q: "What if I don't end up using the toolkit?",
    a: "Then Pro isn't for you. Wolfpack is the right tier. Pro is built for traders who will actually use the analytics, scanner, and backtester.",
  },
] as const;

export default function ProPage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <Hero
        eyebrow={`Wolfpack Pro · +${PRICING.pro.upgradeDelta}/mo`}
        headline="Same room. Sharper tools."
        subhead={
          <>
            Wolf Scanner. Wolf AI. Edge Lab. Backtest Lab. Built into the
            Wolfpack you already know.
          </>
        }
        primaryCta={
          <CTAButton href="#pricing" variant="primary">
            See Pro Pricing
          </CTAButton>
        }
        secondaryCta={
          <CTAButton href="/wolfpack" variant="secondary">
            Wolfpack Basics →
          </CTAButton>
        }
      />

      {/* SECTION 2 — THE +$50 MATH */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-5xl text-center">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
            The Math
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-parchment md:text-6xl">
            +{PRICING.pro.upgradeDelta}/mo for the Pro toolkit.
          </h2>
          <p className="mx-auto mt-10 max-w-3xl font-display text-2xl leading-tight text-parchment/85 md:text-3xl">
            Wolfpack {PRICING.wolfpack.monthly}
            <span className="px-3 text-parchment/40">+</span>
            Pro toolkit {PRICING.pro.upgradeDelta}
            <span className="px-3 text-parchment/40">=</span>
            <span className="text-bull">{PRICING.pro.monthly}/mo</span>
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-parchment/70">
            No-brainer for traders who actually use the toolkit. If you&rsquo;ll
            review your trades, scan the tape, and test setups, the math pays
            itself back.
          </p>
        </div>
      </section>

      {/* SECTION 3 — PRO TOOLKIT */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-7xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
            What You Get
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
            Four tools. Built for traders who actually trade.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TOOLKIT.map((tool) => (
              <article
                key={tool.name}
                className="flex flex-col border border-white/10 bg-black2"
              >
                <div className="relative aspect-video overflow-hidden border-b border-white/5">
                  <Image
                    src={tool.image}
                    alt={tool.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-left-top"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-display text-xs uppercase tracking-widest text-bull">
                    {tool.eyebrow}
                  </p>
                  <h3 className="mt-2 font-display text-xl uppercase text-parchment">
                    {tool.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-parchment/70">
                    {tool.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHO PRO IS FOR */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-4xl leading-none text-parchment md:text-6xl">
            Pro is for traders who will use the toolkit.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 font-display text-xs uppercase tracking-widest text-bull">
                This is for you if:
              </p>
              <ul className="space-y-3 text-parchment/80">
                {PRO_FOR.map((item) => (
                  <li key={item} className="flex gap-3 text-base">
                    <span aria-hidden className="text-bull">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-display text-xs uppercase tracking-widest text-gray">
                This is not for you if:
              </p>
              <ul className="space-y-3 text-parchment/60">
                {PRO_NOT_FOR.map((item) => (
                  <li key={item} className="flex gap-3 text-base">
                    <span aria-hidden className="text-bear">
                      ✗
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-base italic text-parchment/60">
            Pro is the toolkit tier. If you won&apos;t use it, Wolfpack is the
            better fit.
          </p>
        </div>
      </section>

      {/* SECTION 5 — ROLAND IDENTITY SPLIT */}
      <section className="relative min-h-[500px] overflow-hidden bg-black md:min-h-[600px]">
        <Image
          src="/images/roland/roland-laptop.jpg"
          alt="Roland at the laptop during morning prep"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.75) 50%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 60%, rgba(10,10,10,1) 100%)",
          }}
        />
        <div className="relative flex min-h-[500px] flex-col justify-center px-8 py-16 md:min-h-[600px] md:px-16">
          <div className="max-w-xl">
            <p className="mb-4 font-display text-xs uppercase tracking-[0.25em] text-bull">
              The Toolkit Behind the Process
            </p>
            <h2 className="font-display text-4xl leading-tight text-parchment md:text-5xl">
              The same tools I use to prep, scan, and review every day.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-parchment/80">
              Pro isn&apos;t a course. It&apos;s the workflow I trade from —
              built for traders who want to do the same.
            </p>
            <div className="mt-8">
              <CTAButton href="#pricing" variant="primary">
                See Pro Pricing
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — HALL OF FAME */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-7xl">
          <HallOfFameCarousel
            eyebrow="What Pro Traders Become"
            headline="Process plus toolkit."
          />
          <p className="mt-6 max-w-3xl text-xs leading-5 text-parchment/52">
            Results are not typical and are shown for educational context only.
            Trading involves risk and no outcome is guaranteed.
          </p>
        </div>
      </section>

      {/* SECTION 7 — PRICING */}
      <section id="pricing" className="scroll-mt-20 bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <p className="text-center font-display text-xs uppercase tracking-[0.25em] text-bull">
            Wolfpack Pro Pricing
          </p>
          <h2 className="mt-4 text-center font-display text-4xl leading-none text-parchment md:text-6xl">
            Toolkit included.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <PricingCard
              name="Monthly"
              price={PRICING.pro.monthly}
              cadence="mo"
              description="Wolfpack live room, replays, Trader Therapy, playbook, journal, community — plus Wolf Scanner, Wolf AI, Edge Lab, and Backtest Lab. Cancel anytime."
              features={[]}
              ctaLabel="Join Pro"
              ctaHref={GHL_PRO_MONTHLY_URL}
              ctaVariant="primary"
              promo={PROMO.pro}
            />
            <PricingCard
              name="Annual"
              price={PRICING.pro.annual}
              cadence="yr"
              description={
                <>
                  <span className="block font-medium text-parchment">
                    {PRICING.pro.annualPerMonth}/mo · Save{" "}
                    {PRICING.pro.annualSavings}
                  </span>
                  <span className="mt-3 block text-sm leading-relaxed text-parchment/60">
                    Annual locks the rate. Pro members get priority
                    consideration when APEX spots open.
                  </span>
                </>
              }
              features={[]}
              ctaLabel="Join Annually"
              ctaHref={GHL_PRO_ANNUAL_URL}
              ctaVariant="primary"
              badge="Best Value"
              featured
            />
          </div>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
            Common Questions
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
            Straight answers.
          </h2>

          <div className="mx-auto mt-10 max-w-3xl space-y-8">
            {PRO_FAQ.map((item) => (
              <div key={item.q} className="border-b border-parchment/10 pb-8">
                <p className="font-display text-lg uppercase tracking-wider text-bull">
                  {item.q}
                </p>
                <p className="mt-3 text-base leading-7 text-parchment/80">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="bg-black px-6 py-20 text-center">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-5xl leading-none text-parchment md:text-7xl">
            Same room. Sharper tools.
          </h2>
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
            <CTAButton href="#pricing" variant="primary">
              Join Pro
            </CTAButton>
            <CTAButton href="/apex" variant="secondary">
              Apply for APEX 1-on-1
            </CTAButton>
          </div>
          <p className="mt-6 text-sm">
            <Link
              href={START_FREE_URL}
              className="text-bull transition-colors hover:underline"
            >
              Get Roland&rsquo;s Free Watchlist
            </Link>
          </p>
        </div>
      </section>

      {/* SECTION 10 — DISCLAIMER */}
      <section className="border-t border-parchment/10 bg-black2 px-6 py-8 text-center">
        <p className="mx-auto max-w-3xl text-sm text-gray">
          Trading involves risk. Results are not typical and are not
          guaranteed. Wolf Trades provides education, tools, and community —
          not financial advice.
        </p>
      </section>
    </>
  );
}
