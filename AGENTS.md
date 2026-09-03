# AGENTS.md — tinnitus-blog (tinnitushelp.me)

Guidance for coding agents. Humans: this doubles as an onboarding note.

## What this is

A Next.js **pages-router** site (TypeScript + Emotion). Content is MDX. Deploys
automatically from `main` (Vercel). There is no staging; **a push to `main` is a
production deploy**, and `.github/workflows/notify-new-content.yml` fires a
social notification once it's live.

## Commands

| Task | Command | Notes |
| --- | --- | --- |
| Dev server | `npm run start` | port 3000. Regenerates content index + views first. (`start`, not `dev`, is the dev command here.) |
| Production build | `npm run build` | Must pass before any commit that touches rendered output. `postbuild` runs `next-sitemap`. |
| Typecheck | `npx tsc --noEmit` | Run after touching any `.ts`/`.tsx`. |
| Lint / format | `npm run lint` / `npm run format` | |

Node deps: both `package-lock.json` and `yarn.lock` exist — **npm** is primary.

## Content model

| Type | Files | Renders at |
| --- | --- | --- |
| Blog post | `content/posts/*.mdx` | `/blog/<slug>` &nbsp;← note: `/blog/`, files in `posts/` |
| Sound session | `content/zen/*.mdx` | `/zen/<slug>` |

- Post frontmatter: `title, date, description, image, tags, faq, sources`.
  `faq` (singular key) needs **4–5** entries and feeds both the visible
  `FaqSection` and `FAQPage` JSON-LD. `sources` needs **3–5** authoritative
  entries on any health post.
- Posts are typed as `MedicalWebPage` by default. Set `medical: false` in
  frontmatter for culture/history posts.
- SEO + schema: `src/pages/BlogPost/BlogPost.SEO.tsx`, builders in `src/lib/schema`.
  `updatedAt` comes from the **file mtime**, not frontmatter — editing a post
  bumps its "Last updated" date automatically.
- **Post structure:** opens with `<Blockquote>` → main `<Image>` → the first
  `## <Highlighter>` heading. Exactly **2** `<Image />`. Internal links use
  `/blog/` and `/zen/` prefixes and are bolded: `**[text](/path)**`.
- **Answer-first openings:** the first paragraph under the first heading directly
  answers the question the title implies, in ~40–60 words. For question/
  comparison posts, make the first heading match the exact search phrase
  ("Does CBT work for tinnitus?", "Is tinnitus genetic?").
- **YMYL health content: never invent an expert, a quote, a study or a
  statistic.** A prior generation left four fabricated "Dr. <Name>" quotes in
  the CBT post. Cite real, verifiable sources or say nothing.

## The quality gate

```
python3 ~/.claude/skills/publish-content-tinnitus/scripts/quality_gate.py <file>.mdx
```

Enforces the structure above plus: no em/en dashes or `--`, no curly quotes
(body AND frontmatter description), word count 1,200–2,500, tags from the fixed
vocab, no `## References` heading, `<AdComponent />` present and not adjacent to
an image.

**Legacy posts (roughly pre-2025) fail this gate** on bold-links, image naming
and heading style — that is expected. Do not mass-rewrite them to pass; only fix
what you're already editing, and never *add* a new gate failure. Compare the
gate output before and after your change.

## Conventions that bite

- **No em/en dashes (`—` `–`) or `--` anywhere in content.** Plain `-`.
- **No curly quotes anywhere in content**, including the frontmatter `description`.
- `public/content-index.json`, `public/sitemap.xml`, `src/data/views.json` are
  build-generated. They're committed in **structural/SEO** commits (a slug
  rename, a new schema) but not in routine "new post" commits — match the
  surrounding history.
- Slug renames: add a 301 in `next.config.js` (`redirects()` already has
  several), update every inbound `/blog/<old>` link in `content/posts/`, plus
  `src/const/faq.tsx` and any `src/pages/*` reference, plus the
  `content-database.json` key in `tinnitus-help-automation`.
- `tinnitus-help-automation` is the throwaway generation repo (`.claude/skills/`
  there is symlinked and canonical for the publish skill + gate). Its
  `content/posts/*.mdx` are stale copies — don't reconcile them with this repo.

## Verifying a change

1. `npm run build` — must pass. `npx tsc --noEmit` if you touched TS.
2. Gate any `.mdx` you edited; confirm no new failures vs. `git stash` baseline.
3. If visible in the browser: `npm run start`, load the page, check the rendered
   `<title>`, the answer-first first paragraph, and the `FAQPage` JSON-LD. For a
   slug change, `curl -sI` the old path and confirm a 308 to the new one.

## Git

- Trunk-based. Work on `main`. A push deploys and notifies.
- **Never add `Co-Authored-By: Claude` or any AI attribution to a commit.**
- Commit or push only when asked. Show the plan first.
