import { buildPageMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { START_FREE_URL, WOLFPACK_MONTHLY_URL } from "@/lib/links";

export const metadata = buildPageMetadata({
  title: "Platform",
  description:
    "The Wolf Trades platform brings prep, live execution, review, playbooks, scanning, AI coaching, and community into one trader workflow.",
  path: "/platform",
});

const WORKFLOW = [
  {
    step: "Prep",
    body: "Build the day around watchlists, catalysts, levels, and context before the open.",
  },
  {
    step: "Execute",
    body: "Trade from a live workflow with defined risk and a room focused on what matters now.",
  },
  {
    step: "Review",
    body: "Import, journal, tag, and inspect the decisions that actually happened.",
  },
  {
    step: "Build",
    body: "Turn repeated setups into documented rules, screenshots, and review notes.",
  },
  {
    step: "Improve",
    body: "Use analytics, backtesting, and coaching prompts to find the next adjustment.",
  },
] as const;

const FEATURE_SECTIONS = [
  {
    eyebrow: "Watchlists",
    title: "Start with a prepared market.",
    body: "Sunday prep sets the weekly map. Morning watchlists narrow the field before the bell. The goal is to arrive with a plan instead of reacting to every move.",
    image: "/screenshots/community.png",
    alt: "Wolf Trades watchlist and community feed",
  },
  {
    eyebrow: "Live Sessions",
    title: "Execution happens in context.",
    body: "Market hours are built around live commentary, trade planning, patience, risk, and review. It is less about noise and more about watching how decisions are made.",
    image: "/screenshots/chat.png",
    alt: "Wolf Trades live chat rooms",
  },
  {
    eyebrow: "Journal + Risk",
    title: "Every trade needs a record.",
    body: "Track the entry, the exit, the thesis, the sizing, and the risk. The journal gives you a record to review instead of a vague memory of what happened.",
    image: "/screenshots/edge-lab.png",
    alt: "Wolf Trades journal and analytics",
  },
  {
    eyebrow: "Scanner",
    title: "Find movement without faking certainty.",
    body: "The scanner is designed to help serious traders focus the tape: momentum, liquidity, price behavior, and names that deserve review.",
    image: "/screenshots/scanner.png",
    alt: "Wolf Trades scanner table",
  },
  {
    eyebrow: "Wolf AI Coach",
    title: "Ask better questions after the trade.",
    body: "The AI coach is there for review, pattern recognition, and prompts that force clearer thinking around risk, behavior, and repeatable setups.",
    image: "/screenshots/wolf-ai.png",
    alt: "Wolf AI Coach interface",
  },
] as const;

const LABS = [
  "Win rate by setup",
  "P&L by time of day",
  "Average winner vs average loser",
  "Hold-time review",
  "Historical setup testing",
  "Trade pattern notes",
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-display text-xs uppercase tracking-[0.24em] text-bull">
      {children}
    </p>
  );
}

