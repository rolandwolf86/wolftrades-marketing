import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start",
};

export default function StartPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24">
      <h1 className="font-display text-5xl text-parchment">Start</h1>
      <p className="mt-4 text-gray">
        {/* TODO: Start (lead capture / onboarding) content */}
      </p>
    </section>
  );
}
