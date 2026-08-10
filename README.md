# Distinct Solutions & Technical Services

Marketing and lead-generation site for a British-run property maintenance,
technical services, renovation and fit-out company in Dubai, UAE.

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · fully static.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Editing the content

Almost all copy lives in three typed files — no CMS, no build step to learn.

| File | What it controls |
| --- | --- |
| `src/content/site.ts` | Phone number, WhatsApp, email, hours, navigation, the six process steps, the ten "Why Distinct" points, audience list, the new-customer offer |
| `src/content/services.ts` | Every service page. One array entry per service: copy, bullet list, FAQs, hero image, related services, page title and meta description |
| `src/content/gallery.ts` | The photographs, their alt text and captions |

**Adding a service** means adding one entry to `services.ts`. The page,
navigation entry, footer link, sitemap entry and JSON-LD are all generated
from it — no new files.

The phone number appears in one place (`site.ts`) and flows to every
call/WhatsApp button on the site.

## Photographs

Live in `public/gallery/`. After adding or replacing images, regenerate the
blur placeholders (average colour per photo, so images fade in from a matching
tone) and update `src/content/gallery.ts` with the new file, its intrinsic
width and height, and descriptive alt text.

## Contact form

`src/app/actions/enquiry.ts` is a server action. It validates with Zod
(`src/lib/enquiry.ts`), screens bots with a honeypot field plus a submission
time trap, and emails the enquiry via Resend.

**Without `RESEND_API_KEY` the site is still fully functional** — the form
validates, logs the enquiry to the server console, and tells the visitor to
call or WhatsApp instead. Copy `.env.example` to `.env.local` and fill it in
to switch email delivery on.

## Design system

Tokens are defined once in `@theme` in `src/app/globals.css`; components never
use raw hex.

The brand colours are vivid mid-tones, so they carry a contrast rule:

- **On light backgrounds** only Dark Teal `#006879` (6.45:1) and Ink `#052A33`
  (15.16:1) carry text. Cyan, Teal and Emerald measure 2.2–2.7:1 on white and
  are used **only** as gradient, icon fill and rules — never as text.
- **On Ink backgrounds** the full blue→emerald spectrum comes forward as accent
  text (5.7–6.9:1).

Keep to that split and the site stays WCAG AA throughout.

## Before launch

- Point `site.url` in `src/content/site.ts` at the live domain (it drives
  canonicals, the sitemap and JSON-LD).
- Set the Resend environment variables.
- Add the trade licence number to the footer — a credibility signal UAE
  customers look for.
- Set up Google Business Profile, and add analytics with `/thank-you` as the
  conversion event.
