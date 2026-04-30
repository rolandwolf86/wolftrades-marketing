import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { START_FREE_URL, WOLFPACK_MONTHLY_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Wolf Hall of Fame",
  description:
    "Real traders. Real results. See how traders built their edge with process and structure inside Wolf Trades.",
};

interface HallOfFameCard {
  initials: string;
  label: string;
  stat: string;
  substat: string;
  name: string;
  story: string;
  era: string;
}

const HALL_OF_FAME: ReadonlyArray<HallOfFameCard> = [
  {
    initials: "JK",
    label: "Breakout Trader",
    stat: "$20M+",
    substat: "career profits",
    name: "Jack Kellogg",
    story:
      "Jack represents what happens when a trader stops chasing and builds real conviction around a process. He studied the environment, refined his edge, and scaled it.",
    era: "OG Pack",
  },
  {
    initials: "SU",
    label: "First Millionaire Student",
    stat: "$1M+",
    substat: "documented",
    name: "Suragh",
    story:
      "Suragh became Roland's first documented millionaire student — proof that the process, applied consistently, produces life-changing results.",
    era: "Pack Alumni",
  },
  {
    initials: "BW",
    label: "$10M+ Career",
    stat: "$10M+",
    substat: "career profits",
    name: "Brian @wareagletrader",
    story:
      "Brian's results reflect discipline and structure at scale. He built a process he could trust, then executed consistently when the opportunity was there.",
    era: "Wolfpack Era",
  },
  {
    initials: "AA",
    label: "Seven-Figure Track",
    stat: "$1.2M+",
    substat: "and growing",
    name: "Aaron",
    story:
      "Aaron's growth came from tightening execution and focusing on what actually works. He moved from inconsistency to a defined process.",
    era: "Pack Alumni",
  },
  {
    initials: "SE",
    label: "Consistent Builder",
    stat: "$500K+",
    substat: "documented",
    name: "Sebastien",
    story:
      "Sebastien represents steady progression — not chasing, not forcing, but building something repeatable over time.",
    era: "Pack Alumni",
  },
  {
    initials: "SA",
    label: "First Female Six-Figure",
    stat: "$200K+",
    substat: "and climbing",
    name: "Sandra",
    story:
      "Sandra's milestone wasn't just the number — it was building confidence and structure in a space where most traders never get there.",
    era: "Pack Alumni",
  },
  {
    initials: "CA",
    label: "Six-Figure Trader",
    stat: "$200K+",
    substat: "documented",
    name: "Carlos",
    story:
      "Carlos built his edge by focusing on process over noise. His progress came from consistency, not chasing big days.",
    era: "Pack Alumni",
  },
  {
    initials: "BH",
    label: "Approaching Seven Figures",
    stat: "~$1M",
    substat: "and rising",
    name: "Brandon Hanna",
    story:
      "Brandon's trajectory reflects what happens when a trader locks into a process and stays there long enough for it to compound.",
    era: "Wolfpack Era",
  },
  {
    initials: "TO",
    label: "Six-Figure Trader",
    stat: "Six figures",
    substat: "documented",
    name: "Tony",
    story:
      "Tony's results came from simplifying his approach and committing to a structure he could execute consistently.",
    era: "Pack Alumni",
  },
];

const VIDEO_PLACEHOLDERS: ReadonlyArray<string> = [
  "Jack Kellogg — Coming Soon",
  "Brian @wareagletrader — $10M+ Career Profits",
  "Student Testimonial — Coming Soon",
];

