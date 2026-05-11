import Image from "next/image";
import Link from "next/link";
import { WOLFPACK_MONTHLY_URL } from "@/lib/links";
import { TickerTape } from "./TickerTape";

const NOISE_BG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/></svg>\")";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden md:min-h-[100vh]">
      {/* Bull-green warm glow — keeps the hero alive without dominating the portrait */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(22,163,74,0.1) 0%, rgba(22,163,74,0.04) 30%, #0a0a0a 65%)",
        }}
      />

      {/* Subtle grain — kills banding */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: NOISE_BG }}
      />

      <div className="relative z-[1] flex flex-col md:grid md:min-h-[100vh] md:grid-cols-[45fr_55fr]">
        {/* Left column — copy */}
        <div className="flex flex-col justify-center px-6 py-10 md:px-20 md:py-16">
          <h1
            className="font-display font-black uppercase text-parchment"
            style={{
              fontSize: "clamp(40px, 9vw, 112px)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
            }}
          >
            <span className="block">No gurus.</span>
            <span className="block">No hype.</span>
            <span className="block">Just proof.</span>
          </h1>

          <p
            className="mt-6 max-w-[460px] text-gray"
            style={{ fontSize: "18px", lineHeight: 1.6 }}
          >
            Wolf Trades is the platform built by real traders for real traders.
            Verified P&amp;L. Real community. Tools that work. Trading since
            2017, teaching since 2018.
          </p>

          {/* Founder pricing callout */}
          <div className="mt-6 max-w-[460px] border-l-2 border-bull/60 bg-black2 p-4">
            <p className="text-[13px] leading-relaxed text-parchment/75">
              Launch pricing is live. Use code{" "}
              <span className="bg-bull/10 px-1.5 py-0.5 font-mono text-xs tracking-wider text-bull">
                LAUNCH97
              </span>{" "}
              for $97 first month on Wolfpack. Code{" "}
              <span className="bg-bull/10 px-1.5 py-0.5 font-mono text-xs tracking-wider text-bull">
                LAUNCH147
              </span>{" "}
              for $147 first month on Wolfpack Pro. Founder rate, while it
              lasts.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={WOLFPACK_MONTHLY_URL}
              className="inline-flex w-full items-center justify-center gap-2 bg-bull font-bold uppercase text-black transition-colors duration-150 ease-out hover:bg-[#1fc35a] active:scale-[0.98] motion-reduce:active:scale-100 animate-pulse-bull motion-reduce:animate-none sm:w-auto"
              style={{
                fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif",
                fontSize: "0.88rem",
                letterSpacing: "0.2em",
                padding: "18px 40px",
              }}
            >
              <span>Lock in founder pricing</span>
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/live"
              className="inline-flex w-full items-center justify-center border border-parchment/40 bg-transparent font-bold uppercase text-parchment transition-colors duration-150 ease-out hover:border-bull hover:text-bull sm:w-auto"
              style={{
                fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif",
                fontSize: "0.88rem",
                letterSpacing: "0.2em",
                padding: "18px 40px",
              }}
            >
              Watch a live session
            </Link>
          </div>

          <p
            className="mt-6 max-w-[460px] text-gray"
            style={{ fontSize: "11px", letterSpacing: "0.1em" }}
          >
            Jack Kellogg $25M+ · Brian $10M (2024) · 10+ seven-figure students
          </p>
        </div>

        {/* Right column — Roland teaching hero shot */}
        <div className="relative h-[100vw] w-full md:h-auto md:border-l md:border-parchment/[0.06]">
          <Image
            src="/images/roland/wolf hero teaching.JPG"
            alt="Roland Wolf teaching"
            fill
            sizes="(min-width: 768px) 55vw, 100vw"
            className="object-cover object-top"
            priority
          />
          {/* Left-edge fade — bleeds the video into the copy column on desktop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(to right, #0a0a0a 0%, transparent 25%)",
            }}
          />
          {/* Bottom fade — keeps ticker tape strip legible */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 70%, #0a0a0a 100%)",
            }}
          />
        </div>
      </div>

      {/* Animated ticker — desktop only, full-bleed at bottom of hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[2] hidden h-8 border-t border-parchment/[0.06] bg-black/80 backdrop-blur md:block"
      >
        <TickerTape className="h-full" />
      </div>
    </section>
  );
}
