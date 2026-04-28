import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { Hero } from "@/components/Hero";
import {
  START_FREE_URL,
  WOLFPACK_ANNUAL_CHECKOUT_URL,
  WOLFPACK_CHECKOUT_URL,
  WOLFPACK_MONTHLY_URL,
} from "@/lib/links";

export const metadata: Metadata = {
  title: "Wolfpack",
  description:
    "Wolfpack is where serious traders work. $127/mo. Daily live sessions, watchlists, journal, and community.",
};

const FEATURES = [
  "Daily live sessions with Roland",
  "Sunday Weekly Watchlist",
  "Daily in-depth morning watchlist",
  "Friday Trader Therapy",
  "Journal, risk, and Playbook Builder",
  "2,500+ trader community",
] as const;

export default function WolfpackPage() {
  return (
    <>
      <Hero
        eyebrow="Wolfpack - $127/month"
        headline="This is where serious traders work."
        subhead="Daily sessions, watchlists, journal, community, and the operating rhythm of a professional trader."
        primaryCta={
          <CTAButton href={WOLFPACK_MONTHLY_URL} variant="primary">
            Join Wolfpack - $127/mo
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
            What is inside
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-none text-parchment md:text-6xl">
            The weekly structure serious traders need.
          </h2>
          <div className="mt-10 grid gap-px bg-white/10 md:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature} className="bg-black p-6">
                <p className="font-display text-xl uppercase tracking-[0.08em] text-parchment">
                  {feature}
                </p>
              </div>
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
              $127
              <span className="ml-2 text-base font-normal text-gray">/mo</span>
            </div>
            <p className="mt-4 text-base leading-7 text-parchment/76">
              Cancel anytime. Public primary price; account-specific coupons
              are handled inside the platform pricing page.
            </p>
            <div className="mt-8">
              <CTAButton href={WOLFPACK_CHECKOUT_URL} variant="primary">
                Join Wolfpack
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
              $997
              <span className="ml-2 text-base font-normal text-gray">/yr</span>
            </div>
            <p className="mt-2 text-base leading-7 text-parchment/76">
              $83.08/mo &middot; Save $527
            </p>
            <div className="mt-8">
              <CTAButton href={WOLFPACK_ANNUAL_CHECKOUT_URL} variant="primary">
                Join Annually
              </CTAButton>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