const PROOF_PHOTOS = [
  {
    src: "/images/proof/jack-over-20mil.jpg",
    alt: "Jack Kellogg over $20M",
    label: "Jack Kellogg — $20M+",
  },
  {
    src: "/images/proof/suragh-first-millionaire.jpg",
    alt: "Suragh first millionaire student",
    label: "Suragh — First Millionaire Student",
  },
  {
    src: "/images/proof/aaron-1-2-mil.jpg",
    alt: "Aaron $1.2M+",
    label: "Aaron — $1.2M+",
  },
  {
    src: "/images/proof/huddie-7-figures.jpg",
    alt: "Huddie seven figures",
    label: "Huddie — Seven Figures",
  },
  {
    src: "/images/proof/sebastien-500k.jpg",
    alt: "Sebastien $500K+",
    label: "Sebastien — $500K+",
  },
  {
    src: "/images/proof/sandra-200k.jpg",
    alt: "Sandra $200K+",
    label: "Sandra — $200K+",
  },
  {
    src: "/images/proof/brandon-approaching-1mil.jpg",
    alt: "Brandon approaching $1M",
    label: "Brandon — Approaching $1M",
  },
  {
    src: "/images/proof/carlos-6-figures.jpg",
    alt: "Carlos six figures",
    label: "Carlos — Six Figures",
  },
  {
    src: "/images/proof/stock-sniper-mike-6-figures.jpg",
    alt: "Stock Sniper Mike six figures",
    label: "Stock Sniper Mike — Six Figures",
  },
];

const COMMUNITY_PHOTOS = [
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
      {/* SECTION 1 — HERO */}
      <section className="bg-black px-6 py-24">
        <div className="mx-auto w-full max-w-5xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
            Wolf Trades Results
          </p>
          <h1 className="mt-4 font-display text-5xl leading-none text-parchment md:text-7xl">
            The Wolf Hall of Fame.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-parchment/80">
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

      {/* SECTION 3 — HALL OF FAME */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
            The Wolf Hall of Fame
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
            The names that define the Pack.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {HALL_OF_FAME.map((card) => (
              <article
                key={card.name}
                className="border border-bull/40 bg-black2 p-8"
              >
                <div
                  aria-hidden
                  className="mb-6 flex h-16 w-16 items-center justify-center border border-parchment/10 bg-black font-display text-xl text-bull"
                >
                  {card.initials}
                </div>
                <p className="mb-1 text-xs uppercase tracking-widest text-bull">
                  {card.label}
                </p>
                <p className="mb-1 font-display text-4xl text-gold">
                  {card.stat}
                </p>
                <p className="mb-4 text-sm text-gray">{card.substat}</p>
                <p className="mb-3 font-display text-xl uppercase text-parchment">
                  {card.name}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-parchment/70">
                  {card.story}
                </p>
                <span className="inline-flex items-center border border-parchment/10 bg-black px-3 py-1 text-xs uppercase tracking-wider text-gray">
                  {card.era}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROOF WALL + COMMUNITY */}
      <section className="overflow-hidden border-y border-white/5 bg-black2 py-20">
        <div className="mx-auto mb-10 w-full max-w-5xl px-6">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-bull">
            From the Pack
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
            Wins, breakthroughs, and real messages.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-parchment/80">
            The Hall of Fame is just part of the story. Inside the Pack,
            traders are constantly improving — better entries, cleaner plans,
            stronger discipline, smarter decisions. These are the moments
            where things start to click.
          </p>
        </div>

        <PhotoCarousel photos={PROOF_PHOTOS} variant="proof" />

        <div className="mx-auto mt-12 grid w-full max-w-5xl grid-cols-1 gap-4 px-6 md:grid-cols-3">
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
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold">
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

          <blockquote className="my-8 border-l-4 border-gold pl-6 font-display text-3xl italic leading-tight text-parchment md:text-5xl">
            &ldquo;He has my respect.&rdquo;
          </blockquote>

          <p className="mb-4 border-l-2 border-gold/40 pl-6 text-lg italic leading-8 text-parchment/80">
            &ldquo;If I were looking to jump into a new service and see what
            I could pick up and maybe get a couple new ideas, this is
            probably where I would start.&rdquo;
          </p>

          <p className="mb-4 border-l-2 border-gold/40 pl-6 text-base italic leading-7 text-parchment/70">
            &ldquo;He has no idea that I am putting any of this in here. He
            did not ask me to say any of this, there is no affiliate hookup
            or anything like that, this is all just my honest opinion.&rdquo;
          </p>

          <p className="mt-4 text-sm text-gray">
            — Tim Grittani · $15M+ verified trader · Trading Tickers 2 ·
            Unsolicited · Unpaid
          </p>

          <div
            className={`mt-8 flex aspect-video w-full items-center justify-center border border-gold/40 ${SHIMMER_BG} animate-shimmer motion-reduce:animate-none`}
          >
            <p className="px-6 text-center font-display text-lg uppercase tracking-wider text-gold">
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
