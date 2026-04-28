const STRIP_ITEMS: ReadonlyArray<string> = [
  "Verified 7-figure Nasdaq trader",
  "Teaching since 2018",
  "Daily live sessions",
  "Sunday weekly watchlist",
  "Friday Trader Therapy",
  "Journal and Playbook Builder",
  "2,500+ traders inside",
];

function TickerLane() {
  return (
    <ul
      aria-hidden="true"
      className="flex shrink-0 items-center gap-0 whitespace-nowrap"
    >
      {STRIP_ITEMS.map((item, i) => (
        <li
          key={`${item}-${i}`}
          className="flex items-center font-display font-bold tracking-[0.1em]"
          style={{ fontSize: "0.7rem" }}
        >
          <span className="text-parchment/80">{item}</span>
          <span
            aria-hidden
            className="mx-4 text-parchment/30"
            style={{ fontSize: "0.7rem" }}
          >
            /
          </span>
        </li>
      ))}
    </ul>
  );
}

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
