# PEC Lab Website — Next.js + Vercel (v5, collaboration-ready)

Public website for the Photoelectrochemistry & Electrocatalysis Laboratory, Department of Chemistry, Pusan National University.

## What changed in v5

- Split the previous large `data/siteData.ts` into independent content files so multiple lab members can work in parallel.
- Moved the Professor profile to `data/professor.ts`.
- Added dedicated files for publications, patents, presentations, members, alumni, news, gallery, and media.
- Kept `data/siteData.ts` only as a compatibility re-export; collaborators should not edit it.
- Added `COLLABORATION.md`, `data/README.md`, a Pull Request template, and `CODEOWNERS`.
- Included the current local Hero image at `public/images/hero/hero-main.png`.
- Kept the local-first / Wix-fallback image migration strategy.

## Team content files

```text
data/
├── professor.ts
├── publications.ts
├── patents.ts
├── presentations.ts
├── members.ts
├── alumni.ts
├── news.ts
├── gallery.ts
├── media.ts
├── README.md
└── siteData.ts     # compatibility only; do not edit normally
```

Suggested ownership:

| Area | Main file(s) |
|---|---|
| Site lead / PI | `data/professor.ts` |
| Members / Alumni | `data/members.ts`, `data/alumni.ts` |
| Publications / Patents | `data/publications.ts`, `data/patents.ts` |
| Presentations | `data/presentations.ts` |
| News | `data/news.ts` |
| Gallery / Images | `data/gallery.ts`, `data/media.ts`, `public/images/` |

## Collaboration workflow

1. Invite collaborators to the GitHub repository.
2. Create a branch from `main` for each task.
3. Edit the assigned content file only when possible.
4. Commit and open a Pull Request.
5. Check the Vercel Preview deployment.
6. The site lead reviews and merges.
7. Vercel automatically deploys `main` to production.

See **`COLLABORATION.md`** for the full workflow.

## Updating publications

Edit only `data/publications.ts`. Example:

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

`doi` automatically creates a DOI button. Every publication also receives a Google Scholar search button.

## Images

The site currently loads local files first and uses legacy Wix-hosted images only as fallbacks while migration is in progress.

The Hero image is local:

```text
public/images/hero/hero-main.png
```

See `public/images/IMAGE-GUIDE.txt` for the remaining expected image paths. Do not cancel Wix until all fallbacks are replaced and verified.

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
