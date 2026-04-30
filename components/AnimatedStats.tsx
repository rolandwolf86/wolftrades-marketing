"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface Stat {
  value: string;
  prefix?: string;
  suffix?: string;
  label: string;
}

interface Props {
  stats: ReadonlyArray<Stat>;
}

interface ParsedStat {
  prefix: string;
  matchedText: string;
  trailing: string;
  target: number;
  hasComma: boolean;
}

function parseStat(value: string): ParsedStat {
  const match = value.match(/[\d,]+/);
  if (!match || match.index === undefined) {
    return {
      prefix: value,
      matchedText: "",
      trailing: "",
      target: 0,
      hasComma: false,
    };
  }
  const matchedText = match[0];
  const target = parseInt(matchedText.replace(/,/g, ""), 10) || 0;
  return {
    prefix: value.slice(0, match.index),
    matchedText,
    trailing: value.slice(match.index + matchedText.length),
    target,
    hasComma: matchedText.includes(","),
  };
}

function format(parsed: ParsedStat, current: number): string {
  // Auto-add thousands separators for values >= 1000 even if input was bare digits.
  const useCommas = parsed.hasComma || parsed.target >= 1000;
  const numStr = useCommas ? current.toLocaleString() : String(current);
  return `${parsed.prefix}${numStr}${parsed.trailing}`;
}

export function AnimatedStats({ stats }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReveal(true);
      return;
    }
    const node = containerRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setReveal(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-y-8 px-6 sm:grid-cols-3 md:grid-cols-5 md:gap-y-0 md:divide-x md:divide-parchment/10"
    >
      {stats.map((stat, idx) => (
        <StatCell key={stat.label} stat={stat} reveal={reveal} delayMs={idx * 120} />
      ))}
    </div>
  );
}

function StatCell({
  stat,
  reveal,
  delayMs,
}: {
  stat: Stat;
  reveal: boolean;
  delayMs: number;
}) {
  const parsed = useMemo(() => parseStat(stat.value), [stat.value]);
  const [display, setDisplay] = useState<string>(
    parsed.target === 0 ? format(parsed, 0) : format(parsed, 0),
  );

  useEffect(() => {
    if (!reveal) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(format(parsed, parsed.target));
      return;
    }
    const startDelay = window.setTimeout(() => {
      const start = performance.now();
      const duration = 1200;
      let raf = 0;
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        const current = Math.round(parsed.target * eased);
        setDisplay(format(parsed, current));
        if (t < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
      return () => cancelAnimationFrame(raf);
    }, delayMs);
    return () => window.clearTimeout(startDelay);
  }, [reveal, parsed, delayMs]);

  return (
    <div className="px-2 text-center md:px-4">
      <p className="font-display text-4xl font-black text-gold tabular-nums md:text-5xl">
        {stat.prefix ?? ""}
        {display}
        {stat.suffix ?? ""}
      </p>
      <p className="mt-2 text-xs uppercase tracking-wider text-gray">
        {stat.label}
      </p>
    </div>
  );
}
