"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Tab {
  icon: string;
  label: string;
  headline: string;
  body: string;
  image: string;
  alt: string;
}

const TABS: ReadonlyArray<Tab> = [
  {
    icon: "📊",
    label: "Live Trading",
    headline: "Watch Roland trade in real time.",
    body: "Every market day. The setups he's watching, the entries, the exits, the decisions — as they happen. Not replays. Not summaries. Live.",
    image: "/screenshots/chat.png",
    alt: "Wolf Trades live trading room",
  },
  {
    icon: "📋",
    label: "Daily Watchlist",
    headline: "The research report. Every morning.",
    body: "Roland's daily watchlist is not a ticker list. It's a full research report — the names he's watching, the plan behind each one, the levels, the catalysts, the market context.",
    image: "/screenshots/community.png",
    alt: "Wolf Trades daily watchlist",
  },
  {
    icon: "🧠",
    label: "Trader Therapy",
    headline: "Real feedback from Roland. Live.",
    body: "Ask questions. Talk through your trades. Get direct correction in front of the group. This is where habits change.",
    image: "/screenshots/community.png",
    alt: "Wolf Trades community feedback",
  },
  {
    icon: "📹",
    label: "Replay Library",
    headline: "Miss a session? Nothing is lost.",
    body: "Every session recorded and organized. Study the trades, the lessons, the setups — on your own time, at your own pace.",
    image: "/screenshots/chat.png",
    alt: "Wolf Trades replay library",
  },
  {
    icon: "📖",
    label: "Playbook",
    headline: "Ten years of trading. Organized.",
    body: "Roland's complete playbook — the setups, the rules, the patterns, the mistakes, the lessons. Not theory. What actually works.",
    image: "/screenshots/community.png",
    alt: "Wolf Trades playbook",
  },
  {
    icon: "📓",
    label: "Journal",
    headline: "Track every trade. Measure everything.",
    body: "Stop guessing what's working. Journal your trades, review your behavior, measure your execution. The data tells you the truth.",
    image: "/screenshots/chat.png",
    alt: "Wolf Trades trade journal",
  },
  {
    icon: "🔍",
    label: "Setup Prep",
    headline: "Know the plan before the bell.",
    body: "Build your prep around watchlists, levels, catalysts, and the market context Roland is focused on that day.",
    image: "/screenshots/community.png",
    alt: "Wolf Trades setup prep",
  },
  {
    icon: "🤖",
    label: "Review",
    headline: "Turn sessions into notes.",
    body: "Use the room, replay library, journal, and playbook to review what happened and what needs to improve.",
    image: "/screenshots/community.png",
    alt: "Wolf Trades review workflow",
  },
];

const ADVANCE_MS = 4000;

export function FeatureTabs() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % TABS.length);
    }, ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const current = TABS[active];

  return (
    <div
      className="mx-auto w-full max-w-7xl px-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Tab nav — horizontal, scrollable on mobile */}
      <div
        className="flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
      >
        {TABS.map((tab, i) => {
          const isActive = i === active;
          return (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`flex shrink-0 items-center gap-2 whitespace-nowrap px-4 py-2 font-display text-xs uppercase tracking-wider transition-colors ${
                isActive
                  ? "bg-gold text-black"
                  : "border border-parchment/20 bg-transparent text-gray hover:border-gold/60 hover:text-parchment"
              }`}
            >
              <span aria-hidden>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <div className="mt-8 grid gap-8 md:grid-cols-[40fr_60fr] md:items-center">
        <div>
          <h3 className="font-display text-3xl leading-tight text-parchment">
            {current.headline}
          </h3>
          <p className="mt-4 text-base leading-7 text-parchment/80">
            {current.body}
          </p>
          <Link
            href="/platform"
            className="mt-6 inline-block font-display text-xs uppercase tracking-wider text-gold hover:underline"
          >
            Learn more →
          </Link>
        </div>
        <div className="relative aspect-video overflow-hidden border border-parchment/10 transition-shadow duration-300 hover:shadow-[0_0_40px_-12px_rgba(201,168,76,0.4)]">
          <Image
            src={current.image}
            alt={current.alt}
            fill
            sizes="(min-width: 768px) 60vw, 100vw"
            className="object-cover object-left-top"
          />
        </div>
      </div>

      {/* Dots */}
      <div className="mt-8 flex justify-center gap-2">
        {TABS.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${tab.label}`}
            aria-current={i === active ? "true" : undefined}
            className={`h-1.5 transition-all duration-300 ${
              i === active
                ? "w-8 bg-gold"
                : "w-4 bg-parchment/30 hover:bg-parchment/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
