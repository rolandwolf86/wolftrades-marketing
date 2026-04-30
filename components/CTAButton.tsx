import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-bull text-black hover:bg-[#1fc35a] active:scale-[0.98] motion-reduce:active:scale-100",
  secondary:
    "bg-transparent text-parchment border border-parchment/40 hover:border-bull hover:text-bull active:scale-[0.98] motion-reduce:active:scale-100",
  ghost: "bg-transparent text-parchment hover:text-bull",
};

const baseClasses =
  "inline-flex min-h-[52px] items-center justify-center font-display text-sm uppercase tracking-wider px-6 py-3 transition-all duration-150 ease-out motion-reduce:transition-colors";

export interface CTAButtonProps {
  href?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export function CTAButton({
  href,
  variant = "primary",
  className = "",
  children,
  onClick,
  type = "button",
  target,
  rel,
  "aria-label": ariaLabel,
}: CTAButtonProps) {
  const merged = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        className={merged}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={merged}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
