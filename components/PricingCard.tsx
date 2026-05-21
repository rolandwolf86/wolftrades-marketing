import type { ReactNode } from "react";
import { CTAButton } from "@/components/CTAButton";
import { PromoCodeBadge } from "@/components/PromoCodeBadge";

export interface PricingCardProps {
  /** Tier display name, e.g. "Wolfpack" or "Wolfpack Pro" */
  name: string;
  /** Price token, e.g. "$147" | "$0" | "Application Only" */
  price?: string;
  /** Cadence suffix; omit for application-only tiers */
  cadence?: "mo" | "yr";
  /** 1-2 line description shown under the price */
  description?: ReactNode;
  /** Bullet list of included features */
  features: ReadonlyArray<string>;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant?: "primary" | "secondary";
  /** Ribbon label, e.g. "Most Popular" | "Best Value" */
  badge?: string;
  /** When set, renders the welcome-offer PromoCodeBadge between price and features */
  promo?: {
    code: string;
    firstPeriodPrice: string;
  };
  /** Bull-green outline ring + thicker border */
  featured?: boolean;
  /** Switch eyebrow + bullet glyphs to gold (APEX-tier only) */
  apexAccent?: boolean;
  /** Small line above the CTA, e.g. "No public price. Phone close only." */
  footnote?: string;
  /** "default" renders the price at text-5xl; "compact" at text-3xl (for "Application Only" copy) */
  priceVariant?: "default" | "compact";
  /** Pass-through className merged into the card's outer article element */
  className?: string;
}

export function PricingCard({
  name,
  price,
  cadence,
  description,
  features,
  ctaLabel,
  ctaHref,
  ctaVariant = "secondary",
  badge,
  promo,
  featured = false,
  apexAccent = false,
  footnote,
  priceVariant = "default",
  className = "",
}: PricingCardProps) {
  const accentColor = apexAccent ? "text-gold" : "text-bull";
  const containerClass = featured
    ? "border-bull bg-black shadow-[0_0_0_1px_rgba(22,163,74,0.4)]"
    : "border-white/10 bg-black";
  const priceClass =
    priceVariant === "compact"
      ? "mt-4 font-display text-3xl leading-tight text-parchment"
      : "mt-4 font-display text-5xl leading-tight text-parchment";

  return (
    <article
      className={`relative flex flex-col border p-6 md:p-8 ${containerClass} ${className}`.trim()}
    >
      {badge ? (
        <span className="absolute -top-3 left-6 bg-bull px-3 py-1 font-display text-xs uppercase tracking-wider text-black">
          {badge}
        </span>
      ) : null}

      <span
        className={`font-display text-xs uppercase tracking-[0.2em] ${accentColor}`}
      >
        {name}
      </span>

      {price ? (
        <p className={priceClass}>
          {price}
          {cadence ? (
            <span className="ml-2 text-base font-normal text-gray">
              /{cadence}
            </span>
          ) : null}
        </p>
      ) : null}

      {description ? (
        <p className="mt-4 text-base leading-7 text-parchment/76">
          {description}
        </p>
      ) : null}

      {promo ? (
        <div className="mt-5">
          <PromoCodeBadge
            code={promo.code}
            firstPeriodPrice={promo.firstPeriodPrice}
            cadence={cadence === "yr" ? "yr" : "mo"}
          />
        </div>
      ) : null}

      {features.length > 0 ? (
        <ul className="mt-6 flex-1 space-y-2 text-sm text-parchment/80">
          {features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span aria-hidden className={accentColor}>
                •
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {footnote ? (
        <p className="mt-4 text-xs uppercase tracking-wider text-gray">
          {footnote}
        </p>
      ) : null}

      <div className="mt-8">
        <CTAButton href={ctaHref} variant={ctaVariant}>
          {ctaLabel}
        </CTAButton>
      </div>
    </article>
  );
}
