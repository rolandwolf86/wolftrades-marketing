import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { Hero } from "@/components/Hero";
import {
  START_FREE_URL,
  WOLFPACK_ANNUAL_CHECKOUT_URL,
  WOLFPACK_CHECKOUT_URL,
} from "@/lib/links";

export const metadata: Metadata = {
  title: "Wolfpack",
  description:
    "Wolfpack is the room. $127/month. Live trading every market day, Roland's daily watchlist, Trader Therapy, full replays, complete playbook, tools, and community.",
};

const SCHEDULE = [
  {
    time: "Pre-Market",
    title: "Roland's Daily Watchlist",
    body: "Every morning before the bell, Roland breaks down the names he's watching — the plan, the levels, the catalysts, and full market context. Futures. Indices. Sectors. Macro.",
  },
  {
    time: "Market Open",
    title: "Live Trading Session",
    body: "Watch Roland trade in real time. The setups, the entries, the exits, the decisions — as they happen. Not replays. Not summaries. Live.",
  },
  {
    time: "Mid-Session",
    title: "Trader Therapy",
    body: "Real feedback, live. Ask Roland anything. Get direct correction on your process, your habits, your execution. Most traders never get this kind of feedback.",
  },
  {
    time: "Post-Market",
    title: "Full Session Replay",
    body: "Every session recorded and available immediately after close. Miss the open? Nothing is lost. Study at your pace.",
  },
  {
    time: "Ongoing",
    title: "Community + Review",
    body: "2,500+ traders. Questions answered. Wins shared. Journal notes, replay review, and playbook work keep the process going all day.",
  },
] as const;

const FEATURE_BLOCKS = [
  {
    image: "/screenshots/chat.png",
    alt: "Wolf Trades live trading room",
    label: "Community",
    title: "Live Trading Room",
    body: "Watch Roland trade every market day. Real entries. Real exits. Real decisions. Chat with 2,500+ traders.",
  },
  {
    image: "/screenshots/community.png",
    alt: "Wolf Trades watchlist and prep workflow",
    label: "Tools",
    title: "Daily Watchlist",
    body: "Know the names Roland is watching, the levels that matter, and the context behind the plan.",
  },
  {
    image: "/screenshots/chat.png",
    alt: "Wolf Trades replay workflow",
    label: "Replays",
    title: "Full Replay Library",
    body: "Every session recorded. Every trade breakdown archived. Study the room at your pace.",
  },
  {
    image: "/screenshots/community.png",
    alt: "Wolf Trades playbook workflow",
    label: "Playbook",
    title: "Playbook Builder",
    body: "Document setups, screenshots, rules, and review notes so your process becomes repeatable.",
  },
  {
    image: "/screenshots/community.png",
    alt: "Wolf Trades community",
    label: "Community",
    title: "Trader Community",
    body: "2,500+ traders sharing wins, setups, and feedback. The most active trading community online.",
  },
  {
    image: "/screenshots/chat.png",
    alt: "Replay library",
    label: "Education",
    title: "Full Replay Library",
    body: "Every session recorded. Every trade breakdown archived. Study at your pace, on your schedule.",
  },
] as const;

const PROOF = [
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
] as const;

const FAQ = [
  {
    q: "Is this just alerts and signals?",
    a: "No. You see the decision, not just the trade. The goal is to understand the process — not copy an alert. If you want signals, this isn't for you.",
  },
  {
    q: "I'm not profitable yet. Is this for me?",
    a: "That's exactly who this is built for. You see the process live, every day. Structure is how you get profitable. Most unprofitable traders are missing structure — not information.",
  },
  {
    q: "What if I can't watch the live session?",
    a: "Everything is recorded. Watch when you can. Consistency matters more than catching every session live.",
  },
  {
    q: "$127 is a lot for me right now.",
    a: "Start free. No card required. Get the daily watchlist, community preview, and risk calculator. Upgrade when you're ready.",
  },
  {
    q: "How is this different from Discord?",
    a: "Roland trades live on camera. Real entries. Real exits. Real P&L. You see everything as it happens. A Discord server is not the same thing.",
  },
] as const;

