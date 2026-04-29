import type { Metadata } from "next";
import { NotifyForm } from "./NotifyForm";

export const metadata: Metadata = {
  title: "Live Trading",
  description:
    "In-person trading events with Roland and the Pack. Dates and locations announced to the community first.",
};

export default function LivePage() {
  return (
    <section className="bg-black">
      <div className="mx-auto w-full max-w-3xl px-6 py-24 md:py-32">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-gold">
          In-Person Events
        </p>
        <h1 className="mt-4 font-display text-5xl leading-none text-parchment md:text-7xl">
          Wolf Trades Live.
        </h1>

        <div className="mt-8 space-y-5 text-lg text-parchment/85">
          <p>
            In-person trading events with Roland and the Pack. Dates and
            locations announced to the community first.
          </p>
          <p>
            Daily livestreams are a Wolfpack benefit — join the Pack to access
            them.
          </p>
        </div>

        <div className="mt-12 max-w-xl">
          <NotifyForm />
        </div>
      </div>
    </section>
  );
}
