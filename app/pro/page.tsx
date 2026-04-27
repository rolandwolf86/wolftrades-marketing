import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { TierCard } from "@/components/TierCard";

export const metadata: Metadata = {
  title: "Wolfpack Pro",
  description:
    "Wolfpack Pro is the data, AI, and analytics layer for serious traders. $147/mo. Wolf Scanner, Wolf AI Coach, Edge Lab, Backtest Lab.",
};

const FEATURES: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Wolf Scanner",
    body: "Real-time momentum scanner across 10,968 stocks. NASDAQ, NYSE, AMEX. Filter by volume, price action, news catalyst, gap percentage, and more. Updated live. The same scan logic Roland uses to find setups during the open.",
  },
  {
    title: "Wolf AI Coach — 5 modes",
    body: "Powered by Anthropic. Your AI trading coach reviews your journal, your trades, your patterns. Asks you the questions a real coach would ask. Five modes: Coach, Strategy, Review, Risk, Mindset. Gets sharper the more you use it.",
  },
  {
    title: "Edge Lab",
    body: "Advanced analytics on your real broker data. Win rate by setup type. P&L by time of day. Average winner vs average loser. Hold time breakdown. This is where you find out where your edge actually lives — and where it’s quietly leaking.",
  },
  {
    title: "Backtest Lab",
    body: "Test setups before you size in. Build a hypothesis. Run it against historical data. Know if your idea has an actual edge before you bet capital on it.",
  },
];

export default function ProPage() {
  return (
    <>
      <Hero
        eyebrow="Wolfpack Pro — $147/month"
        headline="Wolfpack gets you inside. Pro gets you sharp."
        subhead="Wolfpack is the foundation. Pro is the data, AI, and analytics layer that turns trading from gut feel into a measurable system."
        primaryCta={
          <CTAButton href="https://join.wolftrades.com/pro" variant="primary">
            Upgrade to Pro — $147/mo
          </CTAButton>
        }
        secondaryCta={
          <CTAButton href="/wolfpack" variant="secondary">
            Start with Wolfpack first
          </CTAButton>
        }
      />

      {/* The honest problem */}
      <section className="border-t border-white/5 bg-black2">
        <div className="mx-auto w-full max-w-5xl px-6 py-24">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            The Real Problem
          </p>
          <h2 className="mt-4 font-display text-4xl text-parchment md:text-5xl">
            Most traders don’t know why they’re losing.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-lg text-parchment/85">
            <p>
              They feel it. They know something is off. They have a vague sense
              their morning trades are weak or their afternoon revenge trades
              are killing them. But they don’t actually know. They don’t have
              data. They have feelings.
            </p>
            <p className="font-display text-2xl uppercase text-gold">
              Pro fixes that.
            </p>
            <p>
              Wolf Scanner shows you momentum setups in real time across 10,968
              stocks. Wolf AI Coach reviews your trading patterns and surfaces
              your blind spots. Edge Lab tells you exactly which setups, times,
              and tickers actually make you money — and which ones bleed you.
              Backtest Lab lets you test ideas before you risk real capital.
            </p>
            <p className="text-parchment">
              Fifty dollars a month is the cost of finding out.
            </p>
          </div>
        </div>
      </section>

      {/* The Edge Layer */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            The Edge Layer
          </p>
          <h2 className="mt-4 font-display text-4xl text-parchment md:text-5xl">
            Everything in Wolfpack. Plus this.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {FEATURES.map((feature, index) => {
              const isLive = feature.title === "Wolf Scanner";
              return (
                <Reveal key={feature.title} delayMs={index * 100}>
                  <article className="border border-white/5 bg-black2 p-8">
                    <h3 className="flex items-center gap-3 font-display text-2xl text-parchment">
                      {isLive ? (
                        <span
                          aria-label="Live"
                          className="inline-block h-2.5 w-2.5 rounded-full bg-bull animate-pulse-bull motion-reduce:animate-none"
                        />
                      ) : null}
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-base text-parchment/80">
                      {feature.body}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* The math */}
      <section className="bg-black2 border-y border-white/5">
        <div className="mx-auto w-full max-w-5xl px-6 py-24">
          <h2 className="font-display text-4xl text-parchment md:text-5xl">
            One bad trade per month pays for Pro. Forever.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-lg text-parchment/85">
            <p>
              The $50 difference between Wolfpack and Pro is less than the
              average trader loses on a single mistake they didn’t see coming.
              Edge Lab shows you the patterns you’re not aware of. Wolf AI asks
              you the questions that change behavior. Wolf Scanner finds the
              setups before they’re crowded.
            </p>
            <p>
              If Pro saves you one bad trade per month, it pays for itself. If
              it sharpens your A+ setups by five percent, it pays for itself
              many times over.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing comparison */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-5xl px-6 py-24">
          <h2 className="font-display text-4xl text-parchment md:text-5xl">
            The math is simple.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Reveal delayMs={0}>
              <TierCard
                tier="wolfpack"
                name="Wolfpack"
                price="$97"
                cadence="month"
                features={[
                  "Daily live sessions",
                  "Watchlists",
                  "Journal",
                  "Risk Calculator",
                  "Playbook Builder",
                  "Community",
                ]}
                cta={
                  <CTAButton href="/wolfpack" variant="secondary">
                    Start Here
                  </CTAButton>
                }
              />
            </Reveal>

            <Reveal className="relative" delayMs={100}>
              <span className="absolute -top-3 left-6 z-10 bg-gold px-3 py-1 font-display text-xs uppercase tracking-wider text-black">
                The Edge Layer
              </span>
              <TierCard
                tier="pro"
                name="Wolfpack Pro"
                price="$147"
                cadence="month"
                featured
                features={[
                  "Everything in Wolfpack",
                  "Wolf Scanner — 10,968 stocks",
                  "Wolf AI Coach — 5 modes",
                  "Edge Lab advanced analytics",
                  "Backtest Lab",
                  "Advanced broker import",
                ]}
                cta={
                  <CTAButton
                    href="https://join.wolftrades.com/pro"
                    variant="primary"
                  >
                    Upgrade to Pro
                  </CTAButton>
                }
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black2 border-t border-white/5">
        <div className="mx-auto w-full max-w-5xl px-6 py-24 text-center">
          <h2 className="font-display text-5xl text-parchment md:text-7xl">
            You can guess. Or you can know.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-parchment/85">
            Wolfpack gives you the foundation. Pro gives you the answers. Most
            serious traders eventually realize they want both.
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton href="https://join.wolftrades.com/pro" variant="primary">
              Upgrade to Pro — $147/mo
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
