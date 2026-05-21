import type { ReactNode } from "react";

export interface ProofBadgeProps {
  value: string;
  label: string;
  href?: string;
  size?: "sm" | "md";
  tone?: "neutral" | "bull";
}

const VALUE_SIZE = {
  sm: "text-2xl",
  md: "text-4xl md:text-5xl",
} as const;

const VALUE_TONE = {
  neutral: "text-parchment",
  bull: "text-bull",
} as const;

export function ProofBadge({
  value,
  label,
  href,
  size = "md",
  tone = "neutral",
}: ProofBadgeProps) {
  const body: ReactNode = (
    <>
      <div
        className={`font-display font-black tracking-tight tabular-nums ${VALUE_SIZE[size]} ${VALUE_TONE[tone]}`}
      >
        {value}
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-gray">
        {label}
      </div>
    </>
  );

  const containerBase =
    "inline-flex flex-col items-start border border-white/5 bg-black2 px-5 py-4";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={`${containerBase} transition hover:border-parchment/30 hover:bg-black2/80`}
      >
        {body}
      </a>
    );
  }

  return <div className={containerBase}>{body}</div>;
}
