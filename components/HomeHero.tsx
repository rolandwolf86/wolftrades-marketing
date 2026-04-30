import Image from "next/image";
import Link from "next/link";
import { WOLFPACK_MONTHLY_URL } from "@/lib/links";
import { HomeHeroShowcase } from "./HomeHeroShowcase";

const NOISE_BG =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.7'/></svg>\")";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden md:min-h-[100vh]">
      {/* Directional gradient — warm glow center-right where the showcase sits */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(201,168,76,0.08) 0%, rgba(22,163,74,0.04) 30%, #0a0a0a 65%)",
        }}
      />

      {/* Subtle grain — kills banding */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: NOISE_BG }}
      />

      <div className="relative z-[1] flex min-h-[100vh] flex-col md:grid md:grid-cols-[45fr_55fr]">
        {/* Left column — copy */}
        <div className="flex flex-col justify-center px-6 py-10 md:px-20 md:py-16">
          <Image
            src="/wolf-trades-logo-horizontal-dark.png"
            alt="Wolf Trades"
            width={916}
            height={518}
            className="h-8 w-auto object-contain object-left"
            priority
          />

          <h1
            className="mt-12 font-display font-black uppercase text-parchment md:mt-16"
            style={{
              fontSize: "clamp(40px, 9vw, 112px)",
              lineHeight: 0.88,
              letterSpacing: "-0.02em",
            }}
          >
            <span className="block">I trade Nasdaq live.</span>
            <span className="block">Every single day.</span>
            <span className="block">This is where I do it.</span>
          </h1>

          <p
            className="mt-6 max-w-[380px] text-gray"
            style={{ fontSize: "18px", lineHeight: 1.6 }}
          >
            Roland Wolf has traded Nasdaq live since 2017. This is the platform
            he built. Now it&rsquo;s yours.
          </p>

          <div className="mt-10">
            <Link
              href={WOLFPACK_MONTHLY_URL}
              className="inline-flex w-full items-center gap-2 bg-gold font-bold uppercase text-black transition-colors duration-150 ease-out hover:bg-[#d4a832] active:scale-[0.98] motion-reduce:active:scale-100 animate-pulse-gold motion-reduce:animate-none sm:w-auto"
              style={{
                fontFamily: "var(--font-barlow-condensed), system-ui, sans-serif",
                fontSize: "0.88rem",
                letterSpacing: "0.2em",
                padding: "18px 48px",
                justifyContent: "center",
              }}
            >
              <span>Join the Wolfpack</span>
              <span aria-hidden>→</span>
            </Link>
          </div>

          <p
            className="mt-4 max-w-[420px] text-gray"
            style={{ fontSize: "11px", letterSpacing: "0.1em" }}
          >
            Jack Kellogg $20M+ · Brian $10M+ · 10+ seven-figure students
          </p>
        </div>

        {/* Right column — showcase */}
        <div
          className="relative h-[50vw] w-full md:h-auto md:border-l md:border-parchment/[0.06]"
          style={{ background: "rgba(17,17,17,0.6)" }}
        >
          <HomeHeroShowcase />
        </div>
      </div>
    </section>
  );
}
