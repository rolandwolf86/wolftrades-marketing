import Image from "next/image";
import Link from "next/link";
import { AnimatedStats } from "@/components/AnimatedStats";
import { CTAButton } from "@/components/CTAButton";
import { FeatureTabs } from "@/components/FeatureTabs";
import { HomeHero } from "@/components/HomeHero";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import { START_FREE_URL, WOLFPACK_MONTHLY_URL } from "@/lib/links";

const STATS = [
  { value: "2,500", suffix: "+", label: "Traders Inside" },
  { value: "10", suffix: "+", label: "Seven-Figure Students" },
  { value: "2", suffix: "", label: "Eight-Figure Students" },
  { value: "$20M", suffix: "+", label: "Jack Kellogg Career" },
  { value: "7", suffix: "", label: "Years Teaching" },
] as const;

const ROLAND_PROOF: ReadonlyArray<string> = [
  "Trading live on camera since 2017",
  "10+ seven-figure students trained",
  "2 eight-figure students",
  "Tim Grittani: “He has my respect.”",
];

const HALL_OF_FAME = [
  {
    src: "/images/proof/jack-over-20mil.jpg",
    name: "Jack Kellogg",
    achievement: "$20M+ Career",
  },
  {
    src: "/images/proof/suragh-first-millionaire.jpg",
    name: "Suragh",
    achievement: "First Millionaire Student",
  },
  {
    src: "/images/proof/aaron-1-2-mil.jpg",
    name: "Aaron",
    achievement: "$1.2M+",
  },
  {
    src: "/images/proof/huddie-7-figures.jpg",
    name: "Huddie",
    achievement: "Seven Figures",
  },
  {
    src: "/images/proof/sebastien-500k.jpg",
    name: "Sebastien",
    achievement: "$500K+",
  },
  {
    src: "/images/proof/sandra-200k.jpg",
    name: "Sandra",
    achievement: "$200K+ First Female",
  },
  {
    src: "/images/proof/brandon-approaching-1mil.jpg",
    name: "Brandon Hanna",
    achievement: "Approaching $1M",
  },
  {
    src: "/images/proof/carlos-6-figures.jpg",
    name: "Carlos",
    achievement: "Six Figures",
  },
  {
    src: "/images/proof/stock-sniper-mike-6-figures.jpg",
    name: "Stock Sniper Mike",
    achievement: "Six Figures",
  },
];

const TIMELINE_PHOTOS = [
  {
    src: "/images/roland/roland-teaching-hero.jpg",
    alt: "Roland teaching at NYC Bootcamp 2024",
    year: "2024",
    caption: "NYC Bootcamp — 30+ traders",
  },
  {
    src: "/images/roland/wolfpack-group-drone.jpg",
    alt: "Wolfpack at Tahoe retreat 2024",
    year: "2024",
    caption: "Wolfpack Tahoe Retreat",
  },
  {
    src: "/images/roland/roland-room-scanner.jpg",
    alt: "Roland teaching with live scanner",
    year: "2024",
    caption: "Live session — scanner on",
  },
  {
    src: "/images/roland/roland-laptop.jpg",
    alt: "Roland at laptop daily prep",
    year: "2024",
    caption: "Daily morning prep",
  },
  {
    src: "/images/roland/roland-tahoe-sunset.jpg",
    alt: "Roland at Tahoe sunset deck",
    year: "2024",
    caption: "Teaching above the clouds",
  },
  {
    src: "/images/roland/wolfpack-group-arms.jpg",
    alt: "Wolfpack community photo",
    year: "2024",
    caption: "The Pack — Tahoe 2024",
  },
];

const FREE_FEATURES = [
  "Daily watchlist",
  "Community preview",
  "Risk calculator",
  "Basic journal",
];

const WOLFPACK_FEATURES = [
  "Everything in Free",
  "Live sessions every market day",
  "Full replay library",
  "Trader Therapy",
  "Roland’s playbook",
  "Journal + analytics",
  "Scanner",
  "Community",
];

