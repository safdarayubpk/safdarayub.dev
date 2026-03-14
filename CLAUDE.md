# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Safdar Ayub (safdarayub.dev) — an AI Engineer & Full Stack Developer. This is a statically generated portfolio with blog, project showcases, and contact form.

**Current State:** Scaffolded + Git ready (Tasks 1.1–1.2 complete). Next.js 16 + React 19 + Tailwind 4 + TypeScript running. Repo: github.com/safdarayubpk/safdarayub.dev. Next: Task 1.3 (Deploy to Vercel).

## Raw Assets

Source assets are in `pictures/` at the project root. During build, selected images will be optimized and copied to `public/images/` with clean filenames.

```
pictures/
├── safdar_ayub_pic/
│   ├── safdar_ayub.png                  → Profile headshot (hero + about page)
│   └── safdarayub-with-sir-zia.png      → Photo with PIAIC founder (about page)
├── PersonalAIEmployee/                   → 3 screenshots (GitHub repo, Oracle Cloud VMs)
├── flow _todo-app/                       → 11 screenshots (task list, AI chatbot, login, views)
├── robotics-textbook/                    → 5 screenshots (homepage, chapters, content)
├── ai video generator/                   → 3 files (YouTube demo, Gemini image)
├── Artificial_Intelligence_piaic_certificate.png  → PIAIC certificate
└── Safdar_Ayub_Resume.pdf               → Resume PDF (needs Gold→Platinum update)
```

## Tech Stack

- **Framework:** Next.js 16 (App Router) with TypeScript
- **Styling:** Tailwind CSS 4 + ShadCN UI
- **Animations:** Framer Motion 11
- **Blog:** Local MDX files via next-mdx-remote + gray-matter
- **Contact Form:** React Hook Form + Zod validation → API route → Resend email service
- **Theme:** next-themes (dark mode default)
- **Package Manager:** pnpm
- **Deployment:** Vercel (SSG — all pages statically generated)

## Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Dev server at localhost:3000
pnpm build            # Production build
pnpm start            # Serve production build
pnpm lint             # ESLint via next lint
pnpm type-check       # TypeScript check (tsc --noEmit)
```

## Architecture

### Data Flow
```
src/content/projects/*.ts  →  src/lib/projects.ts  →  page.tsx  →  components
src/content/blog/*.mdx     →  src/lib/blog.ts      →  page.tsx  →  components
```

- Project data lives in TypeScript files under `src/content/projects/`, queried via `src/lib/projects.ts`
- Blog posts are MDX files under `src/content/blog/`, parsed via `src/lib/blog.ts` using gray-matter + next-mdx-remote
- Contact form submits to `src/app/api/contact/route.ts` which calls Resend API with in-memory rate limiting (3 req/IP/hour)

### Rendering Strategy
All pages use Static Site Generation (SSG). Dynamic routes (`/projects/[slug]`, `/blog/[slug]`) use `generateStaticParams`. The contact form is the only client-interactive feature requiring an API route.

### Server vs Client Components
- **Client components:** Navbar (theme toggle + mobile menu), Timeline (scroll animations), Project Filter (interactive state), Contact Form, Share Buttons, Back to Top, Theme Toggle
- **Server components:** Footer, Hero, Stats Bar, Project Card, Blog Post (MDX rendering)
- Framer Motion scroll animations use client wrapper components around server content

### Key Types
- `src/types/project.ts` — `Project` interface (slug, title, techStack, links, category, isFlagship, priority)
- `src/types/blog.ts` — `BlogFrontmatter` interface (title, date, tags, readTime, published)

## Content Source Documents

- **PORTFOLIO_CONTENT_DOCUMENT.md** — All text content, copy, and page structure. No content should be invented during build — everything comes from this document.
- **PORTFOLIO_TECHNICAL_SPEC.md** — All technical decisions, component architecture, design system (colors, typography, spacing), and build phases.
- **WIREFRAMES.md** — Text-based page layouts for all pages (desktop + mobile).
- **TASK_BREAKDOWN.md** — Phase 1 broken into 7 milestones, 42 ordered tasks.

## Design System

- **Colors:** Professional corporate blue theme. Light: primary `#1E40AF` (Blue 800). Dark: primary `#3B82F6` (Blue 500), background `#0B1120` (deep navy)
- **Fonts:** Inter (headings + body via next/font), JetBrains Mono (code blocks, blog pages only)
- **Spacing:** Tailwind defaults. Sections: `py-16 md:py-24`. Container: `max-w-6xl mx-auto px-4 md:px-6`

## Environment Variables

Only 3 needed (set in `.env.local`):
```
RESEND_API_KEY=re_xxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://safdarayub.dev
CONTACT_EMAIL=safdarayub@gmail.com
```

## Build Phases

The project is built in 3 phases (tracked in PORTFOLIO_TECHNICAL_SPEC.md §18):
1. **Foundation (MVP):** Core pages, layout, projects, contact form, SEO, deploy
2. **Blog + Polish:** MDX blog system, animations, RSS, breadcrumbs, analytics
3. **Content & Growth:** Remaining blog posts, assets, OG images, optimization

## Agent Skills

This project has 19 skills installed in `.agents/skills/`. They trigger automatically based on context — no manual invocation needed. Key skills for this build: `interactive-portfolio`, `landing-page-design`, `scroll-experience`, `framer-motion`, `shadcn`, `nextjs-seo`, `accessibility`, `fetch-library-docs`, `spec-driven-development`, `doc-coauthoring`.

## Key Conventions

- All animations must respect `prefers-reduced-motion: reduce`
- Framer Motion scroll animations use `whileInView` with `once: true`
- ShadCN UI components live in `src/components/ui/` (auto-generated, don't manually edit)
- Custom MDX components: `<ProjectLink>`, `<CodeBlock>`, `<Callout>`, `<TechBadge>`
- Git branching: `main` (production, auto-deploys), `dev` (development), `feature/*` branches
