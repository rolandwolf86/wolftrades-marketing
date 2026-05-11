# Cesc → Victor — Monday Launch Handoff

**From:** Cesc (Content Surfaces & Media)
**To:** Victor (Pages & Layout)
**Coordinator:** Ros
**Branch:** `feat/marketing-content`
**Status:** Cesc commits are landed. The edits below are Victor-owned files Cesc did not touch.

---

## 1. Verified figure updates

Apply exactly. No paraphrasing — copy is locked.

### 1.1 Jack Kellogg — `$20M+` → `$25M+`

```
app/page.tsx:15
  -   { value: "20", prefix: "$", suffix: "M+", label: "Jack Kellogg Career" },
  +   { value: "25", prefix: "$", suffix: "M+", label: "Jack Kellogg Career" },

app/go/page.tsx:146
  -            <p className={styles.proofStat}>{"$20M+"}</p>
  +            <p className={styles.proofStat}>{"$25M+"}</p>

components/HomeHero.tsx:74
  -            Jack Kellogg $20M+ · Brian $10M+ · 10+ seven-figure students
  +            Jack Kellogg $25M+ · Brian $10M (2024) · 10+ seven-figure students
```

Cesc already updated `lib/hall-of-fame.ts` (Jack `stat: "$25M+"`, substat now reads `"career profits · live count via profit.ly"`). No action needed there.

`components/TickerTape.tsx` checked — does not currently carry a Jack-specific figure. No edit.

### 1.2 Brian — drop "career profits" framing, lock to "$10M in 2024"

```
app/go/page.tsx:152
  -            <p className={styles.proofLabel}>Brian — career profits</p>
  +            <p className={styles.proofLabel}>Brian — $10M in 2024</p>

app/results/page.tsx:16  (inside VIDEO_PLACEHOLDERS array)
  -   "Brian @wareagletrader — $10M+ Career Profits",
  +   "Brian @wareagletrader — $10M in 2024",

components/HomeHero.tsx:74
  (same line as Jack edit — see 1.1)
```

### 1.3 Tim Grittani — drop the `$15M+ verified trader` attribution

Keep the two locked quotes. Strip the figure tag from the attribution line in all four locations.

```
app/about/page.tsx:109
  -                — Tim Grittani · $15M+ verified trader · Trading Tickers 2 ·
  +                — Tim Grittani · Trading Tickers 2

app/page.tsx:239
  -            — Tim Grittani · $15M+ verified trader · Trading Tickers 2 ·
  +            — Tim Grittani · Trading Tickers 2

app/results/page.tsx:251
  -            — Tim Grittani · $15M+ verified trader · Trading Tickers 2 ·
  +            — Tim Grittani · Trading Tickers 2

app/go/page.tsx:186
  -            — Tim Grittani · {"$15M+"} verified trader · Trading Tickers 2
  +            — Tim Grittani · Trading Tickers 2
```

Note: the trailing `·` (interpunct) is part of the original line; check each file's context — some lines feed into more text after. Keep prose grammatical; remove orphan separators if needed.

### 1.4 profit.ly "live count" caption under Jack figures

