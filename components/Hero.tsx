import type { ReactNode } from "react";

export interface HeroProps {
  eyebrow?: string;
  headline?: ReactNode;
  subhead?: ReactNode;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
}

interface Ticker {
  symbol: string;
  change: string;
  positive: boolean;
}

const TICKERS: ReadonlyArray<Ticker> = [
  { symbol: "NVDA", change: "+5.14%", positive: true },
  { symbol: "TSLA", change: "-1.24%", positive: false },
  { symbol: "AAPL", change: "+2.41%", positive: true },
  { symbol: "GME", change: "+12.3%", positive: true },
  { symbol: "META", change: "+3.82%", positive: true },
  { symbol: "AMD", change: "+4.21%", positive: true },
  { symbol: "SPY", change: "+0.8%", positive: true },
  { symbol: "QQQ", change: "+1.4%", positive: true },
  { symbol: "MSFT", change: "+2.1%", positive: true },
  { symbol: "AMZN", change: "+1.9%", positive: true },
];

function TickerLane() {
  // Render the same set twice. With translateX(-50%) keyframe over the
  // doubled strip, the second copy lands exactly where the first started —
  // seamless loop, no JS, no clones-on-resize.
  return (
    <ul
      aria-hidden="true"
      className="flex shrink-0 items-center gap-0 whitespace-nowrap"
    >
      {TICKERS.map((ticker, i) => (
        <li
          key={`${ticker.symbol}-${i}`}
          className="flex items-center font-display font-bold tracking-[0.1em]"
          style={{ fontSize: "0.7rem" }}
        >
          <span className="text-parchment/80">{ticker.symbol}</span>
          <span
            className="ml-2"
            style={{ color: ticker.positive ? "#16A34A" : "#C1121F" }}
          >
            {ticker.change}
          </span>
          <span
            aria-hidden
            className="mx-4 text-parchment/30"
            style={{ fontSize: "0.7rem" }}
          >
            ·
          </span>
        </li>
      ))}
    </ul>
  );
}

export function Hero({
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Gold pulse — sits behind everything, faint, slow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[60%] z-0 h-[400px] w-[800px] max-w-none -translate-x-1/2 -translate-y-1/2 animate-gold-pulse motion-reduce:animate-none"
        style={{
          background:
            "radial-gradient(circle, #C9A84C 0%, transparent 60%)",
        }}
      />

      <div className="relative z-[2] mx-auto w-full max-w-7xl px-6 py-24 md:py-32">
        {eyebrow ? (
          <p className="font-display text-sm uppercase tracking-[0.2em] text-gold">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 font-display text-5xl leading-none text-parchment md:text-7xl">
          {headline}
        </h1>
        {subhead ? (
          <p className="mt-6 max-w-2xl text-lg text-gray">{subhead}</p>
        ) : null}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {primaryCta}
            {secondaryCta}
          </div>
        )}
      </div>

      {/* Ticker tape — bottom strip, behind content, infinite scroll */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-8 overflow-hidden"
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        <div className="flex h-full w-max animate-ticker items-center motion-reduce:animate-none">
          <TickerLane />
          <TickerLane />
        </div>
      </div>
    </section>
  );
}
