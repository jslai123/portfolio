# Lai Jiunn Shen — Portfolio (React + TypeScript + Vite)

## Run it locally

Requires Node.js 20 or newer.

```bash
npm install     # first time only
npm run dev     # opens http://localhost:5173
```

## Build for production

```bash
npm run build   # type-checks, then outputs to dist/
npm run preview # serve the built files to check them
```

## Deploy on Cloudflare Pages

In the Pages project settings, set:

- Framework preset: Vite
- Build command: npm run build
- Build output directory: dist

## Adding project screenshots

Each project card in the Projects section shows 3 images (2 stacked on the
left, 1 tall on the right). Take a screenshot, save it with the matching
filename below into `public/projects/`, and it shows up automatically on
the next reload, no code changes needed. Any of `.jpg`, `.jpeg`, `.png`, or
`.webp` works, whichever your screenshot tool saves by default. Until a
file exists, that slot shows a plain "Screenshot coming soon" placeholder.

```
public/projects/sarahs-sweet-delights-1.jpg (or .png / .webp)
public/projects/sarahs-sweet-delights-2.jpg
public/projects/sarahs-sweet-delights-3.jpg
public/projects/pricepoint-1.jpg
public/projects/pricepoint-2.jpg
public/projects/pricepoint-3.jpg
public/projects/driveeasy-motors-1.jpg
public/projects/driveeasy-motors-2.jpg
public/projects/driveeasy-motors-3.jpg
public/projects/novadrive-motors-1.jpg
public/projects/novadrive-motors-2.jpg
public/projects/novadrive-motors-3.jpg
```

Suggested screenshots per project (slot 3 is the tall one on the right,
so a page with more vertical content works well there):

- **Sarah's Sweet Delights**: (1) shop/product grid page, (2) a single
  product page, (3) the cart or checkout page
- **PricePoint**: (1) the dashboard, (2) the pricing calculator or
  what-if simulator, (3) the multi-product comparison view
- **DriveEasy Motors**: (1) the car listing homepage, (2) a car detail or
  bid page, (3) the admin panel
- **NovaDrive Motors**: (1) the homepage/search page, (2) the car detail
  modal, (3) the "My Cars" page

No strict size requirement since every slot crops with `object-cover`, but
aim for at least 1200px wide so it stays sharp. On Windows, `Win + Shift + S`
opens the snipping tool to grab a region of the screen.

## Where things live

- `src/App.tsx` sets out the hero section, navigation, and hero copy (unchanged full-screen video hero with a glassmorphic nav bar and bottom-left content)
- `src/components/TechMarquee.tsx` is the scroll-driven tech stack marquee
- `src/components/About.tsx` is the About section (Kanit font, gradient heading, scroll-reveal bio text)
- `src/components/Skills.tsx` is the white skills section with hover-focus glass cards
- `src/components/Projects.tsx` renders the sticky stacking project cards from `src/data/projects.ts`
- `src/components/Contact.tsx` is the contact section and footer
- `src/components/FadeIn.tsx`, `AnimatedText.tsx`, `ContactButton.tsx`, `GhostButton.tsx` are shared building blocks used across the sections below the hero
- `src/components/ShinyText.tsx` holds the sweeping gradient text used in the hero
- `src/index.css` covers the Tailwind import, font setup (Inter for the hero, Kanit for everything below via the `.font-kanit` class), and the `.gradient-heading` text-gradient utility

The background video is referenced by URL at the top of `src/App.tsx`.
To host it yourself instead, drop the file into a `public/` folder and
change that constant to `/your-file-name.mp4`.

The dark overlay sitting above the video is the div marked "Scrim" in
`App.tsx`. Remove it to see the raw video.
