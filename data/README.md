# Content data

This folder is intentionally split by responsibility so several lab members can work in parallel without editing the same large file.

| File | What to edit | Suggested owner |
|---|---|---|
| `professor.ts` | PI profile, experience, education, awards | Site lead |
| `members.ts` | Current lab members and email/profile source | People lead |
| `alumni.ts` | Alumni history | People lead |
| `publications.ts` | Papers, DOI, publisher links | Publications lead |
| `patents.ts` | Patents | Publications/IP lead |
| `presentations.ts` | Conference presentations and awards | Presentations lead |
| `news.ts` | Lab news and awards | News lead |
| `gallery.ts` | Gallery captions and fallback image URLs | Gallery lead |
| `media.ts` | Local image paths and temporary Wix fallbacks | Media lead |

## Rule

Edit the dedicated file only. `siteData.ts` is a compatibility re-export and should not be edited for normal content updates.

## Typical workflow

1. Create a branch from `main`.
2. Edit only your assigned data/media file(s).
3. Commit with a clear message.
4. Open a Pull Request.
5. Check the Vercel Preview URL.
6. Request review from the site lead.
7. Merge only after approval.
