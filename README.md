# Rinse Bommerson Fotografie — Website

Complete photography business website for **Rinse Bommerson Fotografie** — a premium visual brand photography service based in the Netherlands.

## Tech Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **Framer Motion** — scroll animations, transitions
- **shadcn/ui** — UI primitives
- **TypeScript**

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

## Adding Your Logo

Replace the SVG placeholder in `components/Logo.tsx` with your actual logo files:

1. Add your logo files to `public/logos/`:
   - `logo-dark.svg` (or `.png`) — logo on light backgrounds
   - `logo-light.svg` (or `.png`) — logo on dark backgrounds
   - `logo-icon.svg` — icon-only version

2. Update `components/Logo.tsx` to use `next/image` with your actual files:

```tsx
import Image from "next/image";

// Replace the <svg> block with:
<Image
  src={variant === "dark" ? "/logos/logo-dark.svg" : "/logos/logo-light.svg"}
  alt="Rinse Bommerson Fotografie"
  width={160}
  height={40}
  priority
/>
```

## Adding Your Brand Guide & Fonts

### Custom Fonts

If you have licensed font files (.woff2):

1. Add them to `public/fonts/`
2. Update `app/globals.css` — replace the Google Fonts `--font-playfair` and `--font-dm-sans` CSS variables with `@font-face` declarations:

```css
@font-face {
  font-family: "YourSerifFont";
  src: url("/fonts/your-serif-font.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;
}

:root {
  --font-playfair: "YourSerifFont", Georgia, serif;
  --font-dm-sans: "YourSansFont", -apple-system, sans-serif;
}
```

3. Remove the Google Fonts `<link>` tags from `app/layout.tsx`

### Brand Colors

All colors are defined as CSS variables in `app/globals.css`:

```css
:root {
  --cream: #FAF8F5;         /* Page background */
  --warm-white: #F5F0EB;   /* Section alternates */
  --beige: #E8DDD0;         /* Borders, subtle bg */
  --charcoal: #1A1A1A;     /* Primary text, dark sections */
  --gold: #B8926A;          /* Accent color */
  --gold-light: #D4AB84;   /* Hover accent */
  --gold-pale: #F0E4D4;    /* Soft gold backgrounds */
}
```

To match your brand guide exactly, simply update these hex values.

## Site Structure

| Section | Component | ID |
|---|---|---|
| Navigation | `Navigation.tsx` | — |
| Hero | `Hero.tsx` | — |
| Problem/Recognition | `Problem.tsx` | — |
| Solution (Full Imagery Plan) | `Solution.tsx` | `#werkwijze` |
| Portfolio | `Portfolio.tsx` | `#portfolio` |
| Who Is This For | `Qualifier.tsx` | `#voor-wie` |
| Process / How It Works | `Process.tsx` | — |
| Testimonials | `Testimonials.tsx` | — |
| About | `About.tsx` | `#over` |
| Pricing | `Pricing.tsx` | `#investering` |
| FAQ | `FAQ.tsx` | `#faq` |
| Contact / Final CTA | `FinalCTA.tsx` | `#contact` |
| Footer | `Footer.tsx` | — |

## Adding Real Photos

Replace the gradient placeholder divs with real images using `next/image`:

```tsx
import Image from "next/image";

// Replace gradient div with:
<Image
  src="/portfolio/image-1.jpg"
  alt="Beschrijving van de foto"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 33vw"
/>
```

## Updating Copy

All Dutch copy is written directly in each component file. Search for the text you want to change and edit it in the relevant `components/sections/` file.

## Contact Form

The contact form in `FinalCTA.tsx` currently uses `mailto:` — update the email address:

```tsx
// In FinalCTA.tsx, line ~60:
window.location.href = `mailto:info@rinsebommersonfotografie.nl?...`
```

To connect to a real form backend, replace the `handleSubmit` function with a `fetch()` call to your API endpoint or a service like Resend, Formspree, or Netlify Forms.

## KVK & Legal Info

Update placeholder KVK number and legal pages in `components/sections/Footer.tsx`.
