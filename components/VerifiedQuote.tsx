export interface VerifiedQuoteProps {
  quote: string;
  attribution: string;
  context?: string;
  sourceLabel?: string;
  sourceHref?: string;
}

export function VerifiedQuote({
  quote,
  attribution,
  context,
  sourceLabel,
  sourceHref,
}: VerifiedQuoteProps) {
  return (
    <figure className="border-l-2 border-bull bg-black2 p-8 md:p-10">
      <blockquote className="font-display text-3xl italic leading-tight text-parchment md:text-4xl">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-gray">
        <span className="text-parchment">— {attribution}</span>
        {context ? <span aria-hidden>·</span> : null}
        {context ? <span>{context}</span> : null}
        {sourceHref ? (
          <>
            <span aria-hidden>·</span>
            <a
              href={sourceHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-parchment underline decoration-bull/60 underline-offset-4 transition hover:decoration-bull"
            >
              {sourceLabel ?? "Source"} →
            </a>
          </>
        ) : null}
      </figcaption>
    </figure>
  );
}
