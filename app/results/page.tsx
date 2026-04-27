import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { ProofBar } from "@/components/ProofBar";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Real traders, real results. Tim Grittani endorsement, eight-figure students, the verified track record.",
};

export default function ResultsPage() {
  return (
    <>
      <section className="bg-black">
        <div className="mx-auto w-full max-w-5xl px-6 py-24">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            Real Traders. Real Results.
          </p>
          <h1 className="mt-4 font-display text-5xl text-parchment md:text-7xl">
            The proof is in the Pack.
          </h1>
        </div>
      </section>

      {/* Grittani quote */}
      <section className="bg-black2 border-y border-white/5">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            Endorsed. Unsolicited. Unpaid.
          </p>
          <blockquote className="mt-8 font-display text-4xl leading-tight text-parchment md:text-6xl">
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
        </div>
      </section>

      <ProofBar
        points={[
          { value: "2,500+", label: "Traders Inside" },
          { value: "10+", label: "Seven-Figure Students" },
          { value: "30+", label: "Six-Figure Students" },
          { value: "2", label: "Eight-Figure Students" },
        ]}
      />

      {/* Named wins */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="font-display text-5xl text-gold">$13M+</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-parchment/80">
                Jack Kellogg — career profits
              </div>
            </div>
            <div>
              <div className="font-display text-5xl text-gold">$10M</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-parchment/80">
                Brian @wareagletrader — 2024
              </div>
            </div>
            <div>
              <div className="font-display text-5xl text-gold">~$1M</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-parchment/80">
                Brandon Hanna — approaching
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black2 border-t border-white/5">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <p className="text-base text-parchment/80">
            Full results wall coming. Applications open for APEX Cohort 1 — 2
            spots left.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton href="/start" variant="primary">
              Start Free
            </CTAButton>
            <CTAButton href="/apex" variant="secondary">
              Apply for APEX
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
