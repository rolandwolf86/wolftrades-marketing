"use client";

import { useEffect, useRef } from "react";

export interface MMPEmbedProps {
  /** MyMMP / Manage My Pro embed URL or form ID */
  embedSrc?: string;
  /** Iframe title for accessibility */
  title?: string;
  /** Min height of the embed (px) */
  minHeight?: number;
  /** Optional className passthrough */
  className?: string;
}

export function MMPEmbed({
  embedSrc,
  title = "MMP Embed",
  minHeight = 600,
  className = "",
}: MMPEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // TODO: if MMP requires a script-tag-based embed instead of an iframe,
    // load it here and inject into containerRef.current.
  }, [embedSrc]);

  if (!embedSrc) {
    return (
      <div
        ref={containerRef}
        style={{ minHeight }}
        className={`flex w-full items-center justify-center border border-white/5 bg-black2 text-sm text-gray ${className}`.trim()}
      >
        {/* TODO: provide MMP embed URL */}
        MMP embed placeholder
      </div>
    );
  }

  return (
    <div ref={containerRef} className={className}>
      <iframe
        src={embedSrc}
        title={title}
        loading="lazy"
        style={{ minHeight, width: "100%", border: 0 }}
      />
    </div>
  );
}
