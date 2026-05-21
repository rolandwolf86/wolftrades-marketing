"use client";

import { useState } from "react";

export interface PromoCodeBadgeProps {
  /** The promo code string, e.g. "LAUNCH97" */
  code: string;
  /** First-period price after discount, e.g. "$97" */
  firstPeriodPrice: string;
  /** Whether the discount applies to the first month or first year */
  cadence?: "mo" | "yr";
  className?: string;
}

export function PromoCodeBadge({
  code,
  firstPeriodPrice,
  cadence = "mo",
  className = "",
}: PromoCodeBadgeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (typeof navigator === "undefined" || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard write can fail in non-secure contexts; the visible code is the fallback.
    }
  };

  const periodLabel = cadence === "yr" ? "first year" : "first month";

  return (
    <div
      className={`border-l-2 border-bull/60 bg-black2 p-4 ${className}`.trim()}
    >
      <p className="font-display text-[10px] uppercase tracking-[0.18em] text-parchment/70">
        <span aria-hidden className="mr-1.5">
          ✦
        </span>
        Welcome offer
      </p>
      <p className="mt-2 font-display text-xl uppercase leading-none text-parchment">
        {firstPeriodPrice} {periodLabel}
      </p>
      <p className="mt-3 flex flex-wrap items-center gap-2 text-sm text-parchment/80">
        <span>Use code</span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? `Copied ${code}` : `Copy code ${code} to clipboard`}
          className="inline-flex items-center gap-2 border border-bull/30 bg-bull/10 px-2 py-0.5 font-mono text-xs uppercase tracking-wider text-bull transition-colors hover:bg-bull/20 focus:bg-bull/20 focus:outline-none"
        >
          <span>{code}</span>
          <span
            aria-hidden
            className="border-l border-bull/30 pl-2 text-[10px] tracking-[0.15em] opacity-70"
          >
            {copied ? "Copied" : "Copy"}
          </span>
        </button>
      </p>
      <p className="mt-2 text-[11px] tracking-wide text-parchment/50">
        Apply at checkout
      </p>
    </div>
  );
}
