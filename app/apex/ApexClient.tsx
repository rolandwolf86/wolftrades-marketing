"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { WOLFPACK_MONTHLY_URL } from "@/lib/links";

const DIFFERENTIATORS: ReadonlyArray<{ title: string; body: string }> = [
  {
    title: "Real-Time Execution Alerts",
    body: "The minute Roland touches buy, you get the notification. Not to copy it — to study the decision in real time.",
  },
  {
    title: "DM + Text Access to Roland",
    body: "For 4 months, you have direct access to Roland for questions, review, and correction.",
  },
  {
    title: "Live Voice Commentary",
    body: "Hear market commentary from Roland and top traders inside the ecosystem as the day unfolds.",
  },
  {
    title: "Personal Trade Review",
    body: "Your trades, your plans, your entries, your exits — reviewed with the goal of finding what can actually scale.",
  },
  {
    title: "Private APEX Cohort + Alumni for Life",
    body: "A small group of serious traders going through the same sprint. Alumni access forever.",
  },
  {
    title: "3 Years of Wolfpack Pro",
    body: "After APEX, you keep 3 years of Wolfpack Pro — the live room, tools, community, and ecosystem.",
  },
];

const APEX_FOR: ReadonlyArray<string> = [
  "You are already trading",
  "Your process is inconsistent",
  "You know you need structure",
  "You want direct correction",
  "You can handle honest feedback",
  "You are willing to track your trades",
  "You want to build a repeatable playbook",
];

const APEX_NOT_FOR: ReadonlyArray<string> = [
  "You want guaranteed results",
  "You want someone to trade for you",
  "You refuse to review your mistakes",
  "You are looking for shortcuts",
  "You cannot commit to the process",
];

const OFFER_STACK: ReadonlyArray<string> = [
  "4-month private mentorship with Roland",
  "DM access to Roland for 4 months",
  "Text access to Roland for 4 months",
  "Real-time trade alerts when Roland buys",
  "Live market voice commentary",
  "Personal trade review",
  "Private APEX cohort access",
  "DM access to other APEX members",
  "APEX alumni chat — lifetime",
  "3 years of Wolfpack Pro",
  "Full replay library",
  "Roland's complete playbook",
  "Journal + analytics",
  "Wolf Scanner",
  "Backtest Lab",
  "Risk calculator",
  "Playbook Builder",
  "Full community ecosystem",
];

const ACCOUNT_SIZES = [
  "Under $10K",
  "$10K – $25K",
  "$25K – $50K",
  "$50K – $100K",
  "$100K+",
] as const;

const EXPERIENCE = [
  "Under 1 year",
  "1–3 years",
  "3–5 years",
  "5+ years",
] as const;

