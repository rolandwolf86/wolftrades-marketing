# Wolf Trades — Marketing Site

The public-facing marketing site for Wolf Trades. Pairs with `wolftrades-platform`
(the member app at `app.wolftrades.com`).

## Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with brand tokens as CSS custom properties
- **Fonts:** Barlow Condensed 900 (display, uppercase) + Barlow 400/500 (body), via `next/font/google`
- **Analytics:** Vercel Web Analytics (auto) + GA4 placeholder via `@next/third-parties`
- **Lead capture:** API route `/api/lead` → Resend (notification email) + Supabase (insert row)
- **Hosting:** Vercel (separate project from the platform — `wolftrades-marketing`)

## Project structure

```
app/
  layout.tsx          # Root layout (fonts, Header, Footer, analytics)
  page.tsx            # /
  wolfpack/page.tsx   # /wolfpack
  pro/page.tsx        # /pro
  apex/page.tsx       # /apex
  platform/page.tsx   # /platform
  results/page.tsx    # /results
  about/page.tsx      # /about
  start/page.tsx      # /start
  live/page.tsx       # /live
  go/page.tsx         # /go
  api/lead/route.ts   # POST lead capture → Resend + Supabase
components/
  layout/Header.tsx
  layout/Footer.tsx
  Hero.tsx
  ProofBar.tsx
  TierCard.tsx
  ScreenshotCarousel.tsx
  TestimonialQuote.tsx
  CTAButton.tsx
  MMPEmbed.tsx
lib/
  fonts.ts            # next/font/google declarations
  resend.ts           # Resend client + sender config
  supabase.ts         # Service-role Supabase client (server-only)
```

## Brand tokens

Defined as CSS custom properties in `app/globals.css` and exposed as Tailwind
colors in `tailwind.config.ts`:

| Token         | Hex       | Tailwind class       |
|---------------|-----------|----------------------|
| `--black`     | `#0a0a0a` | `bg-black`           |
| `--black2`    | `#111111` | `bg-black2`          |
| `--gold`      | `#C9A84C` | `text-gold`          |
| `--parchment` | `#F7F4EE` | `text-parchment`     |
| `--gray`      | `#6B7280` | `text-gray`          |
| `--bull`      | `#16A34A` | `text-bull`          |
| `--bear`      | `#C1121F` | `text-bear`          |
| `--apex-green`| `#4ade80` | `text-apex-green`    |

## Local development

```bash
cp .env.local.example .env.local
# fill in keys (see "Environment variables" below)
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

See `.env.local.example` for the canonical list. Required for full functionality:

| Variable                          | Where used                | Required for           |
|-----------------------------------|---------------------------|------------------------|
| `NEXT_PUBLIC_SITE_URL`            | `app/layout.tsx` metadata | Absolute URLs / OG     |
| `NEXT_PUBLIC_GA_ID`               | `app/layout.tsx`          | GA4 (optional)         |
| `RESEND_API_KEY`                  | `lib/resend.ts`           | Lead notification mail |
| `RESEND_FROM_EMAIL`               | `lib/resend.ts`           | Lead notification mail |
| `RESEND_NOTIFY_EMAIL`             | `lib/resend.ts`           | Lead notification mail |
| `NEXT_PUBLIC_SUPABASE_URL`        | `lib/supabase.ts`         | Lead persistence       |
| `SUPABASE_SERVICE_ROLE_KEY`       | `lib/supabase.ts`         | Lead persistence       |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`   | (future client reads)     | Optional               |

The lead capture API gracefully degrades if either Resend or Supabase is
unconfigured — the response surfaces which side failed so partial-failure
states are observable.

### Supabase `leads` table

The API expects a table at `public.leads` with at least these columns:

```sql
create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  email       text not null,
  name        text,
  phone       text,
  source      text,
  intent      text,
  notes       text
);
```

## Deployment

This repo is deployed as a **separate** Vercel project from the platform —
not a monorepo. Push to the default branch deploys preview/production per
Vercel project settings.

## Status

Foundation only — no page copy is written yet. The component library is
present in placeholder form and accepts content props; once approved copy
arrives, components are wired into the route pages.
