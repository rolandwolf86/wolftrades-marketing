import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { LEGACY_UPGRADE_CHECKOUT_URL } from "@/lib/links";
import { PRICING } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Lifetime Member Upgrade",
  description: "A lifetime-locked Wolfpack Pro rate for legacy members.",
  robots: { index: false, follow: false },
};

const PRO_NEW = [
  "Wolf Scanner",
  "Wolf AI",
  "Edge Lab",
  "Backtest Lab",
];

const PRO_SAME = [
  "Live trading sessions every market day",
  "Roland's daily watchlist",
  "Trader Therapy",
  "Full replay library",
  "Roland's complete playbook",
  "Journal + analytics",
  "Community of 2,500+ traders",
];

export default function LegacyUpgradePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="bg-black px-6 py-24 md:py-32">
        <div className="mx-auto w-full max-w-3xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
            For Lifetime Members
          </p>
          <h1 className="mt-4 font-display text-5xl leading-none text-parchment md:text-7xl">
            You&rsquo;ve been here from the start.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-parchment/85">
            You showed up early. You stayed through every iteration. The Pack
            wouldn&rsquo;t be what it is without lifetime members like you. So
            this offer is for you — and only you.
          </p>
        </div>
      </section>

      {/* SECTION 2 — THE OFFER */}
      <section
        id="claim"
        className="scroll-mt-20 border-y border-white/5 bg-black2 px-6 py-20"
      >
        <div className="mx-auto w-full max-w-3xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
            The Offer
          </p>
          <div className="mt-6 space-y-2">
            <p className="font-display text-4xl uppercase leading-tight text-parchment md:text-6xl">
              Wolfpack Pro forever.
            </p>
            <p className="font-display text-4xl uppercase leading-tight text-parchment md:text-6xl">
              {PRICING.legacy.monthly}/mo or {PRICING.legacy.annual}/yr.
            </p>
            <p className="font-display text-2xl uppercase leading-tight text-parchment/70 md:text-3xl">
              No catches. No expiry. Locked for life.
            </p>
          </div>
          <p className="mt-10 max-w-2xl text-base leading-7 text-parchment/70">
            Lifetime pricing today is below the launch promo on the public
            page. The rate stays put — through future price changes, future
            tier changes, future anything.
          </p>
        </div>
      </section>

      {/* SECTION 3 — WHAT'S NEW / WHAT'S SAME */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="mb-4 font-display text-xs uppercase tracking-widest text-bull">
                What&rsquo;s new for you
              </p>
              <p className="mb-6 text-base leading-7 text-parchment/75">
                The Pro toolkit that wasn&rsquo;t in your tier before.
              </p>
              <ul className="space-y-3 text-parchment/85">
                {PRO_NEW.map((item) => (
                  <li key={item} className="flex gap-3 text-base">
                    <span aria-hidden className="text-bull">
                      +
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-display text-xs uppercase tracking-widest text-parchment/60">
                What stays the same
              </p>
              <p className="mb-6 text-base leading-7 text-parchment/75">
                Everything you already had — locked in.
              </p>
              <ul className="space-y-3 text-parchment/75">
                {PRO_SAME.map((item) => (
                  <li key={item} className="flex gap-3 text-base">
                    <span aria-hidden className="text-parchment/40">
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="border-t border-white/5 bg-black2 px-6 py-20 text-center">
        <div className="mx-auto w-full max-w-2xl">
          <CTAButton href={LEGACY_UPGRADE_CHECKOUT_URL} variant="primary">
            Claim your lifetime rate
          </CTAButton>
          <p className="mt-6 text-sm text-parchment/60">
            Questions? Email{" "}
            <a
              href="mailto:roland@wolftrades.com"
              className="text-bull underline-offset-2 hover:underline"
            >
              roland@wolftrades.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* SECTION 5 — CLOSER */}
      <section className="bg-black px-6 py-16 text-center">
        <p className="mx-auto max-w-2xl font-display text-xl uppercase leading-tight text-parchment/80 md:text-2xl">
          Thanks for being part of the Pack since the early days.
        </p>
        <p className="mt-3 text-sm text-gray">— Roland</p>
      </section>
    </>
  );
}
