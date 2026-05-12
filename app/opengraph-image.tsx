import { ImageResponse } from "next/og";

// Temporary code-generated OG card. Phase 2: replace with Roland's branded
// 1200x630 artwork (drop it at app/opengraph-image.png and delete this file).
//
// runtime = "edge" so @vercel/og uses its bundled font instead of resolving
// the Node default font via a file URL — the Node path errors on Windows builds.
export const runtime = "edge";

export const alt = "Wolf Trades — No gurus. No hype. Just proof.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 140,
            fontWeight: 900,
            color: "#F7F4EF",
            letterSpacing: -3,
            lineHeight: 1,
          }}
        >
          WOLF TRADES
        </div>
        <div
          style={{
            display: "flex",
            width: 360,
            height: 2,
            marginTop: 40,
            marginBottom: 40,
            backgroundColor: "#6B7280",
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 600,
            color: "#9CA3AF",
            letterSpacing: 6,
          }}
        >
          NO GURUS. NO HYPE. JUST PROOF.
        </div>
      </div>
    ),
    { ...size },
  );
}
