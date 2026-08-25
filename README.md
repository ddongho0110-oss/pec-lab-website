# PEC Lab Website — Next.js + Vercel (v4)

Public website for the Photoelectrochemistry & Electrocatalysis Laboratory, Department of Chemistry, Pusan National University.

## v4 changes

- Removed migration/developer notes from public pages.
- Added the missing professor award entries from the legacy Wix profile.
- Added DOI support and Google Scholar buttons to Publications.
- Added DOI links for the four 2026 papers currently at the top of the publication list.
- Added local-first image loading. Upload the expected files under `public/images/`; until then the site safely falls back to the current Wix-hosted images.
- Improved mobile navigation, active menu states, accessibility attributes, and mobile overlay behavior.
- Polished Gallery and Footer text/layout.
- Updated the default sitemap/robots base URL to the current Vercel deployment.
- Next.js remains pinned to the patched 15.5.21 release.

## Updating the live site

The easiest route is to upload/replace the changed files in the existing GitHub repository. Vercel will deploy automatically after the commit.

For a complete replacement, copy all files and folders from this project into the repository root, replacing existing files.

## Images

See `public/images/IMAGE-GUIDE.txt`.

The important behavior is **local first, Wix fallback**. For example, once `public/images/people/ki-min-nam.jpg` exists, the Professor page automatically stops using the Wix-hosted portrait.

This means you do not need to replace every image at once. Do not cancel Wix until all image fallbacks have been replaced and the site has been checked.

## Publications

All publication data lives in `data/siteData.ts`.

Optional fields:

```ts
{
  no: 95,
  year: 2026,
  title: "Paper title",
  authors: "Author A; Author B; Nam, K. M.*",
  journal: "Journal Name",
  details: "2026, ...",
  doi: "10.xxxx/xxxxx",
  url: "https://publisher-page.example"
}
```

`doi` creates a DOI button automatically. Every publication also receives a Google Scholar search button.

## Development

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
```

## Current deployment

https://pec-lab-website-five.vercel.app/
