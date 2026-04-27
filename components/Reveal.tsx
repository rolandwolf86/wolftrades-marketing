"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in ms — used for fanned reveals across sibling items. */
  delayMs?: number;
  /** IntersectionObserver threshold (0–1). Default 0.15. */
  threshold?: number;
  /** Optional className passthrough on the wrapper. */
  className?: string;
  /** Render as `<div>` (default) or another inline-friendly element. */
  as?: "div" | "li" | "section" | "article";
}

export function Reveal({
  children,
  delayMs = 0,
  threshold = 0.15,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced-motion: just reveal immediately.
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 500ms ease-out ${delayMs}ms, transform 500ms ease-out ${delayMs}ms`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
