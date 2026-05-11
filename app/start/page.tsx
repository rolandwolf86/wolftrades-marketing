"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";
import { APP_REGISTER_URL } from "@/lib/links";
import { getDiscountCode } from "@/lib/discount";
import { trackLead, trackRegistration } from "@/lib/pixels";
import styles from "./page.module.css";

const freeIncludes = [
  "Roland's Daily Watchlist - every stock he's watching with his plan, before the bell",
  "Weekly Market Breakdown - futures, indices, crypto, macro. Simple. Actionable.",
  "Community Access - 2,500+ traders, real posts, real results",
  "Risk Calculator - know your size before you enter a trade",
  "1 Playbook Slot - start building your edge",
  "Basic Trade Journal - upload and track your trades",
] as const;

interface IntentVariant {
  headline: string;
  subhead: string;
  source: string;
  intent: string;
}

// Drives copy + form metadata based on `?intent=` query param.
// Intent values must match the zod enum in app/api/lead/route.ts.
const INTENT_VARIANTS: Record<string, IntentVariant> = {
  watchlist: {
    headline: "Get the free pre-market watchlist.",
    subhead:
      "Start with Roland's market prep, then build your workflow inside Wolf Trades.",
    source: "start-watchlist",
    intent: "watchlist",
  },
  risk: {
    headline: "Get the free risk calculator.",
    subhead: "Know your risk before you enter the trade.",
    source: "start-risk-calculator",
    intent: "risk",
  },
  journal: {
    headline: "Start your free trading journal.",
    subhead:
      "Track your trades, review your behavior, and build repeatable rules.",
    source: "start-journal",
    intent: "journal",
  },
  scanner: {
    headline: "Start with the free scanner preview.",
    subhead:
      "See how Wolf Trades helps you find movement without guessing.",
    source: "start-scanner",
    intent: "scanner",
  },
  default: {
    headline: "Start free.",
    subhead:
      "Create your account, inspect the platform, and build your workflow.",
    source: "start-page",
    intent: "general",
  },
};

function StartContent() {
  const params = useSearchParams();
  const intentParam = params?.get("intent") ?? "";
  const variant = INTENT_VARIANTS[intentParam] ?? INTENT_VARIANTS.default;

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const discountCode = getDiscountCode();
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: firstName,
          email,
          source: variant.source,
          intent: variant.intent,
          ...(discountCode ? { discount_code: discountCode } : {}),
        }),
      });

      if (!response.ok) {
        const detail = await response.text().catch(() => "");
        console.error("[start form] /api/lead failed", response.status, detail);
        throw new Error(`Lead request failed (${response.status})`);
      }

      trackLead({ intent: variant.intent });
      trackRegistration({ intent: variant.intent });
      window.location.href = `${APP_REGISTER_URL}?email=${encodeURIComponent(
        email,
      )}`;
    } catch (err) {
      console.error("[start form] submit error", err);
      setError("Something went wrong. Try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <Image
            src="/images/logos/wt-lockup-horizontal-white.png"
            alt="Wolf Trades"
            width={1200}
            height={300}
            priority
            className="h-10 w-auto object-contain object-left"
          />
        </header>

        <section className={styles.hero}>
          <h1>{variant.headline}</h1>
          <p className={styles.subhead}>{variant.subhead}</p>
          <p className={styles.microcopy}>
            No card. No commitment. Cancel nothing.
          </p>
        </section>

        <section className={styles.includes} aria-labelledby="free-includes">
          <p className={styles.eyebrow} id="free-includes">
            What Free Includes
          </p>
          <ul className={styles.includeList}>
            {freeIncludes.map((item) => (
              <li key={item}>
                <span aria-hidden="true">•</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>

          <div className={styles.lockedNote}>
            <p>
              Wolfpack unlocks the live room, Trader Therapy, full replays,
              deeper playbook access, and everything else in the core room.
            </p>
            <Link href="/wolfpack">See everything inside Wolfpack →</Link>
          </div>
        </section>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.field}>
            <span>First Name</span>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              autoComplete="given-name"
              required
            />
          </label>

          <label className={styles.field}>
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
            />
          </label>

          <button
            className={styles.submit}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Account..." : "Create Free Account →"}
          </button>
          {error ? <p className={styles.error}>{error}</p> : null}
          <p className={styles.formNote}>
            No card required · No commitment · Join 2,500+ traders
          </p>
        </form>

        <section className={styles.upgrade}>
          <p>Already know you want the full system?</p>
          <Link href="/wolfpack">Join Wolfpack — $127/mo →</Link>
        </section>

        <footer className={styles.footer}>
          © 2026 Wolf Trades · No financial advice implied · Results not typical
        </footer>
      </div>
    </main>
  );
}

export default function StartPage() {
  return (
    <Suspense fallback={null}>
      <StartContent />
    </Suspense>
  );
}
