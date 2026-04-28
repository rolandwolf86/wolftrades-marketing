import type { Metadata } from "next";
import { CTAButton } from "@/components/CTAButton";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { ApplicationForm } from "./ApplicationForm";

export const metadata: Metadata = {
  title: "APEX",
  description:
    "APEX is 1-on-1 mentorship with Roland Wolf. 4 months. Maximum 10 traders. Application only. Cohort 1 starts May 1, 2026 — 2 spots remaining.",
};

const FEATURES: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Direct 1-on-1 with Roland daily",
    body: "Not office hours. Not a Slack channel. Direct access during the trading day when decisions matter most.",
  },
  {
    title: "Private APEX channels",
    body: "Private chat and private Den forum with your cohort. Group Mastermind every Tuesday and Thursday at 1pm EST.",
  },
  {
    title: "Direct DM access to Roland",
    body: "You can reach Roland directly. The way every other trading mentorship claims to offer but doesn’t.",
  },
  {
    title: "In-person cohort meetup",
    body: "Founding Cohort meets in person. Location and date confirmed after enrollment closes.",
  },
  {
    title: "Lifetime Wolfpack access",
    body: "Founding Cohort only. Your 4 months end. Your platform access doesn’t.",
  },
  {
    title: "Build your playbook with Roland",
    body: "By month 4, you have a documented, tested, risk-managed playbook in your own voice. Built with Roland.",
  },
];

const APEX_IS_FOR: ReadonlyArray<string> = [
  "Are already in the market and trading inconsistently",
  "Will commit 4 months of serious, focused work",
  "Want a documented playbook by the end",
  "Are ready to be coached, corrected, and held accountable",
  "Are serious about making trading their profession",
];

const APEX_IS_NOT_FOR: ReadonlyArray<string> = [
  "Brand new traders who haven’t placed a real trade",
  "Traders looking for alerts or shortcuts",
  "Anyone unwilling to do the work between sessions",
];

export default function ApexPage() {
  return (
    <>
      <Hero
        eyebrow="Cohort 1 · Founding Members · May 1, 2026 · 2 Spots Left"
        headline="Give me 4 months. I’ll rebuild you as a trader."
        subhead="APEX is 1-on-1 mentorship with Roland Wolf. Maximum 10 traders. Application only. If you’re the right fit, we’ll talk."
        primaryCta={
          <CTAButton href="/apex#apply" variant="primary">
            Apply for Cohort 1
          </CTAButton>
        }
      />

      {/* Urgency bar */}
      <div className="bg-bear">
        <p className="mx-auto max-w-7xl px-6 py-4 text-center font-display text-sm uppercase tracking-[0.2em] text-parchment md:text-base">
          Cohort 1 starts May 1, 2026 · Founding Member Pricing · 2 Spots
          Remaining
        </p>
      </div>

      {/* Founding members */}
      <section className="bg-black2 border-y border-white/5">
        <div className="mx-auto w-full max-w-5xl px-6 py-24">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            Why Founding Cohort Is Different
          </p>
          <h2 className="mt-4 font-display text-4xl text-parchment md:text-5xl">
            You will never be a Founding Member again.
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-parchment/85">
            Cohort 1 is the inaugural class. Founding members receive lifetime
            Wolfpack access included. A direct relationship with Roland that
            doesn’t end when the 4 months end. The pricing available to Founding
            Cohort will never exist again. Two spots remain. May 1, 2026.
          </p>
        </div>
      </section>

      {/* What APEX actually is */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            What APEX Actually Is
          </p>
          <h2 className="mt-4 font-display text-4xl text-parchment md:text-5xl">
            Not a course. Not group coaching. Actual mentorship.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {FEATURES.map((feature, index) => (
              <Reveal key={feature.title} delayMs={index * 100}>
                <article className="border border-white/5 bg-black2 p-8">
                  <h3 className="font-display text-2xl text-parchment">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base text-parchment/80">
                    {feature.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Graduation standard */}
      <section className="bg-black2 border-y border-white/5">
        <div className="mx-auto w-full max-w-5xl px-6 py-24">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            How You’ll Know It Worked
          </p>
          <h2 className="mt-4 font-display text-4xl text-parchment md:text-5xl">
            The graduation standard.
          </h2>
          <blockquote className="mt-10 font-display text-3xl leading-tight text-parchment md:text-5xl">
            “You’ll know you’ve graduated when you can teach your exact setup
            back to someone else — and they don’t have any questions.”
          </blockquote>
          <p className="mt-6 text-sm text-gray">
            — Roland Wolf · APEX Cohort 1 · Day 1
          </p>
        </div>
      </section>

      {/* Who APEX is for */}
      <section className="bg-black">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <h2 className="font-display text-4xl text-parchment md:text-5xl">
            APEX is not for everyone.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="border border-gold/40 bg-black2 p-8">
              <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
                APEX is for traders who:
              </p>
              <ul className="mt-6 space-y-3 text-base text-parchment/85">
                {APEX_IS_FOR.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="text-gold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-bear/50 bg-black2 p-8">
              <p className="font-display text-sm uppercase tracking-[0.25em] text-bear">
                APEX is not for:
              </p>
              <ul className="mt-6 space-y-3 text-base text-parchment/85">
                {APEX_IS_NOT_FOR.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="text-bear">
                      ✗
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Roland's closing quote */}
      <section className="bg-black2 border-y border-white/5">
        <div className="mx-auto w-full max-w-5xl px-6 py-24">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            In Roland’s Own Words
          </p>
          <blockquote className="mt-8 font-display text-3xl leading-tight text-parchment md:text-5xl">
            “I would have paid any amount that made sense to me that I could
            have afforded — for an opportunity to do something like this.”
          </blockquote>
          <p className="mt-6 text-sm text-gray">
            — Roland Wolf · APEX Cohort 1 · Day 1
          </p>
        </div>
      </section>

      {/* Application */}
      <section id="apply" className="scroll-mt-20 bg-black2">
        <div className="mx-auto w-full max-w-3xl px-6 py-24">
          <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
            Two Spots. Starts May 1.
          </p>
          <h2 className="mt-4 font-display text-4xl text-parchment md:text-5xl">
            No price on this page.
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-base text-parchment/85">
            <p>
              APEX is phone close only. Apply below. If you’re the right fit,
              we’ll reach out to schedule a call. We’ll discuss the program, the
              structure, the investment, and whether this is the right move for
              where you are right now.
            </p>
            <p>
              If you’re not ready for APEX, Wolfpack is where serious traders
              start.
            </p>
          </div>

          <div className="mt-12">
            <ApplicationForm />
          </div>
        </div>
      </section>
    </>
  );
}
