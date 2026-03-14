# TASK BREAKDOWN — SAFDAR AYUB PORTFOLIO
## Phase 1: Foundation (MVP)

Each task is a single focused unit of work. Complete them in order — later tasks depend on earlier ones.

---

## Milestone 1: Project Setup
> Goal: Empty Next.js app running locally + deployed to Vercel

### Task 1.1 — Scaffold Next.js Project
- Run `pnpm create next-app` with App Router, TypeScript, Tailwind CSS, ESLint
- Verify `pnpm dev` runs at localhost:3000
- **Output:** Default Next.js welcome page loads

### Task 1.2 — Initialize Git & Push to GitHub
- `git init`, create `.gitignore` (Next.js template already provides one)
- Create GitHub repo `safdar-portfolio`
- First commit: "Initial scaffold"
- Push to `main`, create `dev` branch
- **Output:** Repo visible on github.com

### Task 1.3 — Deploy Empty Shell to Vercel
- Connect GitHub repo to Vercel
- Verify auto-deploy works on push to `main`
- **Output:** Live URL showing default Next.js page

### Task 1.4 — Create Environment Setup
- Create `.env.example` with 3 variables (no real values)
- Create `.env.local` locally with real `RESEND_API_KEY` (get from resend.com)
- **Output:** `.env.example` committed, `.env.local` in `.gitignore`

---

## Milestone 2: Design System & Layout
> Goal: Navbar, footer, dark mode working — the shell every page lives inside

### Task 2.1 — Install & Configure ShadCN UI
- Run `npx shadcn@latest init`
- Configure ShadCN with project's color palette
- Install initial components: `button`, `card`, `badge`, `input`, `textarea`, `select`, `skeleton`, `separator`, `sheet`
- **Output:** ShadCN components available in `src/components/ui/`

### Task 2.2 — Configure Design System Tokens
- Set up CSS variables in `globals.css` for light and dark mode colors (from tech spec §5)
- Configure Tailwind to use these CSS variables
- Set up Inter font via `next/font` in root layout
- **Output:** Colors, fonts, spacing all match the spec

### Task 2.3 — Build Root Layout + Theme Provider
- Set up `src/app/layout.tsx` with:
  - `next-themes` ThemeProvider (default: dark)
  - Inter font applied globally
  - HTML metadata base
- **Output:** Dark mode is the default, theme persists on refresh

### Task 2.4 — Build Navbar Component
- `src/components/layout/navbar.tsx` (client component)
- Desktop: logo/name left, nav links center, resume button + theme toggle right
- Active page link highlighted
- Sticky with backdrop blur on scroll
- **Output:** Navigation works across all routes

### Task 2.5 — Build Mobile Navigation
- `src/components/layout/mobile-nav.tsx` (client component)
- Hamburger icon triggers ShadCN Sheet (slide-out drawer from right)
- Same links as desktop + resume download + theme toggle
- Closes on link click or outside tap
- **Output:** Full mobile navigation working

### Task 2.6 — Build Footer Component
- `src/components/layout/footer.tsx` (server component)
- 3-column desktop: name/tagline, quick links, social icons
- Single column stacked on mobile
- Copyright line at bottom
- **Output:** Footer renders on all pages

---

## Milestone 3: Home Page
> Goal: Complete home page with all 7 sections

### Task 3.1 — Create Home Hero Section
- `src/components/home/hero.tsx`
- Desktop: 60/40 split — text left, profile photo placeholder right
- Mobile: photo on top, text + buttons below (stacked, full width)
- 3 CTA buttons: Download Resume, View Projects, Get in Touch
- Social icons row (GitHub, LinkedIn, Email, YouTube) using Lucide icons
- **Output:** Hero section matches wireframe layout

### Task 3.2 — Create Stats Bar Section
- `src/components/home/stats-bar.tsx`
- 5 stats in a horizontal row (desktop), 2x2 grid + 1 centered (mobile)
- Values: 23+, 148+, 4, 21+, Platinum
- Static numbers for now (animation added in Phase 2)
- Subtle background color to differentiate from adjacent sections
- **Output:** Stats bar renders with correct values

### Task 3.3 — Create Skills Grid Section
- `src/components/home/skills-grid.tsx`
- Section heading: "What I Do"
- 4 cards in 2x2 grid (desktop), single column (mobile)
- Each card: Lucide icon + title + short description
- Content from content doc §2.3
- **Output:** 4 skill cards render correctly

