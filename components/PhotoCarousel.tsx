"use client";

import Image from "next/image";
import { useRef } from "react";

interface Photo {
  src: string;
  alt: string;
  year?: string;
  caption?: string;
  label?: string;
}

interface Props {
  photos: Photo[];
  variant?: "timeline" | "proof";
  eyebrow?: string;
  headline?: string;
}

export function PhotoCarousel({
  photos,
  variant = "timeline",
  eyebrow,
  headline,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const el = scrollRef.current;
    const max = el.scrollWidth - el.clientWidth;
    if (dir === "right" && el.scrollLeft >= max - 10) return;
    if (dir === "left" && el.scrollLeft <= 10) return;
    el.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  const cardW = variant === "proof" ? "w-[280px]" : "w-[320px]";

  return (
    <div className="w-full">
      {(eyebrow || headline) && (
        <div className="mb-8 px-6">
          {eyebrow && (
            <p className="mb-3 font-display text-xs uppercase tracking-[0.25em] text-gold">
              {eyebrow}
            </p>
          )}
          {headline && (
            <h2 className="font-display text-4xl leading-none text-parchment md:text-5xl">
              {headline}
            </h2>
          )}
        </div>
      )}

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center border border-parchment/20 bg-black/80 transition-colors hover:border-gold/60 md:flex"
          aria-label="Scroll left"
        >
          <span className="text-lg text-parchment">←</span>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`${cardW} flex-none`}
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-parchment/10 transition-colors hover:border-gold/40">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes={variant === "proof" ? "280px" : "320px"}
                />
              </div>
              {(photo.caption || photo.label) && (
                <div className="mt-2 px-1">
                  {photo.label && (
                    <p className="font-display text-xs uppercase tracking-wider text-gold">
                      {photo.label}
                    </p>
                  )}
                  {photo.caption && (
                    <p className="mt-0.5 text-sm text-gray">
                      {photo.caption}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center border border-parchment/20 bg-black/80 transition-colors hover:border-gold/60 md:flex"
          aria-label="Scroll right"
        >
          <span className="text-lg text-parchment">→</span>
        </button>
      </div>
    </div>
  );
}
