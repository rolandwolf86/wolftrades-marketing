import type { ReactNode } from "react";

export interface TestimonialQuoteProps {
  quote: ReactNode;
  attribution?: string;
  role?: string;
}

export function TestimonialQuote({
  quote,
  attribution,
  role,
}: TestimonialQuoteProps) {
  return (
    <figure className="border-l-2 border-gold bg-black2 p-8">
      <blockquote className="font-display text-2xl leading-snug text-parchment">
        “{quote}”
      </blockquote>
      {(attribution || role) && (
        <figcaption className="mt-6 text-sm text-gray">
          {attribution ? (
            <span className="text-parchment">{attribution}</span>
          ) : null}
          {role ? <span> · {role}</span> : null}
        </figcaption>
      )}
    </figure>
  );
}
