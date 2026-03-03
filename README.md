# Clinton Baker — Portfolio

A personal portfolio site showcasing selected projects, built with Next.js, React, and Tailwind CSS. The site features a hero section, a highlighted project with an embedded demo, and a project viewer for browsing case studies with links to code and demos.

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Radix UI** (via shadcn-style components)

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**

   ```bash
   npm run build
   npm start
   ```

## Project structure

- **`src/app/`** — App Router pages and layout (`page.tsx`, `layout.tsx`, `globals.css`)
- **`src/components/`** — React components:
  - `ProjectViewer.tsx` — Renders the project list and featured project
  - `ui/` — Reusable UI (button, card)
- **`src/lib/`** — Data and utilities:
  - `projects.ts` — Project definitions (title, overview, YouTube ID, GitHub URL, tech, featured flag)
  - `utils.ts` — Shared helpers (e.g. `cn` for class names)
- **`public/`** — Static assets (avatar, resume PDF, etc.)

## Editing content

- **Projects** — Add or edit entries in `src/lib/projects.ts`. Each project has: `id`, `title`, `slug`, `overview`, `youtubeId`, `githubUrl`, `screenshotUrl`, `tech`, optional `featured`, and `order`.
- **Resume / avatar** — Replace `public/clinton-baker-resume.pdf` and `public/clinton-b.png` as needed.
- **Copy and layout** — Update `src/app/page.tsx` for hero text, links (GitHub, LinkedIn, resume), and section structure.

## Scripts

| Command   | Description                |
| --------- | -------------------------- |
| `npm run dev`   | Start dev server (port 3000) |
| `npm run build` | Production build            |
| `npm start`     | Run production server       |
| `npm run lint`  | Run ESLint                  |

## Deploy

The app can be deployed to [Vercel](https://vercel.com) or any platform that supports Next.js. See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
