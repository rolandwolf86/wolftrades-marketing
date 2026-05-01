# Wolf Trades — Master Tracker

**Last updated:** 2026-05-01 (HOF synced, /apex video hero shipped)
**Maintainer:** Roland + Claude (via chat)
**Format:** Anyone can edit. Bump the `Last updated` line when you do.

This is the single canonical work tracker for `wolftrades-marketing`. Pair with
the Drive single-source-of-truth doc for brand/copy rules. Anything blocking a
release lands in **§1 BUGS**. Anything Roland needs to do himself lives in
**§4 Roland action items**.

## Quick context for incoming devs

- **Repo:** [`rolandwolf86/wolftrades-marketing`](https://github.com/rolandwolf86/wolftrades-marketing)
- **Stack:** Next.js 14 (App Router) + TypeScript + Tailwind, Vercel deploy
- **Local path:** `C:\Users\rolan\dev\wolftrades-marketing` (NEVER under OneDrive — node_modules breaks sync)
- **Live preview:** `wolftrades-marketing.vercel.app`
- **Live prod (post-cutover):** `wolftrades.com` (DNS pending)
- **Sister repo:** `rolandwolf86/wolftrades-platform` — owns the app at `app.wolftrades.com`. Anything auth/account-related lives there, not here.
- **Brand rules:** see auto-memory `feedback_marketing_brand_rules.md` + Drive doc `00 — INDEX + CONTEXT/wt-single-source-of-truth`
- **Workflow:** `npx tsc --noEmit` + `npm run build` clean before every push. Use `lib/links.ts` for all URLs. Commit format: `feat: ...` / `fix: ...` / `chore: ...`.

---

## §1 BUGS — Active

Severity: **P0** = blocks user / revenue · **P1** = brand violation or visible on site · **P2** = polish · **P3** = nice-to-have

| ID | Sev | Title | Where | Status |
|---|---|---|---|---|
| B-1 | **P0** | Magic-link signup fails ("error sending confirmation") | **Platform repo** — Supabase Auth | Open. Most likely default Supabase SMTP rate-limited (4/hr). Fix: configure Resend SMTP in Supabase Dashboard → Auth → Email Templates. Also verify `SITE_URL` allowlist includes both `app.wolftrades.com` and `wolftrades-platform.vercel.app`. |
| B-2 | **P0** | Password signup fails ("error setting up user") | **Platform repo** — Supabase trigger | Open. Most likely the `handle_new_user` trigger on `auth.users` is broken after a recent schema change (e.g., a NOT NULL column added without default). Diagnostic in §6 below. |
| B-3 | **P1** | Jack Kellogg figure mismatch | Marketing | `app/page.tsx` HALL_OF_FAME shows `$20M+ Career`. Verified-proof doc says `$13M+`. Pick one and reconcile both ends. |
| B-4 | **P1** | APEX Cohort 1 seat count mismatch | Marketing vs Platform | `app/apex/ApexClient.tsx:146` says "2 spots left". Platform constants say 7 filled / 3 open. Pick one. |
| B-5 | **P3** | RSC payload `$$` visible in DevTools | Marketing (non-issue, recurring user concern) | The doubled `$` is RSC hydration encoding, not visible to users. Documented in `feedback_rsc_double_dollar.md`. **Closed unless** Roland produces view-source HTML showing `$$20M+` in rendered body content (not in `<script>` blocks). |

## §2 Pending Activations — code shipped, manual config needed

| ID | Title | What's done | What's needed |
|---|---|---|---|
| A-1 | GHL Inbound Webhook integration | Code shipped (`d16dcc8`). `/api/lead` fires to GHL when env var is set. | (1) Roland: create GHL Workflow with Inbound Webhook trigger. (2) Add `GHL_WEBHOOK_URL` to Vercel project env. (3) Redeploy. (4) Verify via `/api/health/lead-pipeline`. |
| A-2 | Domain cutover to `wolftrades.com` | Vercel project deployed | Roland: DNS cutover to point apex + www at Vercel. Update `NEXT_PUBLIC_SITE_URL` env. |
| A-3 | 24h GHL health-check follow-up | Scheduled Claude task `bad6c134` for May 1 10:17 AM CDT | Session-only — dies if Roland exits the chat session before that fires. Make durable if he wants it surviving. |

## §3 Divergences — site state vs canonical

These are tracked but require Roland's call on which side is canonical before fixing.

| ID | Item | Marketing site | Canonical / verified | Resolution path |
|---|---|---|---|---|
| D-1 | Jack Kellogg career profits | $20M+ (in `HALL_OF_FAME` + `AnimatedStats`) | $13M+ (verified-proof doc) | Roland confirms, then update one side |
| D-2 | APEX Cohort 1 seats | "2 spots left" | 7 filled / 3 open (platform constants) | Roland confirms, then update one side |
| ~~D-3~~ | ~~Wolfpack Pro pricing structure copy~~ | **Resolved** 2026-05-01 — `/pro` page removed entirely; Pro is now in-funnel upsell only, not a public marketing page. Copy that mentions "3 years of Wolfpack Pro" as part of the APEX bundle (homepage tier card + `/apex` page) intentionally retained — those describe an upsell benefit, not a public sales offer. | ✅ |

## §4 Roland action items — only Roland can do these

| ID | Item | Blocks |
|---|---|---|
| R-1 | Create GHL Workflow + Inbound Webhook, add `GHL_WEBHOOK_URL` to Vercel, redeploy | A-1 (GHL pipeline activation) |
| R-2 | Confirm Jack Kellogg final figure ($13M+ or $20M+) | B-3 / D-1 |
| R-3 | Confirm APEX Cohort 1 actual seat count | B-4 / D-2 |
| R-4 | Confirm Aaron / Sebastien / Sandra / Carlos / Brandon Hanna / Tony / Michael Huddie figures (currently PENDING in Drive doc) | Several `/results` and `/page.tsx` proof claims rely on these |
| R-5 | Crop or replace `stage.JPG` / `wolf on stage.JPG` — both currently show old `www.rwtrades.com` URL on the conference screen behind him | E-3 (events page enhancement) |
| R-6 | Drop a soccer-era photo if one exists | E-1 (`/about` Section 2 enhancement) |
| ~~R-7~~ | ~~Decide on hero video swap~~ — **DONE** Roland approved 2026-05-01, video shipped in `37a970a` | ✅ |
| R-8 | Provide DNS cutover go-ahead for `wolftrades.com` | A-2 |
| R-9 | Drop headshots for **Brian, Brandon, Dom, Tony** — 4 Hall of Fame cards still render with initials placeholders. Files go in `public/images/proof/` with lowercase-hyphenated names. (Brandon WAS done; photo got removed in 2026-05-01 folder shuffle and needs a re-drop.) | Visual completeness on /, /results, /wolfpack carousels |
| R-10 | Approve/edit the 7 DRAFT story sentences in `lib/hall-of-fame.ts` for: **Dom, Huddie, Jack Schwarze, John, Phil, Sean, Stock Sniper Mike**. Currently published as drafts. | Brand-voice integrity on Hall of Fame copy |

## §5 Platform-team action items — separate repo

These are not in this repo's scope. Listed for visibility when Roland hands work off.

| ID | Item | Where |
|---|---|---|
| PL-1 | Configure Resend as Supabase Auth SMTP provider | Supabase Dashboard (platform project) → Auth → Email Templates → SMTP |
| PL-2 | Add `https://app.wolftrades.com/*` and `https://wolftrades-platform.vercel.app/*` to Auth → URL Configuration allowlist | Supabase Dashboard |
| PL-3 | Audit `auth.users` triggers (`handle_new_user` etc.) — verify schema matches the `profiles` table after recent migrations | Supabase Dashboard → Database → Triggers |
| PL-4 | Pull Auth logs filtered by failing test email to identify exact failure string | Supabase Dashboard → Logs → Auth Logs |
| PL-5 | Reconcile platform `APEX_SEATS_FILLED / APEX_SEATS_TOTAL` constants with marketing `/apex` copy (D-2) | Platform sidebar component |

## §6 Diagnostics — copy-paste ready

### Check Supabase Auth state from platform side
```sql
-- Recent auth user signups
SELECT id, email, created_at, confirmed_at
FROM auth.users
ORDER BY created_at DESC
LIMIT 10;

-- Triggers on auth.users
SELECT trigger_name, event_manipulation, action_statement
FROM information_schema.triggers
WHERE event_object_schema = 'auth' AND event_object_table = 'users';

-- Profile insert success rate
SELECT COUNT(*) profiles, (SELECT COUNT(*) FROM auth.users) auth_users
FROM public.profiles;
```

### Marketing-side health check
```bash
# Hit production health endpoint — confirms Supabase + Resend + GHL are live
curl -s https://wolftrades-marketing.vercel.app/api/health/lead-pipeline | jq .

# Expected when fully live:
# { "status": "ok", "services": [
#     {"name": "supabase", "status": "ok"},
#     {"name": "resend",   "status": "ok"},
#     {"name": "ghl",      "status": "ok"}
# ]}
```

### Lead capture smoke test (creates real records — use sparingly)
```bash
curl -X POST https://wolftrades-marketing.vercel.app/api/lead \
  -H "Content-Type: application/json" \
  -d '{"email":"smoke-test@wolftrades.com","name":"Smoke Test","source":"smoke-test"}'

# Expected: { "ok": true, "stored": true, "notified": true, "synced": true }
```

## §7 Enhancement queue — backlog

Tracked from prior site audits. Each is one isolated commit. Priority **E**-prefix = enhancement.

| ID | Spot | Asset / treatment | Priority |
|---|---|---|---|
| E-1 | `/about` §2 ORIGIN — soccer-era photo | Need photo from Roland (R-6) | P3 |
| E-2 | `/about` §4 FAMILY — currently single shot, could rotate to other family photos as added | Future asset adds | P3 |
| E-3 | `/events` Next Event section bg | Cropped `stage.JPG` once URL issue resolved (R-5) | P2 |
| ~~E-4~~ | ~~Atmospheric chart-overlay backgrounds~~ | **SHIPPED** `c585148` (wired to `/events` hero) | ✅ |
| ~~E-5~~ | ~~Mobile menu drawer — add `Log In` button~~ | **SHIPPED** `53dd25c` | ✅ |
| ~~E-6~~ | ~~`/results` §4 community photos 3 → 6~~ | **SHIPPED** `ffea336` | ✅ |
| ~~E-7~~ | ~~Homepage hero — video loop swap~~ | **SHIPPED** `37a970a` (autoplay/muted/loop/playsInline, `roland-standing.jpg` as poster fallback for slow connections) | ✅ |
| ~~E-8~~ | ~~`/platform` Workflow Map — Roland-laptop section bg~~ | **SHIPPED** `c708b43` (subtle 10% opacity bg behind whole grid, dark gradient overlay for legibility) | ✅ |
| ~~E-9~~ | ~~Wolfpack feature grid — Daily Watchlist + Trader Community swaps~~ | **SHIPPED** `9990f58` (4 of 6 now Roland-presence; Playbook Builder + Replay Library kept as screenshots since they're tool screens) | ✅ |
| E-10 | `/start` page — separate redesign session per Roland's earlier note ("That redesign is a separate session") | Roland-led | P2 |

## §8 Recently shipped — context for incoming devs

Last 10 commits, most recent first:

| Hash | Commit |
|---|---|
| _pending_ | feat: /apex hero — APEX video (apex-hero.mp4) replaces mountain graphic |
| `261c198` | feat: HOF — sync proof folder, add Jack Schwarze + Sean, swap /results hero to new shot (16 members; 12 photos + 4 initials) |
| `695d849` | feat: HOF carousel — recessed side cards (stack effect) + bull-green arrows + Phil photo wired |
| `8a06adf` | feat: unified Hall of Fame carousel — single component across /results, /, /wolfpack |
| `806d41d` | feat: 301 redirect /pro → /wolfpack (preserve link equity) |
| `0cdaf09` | chore: remove /pro page — Pro is now in-funnel upsell only |
| `9c1f880` | fix: sync photo assets — rename + commit images referenced by recent enhancement work (was 404ing in production) |
| `9bb8305` | docs: TRACKER — E-7 shipped, R-7 closed |
| `37a970a` | feat: homepage hero — video loop replaces static portrait (E-7) |
| `3293992` | docs: TRACKER — mark E-4, E-8 shipped |
| `c585148` | feat: /events hero — atmospheric chart bg overlay (E-4) |
| `c708b43` | feat: /platform Workflow Map — subtle Roland-laptop bg behind grid (E-8) |
| `f6ae1e8` | docs: TRACKER — mark E-5, E-6, E-9 shipped |
| `9990f58` | feat: /wolfpack feature grid — Daily Watchlist + Trader Community Roland-presence shots (E-9) |
| `ffea336` | feat: /results — community photos expanded 3→6 (E-6) |
| `53dd25c` | feat: mobile menu — add LOGIN ghost button (E-5) |
| `f892ff1` | docs: add master TRACKER for bugs, action items, enhancement queue |
| `d16dcc8` | feat: GHL inbound webhook + /api/health/lead-pipeline diagnostic |
| `8b35516` | feat: homepage feature tabs + timeline carousel — Roland-presence imagery |
| `b821375` | feat: /wolfpack — Roland-presence in feature grid + subtle Grittani bg |
| `641092c` | feat: /pro + /platform heroes — Roland portraits replace generic Hero/screenshot |
| `5444ba9` | feat: /apex — moonlit mountain peak hero graphic |
| `78a24c9` | feat: /results — full-bleed HUGE CONFERENCE hero |
| `5a17a7d` | feat: /about — wired imagery (Roland teaching, family, vision community) |
| `1f13176` | fix: swap horizontal lockups back to wolf-on-left variant |
| `e562b2a` | feat: homepage hero — Roland portrait + anti-guru headline + ticker tape |
| `0470040` | feat: nav logo → wolf lockup white-transparent, h-10 |

## §9 Locked specs / non-negotiables — DO NOT VIOLATE

(Subset of brand-rules memory file — full version in Drive doc)

- **Background:** `#0a0a0a` everywhere; section variation uses `#111111` only
- **Gold `#C9A84C`:** APEX accents + proof stat numbers (Jack/Brian/$20M+/etc.) ONLY. Not for general UI, not for primary CTAs.
- **Bull green `#16A34A`:** primary CTAs, eyebrows, active states, accents
- **Sharp corners everywhere — zero exceptions** (was one rounded-full dot, removed when HomeHeroShowcase was deleted)
- **Headlines:** Barlow Condensed 900 uppercase
- **Body / UI / data / nav:** Inter 400/500/600/700 (migrated from Barlow on 2026-04-29 — `--font-barlow` CSS var no longer exists)
- **NO** white backgrounds, NO purple, NO gradients except approved hero radial bull-green pulse + shimmer placeholders
- **Logo source of truth:** `public/images/logos/` (NOT `public/logos/`). Filenames: `wt-lockup-horizontal-{white,black}.png`, `wt-icon-{white,black}.png`. ⚠️ Logo names have been renamed 4+ times — always `ls public/images/logos/` to confirm before referencing.
- **NEVER:** mention Tim Sykes, mention Roland's location, show APEX price publicly
- **NEVER:** link directly to `app.wolftrades.com/register` from any marketing page (only post-`/start` form redirect)
- **`/go` and `/start`:** excluded from SiteChrome — no nav, no footer
- **APP_REGISTER_URL:** only used by `/start` form post-submit redirect. Never imported elsewhere.

## §10 How to update this file

1. **Add a new bug:** `B-N` row in §1 with severity, title, where it lives, status
2. **Mark something done:** Move to §8 with commit hash, delete from active sections
3. **Roland answers a question:** Update the divergence in §3 + corresponding action item in §4
4. **Bump `Last updated`** at the top whenever you commit to this file
5. **Reference the GitHub URL** when handing off — devs can pull it directly: `https://github.com/rolandwolf86/wolftrades-marketing/blob/main/TRACKER.md`
