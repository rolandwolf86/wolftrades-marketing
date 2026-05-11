import Image from "next/image";
import { ProofBadge } from "@/components/ProofBadge";
import { VideoEmbed } from "@/components/VideoEmbed";

export interface TestimonialProps {
  name: string;
  photo?: string;
  initials?: string;
  role?: string;
  quote: string;
  proof?: { value: string; label: string };
  videoSrc?: { type: "mux"; playbackId: string };
}

export function Testimonial({
  name,
  photo,
  initials,
  role,
  quote,
  proof,
  videoSrc,
}: TestimonialProps) {
  return (
    <article className="grid gap-6 border border-white/5 bg-black2 p-6 md:grid-cols-[auto_1fr] md:gap-8 md:p-8">
      <div className="flex items-start gap-4 md:flex-col md:items-stretch md:gap-6">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden border border-white/10 bg-black md:h-24 md:w-24">
          {photo ? (
            <Image
              src={photo}
              alt={`${name} portrait`}
              fill
              sizes="(min-width: 768px) 96px, 80px"
              className="object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center font-display text-2xl text-parchment/80">
              {initials ?? name.slice(0, 2).toUpperCase()}
            </div>
          )}
        </div>
        {proof ? (
          <ProofBadge size="sm" value={proof.value} label={proof.label} />
        ) : null}
      </div>
      <div className="flex flex-col gap-5">
        <blockquote className="font-display text-xl italic leading-snug text-parchment md:text-2xl">
          “{quote}”
        </blockquote>
        <figcaption className="text-sm text-gray">
          <span className="text-parchment">{name}</span>
          {role ? <span> · {role}</span> : null}
        </figcaption>
        {videoSrc ? (
          <VideoEmbed playbackId={videoSrc.playbackId} title={name} />
        ) : null}
      </div>
    </article>
  );
}
