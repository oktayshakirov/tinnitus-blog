# AGENTS.md — tinnitus-blog (tinnitushelp.me)

Guidance for coding agents. Humans: this doubles as an onboarding note.

## What this is

A Next.js **pages-router** site (TypeScript + Emotion). Content is MDX. It is a
**static export** served by **Cloudflare Workers** (static assets + a small
Worker in `worker/index.js` for the view counter and the widget feed); see the
README's "Hosting" section. Deploys automatically from `main` via
`.github/workflows/deploy.yml`. There is no staging; **a push to `main` is a
production deploy**, and `.github/workflows/notify-new-content.yml` fires a
social notification once it's live.

## Commands

| Task | Command | Notes |
| --- | --- | --- |
| Dev server | `npm run start` | port 3000. Regenerates content index + views first. (`start`, not `dev`, is the dev command here.) |
| Production build | `yarn build` | Must pass before any commit that touches rendered output. Writes `out/`; `postbuild` runs `next-sitemap`, `fix-robots` and `finalizeExport` (image variants, widget feed). |
| Serve the build | `yarn preview` | `out/` + the Worker via `wrangler dev`, as production serves it. Needs `.dev.vars`. |
| Typecheck | `npx tsc --noEmit` | Run after touching any `.ts`/`.tsx`. |
| Lint / format | `npm run lint` / `npm run format` | |

Node deps via **yarn** (`yarn.lock` is the tracked lockfile; `package-lock.json` is git-ignored).

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
- Slug renames: add a 301 in `public/_redirects` (static export ignores
  `next.config.js` redirects), update every inbound `/blog/<old>` link in `content/posts/`, plus
  `src/const/faq.tsx` and any `src/pages/*` reference, plus the
  `content-database.json` key in `tinnitus-help-automation`.
- `tinnitus-help-automation` is the throwaway generation repo (`.claude/skills/`
  there is symlinked and canonical for the publish skill + gate). Its
  `content/posts/*.mdx` are stale copies — don't reconcile them with this repo.

## Verifying a change

1. `yarn build` — must pass. `npx tsc --noEmit` if you touched TS.
2. Gate any `.mdx` you edited; confirm no new failures vs. `git stash` baseline.
3. If visible in the browser: `npm run start`, load the page, check the rendered
   `<title>`, the answer-first first paragraph, and the `FAQPage` JSON-LD. For a
   slug change, `yarn build && yarn preview`, then `curl -sI` the old path and
   confirm a 301 to the new one (redirects only exist in the built site).

## Git

- Trunk-based. Work on `main`. A push deploys and notifies.
- **Never add `Co-Authored-By: Claude` or any AI attribution to a commit.**
- Commit or push only when asked. Show the plan first.
