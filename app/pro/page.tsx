import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { Hero } from "@/components/Hero";
import {
  PRO_ANNUAL_CHECKOUT_URL,
  PRO_CHECKOUT_URL,
  PRO_MONTHLY_URL,
  START_FREE_URL,
} from "@/lib/links";

export const metadata: Metadata = {
  title: "Wolfpack Pro",
  description:
    "Wolfpack Pro is the data, AI, and analytics layer for serious traders. $197/mo. Scanner, AI Coach, Edge Lab, and Backtest Lab.",
};

const FEATURES = [
  {
    title: "Wolf Scanner",
    body: "A focused scanner layer for momentum, liquidity, and names that deserve review.",
  },
  {
    title: "Wolf AI Coach",
    body: "Review prompts for trade behavior, risk, journal patterns, and repeatable setups.",
  },
  {
    title: "Edge Lab",
    body: "Analytics that help you inspect setups, timing, hold behavior, and review patterns.",
  },
  {
    title: "Backtest Lab",
    body: "A place to test trade ideas before they become larger habits.",
  },
] as const;

export default function ProPage() {
  return (
    <>
      <Hero
        eyebrow="Wolfpack Pro - $197/month"
        headline="The edge layer for serious review."
        subhead="Wolfpack is the foundation. Pro adds scanner, AI coach, analytics, and backtesting to help traders review with more structure."
        primaryCta={
          <CTAButton href={PRO_MONTHLY_URL} variant="primary">
            Join Pro - $197/mo
          </CTAButton>
        }
        secondaryCta={
          <CTAButton href={START_FREE_URL} variant="secondary">
            Start Free
          </CTAButton>
        }
      />

      <section className="border-t border-white/5 bg-black2">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-24">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            Pro Tools
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-none text-parchment md:text-6xl">
            More visibility after every session.
          </h2>
          <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-2">
            {FEATURES.map((feature) => (
              <article key={feature.title} className="bg-black p-8">
                <h3 className="font-display text-3xl text-parchment">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-parchment/76">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto grid w-full max-w-5xl gap-6 px-6 py-20 md:grid-cols-2 md:py-24">
          {/* Monthly */}
          <article className="border border-white/10 bg-black2 p-8">
            <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
              Monthly
            </p>
            <div className="mt-4 font-display text-5xl text-parchment">
              $197
              <span className="ml-2 text-base font-normal text-gray">/mo</span>
            </div>
            <p className="mt-4 text-base leading-7 text-parchment/76">
              Cancel anytime. Public primary price for the Pro layer; checkout
              options live on the platform pricing page.
            </p>
            <div className="mt-8">
              <CTAButton href={PRO_CHECKOUT_URL} variant="primary">
                Join Pro
              </CTAButton>
            </div>
          </article>

          {/* Annual — featured */}
          <article className="relative border border-gold/60 bg-black2 p-8">
            <span className="absolute -top-3 left-6 bg-gold px-3 py-1 font-display text-xs uppercase tracking-wider text-black">
              Best Value
            </span>
            <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
              Annual
            </p>
            <div className="mt-4 font-display text-5xl text-parchment">
              $1,597
              <span className="ml-2 text-base font-normal text-gray">/yr</span>
            </div>
            <p className="mt-2 text-base leading-7 text-parchment/76">
              $133.08/mo &middot; Save $767
            </p>
            <div className="mt-8">
              <CTAButton href={PRO_ANNUAL_CHECKOUT_URL} variant="primary">
                Upgrade Annually
              </CTAButton>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
