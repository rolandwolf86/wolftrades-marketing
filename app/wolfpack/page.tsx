import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { TestimonialQuote } from "@/components/TestimonialQuote";

export const metadata: Metadata = {
  title: "Wolfpack",
  description:
    "Wolfpack is where serious traders work. $127/mo or $997/yr. Daily live sessions, real watchlists, real journal, real community.",
};

const FEATURES: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Daily live sessions with Roland",
    body: "Trade alongside a verified 7-figure Nasdaq trader. See the prep. See the entries. See the exits. Hear the decision-making in real time. Every day the market is open.",
  },
  {
    title: "Sunday Weekly Watchlist",
    body: "Start every week with structure before Monday opens. The names that matter, the levels that matter, the context for what's likely to set up. Posted every Sunday by Roland.",
  },
  {
    title: "Daily morning watchlist",
    body: "Roland posts the names worth watching every morning before the bell. React with Watching, Traded, or Missed and start tracking your own decisions.",
  },
  {
    title: "Friday Trader Therapy",
    body: "The session most traders skip and shouldn't. Weekly group review of mistakes, mindset, discipline, overtrading, hesitation, and resetting for the week ahead.",
  },
  {
    title: "Journal. Risk. Playbook.",
    body: "Import trades from Webull, Robinhood, Schwab, IBKR, and ETrade. Track every entry. Calculate risk before you size in. Build your playbook trade by trade.",
  },
  {
    title: "2,500+ traders. Real conversations.",
    body: "Eight-figure traders visible in chat. Role badges so you know who you're talking to. Real trades posted. Real accountability. The environment serious traders need.",
  },
];

export default function WolfpackPage() {
  return (
    <>
      <Hero
        eyebrow="Wolfpack — $127/month or $997/year"
        headline="This is where serious traders work."
        subhead="Daily live sessions with Roland. Real watchlists. Real journal. Real community. The operating rhythm of a professional trader."
        primaryCta={
          <CTAButton href="https://join.wolftrades.com" variant="primary">
            Join Wolfpack — $127/mo
          </CTAButton>
        }
        secondaryCta={
          <CTAButton
            href="https://join.wolftrades.com/annual"
            variant="secondary"
          >
            Save $527 — Join Annually
          </CTAButton>
        }
      />

      <section className="bg-black">
        <div className="mx-auto w-full max-w-5xl px-6 -mt-8 pb-12">
          <p className="text-sm text-parchment/80">
            Annual members: after joining, expect a personal outreach about
            APEX.
          </p>
        </div>
      </section>

      {/* Feature grid */}
      <section className="border-t border-white/5 bg-black2">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            What’s Inside
          </p>
          <h2 className="mt-4 font-display text-4xl text-parchment md:text-5xl">
            Everything a serious trader needs. In one place.
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-parchment/85">
            No more scattered tools. No more Discord noise. No more trading
            alone.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {FEATURES.map((feature, index) => (
              <Reveal key={feature.title} delayMs={index * 100}>
                <article className="border border-white/5 bg-black p-8">
                  <div
                    aria-hidden
                    className="mb-5 inline-flex h-10 w-10 items-center justify-center border border-gold/60"
                  >
                    <span className="font-display text-base text-gold">★</span>
                  </div>
                  <h3 className="font-display text-2xl text-parchment">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base text-parchment/80">
                    {feature.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Grittani trust strip */}
      <section className="bg-black2 border-y border-white/5">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <blockquote className="font-display text-3xl leading-tight text-parchment md:text-4xl">
            “The kind of person I want to learn from would be somebody who can
            succeed on the long side without relying on subscribers to push the
            picks in his favor.”
          </blockquote>
          <p className="mt-6 text-sm text-gray">
            — Tim Grittani, $15M+ verified trader · Trading Tickers 2
          </p>
        </div>
      </section>

      {/* Huddie */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <TestimonialQuote
            quote="Roland's really taught me on how to limit my exposure to the downside while making exponential gains to the upside. Part of the breakout strategies he plays sometimes can be so potent where I'm hitting 50 to 100% gains overnight."
            attribution="Michael Huddie"
            role="Clover Trading"
          />
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-black2 border-t border-white/5">
        <div className="mx-auto w-full max-w-5xl px-6 py-24">
          <h2 className="font-display text-4xl text-parchment md:text-5xl">
            Join the Pack.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Monthly */}
            <article className="flex flex-col border border-white/10 bg-black p-8">
              <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
                Monthly
              </p>
              <div className="mt-4 font-display text-5xl text-parchment">
                $127
                <span className="ml-2 text-base font-normal text-gray">
                  /mo
                </span>
              </div>
              <p className="mt-2 text-sm text-gray">Cancel anytime.</p>
              <div className="mt-8">
                <CTAButton href="https://join.wolftrades.com" variant="primary">
                  Join Wolfpack
                </CTAButton>
              </div>
            </article>

            {/* Annual — featured */}
            <article className="relative flex flex-col border border-gold bg-black p-8 shadow-[0_0_0_1px_rgba(201,168,76,0.4)]">
              <span className="absolute -top-3 left-6 bg-gold px-3 py-1 font-display text-xs uppercase tracking-wider text-black">
                Best Value
              </span>
              <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
                Annual
              </p>
              <div className="mt-4 font-display text-5xl text-parchment">
                $997
                <span className="ml-2 text-base font-normal text-gray">
                  /yr
                </span>
              </div>
              <p className="mt-2 text-sm text-gray">
                $83.08/mo · Save $527
              </p>
              <div className="mt-8">
                <CTAButton
                  href="https://join.wolftrades.com/annual"
                  variant="primary"
                >
                  Join Annually
                </CTAButton>
              </div>
              <p className="mt-4 text-sm text-parchment/85">
                Annual members receive personal outreach about APEX Cohort 1 —
                starting May 1. 2 spots remaining.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-5xl px-6 py-24 text-center">
          <h2 className="font-display text-5xl text-parchment md:text-7xl">
            You’re either inside or you’re outside.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-parchment/85">
            The market doesn’t slow down. The traders who win are the ones
            inside the right environment doing the work every day.
          </p>
          <div className="mt-10 flex justify-center">
            <CTAButton href="https://join.wolftrades.com" variant="primary">
              Join Wolfpack — $127/mo
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
