# Arvada Auto Tech & Diagnostic Center — Blueprint WebStudio Concept

Independent, non-official redesign concept for http://arvadaautotech.com/ (Arvada, CO).
Preview: https://aat.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

All business content is in `src/site.js`; colors and fonts are in `src/theme.css`. `src/App.jsx` is the shared layout.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `arvada-auto-tech` (framework: Vite). Connect the repo under Vercel → Settings → Git so pushes to `main` deploy automatically.
Domain `aat.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional):

| Variable | Purpose |
|---|---|
| `VITE_CONCEPT_END_DATE` | Countdown end date in the concept widget (defaults to 2026-11-20) |
| `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID` | Live Google rating and review excerpts (`api/google-reviews.js`) |
| `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` | Request-form emails (`api/contact.js`). Without them the form shows a demo message |

The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## What changed from the current site

- Removed the four "Lorem ipsum" placeholder testimonials ("Name of the Client") and show real customer quotes plus live Google reviews once the Places env vars are set.
- Dropped the dead Google+ footer link and the "#" menu headers; navigation is one clean bar.
- Rewrote the alignment copy (the current alignment section talks about brakes).
- Modernized the makes list; discontinued brands (Plymouth, Pontiac, Hummer, Mercury, Scion, AMC) are folded into "older and discontinued models".
- Added an appointment request form and a quick warning-signs guide for brakes, alignment and check-engine lights.

## Before client presentation

- Confirm the Google rating and count. 4.8 / 307 is a fallback from a third-party listing checked 2026-10-14 (the current site shows 4.9 from 499 reviews across platforms).
- Confirm ASE certification wording (the site shows an "ASE Master" logo but no details) and the warranty terms ("we stand behind our work").
- The warning-signs guide is general guidance written for the concept; have the shop review it.
- The three quotes are copied from reviews on the current site; confirm the shop is happy to reuse them.
- Add the shop's email and decide where appointment requests go. Restrict the Google Maps key that is exposed on the current site.
- Replace the icon wordmark with the business's real logo, and add real photos with permission.
- Keep the independent-concept disclaimer visible; do not imply this is the company's official site.
- The countdown is display-only, not access control. The subdomain is public to anyone with the URL.
