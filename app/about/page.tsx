import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built by a trader. For traders. Roland Wolf has been trading Nasdaq momentum stocks since 2017.",
};

const PILLARS: ReadonlyArray<string> = ["Family", "Freedom", "Wolf", "Proof"];

export default function AboutPage() {
  return (
    <>
      <section className="bg-black">
        <div className="mx-auto w-full max-w-5xl px-6 py-24">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            About Wolf Trades
          </p>
          <h1 className="mt-4 font-display text-5xl text-parchment md:text-7xl">
            Built by a trader. For traders.
          </h1>

          <div className="mt-10 max-w-3xl space-y-5 text-lg text-parchment/85">
            <p>
              Roland Wolf has been trading Nasdaq momentum stocks since 2017
              and teaching since 2018. Wolf Trades was built because the
              platform Roland wished he had didn’t exist.
            </p>
            <p>Full story coming.</p>
          </div>
        </div>
      </section>

      {/* Brand pillars */}
      <section className="bg-black2 border-y border-white/5">
        <div className="mx-auto w-full max-w-7xl px-6 py-16">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {PILLARS.map((pillar) => (
              <div key={pillar} className="border-l-2 border-gold pl-4">
                <div className="font-display text-3xl text-parchment md:text-4xl">
                  {pillar}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <CTAButton href="/start" variant="primary">
            Start Free
          </CTAButton>
        </div>
      </section>
    </>
  );
}
