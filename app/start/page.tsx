"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { START_FREE_URL } from "@/lib/links";
import styles from "./page.module.css";

const freeIncludes = [
  "Roland's Daily Watchlist - every stock he's watching with his plan, before the bell",
  "Weekly Market Breakdown - futures, indices, crypto, macro. Simple. Actionable.",
  "Community Access - 2,500+ traders, real posts, real results",
  "Risk Calculator - know your size before you enter a trade",
  "1 Playbook Slot - start building your edge",
  "Basic Trade Journal - upload and track your trades",
] as const;

export default function StartPage() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: firstName,
          email,
          source: "start-page",
        }),
      });

      if (!response.ok) {
        throw new Error("Lead request failed");
      }

      window.location.href = `${START_FREE_URL}?email=${encodeURIComponent(
        email,
      )}`;
    } catch {
      setError("Something went wrong. Try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <Image
            src="/wolf-trades-logo-horizontal-dark.png"
            alt="Wolf Trades"
            width={140}
            height={32}
            priority
            className={styles.logo}
          />
        </header>

        <section className={styles.hero}>
          <h1>Get Roland&apos;s Daily Watchlist Free.</h1>
          <p className={styles.subhead}>
            Every trading day, Roland shares the names he&apos;s watching, the
            plans, the levels, and the market context behind the move.
          </p>
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
              Scanner, Wolf AI, and everything else.
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