### Task 3.4 — Create Featured Projects Section
- `src/components/home/featured-projects.tsx`
- First, create project data files: `src/content/projects/*.ts` (all 4 projects)
- Create project types: `src/types/project.ts`
- Create data utility: `src/lib/projects.ts` (getProjects, getProjectBySlug)
- 3-column grid (desktop), single column (mobile)
- Each card: image placeholder, badge, title, one-liner, tech badges, "View Details" link
- "View All Projects" button at bottom
- **Output:** 3 project cards render with real data from content files

### Task 3.5 — Create Timeline Section
- `src/components/home/timeline.tsx`
- Desktop: vertical center line, cards alternate left/right with circle dots
- Mobile: line on left, all cards on right
- 5 entries: 2000, 2012, 2022, 2023, 2026
- Content from content doc §2.5
- "Read Full Story" link to /about
- **Output:** Timeline renders with all entries

### Task 3.6 — Create Testimonials Section (Placeholder)
- `src/components/home/testimonials.tsx`
- Section heading: "What People Say"
- Single centered card with placeholder text
- **Output:** Placeholder renders, ready for future content

### Task 3.7 — Create CTA Banner Section
- `src/components/home/cta-banner.tsx`
- Full-width primary color background
- Heading + subtext + "Get in Touch" button
- Centered layout
- **Output:** CTA banner renders at bottom of home page

### Task 3.8 — Assemble Home Page
- Wire all 7 sections into `src/app/page.tsx`
- Verify section spacing follows design system (py-16 md:py-24)
- Test desktop and mobile layouts
- **Output:** Complete home page scrolls through all sections

---

## Milestone 4: Projects Pages
> Goal: Projects listing + 4 individual project detail pages

### Task 4.1 — Build Project Card Component
- `src/components/projects/project-card.tsx`
- Reusable card: image placeholder, badge pill, title, one-liner, tech badges, action links
- Hover effect: subtle lift + shadow increase
- Flagship project gets visual emphasis (border glow or label)
- **Output:** Reusable component, already used by home featured projects

### Task 4.2 — Build Project Filter Component
- `src/components/projects/project-filter.tsx` (client component)
- Filter tags: All, AI Agents, Full Stack, Cloud-Native, Video/Media, Education
- Pill-shaped buttons, selected one is filled primary color
- Client-side filtering (no page reload)
- Mobile: horizontally scrollable row
- **Output:** Filtering works, shows/hides cards by category

### Task 4.3 — Build Tech Badge Component
- `src/components/projects/tech-badge.tsx`
- Small rounded pill with tech name
- Subtle background color
- **Output:** Reusable badge component

### Task 4.4 — Build Projects Listing Page
- `src/app/projects/page.tsx`
- Page hero: title + subtitle
- Filter tags
- 2-column grid (desktop), single column (mobile)
- All 4 project cards rendered
- **Output:** /projects shows all projects with working filter

### Task 4.5 — Build Project Detail Layout Component
- `src/components/projects/project-detail-layout.tsx`
- 65/35 split: content left, tech stack sidebar right
- Mobile: sidebar content moves above main content (tech stack as wrapping badges)
- Back to Projects link at top
- "Other Projects" row at bottom (3 small cards)
- **Output:** Reusable detail layout for all project pages

### Task 4.6 — Build 4 Project Detail Pages
- `src/app/projects/[slug]/page.tsx` with `generateStaticParams`
- Each page pulls data from `src/content/projects/*.ts`
- Personal AI Employee: 4-tier table, MCP servers table, engineering patterns list, live demo steps
- AI Video Agent: features list, pipeline description
- Flow: 8-phase evolution, features list
- Robotics Textbook: chapter list, RAG chatbot description
- **Output:** All 4 project URLs render with full content

---

## Milestone 5: About Page
> Goal: Complete about page with all sections

### Task 5.1 — Build About Story Section
- `src/components/about/story.tsx`
- Desktop: profile photo left, narrative text right
- Mobile: photo full width on top, text below
- Full narrative from content doc §3.2
- **Output:** Story section renders with photo placeholder + text

### Task 5.2 — Build About Values Section
- `src/components/about/values.tsx`
- 4-column grid (desktop), 2x2 (tablet), single column (mobile)
- 4 cards: Discipline, Quality First, Continuous Learning, Spec-Driven Dev
- **Output:** Values cards render

### Task 5.3 — Build Skills Detailed Section
- `src/components/about/skills-detailed.tsx`
- 6 skill categories in multi-column layout (desktop)
- Mobile: accordion or collapsible groups
- All skills from content doc §3.4
- **Output:** All skills listed by category

