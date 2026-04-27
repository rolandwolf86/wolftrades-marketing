import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live",
};

export default function LivePage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24">
      <h1 className="font-display text-5xl text-parchment">Live</h1>
      <p className="mt-4 text-gray">
        {/* TODO: Live (Stream/Mux embed) content */}
      </p>
    </section>
  );
}
