import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { Hero } from "@/components/Hero";
import { START_FREE_URL, WOLFPACK_MONTHLY_URL } from "@/lib/links";

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
          <article className="border border-gold/60 bg-black2 p-8">
            <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
              Wolfpack
            </p>
            <div className="mt-4 font-display text-5xl text-parchment">
              $127
              <span className="ml-2 text-base font-normal text-gray">/mo</span>
            </div>
            <p className="mt-4 text-base leading-7 text-parchment/76">
              Public primary price. Any account-specific coupons are handled
              inside the platform pricing page.
            </p>
            <div className="mt-8">
              <CTAButton href={WOLFPACK_MONTHLY_URL} variant="primary">
                Join Wolfpack
              </CTAButton>
            </div>
          </article>

          <article className="border border-white/10 bg-black2 p-8">
            <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
              Start Free
            </p>
            <div className="mt-4 font-display text-5xl text-parchment">$0</div>
            <p className="mt-4 text-base leading-7 text-parchment/76">
              No card. No payment. Create an account and inspect the platform
              before upgrading.
            </p>
            <div className="mt-8">
              <CTAButton href={START_FREE_URL} variant="secondary">
                Start Free
              </CTAButton>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
