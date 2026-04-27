"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const YEARS_OPTIONS = ["Less than 1", "1-2", "2-5", "5+"] as const;
const ACCOUNT_OPTIONS = [
  "Under $10K",
  "$10K-$50K",
  "$50K-$100K",
  "$100K+",
] as const;

export function ApplicationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const yearsTrading = String(data.get("yearsTrading") ?? "").trim();
    const accountSize = String(data.get("accountSize") ?? "").trim();
    const tradingStyle = String(data.get("tradingStyle") ?? "").trim();
    const why = String(data.get("why") ?? "").trim();
    const hearAbout = String(data.get("hearAbout") ?? "").trim();

    const notes = [
      yearsTrading ? `Years trading: ${yearsTrading}` : null,
      accountSize ? `Account size: ${accountSize}` : null,
      tradingStyle ? `Trading style: ${tradingStyle}` : null,
      why ? `Why APEX, why now: ${why}` : null,
      hearAbout ? `Heard about us via: ${hearAbout}` : null,
    ]
      .filter(Boolean)
      .join("\n\n");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          phone,
          intent: "apex",
          source: "apex-application",
          notes,
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          typeof body?.error === "string" ? body.error : `HTTP ${res.status}`,
        );
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border border-gold bg-black p-8">
        <p className="font-display text-2xl text-gold">
          Application received.
        </p>
        <p className="mt-3 text-base text-parchment/85">
          Applications are reviewed personally. You will hear back within 48
          hours. All information is kept private.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <Field label="Full name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Phone number" name="phone" type="tel" required />

      <Select label="Years trading" name="yearsTrading" required>
        <option value="">Select…</option>
        {YEARS_OPTIONS.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Select>

      <Select label="Current account size" name="accountSize" required>
        <option value="">Select…</option>
        {ACCOUNT_OPTIONS.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </Select>

      <Textarea
        label="What’s your primary trading style?"
        name="tradingStyle"
      />
      <Textarea label="Why APEX, why now?" name="why" required />
      <Field label="How did you hear about Wolf Trades?" name="hearAbout" />

      {status === "error" && errorMessage ? (
        <p className="text-sm text-bear">{errorMessage}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center bg-gold px-6 py-3 font-display text-sm uppercase tracking-wider text-black transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit Application"}
      </button>

      <p className="text-sm text-gray">
        Applications are reviewed personally. You will hear back within 48
        hours. All information is kept private.
      </p>
    </form>
  );
}

const inputClasses =
  "w-full border border-white/10 bg-black px-4 py-3 text-base text-parchment placeholder:text-gray focus:border-gold focus:outline-none";

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm uppercase tracking-wider text-parchment/80">
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className={`mt-2 ${inputClasses}`}
      />
    </label>
  );
}

function Textarea({
  label,
  name,
  required = false,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm uppercase tracking-wider text-parchment/80">
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </span>
      <textarea
        name={name}
        required={required}
        rows={4}
        className={`mt-2 ${inputClasses}`}
      />
    </label>
  );
}

function Select({
  label,
  name,
  required = false,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm uppercase tracking-wider text-parchment/80">
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </span>
      <select
        name={name}
        required={required}
        className={`mt-2 ${inputClasses}`}
      >
        {children}
      </select>
    </label>
  );
}