### Task 5.4 — Build Education Section
- `src/components/about/education.tsx`
- Table layout on desktop
- Stacked cards on mobile
- 6 entries from content doc §3.5
- **Output:** Education table/cards render

### Task 5.5 — Build By the Numbers Section
- `src/components/about/by-the-numbers.tsx`
- 7 metrics in a grid (reuse stats counter pattern from home)
- **Output:** All 7 metrics display

### Task 5.6 — Assemble About Page
- `src/app/about/page.tsx`
- Wire all sections: hero → story → values → skills → education → numbers → personal + CTAs
- **Output:** Complete /about page

---

## Milestone 6: Contact Page
> Goal: Working contact form that sends emails via Resend

### Task 6.1 — Set Up Resend Account
- Sign up at resend.com
- Add and verify domain (or use default Resend domain for testing)
- Get API key, add to `.env.local`
- **Output:** Resend API key working

### Task 6.2 — Build Contact Form API Route
- `src/app/api/contact/route.ts`
- POST handler: validate with Zod, rate limit (3/IP/hour), send via Resend
- `src/lib/send-email.ts` — Resend wrapper
- Return JSON success/error response
- **Output:** API route works via curl/Postman test

### Task 6.3 — Build Contact Form Component
- `src/components/contact/contact-form.tsx` (client component)
- React Hook Form + Zod validation
- 4 fields: name, email, subject dropdown, message textarea
- Submit button with loading spinner
- Success/error messages
- **Output:** Form submits and sends real email

### Task 6.4 — Build Contact Links Component
- `src/components/contact/contact-links.tsx`
- Direct contact: email, LinkedIn, GitHub, YouTube, phone
- Location + availability + timezone
- **Output:** Contact info renders with clickable links

### Task 6.5 — Assemble Contact Page
- `src/app/contact/page.tsx`
- Desktop: form left (55%), info right (45%)
- Mobile: info on top, form below
- **Output:** Complete /contact page with working form

---

## Milestone 7: Finishing Touches (MVP)
> Goal: Error pages, SEO, resume download, final deploy

### Task 7.1 — Build 404 Page
- `src/app/not-found.tsx`
- Title, message, 3 CTA buttons (Home, Projects, Contact)
- **Output:** 404 page renders on invalid URLs

### Task 7.2 — Build Error Page
- `src/app/error.tsx` (client component)
- Title, message, "Go Home" button
- **Output:** Error boundary catches runtime errors

### Task 7.3 — Add Resume Download
- Place PDF in `public/resume/Safdar_Ayub_Resume.pdf`
- Resume button in navbar and hero already links here
- Verify download works
- **Output:** PDF downloads on button click

### Task 7.4 — Implement SEO Metadata
- Root layout: `metadata` object with title template, description, openGraph, twitter
- Each page: individual `metadata` export or `generateMetadata`
- Per-page titles from content doc §10
- **Output:** Meta tags visible in page source

### Task 7.5 — Add Sitemap & Robots
- `src/app/sitemap.ts` — auto-generates from all pages + project slugs
- `src/app/robots.ts` — allow all, link to sitemap
- **Output:** /sitemap.xml and /robots.txt accessible

### Task 7.6 — Add Structured Data (JSON-LD)
- Person schema in root layout via `<script type="application/ld+json">`
- Content from content doc §10
- **Output:** Structured data validates in Google's testing tool

### Task 7.7 — Final Review & Deploy
- Test all pages on desktop and mobile (browser devtools)
- Test all links (internal navigation, external links, resume download)
- Test contact form end-to-end
- Test dark/light mode toggle on every page
- Push to `main`, verify Vercel auto-deploy
- **Output:** Live MVP at Vercel URL

---

## Summary

| Milestone | Tasks | What You Get |
|---|---|---|
| 1. Project Setup | 4 tasks | Empty app running locally + on Vercel |
| 2. Design System & Layout | 6 tasks | Navbar, footer, dark mode — the shell |
| 3. Home Page | 8 tasks | Complete home page with all sections |
| 4. Projects Pages | 6 tasks | Listing page + 4 detail pages |
| 5. About Page | 6 tasks | Complete about page |
| 6. Contact Page | 5 tasks | Working contact form with email |
| 7. Finishing Touches | 7 tasks | 404, SEO, resume, deploy |
| **Total** | **42 tasks** | **Complete MVP portfolio** |

---

## After Phase 1 — What Comes Next

**Phase 2** (Blog + Polish): MDX blog system, Framer Motion animations, breadcrumbs, back-to-top, RSS feed, privacy page, analytics
**Phase 3** (Content): Blog posts, real images/screenshots, OG images, performance tuning
