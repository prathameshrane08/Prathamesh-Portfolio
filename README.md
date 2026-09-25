# Prathamesh Rane — Portfolio

Personal portfolio covering AI, robotics and software engineering projects.

Live: https://prathamesh-portfolio-ruddy.vercel.app

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- Tailwind CSS v4
- [Motion](https://motion.dev) for animation, [Lenis](https://lenis.darkroom.engineering) for smooth scrolling

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Project structure

```
app/                 Routes, metadata, sitemap and robots
  work/[slug]/       Project case study pages
components/
  hero/              Homepage hero
  sections/          Homepage sections (About, Projects, Contact, …)
  transitions/       Route transition overlay and link
  ui/                Shared UI (cursor, loader, lightbox, magnetic button)
data/
  site.ts            Name, site URL, contact links and CV path
  projects.ts        Project content for cards and case studies
hooks/               Shared React hooks
public/              CV, social preview and project images
```

## Content

- **Add or edit a project:** update `data/projects.ts`. Images go under `public/projects/<project>/`. The homepage, case study page and sitemap all pick up changes automatically.
- **Change contact details or the domain:** update `data/site.ts`.
