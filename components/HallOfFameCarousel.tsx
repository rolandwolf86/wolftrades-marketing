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
    el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  // Track active card by scroll position so dots stay in sync with manual swipe.
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const cards = el.querySelectorAll<HTMLElement>("[data-hof-card]");
      if (cards.length === 0) return;
      const cardWidth = cards[0].offsetWidth + 16;
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(idx, 0), members.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
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
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-parchment/20 bg-black/80 transition-colors hover:border-bull/60 md:flex"
          aria-label="Scroll to previous"
        >
          <span className="text-lg text-parchment">←</span>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {members.map((member, index) => (
            <article
              key={member.name}
              data-hof-card
              className="relative flex-none w-[85vw] aspect-[3/4] overflow-hidden border border-parchment/10 bg-black2 md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
              style={{ scrollSnapAlign: "start" }}
            >
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={`${member.name} — ${member.label}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 85vw"
                  className="object-cover object-top"
                  loading={index < 3 ? "eager" : "lazy"}
                />
              ) : (
                <InitialsPanel initials={member.initials} />
              )}

              {/* Bottom darken gradient — keeps overlay text legible */}
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
                <p className="font-display text-3xl leading-none text-gold tabular-nums md:text-4xl">
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
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByCard(1)}
          className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-parchment/20 bg-black/80 transition-colors hover:border-bull/60 md:flex"
          aria-label="Scroll to next"
        >
          <span className="text-lg text-parchment">→</span>
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
