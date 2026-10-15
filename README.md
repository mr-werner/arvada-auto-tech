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

- Real Arvada Auto Tech logo in the header and footer; favicon cut from the logo's gear emblem. Palette taken from the logo (gold #F5BE1E, orange #F0701A, maroon #7A1A12) on charcoal steel, with a diamond-plate texture as the signature motif (the old site used a diamond-plate photo).
- Hero uses the shop's own building photo, with a "Brakes & Alignment" sign tag that echoes the real sign over the bays. Rating, hours, address and phone sit in a diamond-plate bar right under the hero.
- Brakes and alignment (the shop's specialties) are featured first; the other six services are short, scannable tiles. Fixed the alignment copy (the old site's alignment blurb talked about brakes).
- Removed the four "Lorem ipsum" placeholder testimonials ("Name of the Client"). Shows five real verified-customer reviews from the shop's Mitchell1 review feed on the current site, quoted verbatim, plus the Google rating and a "Read reviews on Google" link.
- New "Recently serviced" work-order strip built from the real recently-serviced-vehicles feed on the current site.
- Certifications/affiliations strip with the badges from the current site: ASE Certified Master Technician, Advance Auto Parts, CarCareONE and Bridgestone cards; payment methods listed in one line.
- About section uses the shop's own photos (technician with the shop dog, service bay).
- Dropped the dead Google+ link, the cartoon video and the "#" menu headers. Footer/top bar link to Facebook, Yelp and Google.
- Makes list modernized; discontinued brands (Plymouth, Pontiac, Hummer, Mercury, Scion, AMC, Renault) folded into "older and discontinued models".
- Removed the generic warning-signs guide from the earlier concept; added an appointment request form.

## Before client presentation

- Confirm the Google rating and count. 4.8 / 307 is a fallback from a third-party listing checked 2026-10-14 (the current site shows 4.9 from 499 reviews across platforms).
- Confirm the ASE wording ("ASE Certified Master Technician" is taken from the badge on the current site) and the warranty terms ("we stand behind our work with a guarantee").
- Confirm the shop is happy to reuse the five verified-customer reviews and the recently-serviced entries (customer first names + last initials) from its Mitchell1 feed.
- Confirm "Advance Auto Parts affiliate" and the financing cards (CarCareONE, Bridgestone) are still current. O'Reilly and Wynn's logos on the current site could not be retrieved; add them if the shop wants them.
- Get permission for the photos (building, technician and shop dog, service bay) and higher-resolution originals of the bay photo.
- Add the shop's email and decide where appointment requests go. Restrict the Google Maps key that is exposed on the current site.
- Keep the independent-concept disclaimer visible; do not imply this is the company's official site.
- The countdown is display-only, not access control. The subdomain is public to anyone with the URL.