export default function ApexClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const data = new FormData(event.currentTarget);
    const firstName = String(data.get("firstName") ?? "").trim();
    const lastName = String(data.get("lastName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const accountSize = String(data.get("accountSize") ?? "").trim();
    const experience = String(data.get("experience") ?? "").trim();
    const challenge = String(data.get("challenge") ?? "").trim();
    const whyApex = String(data.get("whyApex") ?? "").trim();

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`.trim(),
          email,
          phone: phone || undefined,
          source: "apex-application",
          intent: "apex",
          accountSize: accountSize || undefined,
          experience: experience || undefined,
          challenge: challenge || undefined,
          whyApex: whyApex || undefined,
        }),
      });
      if (!response.ok) {
        throw new Error("Lead request failed");
      }
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong. Email roland@wolftrades.com to apply.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* SECTION 1 — HERO (full-bleed APEX video, mountain graphic as poster fallback) */}
      <section className="relative overflow-hidden bg-black min-h-[70vh] md:min-h-[80vh]">
        <video
          src="/videos/apex-hero.mp4"
          poster="/images/roland/apex graphic hero.png"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.5) 40%, rgba(10,10,10,0.85) 100%)",
          }}
        />
        <div className="relative flex min-h-[70vh] flex-col justify-center px-6 py-20 md:min-h-[80vh] md:py-28">
          <div className="mx-auto w-full max-w-5xl">
            <p className="font-display text-xs uppercase tracking-[0.25em] text-gold">
              APEX 1-on-1 · Private Mentorship with Roland Wolf
            </p>
            <span className="mt-4 inline-flex bg-bear px-3 py-1 font-display text-xs uppercase tracking-wider text-parchment">
              Cohort 1 starts May 1 · 2 spots left
            </span>
            <h1 className="mt-6 font-display text-5xl leading-none text-parchment md:text-7xl">
              If you want me personally in your corner, this is APEX.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-parchment/85">
              A 4-month private mentorship for serious traders who want direct
              access to Roland, real-time execution context, personal trade
              review, and a structured sprint to build a trading process they
              can actually trust.
            </p>
            <a
              href="#apex-form"
              className="mt-10 inline-flex items-center bg-gold px-8 py-4 font-display text-sm uppercase tracking-wider text-black transition-colors duration-150 hover:bg-[#d4a832] active:scale-[0.98] motion-reduce:active:scale-100"
            >
              Apply for APEX 1-on-1
            </a>
            <p className="mt-3 text-sm text-parchment/60">
              Application only. Limited seats. No public checkout.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — VSL PLACEHOLDER */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-4xl leading-none text-parchment md:text-6xl">
            Watch this before you apply.
          </h2>
          <p className="mt-2 max-w-2xl text-lg text-gray">
            APEX is not a course or a signal room. It is direct mentorship
            for traders who are ready to be reviewed, challenged, and coached.
          </p>
          <div className="mx-auto mt-8 flex aspect-video w-full max-w-4xl items-center justify-center border border-gold/40 bg-[linear-gradient(90deg,#111111_25%,#1a1a1a_50%,#111111_75%)] bg-[length:200%_100%] animate-shimmer motion-reduce:animate-none">
            <span className="px-6 text-center font-display text-xl uppercase tracking-wider text-gold md:text-2xl">
              APEX 1-on-1 — VSL Coming Soon
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE PROBLEM */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-4xl leading-none text-parchment md:text-6xl">
            Most traders are not missing information.
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-8 text-parchment/80">
            <p>They are missing correction.</p>
            <p>They have videos. Indicators. Scanners. Watchlists.</p>
            <p>
              But they don&apos;t have someone looking directly at their
              process and saying:
            </p>
            <div className="my-6 space-y-2 border-l-2 border-gold pl-4 italic text-parchment">
              <p>&ldquo;This is working.&rdquo;</p>
              <p>&ldquo;This is noise.&rdquo;</p>
              <p>&ldquo;This is where your edge actually is.&rdquo;</p>
            </div>
            <p>That is what APEX is built for.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — THE GOAL */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-4xl leading-none text-parchment md:text-6xl">
            Four months to build the process you trade from.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-parchment/80">
            <p>The goal is not to memorize Roland&apos;s trades.</p>
            <p>
              The goal is to build your own playbook — your setups, your
              rules, your risk, your review process, your conditions, your
              standards.
            </p>
            <p>By the end, the standard is simple:</p>
          </div>
          <blockquote className="my-8 max-w-3xl border-l-4 border-gold py-2 pl-6 font-display text-2xl italic leading-tight text-parchment md:text-3xl">
            Can you explain exactly what you trade, why you trade it, when it
            is in play, where you are wrong, and how you manage it?
          </blockquote>
          <p className="max-w-3xl text-lg leading-8 text-parchment/80">
            That is the work.
          </p>
        </div>
      </section>

      {/* SECTION 5 — WHAT MAKES APEX DIFFERENT */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-4xl leading-none text-parchment md:text-6xl">
            You are not watching from the outside.
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {DIFFERENTIATORS.map((item) => (
              <article
                key={item.title}
                className="border-l-4 border-gold bg-black2 p-6"
              >
                <p className="mb-3 font-display text-lg uppercase tracking-wider text-gold">
                  {item.title}
                </p>
                <p className="text-base leading-7 text-parchment/80">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — WHO IT'S FOR */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-4xl leading-none text-parchment md:text-6xl">
            APEX is for traders who are ready to be coached.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 font-display text-xs uppercase tracking-widest text-gold">
                This may be for you if:
              </p>
              <ul className="space-y-3 text-parchment/80">
                {APEX_FOR.map((item) => (
                  <li key={item} className="flex gap-3 text-base">
                    <span aria-hidden className="text-bull">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-display text-xs uppercase tracking-widest text-gray">
                This is not for you if:
              </p>
              <ul className="space-y-3 text-parchment/60">
                {APEX_NOT_FOR.map((item) => (
                  <li key={item} className="flex gap-3 text-base">
                    <span aria-hidden className="text-bear">
                      ✗
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-base italic text-parchment/60">
            If that sounds harsh, good. Direct mentorship only works if you do.
          </p>
        </div>
      </section>

      {/* SECTION 7 — THE STANDARD */}
      <section className="bg-black px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-4xl leading-none text-parchment md:text-6xl">
            The standard is simple.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-parchment/80">
            <p>
              You should be able to teach your setup back. Not vaguely. Not
              emotionally. Clearly.
            </p>
            <p>
              What is the setup? When is it in play? Where is the risk? What
              is the target? What do you do if it fails?
            </p>
          </div>
          <blockquote className="my-10 max-w-3xl border-l-4 border-gold py-3 pl-6 font-display text-3xl italic leading-tight text-parchment md:text-4xl">
            &ldquo;You can teach back your exact setup to someone else, and
            they don&apos;t have any questions.&rdquo;
          </blockquote>
          <p className="mt-2 text-sm text-gray">— Roland Wolf</p>
        </div>
      </section>

      {/* SECTION 8 — OFFER STACK */}
      <section className="border-y border-white/5 bg-black2 px-6 py-20">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-4xl leading-none text-parchment md:text-6xl">
            What you get with APEX 1-on-1
          </h2>
          <ul className="mt-10 grid max-w-3xl gap-3 md:grid-cols-2">
            {OFFER_STACK.map((item) => (
              <li
                key={item}
                className="flex gap-3 font-display text-sm uppercase tracking-wider text-parchment/80"
              >
                <span aria-hidden className="text-bull">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 9 — APPLICATION FRAME */}
      <section className="bg-black px-6 py-16 text-center">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-4xl leading-none text-parchment md:text-6xl">
            Application only.
          </h2>
          <div className="mx-auto mt-4 max-w-xl space-y-3 text-lg text-parchment/80">
            <p>There is no public checkout.</p>
            <p>
              If your application looks like a fit, we will schedule a call
              and discuss next steps.
            </p>
            <p>Cohort 1 starts May 1. 2 spots remaining.</p>
          </div>
        </div>
      </section>

      {/* SECTION 10 — APPLICATION FORM */}
      <section
        id="apex-form"
        className="scroll-mt-20 border-t border-white/5 bg-black2 px-6 py-20"
      >
        <div className="mx-auto w-full max-w-2xl">
          <h2 className="mb-10 font-display text-4xl leading-none text-parchment">
            Apply for APEX 1-on-1
          </h2>

          {submitted ? (
            <div className="mx-auto max-w-2xl border border-bull/30 bg-black p-10 text-center">
              <p className="font-display text-3xl text-parchment">
                Your application has been received.
              </p>
              <p className="mt-4 leading-7 text-parchment/70">
                We review every application personally. If it looks like a
                fit, you&apos;ll hear from us within 48 hours.
              </p>
            </div>
          ) : (
            <>
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <Field
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  required
                />
                <Field
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  required
                />
                <Field
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
                <Field
                  name="phone"
                  type="tel"
                  placeholder="Phone (optional)"
                />

                <Select name="accountSize">
                  <option value="" disabled>
                    Select account size
                  </option>
                  {ACCOUNT_SIZES.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </Select>

                <Select name="experience">
                  <option value="" disabled>
                    Select experience
                  </option>
                  {EXPERIENCE.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </Select>

                <Textarea
                  name="challenge"
                  rows={4}
                  placeholder="What is your biggest trading challenge right now?"
                />
                <Textarea
                  name="whyApex"
                  rows={4}
                  placeholder="Why do you want to join APEX?"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="h-[56px] w-full rounded-none bg-gold font-display text-sm uppercase tracking-[0.15em] text-black transition-colors duration-150 hover:bg-[#d4a832] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 motion-reduce:active:scale-100"
                >
                  {loading ? "Submitting…" : "Submit Application →"}
                </button>

                {error ? (
                  <p className="mt-3 text-sm text-bear">{error}</p>
                ) : null}
              </form>

              <p className="mt-6 text-center text-xs text-gray">
                No guarantees. No shortcuts. Trading involves risk. Results
                are not typical.
              </p>
            </>
          )}
        </div>
      </section>

      {/* SECTION 11 — FINAL CLOSE (mountain peak as summit imagery) */}
      <section className="relative overflow-hidden border-t border-white/5 bg-black py-20 text-center">
        <Image
          src="/images/roland/apex graphic hero.png"
          alt="APEX — moonlit mountain peak"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.95) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-5xl px-6">
          <h2 className="font-display text-4xl leading-tight text-parchment md:text-5xl">
            If you want me personally in your corner, apply.
          </h2>
          <div className="mx-auto mt-6 max-w-xl space-y-3 text-lg text-parchment/70">
            <p>
              If you&apos;re not ready for direct mentorship, Wolfpack is
              where to start.
            </p>
            <p>
              If you&apos;re ready for a serious 4-month sprint, apply for
              APEX 1-on-1.
            </p>
          </div>
          <a
            href="#apex-form"
            className="mt-10 inline-flex items-center bg-gold px-8 py-4 font-display text-sm uppercase tracking-wider text-black transition-colors duration-150 hover:bg-[#d4a832] active:scale-[0.98] motion-reduce:active:scale-100"
          >
            Apply for APEX 1-on-1
          </a>
          <div className="mt-3">
            <Link
              href={WOLFPACK_MONTHLY_URL}
              className="inline-flex items-center border border-parchment/40 px-8 py-4 font-display text-sm uppercase tracking-wider text-parchment transition-colors duration-150 hover:border-gold hover:text-gold"
            >
              Join Wolfpack Instead
            </Link>
          </div>
          <p className="mx-auto mt-8 max-w-md text-xs text-gray">
            No guarantees. No shortcuts. Trading involves risk. Results are
            not typical.
          </p>
        </div>
      </section>
    </>
  );
}

const inputClasses =
  "w-full rounded-none border border-parchment/20 bg-black px-4 text-base text-parchment placeholder:text-gray/50 focus:border-gold/60 focus:outline-none";

function Field({
  name,
  type,
  placeholder,
  required = false,
}: {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className={`h-[52px] ${inputClasses}`}
    />
  );
}

function Select({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <select
      name={name}
      defaultValue=""
      required
      className={`h-[52px] cursor-pointer appearance-none ${inputClasses}`}
    >
      {children}
    </select>
  );
}

function Textarea({
  name,
  rows,
  placeholder,
}: {
  name: string;
  rows: number;
  placeholder: string;
}) {
  return (
    <textarea
      name={name}
      rows={rows}
      placeholder={placeholder}
      className={`resize-none px-4 py-3 ${inputClasses}`}
    />
  );
}
