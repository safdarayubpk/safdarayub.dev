# Full Portfolio Audit — Design Spec

**Date:** 2026-04-23  
**Project:** safdarayub.dev (Next.js 16 portfolio)  
**Approach:** Sequential by category — each category fully fixed before moving to the next.

---

## Goal

Audit and fix every meaningful issue across the entire portfolio codebase and content. The result is a production-quality portfolio site that scores well on code quality, SEO, accessibility, design, security, and content.

---

## Category 1: Code Quality

**What we check:**
- TypeScript errors and loose typing (`any`, missing interfaces, implicit types)
- ESLint warnings and errors (`pnpm lint`)
- Unused imports, variables, and dead components
- Client vs server component boundaries (correctness and necessity)
- Consistent naming conventions (files, components, functions)
- Props drilling and unnecessary re-renders

**Definition of done:** `pnpm lint` and `pnpm type-check` both pass with zero errors or warnings.

---

## Category 2: SEO & Performance

**What we check:**
- Unique, descriptive `<title>` and `<meta description>` on every page
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`) on every page
- Twitter Card tags on every page
- JSON-LD structured data (Person schema on home/about, WebSite schema)
- All images use `next/image` with `alt` text and explicit `width`/`height`
- `robots.txt` and `sitemap.xml` are correct and complete
- Canonical URLs set on all pages
- No unnecessary client-side JavaScript for static content
- All dynamic routes use `generateStaticParams` correctly

**Definition of done:** Every page has complete meta, OG, and structured data. No images missing `alt`. Sitemap lists all public pages.

---

## Category 3: Accessibility

**What we check:**
- Skip-to-content link present and functional
- All interactive elements (buttons, links, icon-only controls) have accessible labels
- Keyboard tab order is logical across all pages
- Focus rings are visible (not suppressed globally)
- Color contrast meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
- Form inputs have associated `<label>` elements
- Form error states are announced to screen readers (`aria-live` or `role="alert"`)
- Images have meaningful `alt` text (decorative images use `alt=""`)
- No `tabindex` values greater than 0

**Definition of done:** No axe-core violations on any page. All interactive elements keyboard-accessible.

---

## Category 4: Design & UX

**What we check:**
- All pages render correctly on mobile (320px–768px), tablet (768px–1024px), desktop (1024px+)
- Consistent spacing — section padding `py-16 md:py-24`, container `max-w-6xl mx-auto px-4 md:px-6`
- Typography hierarchy is consistent (heading sizes, weights, line heights)
- All Framer Motion animations respect `prefers-reduced-motion: reduce`
- Skeleton loading states present on pages with async content
- 404 page is useful and on-brand
- Error boundary (`error.tsx`) is useful and on-brand
- No layout shifts on page load (CLS)
- CTAs are clear and present on every page

**Definition of done:** No broken layouts at any standard viewport. Motion preferences respected. Every page has a clear next action for visitors.

---

## Category 5: Security

**What we check:**
- Contact form API route (`/api/contact`) validates all inputs server-side (Zod schema)
- Rate limiting is correct and not bypassable with header spoofing
- No environment variables prefixed `NEXT_PUBLIC_` that should be secret
- No hardcoded secrets, API keys, or sensitive data in source files
- `next/headers` used correctly (server-only imports not leaking to client)
- External links use `rel="noopener noreferrer"`
- No `dangerouslySetInnerHTML` without sanitization

**Definition of done:** All API inputs validated. Rate limiting correct. No secrets in client bundle.

---

## Category 6: Content

**What we check:**
- All project descriptions are complete, accurate, and compelling
- Blog section has at least placeholder posts (not empty)
- Resume PDF link is current and working
- All external links (GitHub, LinkedIn, YouTube) are correct and open in new tab
- No placeholder text ("Lorem ipsum", "Coming soon", "TBD") visible to visitors
- About page accurately reflects current skills and experience
- Contact page has correct email and social links

**Definition of done:** No placeholder content visible. All links verified working. Portfolio presentation is polished and complete.

---

## Execution Order

1. Code Quality — foundation, ensures subsequent fixes don't introduce new TS/lint errors
2. SEO & Performance — high visibility, directly affects discoverability
3. Accessibility — correctness, affects real users and search ranking
4. Design & UX — polish, affects first impressions
5. Security — safety, protects the contact form endpoint
6. Content — final pass, ensures everything is accurate and complete

---

## Out of Scope

- Adding new pages or major new features
- Changing the design system colors or fonts
- Backend infrastructure changes (Vercel config, DNS)
- Adding a CMS or database