export default function PlatformPage() {
  return (
    <>
      <section className="overflow-hidden bg-black">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.82fr_1.18fr] md:py-24">
          <div className="flex flex-col justify-center">
            <SectionLabel>Wolf Trades Platform</SectionLabel>
            <h1 className="mt-5 font-display text-5xl leading-none text-parchment md:text-7xl">
              One workflow from prep to review.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-parchment/78">
              Prep the market, execute around a plan, review what happened, and
              turn your best setups into a repeatable process.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={START_FREE_URL} variant="primary">
                Start Free
              </CTAButton>
              <CTAButton href={WOLFPACK_MONTHLY_URL} variant="secondary">
                Join Wolfpack
              </CTAButton>
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden border border-white/10 bg-black2 sm:min-h-[430px] md:min-h-[520px]">
            <Image
              src="/images/roland/IMG_8338.JPG"
              alt="Roland mentoring traders in the loft studio"
              fill
              priority
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.25),rgba(10,10,10,0.55))]" />
            <div className="absolute inset-0 border border-bull/20" />
            <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 border-t border-white/10 bg-black/82">
              {["Live room", "Watchlist", "Review"].map((item) => (
                <div key={item} className="border-r border-white/10 px-4 py-4 last:border-r-0">
                  <p className="font-display text-xs uppercase tracking-[0.18em] text-parchment">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-black2">
        <Image
          src="/images/roland/roland-laptop.jpg"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover object-top opacity-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.78) 50%, rgba(17,17,17,0.95) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
          <SectionLabel>Workflow Map</SectionLabel>
          <div className="mt-8 grid gap-px bg-parchment/10 md:grid-cols-5">
            {WORKFLOW.map((item, index) => (
              <article key={item.step} className="bg-black/95 p-6">
                <p className="font-display text-sm uppercase tracking-[0.18em] text-bull">
                  0{index + 1}
                </p>
                <h2 className="mt-4 font-display text-3xl text-parchment">
                  {item.step}
                </h2>
                <p className="mt-4 text-sm leading-6 text-parchment/68">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {FEATURE_SECTIONS.map((feature, index) => (
        <section
          key={feature.eyebrow}
          className={index % 2 === 0 ? "bg-black" : "bg-black2"}
        >
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
            <div className={index % 2 === 0 ? "" : "md:order-2"}>
              <SectionLabel>{feature.eyebrow}</SectionLabel>
              <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
                {feature.title}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-parchment/76">
                {feature.body}
              </p>
            </div>
            <div className="relative min-h-[300px] overflow-hidden border border-white/10 bg-black sm:min-h-[420px]">
              <Image
                src={feature.image}
                alt={feature.alt}
                fill
                loading="eager"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-left-top"
              />
            </div>
          </div>
        </section>
      ))}

      <section className="border-y border-white/10 bg-black">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
          <div>
            <SectionLabel>Playbook Builder</SectionLabel>
            <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
              Build rules you can actually review.
            </h2>
            <p className="mt-6 text-lg leading-8 text-parchment/76">
              Save the setup, the screenshot, the conditions, the entry logic,
              the invalidation, and the notes after the trade. The playbook is
              where repetition becomes visible.
            </p>
          </div>
          <div className="grid gap-px bg-parchment/10 sm:grid-cols-2">
            {[
              "Setup screenshots",
              "Entry and exit rules",
              "Risk conditions",
              "Review notes",
            ].map((item) => (
              <div key={item} className="bg-black2 p-6">
                <p className="font-display text-xl uppercase tracking-[0.08em] text-parchment">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black2">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_0.9fr] md:py-28">
          <div>
            <SectionLabel>Edge Lab + Backtest Lab</SectionLabel>
            <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
              Review the behavior behind the P&L.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-parchment/76">
              Edge Lab and Backtest Lab help you inspect patterns, compare
              setups, and test ideas before they become larger habits.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-px bg-parchment/10 sm:grid-cols-2">
            {LABS.map((item) => (
              <div key={item} className="bg-black px-5 py-5">
                <p className="font-display text-sm uppercase tracking-[0.16em] text-parchment/82">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.95fr_1.05fr] md:items-center md:py-28">
          <div className="relative min-h-[320px] overflow-hidden border border-white/10 bg-black2 sm:min-h-[460px]">
            <Image
              src="/screenshots/community.png"
              alt="Wolf Trades community feed"
              fill
              loading="eager"
              sizes="(min-width: 768px) 48vw, 100vw"
              className="object-cover object-left-top"
            />
          </div>
          <div>
            <SectionLabel>Community</SectionLabel>
            <h2 className="mt-4 font-display text-4xl leading-none text-parchment md:text-6xl">
              A serious room beats trading alone.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-parchment/76">
              Role context, live discussion, watchlists, posts, lessons, and
              accountability live in one environment. The point is not chatter.
              The point is staying around traders doing the work.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black2">
        <div className="mx-auto w-full max-w-5xl px-6 py-20 text-center md:py-28">
          <h2 className="font-display text-5xl leading-none text-parchment md:text-7xl">
            Start with the workflow.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-parchment/76">
            Create a free account, inspect the platform, and upgrade from the
            same pricing page when you are ready.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <CTAButton href={START_FREE_URL} variant="primary">
              Start Free
            </CTAButton>
            <CTAButton href={WOLFPACK_MONTHLY_URL} variant="secondary">
              Join Wolfpack
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
