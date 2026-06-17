# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Static export to /out directory
npm run start    # Start production server
npm run lint     # Run ESLint
```

> ESLint is intentionally disabled during builds (`ignoreDuringBuilds: true` in `next.config.js`). There are no tests configured.

## Architecture

This is a **Next.js 13 App Router** site for VAGSTECH IT Services, configured as a **static export** (`output: 'export'`). It deploys to Netlify from the `/out` directory. Because of static export, no server-side features (API routes, `getServerSideProps`, dynamic route data fetching at runtime) are available.

### Directory layout

- `app/` — App Router pages: `/`, `/about`, `/contact`, `/courses`, `/know-more`, `/services/web-development`, `/services/game-development`, `/services/ecommerce`
- `components/Navbar.tsx` — Global fixed navbar with Radix UI dropdown for Services
- `components/home/` — Homepage sections: `HeroSection`, `ServicesSection`, `StatsSection`
- `components/animations/FadeIn.tsx` — Scroll-triggered entrance animation (Framer Motion + `react-intersection-observer`)
- `components/ui/` — shadcn/ui component library (do not hand-edit; add via `npx shadcn-ui add <component>`)
- `lib/utils.ts` — `cn()` helper combining `clsx` + `tailwind-merge`
- `hooks/use-toast.ts` — Toast hook wired to `sonner`
- `public/images/` — Static assets (logo, icons)

### Theming

All brand colors are CSS custom properties defined in `app/globals.css`:

```css
--dark-color: #054dc7
--light-color: #92a7cc
--fonts-color: #0f326f
--hover-color: #2f61b8
```

Reference them in JSX as `text-[var(--dark-color)]`, `bg-[var(--dark-color)]`, etc. Do not hardcode hex values inline.

Global utility classes defined in `globals.css` (use these instead of re-implementing):
- `.gradient-text` — blue gradient text via `bg-clip-text`
- `.nav-link` — nav anchor with animated underline on hover
- `.service-card`, `.feature-card`, `.course-card` — card styles with hover lift
- `.animate-float` — floating CSS animation
- `.stats-grid`, `.stat-card` — stats section layout

### Key libraries

| Library | Purpose |
|---|---|
| `framer-motion` | Page/element animations |
| `react-intersection-observer` | Trigger `FadeIn` when element enters viewport |
| `@radix-ui/*` | Headless UI primitives (used directly in Navbar, not through shadcn wrapper) |
| `@emailjs/browser` | Contact form email sending (no backend needed) |
| `sonner` | Toast notifications |
| `lucide-react` | Icons |

### shadcn/ui setup

`components.json` configures shadcn with CSS variables and the `@/` path alias. Add new components with:
```bash
npx shadcn-ui add <component-name>
```

### `next/image` with static export

`images: { unoptimized: true }` is set because Next.js image optimization requires a server. All `<Image>` components work, but without automatic optimization. External image domains (Unsplash) are used directly without `domains` config due to this setting.

---

## TODO — Game Auto-Sync from Hostinger

Automate game discovery: when a new game folder is uploaded to Hostinger `/public_html/games/`, the website should automatically list and embed it — no manual code changes needed.

### Phase 1 — Setup (needs user input)
- [ ] Get Hostinger SFTP credentials: `FTP_HOST`, `FTP_USER`, `FTP_PASS` (hPanel → FTP Accounts)
- [ ] Confirm server path to games folder (expected: `/public_html/games`)
- [ ] Decide on optional `game.json` format per game folder

### Phase 2 — Build-time scanner script
- [ ] Install `ssh2-sftp-client` as devDependency
- [ ] Create `scripts/fetch-games.js` — connects via SFTP, lists subfolders, reads `game.json` per folder (or auto-derives metadata), writes `src/data/games.json`
- [ ] Add `.env.local` with FTP vars (gitignored)

### Phase 3 — Dynamic game pages
- [ ] `app/games/page.tsx` — read from `src/data/games.json` instead of hardcoded array
- [ ] `app/games/[slug]/page.tsx` — dynamic route; embeds game via iframe using slug-derived URL
- [ ] `components/home/GamesShowcase.tsx` — read from `src/data/games.json`
- [ ] Remove hardcoded Frogie entry (will come from scanner)

### Phase 4 — Netlify build integration
- [ ] Update build script: `"build": "node scripts/fetch-games.js && next build"`
- [ ] Add env vars to Netlify dashboard: `FTP_HOST`, `FTP_USER`, `FTP_PASS`, `FTP_PATH`
- [ ] Test local build and Netlify deploy

### Phase 5 — Auto-trigger (optional)
- [ ] Create Netlify deploy hook URL
- [ ] Document curl command to trigger rebuild after uploading a game

### Technical decisions (already made)
- SFTP library: `ssh2-sftp-client`
- Each game folder can have an optional `game.json`: `{ title, description, genre, thumbnail }`
- Fallback: folder name auto-capitalized, no description
- Game URL pattern: `https://vagstech.com/games/{slug}/`
- Output: `src/data/games.json` (generated at build time, gitignored)
