import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "Every tool a professional trader needs. Built by one. Full platform breakdown coming.",
};

export default function PlatformPage() {
  return (
    <>
      <Hero
        eyebrow="The Platform"
        headline="Every tool a professional trader needs. Built by one."
        subhead="Full platform breakdown coming. In the meantime, start free and see it for yourself."
        primaryCta={
          <CTAButton href="/start" variant="primary">
            Start Free
          </CTAButton>
        }
      />

      <section className="bg-black2 border-t border-white/5">
        <div className="mx-auto w-full max-w-5xl px-6 py-24">
          <p className="text-base text-parchment/80">
            More detail on each tool — Wolf Scanner, Wolf AI Coach, Edge Lab,
            Backtest Lab, Journal, Risk Calculator, Playbook Builder — is on
            its way. Until then, the fastest way to evaluate it is to see it.
          </p>
          <div className="mt-10">
            <CTAButton href="/start" variant="primary">
              Start Free
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
