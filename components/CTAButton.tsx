import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-gold text-black hover:opacity-90",
  secondary:
    "bg-transparent text-parchment border border-parchment/40 hover:border-gold hover:text-gold",
  ghost: "bg-transparent text-parchment hover:text-gold",
};

const baseClasses =
  "inline-flex items-center justify-center font-display text-sm uppercase tracking-wider px-6 py-3 transition-colors";

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
