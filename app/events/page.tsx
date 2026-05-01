import type { Metadata } from "next";
import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { WOLFPACK_MONTHLY_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Live Events",
  description:
    "Wolf Trades live trading bootcamps and in-person events with Roland Wolf.",
};

export default function EventsPage() {
  return (
    <>
      {/* HERO (atmospheric chart bg) */}
      <section className="relative overflow-hidden bg-black px-6 py-24">
        <Image
          src="/images/roland/hf_20260429_165852_7a5b62e0-a8f6-40c0-ac4f-ac16bf3c8ed0.png"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
          priority
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.5) 100%)",
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
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
            Wolf Trades Live
          </p>
          <h1 className="mt-4 font-display text-5xl leading-none text-parchment md:text-7xl">
            Learn from Roland in person.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-parchment/85">
            Wolf Trades hosts live trading events and bootcamps for serious
            traders who want immersive, in-person learning directly from
            Roland.
          </p>
          <div className="mt-10">
            <CTAButton href={WOLFPACK_MONTHLY_URL} variant="primary">
              Join Wolfpack to Stay Updated
            </CTAButton>
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 font-display text-xs uppercase tracking-[0.25em] text-bull">
            Past Events
          </p>
          <h2 className="mb-12 font-display text-4xl leading-none text-parchment md:text-6xl">
            NYC Bootcamp 2024.
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden border border-bull/20">
              <Image
                src="/images/roland/roland-teaching-hero.jpg"
                alt="Roland teaching at NYC Bootcamp"
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="relative aspect-video overflow-hidden border border-bull/20">
              <Image
                src="/images/roland/wolfpack-group-drone.jpg"
                alt="Wolfpack group at Tahoe"
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-parchment/80">
            The first Wolf Trades live bootcamp brought 30+ traders together
            for real-time learning, direct access to Roland, and deeper
            immersion into the process.
          </p>
        </div>
      </section>

      {/* FULL BLEED COMMUNITY PHOTO */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/roland/wolfpack-group-arms.jpg"
          alt="The Wolfpack — Tahoe 2024"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-16 text-center">
          <h2 className="font-display text-4xl leading-none text-parchment md:text-6xl">
            The Wolfpack. Tahoe 2024.
          </h2>
          <p className="mt-4 text-lg text-parchment/70">
            This is what serious traders look like.
          </p>
        </div>
      </section>

      {/* NEXT EVENT */}
      <section className="bg-black px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 font-display text-xs uppercase tracking-[0.25em] text-bull">
            Next Event
          </p>
          <h2 className="font-display text-4xl leading-none text-parchment md:text-6xl">
            Coming in 2026.
          </h2>
          <p className="mt-6 text-lg leading-8 text-parchment/80">
            Details being finalized. Join Wolfpack to be first to know —
            Wolfpack members get priority access and early pricing.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButton href={WOLFPACK_MONTHLY_URL} variant="primary">
              Join Wolfpack
            </CTAButton>
            <CTAButton href="/apex" variant="secondary">
              Apply for APEX 1-on-1
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
