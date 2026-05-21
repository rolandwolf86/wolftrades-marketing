"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  HALL_OF_FAME,
  type HallOfFameMember,
} from "@/lib/hall-of-fame";

interface Props {
  members?: ReadonlyArray<HallOfFameMember>;
  eyebrow?: string;
  headline?: string;
}

export function HallOfFameCarousel({
  members = HALL_OF_FAME,
  eyebrow,
  headline,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollByCard = (dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-hof-card]");
    if (!card) return;
    const gap = 16;
    el.scrollBy({
      left: dir * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelectorAll<HTMLElement>("[data-hof-card]")[index];
    if (!card) return;
    // Center the target card in the viewport.
    const target = card.offsetLeft - (el.clientWidth - card.offsetWidth) / 2;
    el.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  };

  // Track active card by which one is closest to the container's center.
  // This drives the stack/recess effect on neighbors.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const recompute = () => {
      const cards = el.querySelectorAll<HTMLElement>("[data-hof-card]");
      if (cards.length === 0) return;
      const center = el.scrollLeft + el.clientWidth / 2;
      let bestIdx = 0;
      let bestDist = Infinity;
      cards.forEach((card, i) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(cardCenter - center);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      });
      setActiveIndex(bestIdx);
    };
    recompute();
    el.addEventListener("scroll", recompute, { passive: true });
    window.addEventListener("resize", recompute);
    return () => {
      el.removeEventListener("scroll", recompute);
      window.removeEventListener("resize", recompute);
    };
  }, [members.length]);

  return (
    <section
      role="region"
      aria-label="Wolf Hall of Fame"
      className="w-full"
    >
      {(eyebrow || headline) && (
        <div className="mb-10">
          {eyebrow && (
            <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
              {eyebrow}
            </p>
          )}
          {headline && (
            <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
              {headline}
            </h2>
          )}
        </div>
      )}

      <div className="relative">
        {/* Prev arrow — bull-green, high contrast against any photo */}
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          className="absolute left-2 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center border-2 border-bull bg-black/85 text-2xl font-bold text-bull shadow-lg transition-all hover:bg-bull hover:text-black md:flex"
          aria-label="Scroll to previous"
        >
          ←
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {members.map((member, index) => {
            const distance = Math.abs(index - activeIndex);
            // Stacked recess effect — neighbors fade and shrink so the
            // active card visually pops, signaling more cards on either side.
            const opacity =
              distance === 0 ? 1 : distance === 1 ? 0.55 : distance === 2 ? 0.35 : 0.2;
            const scale =
              distance === 0 ? 1 : distance === 1 ? 0.92 : distance === 2 ? 0.86 : 0.82;

            return (
              <article
                key={member.name}
                data-hof-card
                className="relative flex-none w-[85vw] aspect-[3/4] overflow-hidden border border-parchment/10 bg-black2 md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
                style={{
                  scrollSnapAlign: "center",
                  opacity,
                  transform: `scale(${scale})`,
                  transition:
                    "opacity 400ms cubic-bezier(0.22, 0.61, 0.36, 1), transform 400ms cubic-bezier(0.22, 0.61, 0.36, 1)",
                }}
              >
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={`${member.name} — ${member.label}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 85vw"
                    className="object-cover"
                    style={{
                      objectPosition: member.objectPosition ?? "top",
                      transform: member.mirrored ? "scaleX(-1)" : undefined,
                    }}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                ) : (
                  <InitialsPanel initials={member.initials} />
                )}

                {/* Bottom darken gradient */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 35%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.95) 100%)",
                  }}
                />

                {/* Content overlay */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5 md:p-6">
                  <p className="font-display text-xs uppercase tracking-widest text-bull">
                    {member.label}
                  </p>
                  <p className="font-display text-3xl leading-none text-parchment tabular-nums md:text-4xl">
                    {member.stat}
                  </p>
                  <p className="text-xs text-parchment/60">{member.substat}</p>
                  <h3 className="mt-3 font-display text-xl uppercase leading-tight text-parchment">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm leading-snug text-parchment/75">
                    {member.story}
                  </p>
                  <span className="mt-3 inline-flex w-fit items-center border border-parchment/15 bg-black/40 px-3 py-1 font-display text-[10px] uppercase tracking-[0.18em] text-parchment/60">
                    {member.era}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Next arrow */}
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          className="absolute right-2 top-1/2 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center border-2 border-bull bg-black/85 text-2xl font-bold text-bull shadow-lg transition-all hover:bg-bull hover:text-black md:flex"
          aria-label="Scroll to next"
        >
          →
        </button>
      </div>

      {/* Dot indicators */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {members.map((member, i) => (
          <button
            key={member.name}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Show ${member.name}`}
            aria-current={i === activeIndex ? "true" : undefined}
            className={`h-1.5 transition-all duration-300 ${
              i === activeIndex
                ? "w-8 bg-bull"
                : "w-4 bg-parchment/30 hover:bg-parchment/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function InitialsPanel({ initials }: { initials: string }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 flex items-center justify-center bg-black2"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(22,163,74,0.18) 0%, rgba(17,17,17,1) 70%)",
      }}
    >
      <span className="font-display text-7xl font-black text-bull md:text-8xl">
        {initials}
      </span>
    </div>
  );
}
