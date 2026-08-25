# PEC Lab website collaboration workflow

The production site is deployed from the `main` branch. **Do not edit `main` directly.**

## 1. One task = one branch

Use short branch names such as:

- `members-update`
- `publications-2026`
- `gallery-summer-2026`
- `research-image-update`

For repeated work, add your initials or date, e.g. `dh/publications-2026-08`.

## 2. Work only in your area when possible

- People: `data/members.ts`, `data/alumni.ts`, `public/images/people/`
- Publications/IP: `data/publications.ts`, `data/patents.ts`
- Presentations: `data/presentations.ts`
- News: `data/news.ts`
- Gallery/media: `data/gallery.ts`, `data/media.ts`, `public/images/gallery/`
- PI profile: `data/professor.ts`

This separation is intentional: it reduces merge conflicts.

## 3. Commit messages

Use a simple verb + object format:

- `Add 2026 publications`
- `Update member profiles`
- `Add summer conference photos`
- `Fix professor award entry`

## 4. Pull Request checklist

Before requesting review:

- [ ] I did not edit `main` directly.
- [ ] My branch contains only the files needed for this task.
- [ ] Names, dates, DOI numbers, email addresses, and captions were checked.
- [ ] Images use lowercase English filenames with hyphens.
- [ ] I opened the Vercel Preview URL and checked desktop/mobile layout.
- [ ] I did not add secrets, passwords, private documents, or unpublished confidential data.

## 5. Review and merge

The site lead reviews the Pull Request and Vercel Preview. After approval, merge into `main`. Vercel then deploys the production website automatically.

## 6. Image naming

Preferred paths:

```text
public/images/
├── hero/
├── people/
├── research/
└── gallery/
```

Examples:

```text
dongho-seo.jpg
research-photoelectrochemistry.png
gallery-2026-kecs-spring-01.jpg
```

Avoid spaces, Korean characters, and names such as `final2_realfinal.jpg`.
