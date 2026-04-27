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

/**
 * TickerTape — pure-CSS scrolling stock ticker. Doubled lanes seamlessly
 * loop via animate-ticker (translateX 0 → -50%). Caller controls the outer
 * dimensions/background via wrapper.
 */
export function TickerTape({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden ${className}`.trim()}>
      <div className="flex h-full w-max animate-ticker items-center motion-reduce:animate-none">
        <TickerLane />
        <TickerLane />
      </div>
    </div>
  );
}
