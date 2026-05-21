// Mux dep (@mux/mux-player-react) is not installed yet. Until it is, this
// component renders the "Coming Soon" placeholder for every state so it can
// be wired into pages now without breaking the build. When the dep is added,
// replace the playbackId branch with the real <MuxPlayer /> element.

const ASPECT_CLASS = {
  "16/9": "aspect-video",
  "9/16": "aspect-[9/16]",
  "1/1": "aspect-square",
} as const;

export interface VideoEmbedProps {
  playbackId: string;
  title: string;
  poster?: string;
  aspectRatio?: keyof typeof ASPECT_CLASS;
  autoplay?: boolean;
  muted?: boolean;
}

const SHIMMER_BG =
  "bg-[linear-gradient(110deg,#111_0%,#1a1a1a_45%,#111_55%,#111_100%)] bg-[length:200%_100%]";

export function VideoEmbed({
  playbackId,
  title,
  aspectRatio = "16/9",
}: VideoEmbedProps) {
  return (
    <div
      role="img"
      aria-label={`${title} — video coming soon`}
      className={`flex w-full items-center justify-center border border-parchment/20 ${ASPECT_CLASS[aspectRatio]} ${SHIMMER_BG} animate-shimmer motion-reduce:animate-none`}
      data-mux-playback-id={playbackId || undefined}
    >
      <p className="px-6 text-center font-display text-base uppercase tracking-[0.25em] text-parchment/80 md:text-lg">
        {title}
        <span className="block text-xs tracking-[0.3em] text-gray/80 md:text-sm">
          Coming Soon
        </span>
      </p>
    </div>
  );
}