const APEX_FEATURES = [
  "DM access to Roland",
  "Real-time trade alerts",
  "Personal trade review",
  "3 years Wolfpack Pro included",
  "APEX alumni — lifetime",
];

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <HomeHero />

      {/* SECTION 2 — ANIMATED PROOF STRIP */}
      <section className="border-y border-white/5 bg-black2 py-12">
        <AnimatedStats stats={STATS} />
      </section>

      {/* SECTION 3 — ROLAND IDENTITY */}
      <section className="bg-black md:min-h-[500px]">
        <div className="grid md:grid-cols-[55fr_45fr]">
          <div className="relative h-[60vw] md:h-auto md:min-h-[500px]">
            <Image
              src="/images/roland/roland-laptop.jpg"
              alt="Roland Wolf at laptop, daily morning prep"
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover object-top"
              priority
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 hidden md:block"
              style={{
                background:
                  "linear-gradient(to right, transparent 70%, #0a0a0a 100%)",
              }}
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-12 md:px-16 md:py-16">
            <p className="font-display text-xs uppercase tracking-[0.25em] text-gold">
              Roland Wolf · Verified 7-Figure Trader
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-parchment md:text-5xl">
              I&rsquo;ve traded Nasdaq live every day since 2017.
              <br />
              This is what I built.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-parchment/80">
              Not a course. Not a signal room. A complete trading environment —
              built by a trader who actually does it every day.
            </p>
            <ul className="mt-8 space-y-3">
              {ROLAND_PROOF.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-base font-medium text-parchment/80"
                >
                  <span aria-hidden className="text-bull">
                    ✓
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButton href={WOLFPACK_MONTHLY_URL} variant="primary">
                Join Wolfpack
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FEATURE TABS */}
      <section className="border-y border-white/5 bg-black2 py-20">
        <div className="mx-auto mb-12 w-full max-w-7xl px-6">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold">
            The Complete Trading System
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
            Everything you need. One place.
          </h2>
        </div>
        <FeatureTabs />
      </section>

      {/* SECTION 5 — STUDENT PROOF WALL */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-7xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold">
            The Wolf Hall of Fame
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
            The results speak.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-parchment/80">
            These are real traders who studied the process, built their own
            edge, and went on to do serious things.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {HALL_OF_FAME.map((card) => (
              <div
                key={card.name}
                className="relative aspect-[3/4] overflow-hidden border border-gold/20"
              >
                <Image
                  src={card.src}
                  alt={`${card.name} — ${card.achievement}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-display text-base uppercase leading-tight text-parchment">
                    {card.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gold">
                    {card.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/results"
              className="font-display text-sm uppercase tracking-wider text-gold hover:underline"
            >
              See All Results →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — GRITTANI */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold">
            Endorsed. Unsolicited. Unpaid.
          </p>
          <blockquote className="mt-8 font-display text-5xl leading-[0.95] text-parchment md:text-7xl">
            &ldquo;He has my respect.&rdquo;
          </blockquote>
          <p className="mt-8 max-w-3xl border-l-2 border-gold/40 pl-6 text-lg italic leading-8 text-parchment/85">
            &ldquo;If I were looking to jump into a new service and see what I
            could pick up and maybe get a couple new ideas, this is probably
            where I would start.&rdquo;
          </p>
          <p className="mt-4 max-w-3xl border-l-2 border-gold/40 pl-6 text-base italic leading-7 text-parchment/70">
            &ldquo;He has no idea that I&rsquo;m putting any of this in here.
            He didn&rsquo;t ask me to say any of this, there&rsquo;s no
            affiliate hookup or anything like that, this is all just my honest
            opinion.&rdquo;
          </p>
          <p className="mt-6 text-sm text-gray">
            — Tim Grittani · $15M+ verified trader · Trading Tickers 2 ·
            Unsolicited · Unpaid
          </p>
        </div>
      </section>

      {/* SECTION 7 — TIMELINE PHOTO CAROUSEL */}
      <section className="overflow-hidden border-y border-white/5 bg-black py-16">
        <PhotoCarousel
          photos={TIMELINE_PHOTOS}
          variant="timeline"
          eyebrow="10 Years of Wolf Trades"
          headline="The Pack Has Been Here."
        />
      </section>

      {/* SECTION 8 — THREE TIER PRICING */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-7xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold">
            Start Where You Are
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
            Three paths. One destination.
          </h2>
          <div className="mt-6 max-w-2xl space-y-1">
            <p className="font-display text-lg leading-tight text-parchment md:text-xl">
              Free gives you the map.
            </p>
            <p className="font-display text-lg leading-tight text-parchment md:text-xl">
              Wolfpack gives you the room.
            </p>
            <p className="font-display text-lg leading-tight text-parchment md:text-xl">
              APEX gives you me personally in your corner.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Free */}
            <article className="flex flex-col border border-white/10 bg-black p-8">
              <span className="font-display text-xs uppercase tracking-[0.2em] text-gold">
                Free
              </span>
              <p className="mt-4 font-display text-5xl text-parchment">$0</p>
              <p className="mt-4 text-base leading-7 text-parchment/76">
                Start with Roland&rsquo;s daily watchlist and community
                preview.
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-parchment/80">
                {FREE_FEATURES.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="text-gold">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton href={START_FREE_URL} variant="secondary">
                  Start Free
                </CTAButton>
              </div>
            </article>

            {/* Wolfpack — featured */}
            <article className="relative flex flex-col border border-gold bg-black p-8 shadow-[0_0_0_1px_rgba(201,168,76,0.4)]">
              <span className="absolute -top-3 left-6 bg-gold px-3 py-1 font-display text-xs uppercase tracking-wider text-black">
                Most Popular
              </span>
              <span className="font-display text-xs uppercase tracking-[0.2em] text-gold">
                Wolfpack
              </span>
              <p className="mt-4 font-display text-5xl text-parchment">
                $127
                <span className="ml-2 text-base font-normal text-gray">
                  /mo
                </span>
              </p>
              <p className="mt-2 text-sm text-gold">
                or $997/yr — save $527
              </p>
              <p className="mt-4 text-base leading-7 text-parchment/76">
                The complete trading environment.
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-parchment/80">
                {WOLFPACK_FEATURES.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="text-gold">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <CTAButton href={WOLFPACK_MONTHLY_URL} variant="primary">
                  Join Wolfpack
                </CTAButton>
              </div>
            </article>

            {/* APEX */}
            <article className="flex flex-col border border-white/10 bg-black p-8">
              <span className="font-display text-xs uppercase tracking-[0.2em] text-gold">
                APEX 1-on-1
              </span>
              <p className="mt-4 font-display text-3xl leading-tight text-parchment">
                Application Only
              </p>
              <p className="mt-4 text-base leading-7 text-parchment/76">
                Direct mentorship with Roland. 4 months. Max 10 traders per
                cohort.
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-parchment/80">
                {APEX_FEATURES.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden className="text-gold">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs uppercase tracking-wider text-gray">
                No public price. Phone close only.
              </p>
              <div className="mt-6">
                <CTAButton href="/apex" variant="secondary">
                  Apply Now
                </CTAButton>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="border-t border-white/10 bg-black px-6 py-20 text-center">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-5xl leading-none text-parchment md:text-7xl">
            Stop guessing. Start operating.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-parchment/78">
            Join the room. Study the process. Use the tools. Build your edge.
          </p>
          <div className="mx-auto mt-10 mb-8 max-w-2xl space-y-1">
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
          <p className="mt-6 text-sm uppercase tracking-[0.14em] text-parchment/52">
            <Link
              href={START_FREE_URL}
              className="text-gold transition-colors hover:underline"
            >
              Get Roland&rsquo;s Free Watchlist
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