Cesc shipped `<ProofBadge>` with an `href` + `liveCount` variant for this. Suggested wiring (Victor's call where exactly to place):

```tsx
import { ProofBadge } from "@/components/ProofBadge";

<ProofBadge
  value="$25M+"
  label="Jack Kellogg"
  href="https://profit.ly/user/jackaroo"
  liveCount
/>
```

Recommended placements:
- `app/page.tsx` — near the AnimatedStats grid or under the home hero
- `app/go/page.tsx` — replace the inline `<p className={styles.proofStat}>` Jack block
- `app/results/page.tsx` — at the top of the Hall of Fame section
- `components/HomeHero.tsx` — optional, only if it doesn't crowd the existing copy

If you keep the existing visual treatment instead, append a small caption manually with the same href and `rel="noopener noreferrer nofollow"`. The locked copy for the caption: **"Live count via profit.ly →"**.

---

## 2. Gold rule violations — `text-gold` / `border-gold` outside APEX

Per locked design system: gold (`#C9A84C`) is **APEX-only**. Audit found 8 surfaces outside APEX context. Apply the swap matrix below.

| File | Line | Element | Old | New |
|---|---|---|---|---|
| `app/about/page.tsx` | 102 | Grittani quote left-border | `border-gold` | `border-bull` |
| `app/page.tsx` | 221 | Grittani eyebrow | `text-gold` | `text-parchment/60` |
| `app/page.tsx` | 227 | Quote border | `border-gold/40` | `border-parchment/30` |
| `app/page.tsx` | 232 | Quote border | `border-gold/40` | `border-parchment/30` |
| `app/page.tsx` | 343 | Eyebrow | `text-gold` | `text-parchment/60` |
| `app/page.tsx` | 356 | Bullet marker | `text-gold` | `text-bull` |
| `app/results/page.tsx` | 222 | Grittani eyebrow | `text-gold` | `text-parchment/60` |
| `app/results/page.tsx` | 234 | Quote border + text | `border-gold` | `border-bull` |
| `app/results/page.tsx` | 238 | Quote border | `border-gold/40` | `border-parchment/30` |
| `app/results/page.tsx` | 244 | Quote border | `border-gold/40` | `border-parchment/30` |
| `app/results/page.tsx` | 256 | Video placeholder border | `border-gold/40` | `border-parchment/20` |
| `app/results/page.tsx` | 258 | Placeholder text | `text-gold` | `text-parchment` |
| `app/wolfpack/page.tsx` | 327 | Grittani eyebrow | `text-gold` | `text-parchment/60` |
| `app/wolfpack/page.tsx` | 333 | Quote border | `border-gold/40` | `border-parchment/30` |
| `app/wolfpack/page.tsx` | 338 | Quote border | `border-gold/40` | `border-parchment/30` |
| `components/AnimatedStats.tsx` | 136 | Stat number | `text-gold` | `text-parchment` |
| `components/HallOfFameCarousel.tsx` | 167 | Carousel stat number | `text-gold` | `text-parchment` |

**Do not touch** `components/TierCard.tsx:19` — that's the `apex` variant only and gold there is legitimate.

Cesc already fixed `components/ProofBar.tsx:18` (gold → parchment).

While editing the Grittani sections, consider replacing the inline blockquote markup with `<VerifiedQuote>` (new component, see §4):

```tsx
import { VerifiedQuote } from "@/components/VerifiedQuote";

<VerifiedQuote
  quote="He has my respect."
  attribution="Tim Grittani"
  context="Trading Tickers 2"
/>
<VerifiedQuote
  quote="He's a guy of very high character."
  attribution="Tim Grittani"
  context="Trading Tickers 2"
/>
```

This both fixes the gold violation and stops the four-place duplication of the same markup.

---

## 3. SEO metadata wiring (per page, Victor commits)

Cesc shipped `lib/seo/metadata.ts`. For each page below, swap the existing `export const metadata: Metadata = { title, description }` block for a `buildPageMetadata` call.

### 3.1 The pattern

```ts
import type { Metadata } from "next";   // keep if other types used; remove if unused
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "...",            // existing title
  description: "...",      // existing description
  path: "/the-route",      // leading slash, no trailing
});
```

`buildPageMetadata` returns canonical, OpenGraph, and Twitter card fields automatically. The site-wide OG default lives at `public/og-default.png` (Roland to provide; until then a missing image is harmless — it 404s but doesn't break SSR).

### 3.2 The 9 pages to wire

| File | `path` value | Notes |
|---|---|---|
| `app/page.tsx` | `"/"` | **No `metadata` export exists today.** Add one. |
| `app/about/page.tsx` | `"/about"` | Replace existing block |
| `app/apex/page.tsx` | `"/apex"` | Replace existing block |
| `app/events/page.tsx` | `"/events"` | Replace existing block |
| `app/go/page.tsx` | `"/go"` | Replace existing block |
| `app/live/page.tsx` | `"/live"` | Replace existing block |
| `app/platform/page.tsx` | `"/platform"` | Replace existing block |
| `app/results/page.tsx` | `"/results"` | Replace existing block |
| `app/wolfpack/page.tsx` | `"/wolfpack"` | Replace existing block |
| `app/start/page.tsx` | `"/start"` | **No `metadata` export exists today.** Add one. |

The insight routes (`app/insights/page.tsx` and `app/insights/[slug]/page.tsx`) are already wired by Cesc — do not touch.

### 3.3 JSON-LD on selected pages

Add `<script type="application/ld+json">` blocks inside the page body (before `<main>` content, after any framework wrappers):

| Page | JSON-LD blob to inject |
|---|---|
| `app/page.tsx` | `ORG_JSON_LD` |
| `app/about/page.tsx` | `ORG_JSON_LD` + `PERSON_JSON_LD_ROLAND` |
| `app/apex/page.tsx` | `ORG_JSON_LD` |
| `app/wolfpack/page.tsx` | `ORG_JSON_LD` |

```tsx
import { ORG_JSON_LD, PERSON_JSON_LD_ROLAND } from "@/lib/seo/metadata";

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD_ROLAND) }}
/>
```

---

## 4. New components available

Cesc shipped these. Victor can adopt where it makes the page simpler.

| Component | Use case |
|---|---|
| `components/ProofBadge.tsx` | Inline figure tag (e.g. `$25M+ · Jack Kellogg`); optional href + liveCount |
| `components/VerifiedQuote.tsx` | Drop-in for Grittani sections — fixes gold violations + dedupes 4 copies |
| `components/Testimonial.tsx` | Single student card (photo + quote + optional ProofBadge + optional VideoEmbed) |
| `components/StudentSpotlight.tsx` | Full-width spotlight section for Jack/Brian/Kevin/Ethan |
| `components/VideoEmbed.tsx` | Placeholder-ready Mux slot. Pass `playbackId=""` for now — renders "Coming Soon" shimmer matching current `/results` treatment |

---

## 5. Phase 3 — image renames (post-launch, separate PR)

Not for Monday. Tracked here so the rename pass doesn't surprise you when it lands.

Files that currently have rough names but are referenced in pages — when these rename, the corresponding `<Image src=...>` paths must update in the same PR:

| Current | Proposed | Page that references it |
|---|---|---|
| `roland/HUGE CONFERENCE.JPG` | `events/trader-investor-summit-stage.jpg` | `app/results/page.tsx`, `app/page.tsx` |
| `roland/wolfpack-group-drone.jpg` | `events/wolfpack-tahoe-2024-drone.jpg` | `app/results/page.tsx`, `app/events/page.tsx`, `app/wolfpack/page.tsx` |
| `roland/wolfpack-group-arms.jpg` | `events/wolfpack-group-arms.jpg` | `app/events/page.tsx` |
| `roland/dallasgroup.JPG` | `events/dallas-bootcamp-group.jpg` | (not yet referenced — safe to rename) |
| `roland/wolf hero teaching.JPG` | `roland/roland-teaching-hero-2.jpg` (or keep) | `app/about/page.tsx`, `app/wolfpack/page.tsx`, `components/HomeHero.tsx`, `lib/insights.ts` |
| `roland/wolf hero teaching (2).JPG` | `roland/roland-teaching-alt.jpg` | `app/about/page.tsx` |
| `roland/rolandhugegroup.JPG` | `events/roland-huge-group.jpg` | `app/about/page.tsx` |
| `roland/IMG_8338.JPG` | `roland/roland-laptop-alt.jpg` | `app/platform/page.tsx` |

This is a coordinated rename. Cesc will produce a single bulk PR with all file moves + all page-edit pairings. Don't rename ad-hoc.

---

## 6. Phase 2 backlog (Cesc-owned; not for Monday)

- **Mux integration.** Install `@mux/mux-player-react`, swap `VideoEmbed.tsx` to use it, wire real playback IDs into `<VideoEmbed>` slots on `/results` and `StudentSpotlight`.
- **OG image route convention.** Drop `app/<route>/opengraph-image.{png,jpg}` files (1200×630) once Roland supplies the artwork. `buildPageMetadata` already references `/og-default.png` as the fallback.
- **MDX migration** for `/insights/[slug]` if content cadence justifies it.
- **Git LFS** for `proof/TG TT2.mkv` (98MB) and future video sources.

---

## 7. Files Cesc shipped in this round (for context — don't re-touch)

```
NEW   components/ProofBadge.tsx
NEW   components/VerifiedQuote.tsx
NEW   components/Testimonial.tsx
NEW   components/StudentSpotlight.tsx
NEW   components/VideoEmbed.tsx
EDIT  components/ProofBar.tsx                  text-gold → text-parchment
NEW   lib/seo/metadata.ts
NEW   lib/insights.ts
NEW   app/sitemap.ts
NEW   app/robots.ts
NEW   app/insights/page.tsx
NEW   app/insights/[slug]/page.tsx
EDIT  lib/hall-of-fame.ts                      Jack stat $20M+ → $25M+
NEW   public/images/students/.gitkeep
NEW   public/images/events/.gitkeep
DEL   public/images/roland/asdfadfs.jpg
DEL   public/images/roland/bee.jpg
DEL   public/images/roland/bostond - Copy - Copy - Copy.jpg
NEW   docs/handoffs/cesc-to-victor-launch.md   (this file)
```

Open questions still live in `C:\Users\rolan\.claude\plans\you-are-a-marketing-bright-brooks.md` §"Open questions for Ros". Most relevant for you:
- Gold-replacement default (Cesc shipped parchment; the table above uses parchment + bull-green — confirm before bulk-applying)
- Kevin/Ethan identities (needed before `StudentSpotlight` ships for those two)
- profit.ly link visibility scope (under every Jack figure vs. only `/` and `/results`)
