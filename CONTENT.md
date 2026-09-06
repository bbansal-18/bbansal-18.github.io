# Filling in this site

Most pages are already filled from the LaTeX notes in [`text/`](text/). Edit Markdown in `src/content/` for ordinary updates — you should not need to touch components.

## Still missing

- GitHub URL in [`src/data/site.ts`](src/data/site.ts) (`github` is empty, so the link is hidden)
- Repo/demo links on True Figure, AI Study Buddy, and My Med Tracker
- Exact Head Boy years if 2022–2024 is wrong

## 1. Identity and contact

Edit [`src/data/site.ts`](src/data/site.ts):

- `name`, `tagline`, `intro`, `location`
- `email`, `github`, `linkedin`
- `skillGroups` (About page — prose plus tags, not skill bars)

## 2. Long-form About

Edit [`src/content/pages/about.md`](src/content/pages/about.md). Write the through-line from high school to now. Set `placeholder: false` when it is ready.

## 3. Everything else is Markdown

Each entry is a file with YAML frontmatter plus a body:

| Section | Folder | Detail page? |
| --- | --- | --- |
| Research | `src/content/research/` | yes (`/research/<filename>/`) |
| Experience | `src/content/experience/` | yes |
| Projects | `src/content/projects/` | yes |
| Writing | `src/content/writing/` | yes |
| Education | `src/content/education/` | no (all on `/education/`) |
| Awards | `src/content/awards/` | no |
| Activities | `src/content/activities/` | no |

Copy an existing file, rename it (`my-paper.md` → URL slug `my-paper`), and fill:

- `title`, `summary` (one or two sentences for cards)
- `start` — `YYYY` or `YYYY-MM` (sorts newest first)
- `end` — optional; use `Present` if ongoing
- `featured: true` — show on the home page (about two per section)
- `placeholder: false` — hide the sample banner
- `draft: true` — omit from the site entirely
- `tags`, `links` — `{ label, href }`

Bodies can use ordinary Markdown (`##` headings, lists, links). Research and project pages read well with **problem / what I did / outcome**.

## 4. Resume PDF

The Resume nav item opens [`/resume/`](src/pages/resume.astro), which embeds [`public/resume.pdf`](public/resume.pdf) (copied from [`text/resume-SWE.pdf`](text/resume-SWE.pdf)) and offers a download. Replace the public PDF if you switch resume versions.

## 5. GitHub Pages URL

[`astro.config.mjs`](astro.config.mjs) is set for a **project site**:

- `site`: `https://bhavyabansal.github.io`
- `base`: `/Portfolio`

If the GitHub username or repo name is different, change those two fields. If the repo is `username.github.io` (a user site), set `base: '/'`.

On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes.

## 6. Local preview

Node 22+ (this repo’s `package.json` engines field). Then:

```sh
npm install
npm run dev
```

The dev server serves under `/Portfolio/` because of `base`.
