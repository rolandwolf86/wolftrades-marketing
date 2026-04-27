import type { ReactNode } from "react";

export type Tier = "wolfpack" | "pro" | "apex";

export interface TierCardProps {
  tier: Tier;
  name: string;
  price?: string;
  cadence?: string;
  description?: ReactNode;
  features?: string[];
  cta?: ReactNode;
  featured?: boolean;
}

const tierAccent: Record<Tier, string> = {
  wolfpack: "border-white/10",
  pro: "border-gold",
  apex: "border-apex-green",
};

export function TierCard({
  tier,
  name,
  price,
  cadence,
  description,
  features = [],
  cta,
  featured = false,
}: TierCardProps) {
  return (
    <article
      className={`flex flex-col border bg-black2 p-8 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(201,168,76,0.06)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
        tierAccent[tier]
      } ${featured ? "shadow-[0_0_0_1px_rgba(201,168,76,0.4)]" : ""}`}
    >
      <header>
        <h3 className="font-display text-2xl text-parchment">{name}</h3>
        {price ? (
          <div className="mt-3 flex items-baseline gap-2">
            <span className="font-display text-4xl text-gold">{price}</span>
            {cadence ? (
              <span className="text-sm text-gray">/{cadence}</span>
            ) : null}
          </div>
        ) : null}
        {description ? (
          <p className="mt-3 text-sm text-gray">{description}</p>
        ) : null}
      </header>

      {features.length > 0 ? (
        <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
          {features.map((feature) => (
            <li key={feature} className="flex gap-2 text-parchment/90">
              <span aria-hidden className="text-gold">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {cta ? <div className="mt-8">{cta}</div> : null}
    </article>
  );
}
