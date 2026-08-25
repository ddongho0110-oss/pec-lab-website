# PEC Lab Website — Next.js + Vercel

Migration prototype for the Photoelectrochemistry & Electrocatalysis Laboratory, Department of Chemistry, Pusan National University.

## What is included

- Home
- Research
- Professor
- Publications — No. 1–94, 2008–2026
- Patents — current Wix list
- Presentations — 2019–2026
- Members — current members
- News & Awards — current Wix list
- Gallery — transition structure + three group-photo links
- Alumni — current Wix list
- Responsive navigation
- Publication search + year filter
- SEO metadata, sitemap, and robots.txt

## Content management

Most routinely updated content is in:

`data/siteData.ts`

The arrays are:

- `publications`
- `news`
- `members`
- `patents`
- `alumni`
- `presentations`
- `gallery`

Adding a paper or award does not require editing the page layout.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Create a GitHub repository.
2. Upload this project to the repository.
3. In Vercel choose **Add New → Project** and import the repository.
4. Vercel should detect **Next.js** automatically.
5. Add an environment variable if you know the final domain:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.example
```

6. Deploy.

## Important before cancelling Wix

The current transition build still references several images hosted on `static.wixstatic.com`:

- professor portrait
- current member portraits
- three gallery group photos
- research/hero visual used in the prototype

Before deleting the Wix site, copy the lab's original image files into this project (for example `public/images/people`, `public/images/gallery`, and `public/images/research`) and replace the remote URLs with local paths. This is the last important step needed to make the new site independent of Wix.

## Notes on migrated text

The website content was transcribed from the lab's current Wix pages in August 2026. Before public launch, quickly proofread publication metadata, conference dates, alumni destinations, and member status because the Wix source contains a few spacing/typographical inconsistencies.
