"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Slide {
  src: string;
  alt: string;
  label: string;
}

const SLIDES: ReadonlyArray<Slide> = [
  {
    src: "/screenshots/chat.png",
    alt: "Wolf Trades chat rooms — general channel with role badges and member list",
    label: "Chat Rooms",
  },
  {
    src: "/screenshots/wolf-ai.png",
    alt: "Wolf AI Coach — radar visualization, five modes, market pulse panel",
    label: "Wolf AI",
  },
  {
    src: "/screenshots/scanner.png",
    alt: "Wolf Scanner — real-time table of momentum tickers",
    label: "Wolf Scanner",
  },
  {
    src: "/screenshots/community.png",
    alt: "Community feed — trader posts, embedded videos, live discussion",
    label: "Community",
  },
  {
    src: "/screenshots/edge-lab.png",
    alt: "Edge Lab — equity curve, win rate, recent trades and P&L breakdown",
    label: "Edge Lab",
  },
];

const ADVANCE_MS = 5000;

export function HomeHeroShowcase() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, ADVANCE_MS);
    return () => window.clearInterval(id);
  }, []);

  const active = SLIDES[current];

  return (
    <div className="absolute inset-0">
      {/* Stacked images — crossfade between by toggling opacity */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.src}
          aria-hidden={index !== current}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover object-left-top"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Left fade — bleeds the panel into the dark left column */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, #0a0a0a 0%, transparent 20%)",
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 80%, #0a0a0a 100%)",
        }}
      />

      {/* Caption badge — top-left, "live" dot + current screenshot label */}
      <div className="absolute left-6 top-6 z-[2] inline-flex items-center gap-2 border border-parchment/10 bg-black/80 px-3 py-1.5 backdrop-blur-sm">
        <span
          aria-hidden
          className="block h-1.5 w-1.5 rounded-full bg-bull animate-pulse-bull motion-reduce:animate-none"
        />
        <span
          className="font-display text-xs uppercase tracking-[0.15em] text-parchment"
          aria-live="polite"
        >
          {active.label}
        </span>
      </div>

      {/* Member count badge — bottom-right */}
      <div className="absolute bottom-6 right-6 z-[2] inline-flex items-center border border-gold/40 bg-black/80 px-3 py-1.5 backdrop-blur-sm">
        <span className="font-display text-xs uppercase tracking-[0.15em] text-gold">
          2,500+ Traders Live
        </span>
      </div>

      {/* Dot indicators — bottom-left, clickable */}
      <div className="absolute bottom-6 left-6 z-[2] flex items-center gap-2">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Show ${slide.label}`}
            aria-current={index === current ? "true" : undefined}
            className={`h-1.5 transition-all duration-300 ease-out ${
              index === current
                ? "w-8 bg-gold"
                : "w-4 bg-parchment/30 hover:bg-parchment/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
