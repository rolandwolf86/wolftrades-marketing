import Image from "next/image";
import { VideoEmbed } from "@/components/VideoEmbed";

export interface StudentSpotlightProps {
  slug: string;
  name: string;
  era: string;
  headline: string;
  subline?: string;
  sublineHref?: string;
  photo: string;
  story: string;
  bullets?: ReadonlyArray<string>;
  videoPlaybackId?: string;
}

export function StudentSpotlight({
  slug,
  name,
  era,
  headline,
  subline,
  sublineHref,
  photo,
  story,
  bullets,
  videoPlaybackId,
}: StudentSpotlightProps) {
  return (
    <section
      aria-labelledby={`spotlight-${slug}-name`}
      className="grid gap-8 border border-white/5 bg-black2 p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-12 md:p-10"
    >
      <div className="flex flex-col gap-5">
        <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-black">
          <Image
            src={photo}
            alt={`${name} — ${era}`}
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover object-top"
          />
        </div>
        {videoPlaybackId !== undefined ? (
          <VideoEmbed playbackId={videoPlaybackId} title={name} />
        ) : null}
      </div>
      <div className="flex flex-col justify-center gap-6">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-gray">
          {era}
        </p>
        <h3
          id={`spotlight-${slug}-name`}
          className="font-display text-4xl font-black uppercase leading-none text-parchment md:text-6xl"
        >
          {name}
        </h3>
        <div className="border-l-2 border-bull pl-5">
          <p className="font-display text-3xl font-black tabular-nums text-parchment md:text-5xl">
            {headline}
          </p>
          {subline ? (
            sublineHref ? (
              <a
                href={sublineHref}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="mt-2 inline-block text-xs uppercase tracking-[0.25em] text-gray underline decoration-bull/60 underline-offset-4 hover:decoration-bull"
              >
                {subline} →
              </a>
            ) : (
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray">
                {subline}
              </p>
            )
          ) : null}
        </div>
        <p className="text-base leading-relaxed text-parchment/80 md:text-lg">
          {story}
        </p>
        {bullets && bullets.length > 0 ? (
          <ul className="flex flex-col gap-2 text-sm text-parchment/80">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span aria-hidden className="text-bull">
                  ▸
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
