import type { ReactNode } from "react";
import { TickerTape } from "./TickerTape";

export interface HeroProps {
  eyebrow?: string;
  headline?: ReactNode;
  subhead?: ReactNode;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
}

export function Hero({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Gold pulse — sits behind everything, faint, slow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[60%] z-0 h-[400px] w-[800px] max-w-none -translate-x-1/2 -translate-y-1/2 animate-gold-pulse motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(circle, #C9A84C 0%, transparent 60%)",
        }}
      />

      <div className="relative z-[2] mx-auto w-full max-w-7xl px-6 py-24 md:py-32">
        {eyebrow ? (
          <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 font-display text-5xl leading-none text-parchment md:text-7xl">
          {headline}
        </h1>
        {subhead ? (
          <p className="mt-6 max-w-2xl text-lg text-gray">{subhead}</p>
        ) : null}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {primaryCta}
            {secondaryCta}
          </div>
        )}
      </div>

      {/* Ticker tape — bottom strip, behind content, infinite scroll */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-8"
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        <TickerTape className="h-full" />
      </div>
    </section>
  );
}