export default function WolfpackPage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <Hero
        eyebrow="Wolfpack — $127/month"
        headline="This is the room."
        subhead={
          <>
            Live trading every market day. Roland&apos;s daily watchlist.
            Trader Therapy. Full replays. Complete playbook. Tools. Community.
            Everything.
            <span className="mt-4 block font-display text-xl uppercase tracking-wide text-gold md:text-2xl">
              Others charge $10,000+/year for less.
            </span>
          </>
        }
        primaryCta={
          <CTAButton href="#pricing" variant="primary">
            Join Wolfpack — $127/mo
          </CTAButton>
        }
        secondaryCta={
          <CTAButton href={START_FREE_URL} variant="secondary">
            Start Free
          </CTAButton>
        }
      />

      {/* SECTION 2 — VALUE SHOCK STRIP */}
      <section className="bg-gold px-6 py-12 text-center">
        <p className="font-display text-5xl font-black uppercase leading-none text-black md:text-7xl">
          $127/month.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-xl leading-8 text-black/80">
          Live trading sessions. Daily watchlist. Trader Therapy. Full replay
          library. Roland&apos;s playbook. Journal. Playbook Builder.
          Community of 2,500+ traders.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-sm uppercase tracking-wider text-black/60">
          Compare: trading rooms $299/mo · journals $50/mo · courses
          $3,000+ · coaching programs $10,000+/yr
        </p>
        <p className="mt-6 font-display text-2xl font-black uppercase text-black md:text-3xl">
          Wolf Trades: $127. Everything. Done.
        </p>
      </section>

      {/* SECTION 3 — DAILY SCHEDULE */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold">
            What Happens Every Day
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
            The daily trading process.
          </h2>

          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {SCHEDULE.map((row) => (
              <div key={row.time} className="flex items-start gap-6">
                <span className="min-w-[120px] shrink-0 border border-gold/40 bg-black px-3 py-2 text-center font-display text-xs uppercase tracking-wider text-gold">
                  {row.time}
                </span>
                <div>
                  <p className="font-display text-xl uppercase text-parchment">
                    {row.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-parchment/70">
                    {row.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — ROLAND PHOTO */}
      <section className="relative min-h-[500px] overflow-hidden bg-black md:min-h-[600px]">
        <Image
          src="/images/roland/roland-teaching-wide.jpg"
          alt="Roland teaching during a live session"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 50%, transparent 100%)",
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
        <div className="relative flex min-h-[500px] flex-col justify-center px-8 py-16 md:min-h-[600px] md:px-16">
          <div className="max-w-xl">
            <p className="mb-4 font-display text-xs uppercase tracking-[0.25em] text-gold">
              Verified 7-Figure Trader · Trading Live Since 2017
            </p>
            <h2 className="font-display text-4xl leading-tight text-parchment md:text-5xl">
              I&rsquo;ve traded live on camera every day since 2017. This is
              what I built.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-8 text-parchment/80">
              Not a course. Not delayed analysis. Not someone who stopped
              trading to teach. I trade. Then I teach. Every single day.
            </p>
            <div className="mt-8">
              <CTAButton href="#pricing" variant="primary">
                Join Wolfpack
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FEATURE GRID */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-7xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold">
            Everything Inside
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
            The complete trading environment.
          </h2>

          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
            {FEATURE_BLOCKS.map((block, i) => (
              <div
                key={i}
                className="grid overflow-hidden border border-parchment/10 md:grid-cols-[1fr_1.5fr]"
              >
                <div className="relative aspect-video md:aspect-auto md:min-h-[200px]">
                  <Image
                    src={block.image}
                    alt={block.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <p className="font-display text-xs uppercase tracking-widest text-gold">
                    {block.label}
                  </p>
                  <h3 className="mt-2 font-display text-xl uppercase text-parchment">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-parchment/70">
                    {block.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — STUDENT PROOF WALL */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-7xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold">
            What&rsquo;s Possible
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
            The Pack delivers.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-parchment/80">
            Real traders. Real results. No actors. No fabricated screenshots.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-5">
            {PROOF.map((card) => (
              <div
                key={card.name}
                className="relative aspect-[3/4] overflow-hidden border border-gold/20"
              >
                <Image
                  src={card.src}
                  alt={`${card.name} — ${card.achievement}`}
                  fill
                  sizes="(min-width: 768px) 20vw, 50vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="font-display text-sm uppercase leading-tight text-parchment">
                    {card.name}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-gold">
                    {card.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-xs leading-5 text-parchment/52">
            Results are not typical and are shown for educational context only.
            Trading involves risk and no outcome is guaranteed.
          </p>

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

      {/* SECTION 7 — GRITTANI QUOTE */}
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

      {/* SECTION 8 — COMMUNITY PHOTO */}
      <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
        <Image
          src="/images/roland/wolfpack-group-drone.jpg"
          alt="The Wolfpack — Tahoe 2024"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
        />
        <div className="absolute bottom-0 left-0 right-0 pb-12 text-center">
          <p className="font-display text-4xl uppercase leading-none text-parchment md:text-6xl">
            The Wolfpack.
          </p>
          <p className="mt-2 font-display text-xl uppercase text-gold">
            Tahoe 2024 · 30+ Traders
          </p>
        </div>
      </section>

      {/* SECTION 9 — PRICING */}
      <section
        id="pricing"
        className="scroll-mt-20 border-y border-white/5 bg-black2 px-6 py-20"
      >
        <div className="mx-auto w-full max-w-5xl">
          <p className="mx-auto max-w-2xl text-center font-display text-2xl uppercase leading-tight text-parchment md:text-3xl">
            &ldquo;No contracts. Cancel anytime. Use the room when the process
            fits your trading.&rdquo;
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Monthly */}
            <article className="border border-white/10 bg-black p-6 md:p-8">
              <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
                Monthly
              </p>
              <div className="mt-4 font-display text-5xl text-parchment">
                $127
                <span className="ml-2 text-base font-normal text-gray">
                  /mo
                </span>
              </div>
              <p className="mt-4 text-base leading-7 text-parchment/76">
                The complete trading environment. Daily live sessions,
                watchlist, Trader Therapy, replays, playbook, journal, and
                community. Cancel anytime.
              </p>
              <div className="mt-8">
                <CTAButton href={WOLFPACK_CHECKOUT_URL} variant="primary">
                  Join Wolfpack
                </CTAButton>
              </div>
            </article>

            {/* Annual — featured */}
            <article className="relative border border-gold/60 bg-black p-6 md:p-8">
              <span className="absolute -top-3 left-6 bg-gold px-3 py-1 font-display text-xs uppercase tracking-wider text-black">
                Best Value
              </span>
              <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
                Annual
              </p>
              <div className="mt-4 font-display text-5xl text-parchment">
                $997
                <span className="ml-2 text-base font-normal text-gray">
                  /yr
                </span>
              </div>
              <p className="mt-2 text-base leading-7 text-parchment/76">
                $83.08/mo &middot; Save $527
              </p>
              <div className="mt-8">
                <CTAButton href={WOLFPACK_ANNUAL_CHECKOUT_URL} variant="primary">
                  Join Annually
                </CTAButton>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-parchment/60">
                If you&apos;re serious, commit. Annual members get priority
                consideration when APEX spots open.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <p className="font-display text-xs uppercase tracking-[0.25em] text-gold">
            Common Questions
          </p>
          <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
            Straight answers.
          </h2>

          <div className="mx-auto mt-10 max-w-3xl space-y-8">
            {FAQ.map((item) => (
              <div
                key={item.q}
                className="border-b border-parchment/10 pb-8"
              >
                <p className="font-display text-lg uppercase tracking-wider text-gold">
                  {item.q}
                </p>
                <p className="mt-3 text-base leading-7 text-parchment/80">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — FINAL CTA */}
      <section className="border-t border-white/5 bg-black2 px-6 py-20 text-center">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-5xl leading-none text-parchment md:text-7xl">
            Step inside the room.
          </h2>
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
            <CTAButton href={WOLFPACK_CHECKOUT_URL} variant="primary">
              Join Wolfpack — $127/mo
            </CTAButton>
            <CTAButton href="/apex" variant="secondary">
              Apply for APEX 1-on-1
            </CTAButton>
          </div>
          <p className="mt-6 text-sm">
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
