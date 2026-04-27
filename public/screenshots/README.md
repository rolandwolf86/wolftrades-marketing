# /public/screenshots/

Drop real platform screenshots in this folder with these exact filenames:

| File | Subject |
|---|---|
| `chat.png` | Wolf Trades community chat — role badges, 8-figure traders visible |
| `wolfai.png` | Wolf AI Coach — 5 modes, radar visualization, market pulse panel |
| `scanner.png` | Wolf Scanner — 10,968 stocks, real-time momentum data |
| `edgelab.png` | Edge Lab — 1,025 trades analyzed, equity curve, win rate |
| `feed.png` | Community feed — real trade posts, WIN badges, live discussion |

## Once images are added

The home page (`app/page.tsx`) currently renders inline placeholder cards in a
`SCREENSHOT_PLACEHOLDERS` grid. To switch to real images:

1. Drop the five PNGs above into this folder.
2. In `app/page.tsx`, replace the placeholder grid section with the
   `<ScreenshotCarousel />` component:

```tsx
import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";

<ScreenshotCarousel
  screenshots={[
    { src: "/screenshots/chat.png",     alt: "...", caption: "..." },
    { src: "/screenshots/wolfai.png",   alt: "...", caption: "..." },
    { src: "/screenshots/scanner.png",  alt: "...", caption: "..." },
    { src: "/screenshots/edgelab.png",  alt: "...", caption: "..." },
    { src: "/screenshots/feed.png",     alt: "...", caption: "..." },
  ]}
/>
```

Recommended dimensions: 1600×900 (16:9) PNG, sub-300KB each after compression.
