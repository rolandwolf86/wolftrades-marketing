import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pro",
};

export default function ProPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24">
      <h1 className="font-display text-5xl text-parchment">Pro</h1>
      <p className="mt-4 text-gray">
        {/* TODO: Pro page content */}
      </p>
    </section>
  );
}
