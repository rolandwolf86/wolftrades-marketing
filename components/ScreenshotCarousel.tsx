"use client";

import Image from "next/image";
import { useState } from "react";

export interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface ScreenshotCarouselProps {
  screenshots?: Screenshot[];
}

export function ScreenshotCarousel({
  screenshots = [],
}: ScreenshotCarouselProps) {
  const [index, setIndex] = useState(0);

  if (screenshots.length === 0) {
    return (
      <div className="aspect-video w-full border border-white/5 bg-black2" />
    );
  }

  const active = screenshots[index];
  const total = screenshots.length;

  const go = (dir: -1 | 1) => {
    setIndex((current) => (current + dir + total) % total);
  };

  return (
    <figure className="w-full">
      <div className="relative aspect-video w-full overflow-hidden border border-white/5 bg-black2">
        <Image
          src={active.src}
          alt={active.alt}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
      </div>
      {active.caption ? (
        <figcaption className="mt-3 text-xs uppercase tracking-wider text-gray">
          {active.caption}
        </figcaption>
      ) : null}
      {total > 1 ? (
        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            className="font-display text-xs uppercase tracking-wider text-parchment/70 hover:text-bull"
            aria-label="Previous screenshot"
          >
            ← Prev
          </button>
          <span className="text-xs text-gray">
            {index + 1} / {total}
          </span>
          <button
            type="button"
            onClick={() => go(1)}
            className="font-display text-xs uppercase tracking-wider text-parchment/70 hover:text-bull"
            aria-label="Next screenshot"
          >
            Next →
          </button>
        </div>
      ) : null}
    </figure>
  );
}
