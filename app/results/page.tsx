import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { HallOfFameCarousel } from "@/components/HallOfFameCarousel";
import { START_FREE_URL, WOLFPACK_MONTHLY_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Wolf Hall of Fame",
  description:
    "Real traders. Real results. See how traders built their edge with process and structure inside Wolf Trades.",
};

const VIDEO_PLACEHOLDERS: ReadonlyArray<string> = [
  "Jack Kellogg — Coming Soon",
  "Brian @wareagletrader — $10M in 2024",
  "Student Testimonial — Coming Soon",
];

const COMMUNITY_PHOTOS = [
  {
    src: "/images/roland/HUGE CONFERENCE.JPG",
    alt: "Roland presenting at the Trader & Investor Summit",
    caption: "Trader & Investor Summit — main stage",
  },
  {
    src: "/images/roland/wolfpack-group-drone.jpg",
    alt: "Wolfpack group Tahoe 2024",
    caption: "Wolfpack — Tahoe Retreat 2024",
  },
  {
    src: "/images/roland/wolfpack-group-arms.jpg",
    alt: "Wolfpack community celebration",
    caption: "The Pack — Tahoe 2024",
  },
  {
    src: "/images/roland/CLASSROOM4.JPG",
    alt: "Wolf Trades classroom in session",
    caption: "Bootcamp classroom",
  },
  {
    src: "/images/roland/dallasgroup.JPG",
    alt: "Wolfpack Dallas meetup at American Airlines Center",
    caption: "Dallas meetup",
  },
  {
    src: "/images/roland/roland-teaching-wide.jpg",
    alt: "Roland teaching at bootcamp",
    caption: "NYC Bootcamp 2024",
  },
];

const SHIMMER_BG =
  "bg-[linear-gradient(90deg,#111111_25%,#1a1a1a_50%,#111111_75%)] bg-[length:200%_100%]";

