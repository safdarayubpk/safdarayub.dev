# TECHNICAL SPECIFICATION — SAFDAR AYUB PORTFOLIO
## Version 1.0 | March 2026

**Companion Document:** PORTFOLIO_CONTENT_DOCUMENT.md (v2.1)
**Purpose:** All technical decisions for building safdarayub.dev. No ambiguity — a developer should be able to build this from this spec alone.

---

## TABLE OF CONTENTS

1. [Tech Stack Decisions](#1-tech-stack-decisions)
2. [Project Structure](#2-project-structure)
3. [Pages & Routing](#3-pages--routing)
4. [Component Architecture](#4-component-architecture)
5. [Design System](#5-design-system)
6. [Dark/Light Mode](#6-darklight-mode)
7. [Blog System](#7-blog-system)
8. [Contact Form](#8-contact-form)
9. [Resume Download](#9-resume-download)
10. [Animations & Interactions](#10-animations--interactions)
11. [Image & Asset Strategy](#11-image--asset-strategy)
12. [SEO Implementation](#12-seo-implementation)
13. [Analytics](#13-analytics)
14. [Deployment & Hosting](#14-deployment--hosting)
15. [Third-Party Services](#15-third-party-services)
16. [Environment Variables](#16-environment-variables)
17. [Development Workflow](#17-development-workflow)
18. [Build Phases](#18-build-phases)

---

## 1. TECH STACK DECISIONS

| Layer | Technology | Version | Why |
|---|---|---|---|
| **Framework** | Next.js (App Router) | 15.x | SSR, SEO, file-based routing, already in your stack |
| **Language** | TypeScript | 5.x | Type safety, better DX, matches your existing skills |
| **Styling** | Tailwind CSS | 4.x | Utility-first, rapid development, responsive |
| **UI Components** | ShadCN UI | latest | Pre-built accessible components, customizable |
| **Animations** | Framer Motion | 11.x | Smooth scroll animations, page transitions, timeline |
| **Icons** | Lucide React | latest | Clean, consistent icon set (already used in your projects) |
| **Blog** | MDX (local files) | via next-mdx-remote | Write in markdown, embed React components, no external CMS dependency |
| **Contact Form** | React Hook Form + Zod | latest | Validation, lightweight |
| **Email Service** | Resend | latest | Free tier (100 emails/day), simple API, no SMTP setup |
| **Analytics** | Vercel Analytics | built-in | Privacy-friendly, zero config on Vercel |
| **Deployment** | Vercel | — | Free tier, automatic deployments, edge network |
| **Package Manager** | pnpm | 9.x | Fast, disk-efficient |

### What We're NOT Using (and Why)

| Technology | Why Not |
|---|---|
| **CMS (Sanity/Contentful)** | Overkill for a personal portfolio — MDX files are simpler, free, version-controlled |
| **Database** | No dynamic data needed — blog is MDX, projects are hardcoded, contact form sends email |
| **Google Analytics** | Heavy, privacy concerns — Vercel Analytics is built-in and cookieless |
| **Styled Components / CSS Modules** | Tailwind is faster to develop with and already in your stack |
| **Prisma / Drizzle** | No database = no ORM needed |
| **Redux / Zustand** | No complex state — theme toggle is the only global state (use next-themes) |

---

## 2. PROJECT STRUCTURE

```
safdar-portfolio/
├── public/
│   ├── images/
│   │   ├── profile/          # Headshot, about photo
│   │   ├── projects/         # Project screenshots, GIFs
│   │   │   ├── personal-ai-employee/
│   │   │   ├── ai-video-agent/
│   │   │   ├── flow/
│   │   │   └── robotics-textbook/
│   │   └── og/               # Open Graph images
│   ├── resume/
│   │   └── Safdar_Ayub_Resume.pdf
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout (navbar, footer, providers)
│   │   ├── page.tsx              # Home page
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx          # Projects listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual project detail
│   │   ├── blog/
│   │   │   ├── page.tsx          # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Individual blog post
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   ├── not-found.tsx         # 404 page
│   │   ├── error.tsx             # Error boundary
│   │   ├── sitemap.ts            # Auto-generated sitemap
│   │   └── robots.ts             # Robots.txt config
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx
│   │   │   ├── mobile-nav.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── breadcrumbs.tsx
│   │   │   └── back-to-top.tsx
│   │   ├── home/
│   │   │   ├── hero.tsx
│   │   │   ├── stats-bar.tsx
│   │   │   ├── skills-grid.tsx
│   │   │   ├── featured-projects.tsx
│   │   │   ├── timeline.tsx
│   │   │   ├── testimonials.tsx
│   │   │   └── cta-banner.tsx
│   │   ├── about/
│   │   │   ├── story.tsx
│   │   │   ├── values.tsx
│   │   │   ├── skills-detailed.tsx
│   │   │   ├── education.tsx
│   │   │   └── by-the-numbers.tsx
│   │   ├── projects/
│   │   │   ├── project-card.tsx
│   │   │   ├── project-filter.tsx
│   │   │   ├── tech-badge.tsx
│   │   │   └── project-detail-layout.tsx
│   │   ├── blog/
│   │   │   ├── blog-card.tsx
│   │   │   ├── blog-tags.tsx
│   │   │   ├── mdx-components.tsx
│   │   │   └── share-buttons.tsx
│   │   ├── contact/
│   │   │   ├── contact-form.tsx
│   │   │   └── contact-links.tsx
│   │   └── ui/                   # ShadCN components (auto-generated)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       ├── select.tsx
│   │       ├── skeleton.tsx
│   │       ├── separator.tsx
│   │       └── sheet.tsx         # For mobile nav drawer
│   │
│   ├── content/
│   │   ├── projects/             # Project data files
│   │   │   ├── personal-ai-employee.ts
│   │   │   ├── ai-video-agent.ts
│   │   │   ├── flow.ts
│   │   │   └── robotics-textbook.ts
│   │   └── blog/                 # MDX blog posts
│   │       ├── platinum-tier-ai-employee.mdx
│   │       ├── air-force-to-ai.mdx
│   │       ├── spec-driven-development.mdx
│   │       ├── ai-video-generation.mdx
│   │       └── custom-mcp-servers.mdx
│   │
│   ├── lib/
│   │   ├── utils.ts              # cn() helper, formatDate, etc.
│   │   ├── mdx.ts                # MDX parsing utilities
│   │   ├── projects.ts           # getProjects(), getProjectBySlug()
│   │   ├── blog.ts               # getBlogPosts(), getBlogPostBySlug()
│   │   └── send-email.ts         # Resend API wrapper
│   │
│   ├── types/
│   │   ├── project.ts            # Project type definition
│   │   └── blog.ts               # BlogPost type definition
│   │
│   └── styles/
│       └── globals.css           # Tailwind directives, custom styles
│
├── .env.local                    # Environment variables (not committed)
├── .env.example                  # Template for env vars
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 3. PAGES & ROUTING

| Route | Page | Rendering | Notes |
|---|---|---|---|
| `/` | Home | Static (SSG) | Revalidate on build |
| `/about` | About | Static (SSG) | |
| `/projects` | Projects listing | Static (SSG) | Filter is client-side |
| `/projects/[slug]` | Project detail | Static (SSG) | generateStaticParams for all 4 projects |
| `/blog` | Blog listing | Static (SSG) | Revalidate on build |
| `/blog/[slug]` | Blog post | Static (SSG) | generateStaticParams from MDX files |
| `/contact` | Contact | Static shell + client form | Form is client component |
| `/privacy` | Privacy policy | Static (SSG) | |
| `/not-found` | 404 | Static (SSG) | |
| `/sitemap.xml` | Auto-generated | Dynamic | From pages + blog posts |
| `/robots.txt` | Auto-generated | Static | |
| `/blog/rss.xml` | RSS Feed | Route handler | Generated from blog posts |

**All pages are statically generated (SSG)** — no server-side rendering needed. This gives best performance and free Vercel hosting.

---

## 4. COMPONENT ARCHITECTURE

### Data Flow

```
content/projects/*.ts  →  lib/projects.ts  →  page.tsx  →  components
content/blog/*.mdx     →  lib/blog.ts      →  page.tsx  →  components
```

### Project Data Type

```typescript
// src/types/project.ts
export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  description: string;          // Full MDX-like content
  badge: string;                // "Hackathon Platinum Tier"
  status: string;               // "Production" | "Live" | "Deployed"
  category: string[];           // ["AI Agents", "Full Stack"]
  techStack: string[];
  features: string[];
  links: {
    github?: string;
    live?: string;
    youtube?: string;
    architecture?: string;
  };
  image: string;                // Thumbnail path
  priority: number;             // Sort order (1 = first)
  isFlagship: boolean;
}
```

### Blog Post Frontmatter

```typescript
// src/types/blog.ts
export interface BlogFrontmatter {
  title: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
  coverImage: string;
  description: string;
  published: boolean;
}
```

### Component Rendering Rules

| Component | Server/Client | Why |
|---|---|---|
| Navbar | Client | Theme toggle, mobile menu state |
| Footer | Server | Static content |
| Hero | Server | Static content |
| Stats Bar | Server | Static numbers with Framer Motion (client wrapper for animation) |
| Timeline | Client | Scroll-triggered animations |
| Project Filter | Client | Interactive filter state |
| Project Card | Server | Static content |
| Contact Form | Client | Form state, validation, submission |
| Blog Post | Server | MDX rendering |
| Share Buttons | Client | Clipboard API, window.open |
| Back to Top | Client | Scroll position tracking |
| Theme Toggle | Client | next-themes |

---

## 5. DESIGN SYSTEM

### Color Palette

**Professional & Corporate theme with dark mode support:**

```css
/* Light Mode */
--background: #FFFFFF;
--foreground: #0F172A;          /* Slate 900 */
--card: #F8FAFC;                /* Slate 50 */
--card-foreground: #0F172A;
--primary: #1E40AF;             /* Blue 800 — professional, corporate */
--primary-foreground: #FFFFFF;
--secondary: #F1F5F9;           /* Slate 100 */
--muted: #64748B;               /* Slate 500 */
--accent: #2563EB;              /* Blue 600 */
--border: #E2E8F0;              /* Slate 200 */

/* Dark Mode */
--background: #0B1120;          /* Deep navy */
--foreground: #F1F5F9;          /* Slate 100 */
--card: #1E293B;                /* Slate 800 */
--card-foreground: #F1F5F9;
--primary: #3B82F6;             /* Blue 500 */
--primary-foreground: #FFFFFF;
--secondary: #1E293B;           /* Slate 800 */
--muted: #94A3B8;               /* Slate 400 */
--accent: #60A5FA;              /* Blue 400 */
--border: #334155;              /* Slate 700 */
```

### Typography

```css
/* Headings */
font-family: 'Inter', sans-serif;
H1: 3.5rem (56px) / font-weight: 800
H2: 2.25rem (36px) / font-weight: 700
H3: 1.5rem (24px) / font-weight: 600
H4: 1.25rem (20px) / font-weight: 600

/* Body */
font-family: 'Inter', sans-serif;
Body: 1rem (16px) / font-weight: 400 / line-height: 1.75
Small: 0.875rem (14px)

/* Code */
font-family: 'JetBrains Mono', monospace;
Code: 0.875rem (14px)
```

**Font Loading Strategy:**
- Use `next/font` for automatic optimization
- Inter from Google Fonts (variable font — single file)
- JetBrains Mono for code blocks only (loaded on blog pages)

### Spacing System

Follow Tailwind defaults (4px base):
- Section padding: `py-16 md:py-24` (64px / 96px)
- Container max-width: `max-w-6xl mx-auto px-4 md:px-6`
- Card padding: `p-6`
- Component gap: `gap-6` or `gap-8`

### Border Radius

- Cards: `rounded-lg` (8px)
- Buttons: `rounded-md` (6px)
- Badges: `rounded-full`
- Images: `rounded-lg`

### Shadows

- Cards (light): `shadow-sm hover:shadow-md`
- Cards (dark): `shadow-none border border-border`

---

## 6. DARK/LIGHT MODE

**Implementation:** `next-themes`

```typescript
// In root layout.tsx
import { ThemeProvider } from 'next-themes'

<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
  {children}
</ThemeProvider>
```

**Default:** Dark mode (professional/corporate tech feel)
**Toggle:** Sun/Moon icon in navbar
**Persistence:** localStorage (automatic via next-themes)
**No flash:** next-themes handles SSR hydration

---

## 7. BLOG SYSTEM

### Architecture: Local MDX Files

```
src/content/blog/
├── platinum-tier-ai-employee.mdx
├── air-force-to-ai.mdx
└── ...
```

**Why MDX over CMS:**
- Version controlled (git)
- No external dependency
- Embed React components in posts
- Free (no CMS subscription)
- Works with static generation

### MDX Processing

```typescript
// Dependencies
// next-mdx-remote — for rendering MDX in App Router
// gray-matter — for parsing frontmatter
// rehype-highlight — for code syntax highlighting
// rehype-slug — for heading anchors
// remark-gfm — for GitHub Flavored Markdown (tables, etc.)
```

### Blog Post File Example

```mdx
---
title: "Building a Platinum-Tier AI Employee"
date: "2026-03-15"
author: "Safdar Ayub"
tags: ["Agentic AI", "MCP Servers", "Project Breakdowns"]
readTime: "12 min"
coverImage: "/images/blog/platinum-ai-employee.webp"
description: "How I built a 4-tier autonomous AI agent..."
published: true
---

# Building a Platinum-Tier AI Employee

Content here with **markdown** and React components...

<ProjectLink slug="personal-ai-employee" />
```

### Custom MDX Components

| Component | Purpose |
|---|---|
| `<ProjectLink>` | Links to a project detail page |
| `<CodeBlock>` | Enhanced code block with copy button |
| `<Callout>` | Info/warning/tip boxes |
| `<TechBadge>` | Inline tech stack badge |

### RSS Feed

```typescript
// src/app/blog/rss.xml/route.ts
// Route handler that generates RSS 2.0 XML from blog posts
// Content-Type: application/xml
```

---

## 8. CONTACT FORM

### Architecture

```
User fills form → Client validation (Zod) → API Route → Resend API → Email to safdarayub@gmail.com
```

### API Route

```typescript
// src/app/api/contact/route.ts
// POST handler
// - Validates input with Zod
// - Rate limiting: 3 requests per IP per hour (in-memory Map, resets on deploy)
// - Sends email via Resend
// - Returns JSON response
```

### Validation Schema

```typescript
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.enum([
    "Job Opportunity",
    "Freelance Project",
    "Collaboration",
    "General Inquiry"
  ]),
  message: z.string().min(10).max(2000),
});
```

### Email Template

Resend sends a clean HTML email to safdarayub@gmail.com:
- From: `contact@safdarayub.dev` (or Resend default)
- Subject: `[Portfolio] {subject} from {name}`
- Body: Name, email, subject, message, timestamp

---

## 9. RESUME DOWNLOAD

### Implementation

```typescript
// Simple <a> tag with download attribute
<a
  href="/resume/Safdar_Ayub_Resume.pdf"
  download="Safdar_Ayub_Resume.pdf"
  target="_blank"
>
  Download Resume
</a>
```

**File location:** `public/resume/Safdar_Ayub_Resume.pdf`
**Button placement:** Hero section CTA + Navbar (desktop only)
**Tracking:** Vercel Analytics tracks downloads automatically

---

## 10. ANIMATIONS & INTERACTIONS

### Library: Framer Motion

| Element | Animation | Trigger |
|---|---|---|
| Hero text | Fade up + stagger | Page load |
| Stats numbers | Count up | Scroll into view |
| Skill cards | Fade up with stagger | Scroll into view |
| Project cards | Fade up with stagger | Scroll into view |
| Timeline entries | Slide in from left | Scroll into view |
| Page transitions | Fade | Route change |
| Navbar | Backdrop blur on scroll | Scroll position |
| Back to top | Fade in | Scroll > 1 viewport |
| Buttons | Scale on hover (1.02) | Hover |
| Cards | Subtle lift on hover | Hover |

### Performance Rules
- Use `will-change` sparingly
- Prefer `transform` and `opacity` (GPU-accelerated)
- No animation on `prefers-reduced-motion: reduce`
- Keep animations under 400ms
- Use `whileInView` with `once: true` (animate once, not on every scroll)

### Scroll Animation Helper

```typescript
// Reusable component
function AnimateOnScroll({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
```

---

## 11. IMAGE & ASSET STRATEGY

### Image Optimization

| Strategy | Implementation |
|---|---|
| Format | WebP (with PNG fallback via `<picture>` if needed) |
| Component | Next.js `<Image>` component (auto-optimization) |
| Lazy loading | Default for below-fold images |
| Priority loading | Hero image, above-fold project thumbnails |
| Placeholder | `blur` placeholder via `blurDataURL` |
| Sizes | Responsive with `sizes` attribute |

### Image Dimensions

| Image Type | Dimensions | Notes |
|---|---|---|
| Profile photo | 400x400px | Square, used in hero and about |
| Project thumbnail | 800x450px | 16:9 ratio |
| Project detail hero | 1200x675px | 16:9 ratio |
| Blog cover | 1200x630px | OG-compatible |
| OG image | 1200x630px | Social sharing |
| Favicon | 32x32, 180x180 | ico + apple-touch-icon |

### Favicon Setup

```
public/
├── favicon.ico          (32x32)
├── apple-touch-icon.png (180x180)
├── icon-192.png         (192x192, for PWA)
└── icon-512.png         (512x512, for PWA)
```

---

## 12. SEO IMPLEMENTATION

### Next.js Metadata API

```typescript
// src/app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://safdarayub.dev'),
  title: {
    default: 'Safdar Ayub — AI Engineer & Full Stack Developer',
    template: '%s — Safdar Ayub',
  },
  description: '...',
  openGraph: { ... },
  twitter: { ... },
  robots: { index: true, follow: true },
};
```

### Per-Page Metadata

Each page exports its own `metadata` or `generateMetadata` function.

### Structured Data (JSON-LD)

```typescript
// src/app/layout.tsx — inject via <script type="application/ld+json">
// Person schema as defined in content document
```

### Sitemap

```typescript
// src/app/sitemap.ts
// Auto-generates sitemap.xml with all static pages + blog posts + project pages
```

### Robots.txt

```typescript
// src/app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://safdarayub.dev/sitemap.xml',
  };
}
```

---

## 13. ANALYTICS

### Vercel Analytics (Built-in)

```typescript
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// In layout JSX:
<Analytics />
<SpeedInsights />
```

- Zero config on Vercel deployment
- Privacy-friendly (no cookies, no personal data)
- Tracks: page views, referrers, browsers, countries, devices
- Speed Insights: Core Web Vitals monitoring
- Free tier: 2,500 events/month (sufficient for portfolio)

---

## 14. DEPLOYMENT & HOSTING

### Platform: Vercel

| Setting | Value |
|---|---|
| Framework | Next.js (auto-detected) |
| Build command | `pnpm build` |
| Output directory | `.next` (default) |
| Node version | 20.x |
| Region | Auto (edge network) |

### Custom Domain Setup

1. Purchase `safdarayub.dev` (or `.com`) from Namecheap / Google Domains
2. Add domain in Vercel dashboard
3. Update DNS: CNAME → `cname.vercel-dns.com`
4. SSL: Automatic via Vercel (Let's Encrypt)

### Deployment Flow

```
Local development → Push to GitHub → Vercel auto-deploys
                                    ├── Production (main branch)
                                    └── Preview (PR branches)
```

### Environment Variables (Vercel Dashboard)

Set in Vercel project settings, NOT in code.

---

## 15. THIRD-PARTY SERVICES

| Service | Purpose | Cost | Account Needed |
|---|---|---|---|
| **Vercel** | Hosting + Analytics | Free (Hobby) | Yes — GitHub login |
| **Resend** | Contact form emails | Free (100/day) | Yes — sign up |
| **GitHub** | Source code + CI/CD | Free | Already have |
| **Domain registrar** | safdarayub.dev | ~$12/year | Yes |

**Total recurring cost: ~$12/year** (domain only)

---

## 16. ENVIRONMENT VARIABLES

```bash
# .env.example

# Resend (contact form emails)
RESEND_API_KEY=re_xxxxxxxxxxxx

# Site URL (for sitemap, OG images)
NEXT_PUBLIC_SITE_URL=https://safdarayub.dev

# Contact email (where form submissions go)
CONTACT_EMAIL=safdarayub@gmail.com
```

**Only 3 environment variables needed.** Minimal configuration.

---

## 17. DEVELOPMENT WORKFLOW

### Local Setup

```bash
# 1. Clone and install
git clone <repo-url> safdar-portfolio
cd safdar-portfolio
pnpm install

# 2. Set up env
cp .env.example .env.local
# Fill in RESEND_API_KEY

# 3. Run dev server
pnpm dev
# Open http://localhost:3000

# 4. Build and test
pnpm build
pnpm start
```

### Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  }
}
```

### Git Branching

- `main` — production (auto-deploys to Vercel)
- `dev` — development branch
- Feature branches: `feature/blog-system`, `feature/contact-form`, etc.

---

## 18. BUILD PHASES

### Phase 1: Foundation (MVP — Launch With This)
**Goal:** Live site with core pages

- [ ] Project scaffolding (Next.js + Tailwind + ShadCN)
- [ ] Design system setup (colors, typography, dark mode)
- [ ] Layout components (navbar, footer, mobile nav)
- [ ] Home page (hero, stats, skills, featured projects, timeline, CTA)
- [ ] About page (story, values, skills, education, numbers)
- [ ] Projects listing page + 4 project detail pages
- [ ] Contact page with working form (Resend)
- [ ] Resume download
- [ ] 404 page
- [ ] SEO (metadata, sitemap, robots, JSON-LD)
- [ ] Deploy to Vercel
- [ ] Custom domain setup

**Estimated deliverable:** Fully functional portfolio with all core pages

### Phase 2: Blog + Polish
**Goal:** Blog system + animations + refinements

- [ ] Blog listing page
- [ ] MDX rendering pipeline
- [ ] Write first 2 blog posts
- [ ] RSS feed
- [ ] Share buttons on blog posts
- [ ] Framer Motion animations (scroll, page transitions)
- [ ] Loading skeletons
- [ ] Back to top button
- [ ] Breadcrumbs
- [ ] Privacy policy page
- [ ] Vercel Analytics + Speed Insights
- [ ] Lighthouse audit and optimization

### Phase 3: Content & Growth
**Goal:** Complete content + ongoing maintenance

- [ ] Write remaining 3 blog posts
- [ ] Create all missing assets (diagrams, screenshots)
- [ ] Update resume PDF to Platinum tier
- [ ] Add testimonials when available
- [ ] OG images for social sharing
- [ ] Performance optimization based on real data

---

## DECISION LOG

| # | Decision | Choice | Reasoning |
|---|---|---|---|
| 1 | Framework | Next.js 15 App Router | Already know it, SSG for performance, Vercel integration |
| 2 | Styling | Tailwind + ShadCN | Fast development, accessible components |
| 3 | Blog system | Local MDX files | No external dependency, version controlled, free |
| 4 | CMS | None | Overkill for portfolio, MDX is sufficient |
| 5 | Database | None | No dynamic data — all static content |
| 6 | Contact form email | Resend | Simple API, free tier, good DX |
| 7 | Analytics | Vercel Analytics | Built-in, privacy-friendly, free |
| 8 | Hosting | Vercel | Free, fast, automatic deployments |
| 9 | Animations | Framer Motion | Best React animation library, smooth |
| 10 | Dark mode | next-themes | Simple, handles SSR hydration, localStorage |
| 11 | Default theme | Dark | Professional tech feel, matches corporate style |
| 12 | Language | English only | Global audience, no maintenance burden |
| 13 | Package manager | pnpm | Faster, disk-efficient |
| 14 | Font | Inter + JetBrains Mono | Clean, professional, optimized via next/font |
| 15 | Total cost | ~$12/year | Domain only — everything else is free tier |

---

*This spec + the Content Document are the complete blueprint. Phase 1 build can start immediately after approval.*
