import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { START_FREE_URL, WOLFPACK_MONTHLY_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "About Roland Wolf",
  description:
    "Why Wolf Trades exists. Roland's story — from professional soccer to a decade of Nasdaq momentum — and the anti-guru philosophy behind the platform.",
};

export default function AboutPage() {
  return (
    <>
      {/* SECTION 0 — BRAND HERO */}
      <div className="flex flex-col items-center py-16 bg-black">
        <Image
          src="/images/logos/wt-wolf-white-transparent.png"
          alt="Wolf Trades"
          width={120}
          height={120}
          className="w-24 h-24 mb-4 opacity-95"
          priority
        />
        <p className="font-display text-xs uppercase tracking-[.25em] text-bull">
          Wolf Trades
        </p>
        <p className="text-sm text-gray mt-1">
          Est. 2018 · 2,500+ Traders
        </p>
      </div>

      {/* SECTION 1 — HERO */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto w-full max-w-5xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
            About Roland Wolf
          </p>
          <h1 className="mt-4 font-display text-5xl leading-none text-parchment md:text-7xl">
            Why Wolf Trades exists.
          </h1>
        </div>
      </section>

      {/* SECTION 2 — ORIGIN */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-3xl">
          <p className="mb-6 font-display text-sm uppercase tracking-[0.25em] text-bull">
            Before the markets, there was the pitch.
          </p>
          <div className="space-y-5 text-lg leading-8 text-parchment/80">
            <p>
              Roland was a professional soccer player before trading ever
              entered the picture.
            </p>
            <p>
              When that chapter ended, he needed something new — something he
              could build, control, and grow.
            </p>
            <p>
              He found the markets. Not through a course. Not through a mentor.
              He built his understanding from scratch — studying charts,
              watching behavior, learning what actually moves price and what
              doesn&apos;t.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE DECADE */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-3xl">
          <p className="mb-6 font-display text-sm uppercase tracking-[0.25em] text-bull">
            Ten years. One focus.
          </p>
          <div className="space-y-5 text-lg leading-8 text-parchment/80">
            <p>
              For the past decade, Roland has focused on Nasdaq momentum. Not
              everything. Not every setup.
            </p>
            <p>
              One focus — long-side opportunities, and the patterns that
              create them.
            </p>
            <p>
              He built his process around finding entries where others
              weren&apos;t looking — not chasing obvious moves, but
              understanding structure.
            </p>
          </div>

          <blockquote className="my-8 border-l-4 border-gold py-2 pl-6">
            <p className="font-display text-2xl italic leading-tight text-parchment md:text-3xl">
              &ldquo;He was finding different points in the chart patterns to
              take his longs, and he was actually having good performance
              without a herd of sheep on his back.&rdquo;
            </p>
            <p className="mt-3 text-sm text-gray">
              — Tim Grittani · $15M+ verified trader · Trading Tickers 2 ·
              Unsolicited · Unpaid
            </p>
          </blockquote>

          <p className="text-lg leading-8 text-parchment/80">
            That matters. Because it means the edge was real — not dependent on
            followers pushing price.
          </p>
        </div>
      </section>

      {/* SECTION 4 — THE FAMILY */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-3xl">
          <p className="mb-6 font-display text-sm uppercase tracking-[0.25em] text-bull">
            The reason it matters.
          </p>
          <p className="text-lg leading-8 text-parchment/80">
            Roland is a husband and a father of four.
          </p>

          <div className="my-8 space-y-2">
            <p className="font-display text-3xl uppercase leading-none text-parchment md:text-4xl">
              Time.
            </p>
            <p className="font-display text-3xl uppercase leading-none text-parchment md:text-4xl">
              Freedom.
            </p>
            <p className="font-display text-3xl uppercase leading-none text-parchment md:text-4xl">
              Control.
            </p>
          </div>

          <div className="space-y-5 text-lg leading-8 text-parchment/80">
            <p>Trading gave him something most careers don&apos;t.</p>
            <p>
              That&apos;s a big part of why Wolf Trades exists. He wanted to
              build something that could give other traders that same
              opportunity — not just information, but a path.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — ANTI-GURU */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-3xl">
          <p className="mb-6 font-display text-sm uppercase tracking-[0.25em] text-bull">
            What he refuses to be.
          </p>
          <div className="space-y-5 text-lg leading-8 text-parchment/80">
            <p>
              Most trading education is built around the educator. Their
              brand. Their ego. Their audience. Not the trader.
            </p>
            <p>Signals. Dependency. Hype.</p>
            <p>Roland built the opposite.</p>
          </div>

          <p className="my-8 border-l-4 border-bull pl-6 font-display text-2xl leading-tight text-parchment">
            Wolf Trades is not designed to make traders rely on him. It&apos;s
            designed to build traders who don&apos;t need him anymore.
          </p>

          <p className="text-lg leading-8 text-parchment/80">
            No financial advice. No guarantees. Just a real process, real
            feedback, and a real environment.
          </p>
        </div>
      </section>

      {/* SECTION 6 — THE VISION */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-3xl">
          <p className="mb-6 font-display text-sm uppercase tracking-[0.25em] text-bull">
            What Wolf Trades is becoming.
          </p>
          <div className="space-y-3 text-lg leading-8 text-parchment/80">
            <p>Not just a trading room.</p>
            <p>Not just tools.</p>
            <p className="text-parchment">A complete trading operating system.</p>
          </div>
          <p className="mt-6 text-lg leading-8 text-parchment/80">
            A place where serious traders can prepare, execute, review, and
            improve — every single day.
          </p>
        </div>
      </section>

      {/* SECTION 7 — CTA */}
      <section className="bg-black px-6 py-20 text-center">
        <div className="mx-auto w-full max-w-3xl">
          <div className="mx-auto mb-10 max-w-2xl space-y-1">
            <p className="font-display text-xl leading-tight text-parchment md:text-2xl">
              Free gives you the map.
            </p>
            <p className="font-display text-xl leading-tight text-parchment md:text-2xl">
              Wolfpack gives you the room.
            </p>
            <p className="font-display text-xl leading-tight text-parchment md:text-2xl">
              APEX gives you me personally in your corner.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton href={WOLFPACK_MONTHLY_URL} variant="primary">
              Join Wolfpack
            </CTAButton>
            <CTAButton href="/apex" variant="secondary">
              Apply for APEX 1-on-1
            </CTAButton>
          </div>
          <p className="mt-4 text-sm">
            <Link
              href={START_FREE_URL}
              className="text-bull transition-colors hover:underline"
            >
              Get Roland&apos;s Free Watchlist
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