export default function ResultsPage() {
  return (
    <>
      {/* SECTION 1 — HERO (Wolf Hall of Fame hero shot) */}
      <section className="relative overflow-hidden bg-black min-h-[60vh] md:min-h-[70vh]">
        <Image
          src="/images/proof/hall-of-fame-hero.jpg"
          alt="Wolf Hall of Fame"
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
              "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.45) 100%)",
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
        <div className="relative flex min-h-[60vh] flex-col justify-center px-6 py-24 md:min-h-[70vh]">
          <div className="mx-auto w-full max-w-5xl">
            <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
              Wolf Trades Results
            </p>
            <h1 className="mt-4 font-display text-5xl leading-none text-parchment md:text-7xl">
              The Wolf Hall of Fame.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-parchment/85">
              These are traders who came through Roland&apos;s world, studied
              the process, built their own edge, and went on to do serious
              things in the market.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton href={WOLFPACK_MONTHLY_URL} variant="primary">
                Join Wolfpack
              </CTAButton>
              <CTAButton href="/apex" variant="secondary">
                Apply for APEX 1-on-1
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROOF PHILOSOPHY */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-4xl leading-none text-parchment md:text-6xl">
            Results don&apos;t come from signals.
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-8 text-parchment/80">
            <p>They come from process.</p>
            <p>
              The traders you&apos;ll see here didn&apos;t succeed because
              they copied alerts or followed someone blindly.
            </p>
            <p>
              They learned how to think. How to prepare. How to manage risk.
              How to build a playbook they could actually trust.
            </p>
            <p className="text-parchment">That&apos;s the difference.</p>
          </div>

          <div className="mt-10 space-y-1">
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
        </div>
      </section>

      {/* SECTION 3 — HALL OF FAME CAROUSEL (unified) */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-7xl">
          <HallOfFameCarousel
            eyebrow="The Wolf Hall of Fame"
            headline="The names that define the Pack."
          />
        </div>
      </section>

      {/* SECTION 4 — COMMUNITY PHOTOS */}
      <section className="overflow-hidden border-y border-white/5 bg-black2 py-20">
        <div className="mx-auto mb-10 w-full max-w-5xl px-6">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
            From the Pack
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
            The community at work.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-parchment/80">
            Bootcamps. Retreats. Conferences. The Pack shows up — together.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 px-6 md:grid-cols-3">
          {COMMUNITY_PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-video overflow-hidden border border-parchment/10"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-xs uppercase tracking-wider text-gray">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — VIDEO TESTIMONIALS */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
            Watch the Stories
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
            Hear it from the traders who were there.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-parchment/80">
            Results matter. But hearing traders explain what changed for
            them — that&apos;s different.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {VIDEO_PLACEHOLDERS.map((label) => (
              <div
                key={label}
                className={`flex aspect-video items-center justify-center border border-bull/40 ${SHIMMER_BG} animate-shimmer motion-reduce:animate-none`}
              >
                <p className="px-4 text-center font-display text-sm uppercase tracking-wider text-bull">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — GRITTANI */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
            Industry Trust
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
            Respect from serious traders.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-parchment/80">
            Roland&apos;s approach has earned respect from traders who
            operate at the highest level — not because of hype, but because
            of how he thinks, trades, and teaches.
          </p>

          <blockquote className="my-8 border-l-4 border-bull pl-6 font-display text-3xl italic leading-tight text-parchment md:text-5xl">
            &ldquo;He has my respect.&rdquo;
          </blockquote>

          <p className="mb-4 border-l-2 border-parchment/30 pl-6 text-lg italic leading-8 text-parchment/80">
            &ldquo;If I were looking to jump into a new service and see what
            I could pick up and maybe get a couple new ideas, this is
            probably where I would start.&rdquo;
          </p>

          <p className="mb-4 border-l-2 border-parchment/30 pl-6 text-base italic leading-7 text-parchment/70">
            &ldquo;He has no idea that I am putting any of this in here. He
            did not ask me to say any of this, there is no affiliate hookup
            or anything like that, this is all just my honest opinion.&rdquo;
          </p>

          <p className="mt-4 text-sm text-gray">
            — Tim Grittani · Trading Tickers 2 ·
            Unsolicited · Unpaid
          </p>

          <div
            className={`mt-8 flex aspect-video w-full items-center justify-center border border-parchment/30 ${SHIMMER_BG} animate-shimmer motion-reduce:animate-none`}
          >
            <p className="px-6 text-center font-display text-lg uppercase tracking-wider text-bull">
              Tim Grittani — Trading Tickers 2 — Video Coming Soon
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — THE STANDARD */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-4xl leading-none text-parchment md:text-6xl">
            The real result is not just a number.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-parchment/80">
            <p>
              The number matters. But the real result is when a trader stops
              feeling lost.
            </p>
            <p>
              When they know what they trade, when it is in play, where they
              are wrong, and how to manage risk.
            </p>
          </div>

          <blockquote className="my-10 max-w-3xl border-l-4 border-bull py-2 pl-6 font-display text-2xl italic leading-tight text-parchment md:text-3xl">
            &ldquo;You can teach back your exact setup to someone else, and
            they don&apos;t have any questions.&rdquo;
          </blockquote>

          <p className="mt-2 text-sm text-gray">— Roland Wolf</p>
        </div>
      </section>

      {/* SECTION 8 — DISCLAIMER */}
      <section className="border-t border-parchment/10 bg-black2 px-6 py-8 text-center">
        <p className="mx-auto max-w-3xl text-sm text-gray">
          Trading involves risk. Results shown are not typical and are not
          guaranteed. Wolf Trades provides education, tools, and community —
          not financial advice.
        </p>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="bg-black px-6 py-20 text-center">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-4xl leading-tight text-parchment md:text-5xl">
            Ready to step inside the process?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-parchment/70">
            The traders on this page did not get there by guessing. They
            built a process.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
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
