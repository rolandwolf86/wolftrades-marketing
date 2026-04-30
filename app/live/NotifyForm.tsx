"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function NotifyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          intent: "general",
          source: "live-events",
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
      <p className="font-display text-lg uppercase tracking-wider text-bull">
        You’re on the list. We’ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="live-email">
        Email
      </label>
      <input
        id="live-email"
        name="email"
        type="email"
        required
        placeholder="your@email.com"
        className="w-full border border-white/10 bg-black px-4 py-3 text-base text-parchment placeholder:text-gray focus:border-bull focus:outline-none sm:flex-1"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center bg-bull px-6 py-3 font-display text-sm uppercase tracking-wider text-black transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Notify Me"}
      </button>
      {status === "error" && errorMessage ? (
        <p className="text-sm text-bear sm:basis-full">{errorMessage}</p>
      ) : null}
    </form>
  );
}
