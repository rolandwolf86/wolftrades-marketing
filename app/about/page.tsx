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
      {/* SECTION 1 — HERO (full-bleed Roland teaching) */}
      <section className="relative overflow-hidden bg-black min-h-[60vh] md:min-h-[70vh]">
        <Image
          src="/images/roland/wolf hero teaching.JPG"
          alt="Roland Wolf teaching at the whiteboard"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 45%, rgba(10,10,10,0.4) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 60%, rgba(10,10,10,1) 100%)",
          }}
        />
        <div className="relative flex min-h-[60vh] flex-col justify-center px-6 py-24 md:min-h-[70vh] md:px-16">
          <div className="mx-auto w-full max-w-5xl">
            <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
              About Roland Wolf
            </p>
            <h1 className="mt-4 font-display text-5xl leading-none text-parchment md:text-7xl">
              Why Wolf Trades exists.
            </h1>
          </div>
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

      {/* SECTION 3 — THE DECADE (split with terminal photo) */}
      <section className="bg-black md:min-h-[600px]">
        <div className="grid md:grid-cols-[55fr_45fr]">
          <div className="flex flex-col justify-center px-6 py-20 md:px-16 md:py-24">
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

            <blockquote className="my-8 border-l-4 border-bull py-2 pl-6">
              <p className="font-display text-2xl italic leading-tight text-parchment md:text-3xl">
                &ldquo;He was finding different points in the chart patterns to
                take his longs, and he was actually having good performance
                without a herd of sheep on his back.&rdquo;
              </p>
              <p className="mt-3 text-sm text-gray">
                — Tim Grittani · Trading Tickers 2 ·
                Unsolicited · Unpaid
              </p>
            </blockquote>

            <p className="text-lg leading-8 text-parchment/80">
              That matters. Because it means the edge was real — not dependent on
              followers pushing price.
            </p>
          </div>
          <div className="relative h-[60vw] w-full md:h-auto md:min-h-[600px] md:border-l md:border-parchment/[0.06]">
            <Image
              src="/images/roland/roland-room-scanner.jpg"
              alt="Roland teaching live in the trading room"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover object-center"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(to right, #0a0a0a 0%, transparent 25%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE FAMILY (split with wife portrait) */}
      <section className="border-y border-white/5 bg-black2 md:min-h-[600px]">
        <div className="grid md:grid-cols-[45fr_55fr]">
          <div className="relative h-[60vw] w-full md:order-1 md:h-auto md:min-h-[600px] md:border-r md:border-parchment/[0.06]">
            <Image
              src="/images/roland/wolf-wife.JPG"
              alt="Roland with his wife"
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover object-center"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(to left, #111111 0%, transparent 25%)",
              }}
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-20 md:order-2 md:px-16 md:py-24">
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
        </div>
      </section>

      {/* SECTION 5 — ANTI-GURU (full-bleed teaching shot) */}
      <section className="relative overflow-hidden bg-black min-h-[600px]">
        <Image
          src="/images/roland/wolf hero teaching (2).JPG"
          alt="Roland drawing a chart pattern for engaged students"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.85) 50%, rgba(10,10,10,0.65) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 65%, rgba(10,10,10,1) 100%)",
          }}
        />
        <div className="relative px-6 py-24 md:py-32">
          <div className="mx-auto w-full max-w-3xl">
            <p className="mb-6 font-display text-sm uppercase tracking-[0.25em] text-bull">
              What he refuses to be.
            </p>
            <div className="space-y-5 text-lg leading-8 text-parchment/85">
              <p>
                Most trading education is built around the educator. Their
                brand. Their ego. Their audience. Not the trader.
              </p>
              <p>Signals. Dependency. Hype.</p>
              <p>Roland built the opposite.</p>
            </div>

            <p className="my-10 border-l-4 border-bull pl-6 font-display text-2xl leading-tight text-parchment md:text-3xl">
              Wolf Trades is not designed to make traders rely on him. It&apos;s
              designed to build traders who don&apos;t need him anymore.
            </p>

            <p className="text-lg leading-8 text-parchment/85">
              No financial advice. No guarantees. Just a real process, real
              feedback, and a real environment.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 — THE VISION (full-bleed community shot) */}
      <section className="relative overflow-hidden bg-black2 min-h-[500px]">
        <Image
          src="/images/roland/rolandhugegroup.JPG"
          alt="Roland addressing the Wolfpack community at scale"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.78) 50%, rgba(10,10,10,0.55) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.6) 0%, transparent 30%, transparent 70%, rgba(10,10,10,1) 100%)",
          }}
        />
        <div className="relative px-6 py-24 md:py-28">
          <div className="mx-auto w-full max-w-3xl">
            <p className="mb-6 font-display text-sm uppercase tracking-[0.25em] text-bull">
              What Wolf Trades is becoming.
            </p>
            <div className="space-y-3 text-lg leading-8 text-parchment/85">
              <p>Not just a trading room.</p>
              <p>Not just tools.</p>
              <p className="text-parchment">A complete trading operating system.</p>
            </div>
            <p className="mt-6 text-lg leading-8 text-parchment/85">
              A place where serious traders can prepare, execute, review, and
              improve — every single day.
            </p>
          </div>
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

      {/* SECTION 8 — BRAND CLOSER */}
      <div className="flex flex-col items-center border-t border-white/5 bg-black py-16">
        <Image
          src="/images/logos/wt-icon-white.png"
          alt="Wolf Trades"
          width={240}
          height={240}
          className="w-24 h-24 mb-4 opacity-95"
        />
        <p className="font-display text-xs uppercase tracking-[.25em] text-bull">
          Wolf Trades
        </p>
        <p className="text-sm text-gray mt-1">
          Est. 2018 · 2,500+ Traders
        </p>
      </div>
    </>
  );
}
