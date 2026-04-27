import type { ReactNode } from "react";

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
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32">
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
    </section>
  );
}
