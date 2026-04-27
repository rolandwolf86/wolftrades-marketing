import type { Metadata } from "next";
import { TestimonialQuote } from "@/components/TestimonialQuote";

export const metadata: Metadata = {
  title: "Start Free",
  description:
    "Start trading with the Pack. Access the platform free — no credit card. See the daily watchlist, community, and journal.",
};

const VALUE_BULLETS: ReadonlyArray<string> = [
  "Access the platform free — no credit card",
  "See the daily watchlist, community, and journal",
  "Upgrade to Wolfpack when you’re ready",
];

// TODO: swap to GHL / platform signup URL when Roland provides it.
const FREE_SIGNUP_URL = "https://app.wolftrades.com/login";

export default function StartPage() {
  return (
    <section className="bg-black">
      <div className="mx-auto w-full max-w-3xl px-6 py-24 md:py-32">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
          Free. No card required.
        </p>
        <h1 className="mt-4 font-display text-5xl leading-none text-parchment md:text-7xl">
          Start trading with the Pack.
        </h1>

        <ul className="mt-10 space-y-3 text-lg text-parchment/90">
          {VALUE_BULLETS.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span aria-hidden className="text-gold">
                ✓
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <a
          href={FREE_SIGNUP_URL}
          className="mt-10 inline-flex w-full items-center justify-center bg-gold px-8 py-5 font-display text-base uppercase tracking-wider text-black transition-opacity hover:opacity-90 md:w-auto md:text-lg"
        >
          Start Free Now
        </a>

        <p className="mt-4 text-sm text-gray">
          No card. No commitment. Cancel nothing — it’s free.
        </p>

        <div className="mt-16">
          <TestimonialQuote
            quote="Roland's really taught me on how to limit my exposure to the downside while making exponential gains to the upside."
            attribution="Michael Huddie"
            role="Clover Trading"
          />
        </div>
      </div>
    </section>
  );
}
