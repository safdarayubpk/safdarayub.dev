# Full Portfolio Audit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix every real issue found across code quality, SEO, accessibility, design/UX, security, and content — leaving the portfolio production-ready on all fronts.

**Architecture:** Sequential fixes grouped by category. Each task is self-contained. All changes are in the `src/` directory. No new dependencies needed.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS 4, Framer Motion 11, ShadCN UI, React Hook Form + Zod, Resend email API.

---

## What Was Found (Audit Results)

| # | Category | File | Issue |
|---|----------|------|-------|
| 1 | Code Quality | `table-of-contents.tsx` | ESLint error: setState called synchronously in useEffect body |
| 2 | Accessibility / UX | `table-of-contents.tsx` | ToC smooth scroll ignores `prefers-reduced-motion` + scrolls behind sticky navbar |
| 3 | SEO | `projects/[slug]/page.tsx` | Missing `twitter` card in `generateMetadata` |
| 4 | SEO | `blog/[slug]/page.tsx` | Missing `twitter` card in `generateMetadata` |
| 5 | SEO | `blog/[slug]/page.tsx` | Blog posts have no Article JSON-LD (rich snippets) |
| 6 | Accessibility | `search.tsx` | Dialog overlay missing `role="dialog"`, `aria-modal`, `aria-labelledby` |
| 7 | Accessibility | `github-stats.tsx` | Language progress bar segments only use `title` (tooltip) — invisible to screen readers |
| 8 | Accessibility | Multiple files | Decorative icons missing `aria-hidden="true"` |
| 9 | Security/Code | `send-email.ts` | TODO comment about from address — should be resolved |

---

## Task 1: Fix ESLint Error in TableOfContents

**Category:** Code Quality  
**Files:**
- Modify: `src/components/blog/table-of-contents.tsx`

**Problem:** `setHeadings(items)` is called synchronously inside `useEffect`, which the React Compiler ESLint rule `react-hooks/set-state-in-effect` flags as a potential cascading render problem.

**Fix:** Wrap the setState call with `startTransition` from React, which marks the update as non-urgent and satisfies the linter.

- [ ] **Step 1: Open and understand the current code**

Read `src/components/blog/table-of-contents.tsx`. The issue is at line 28: `setHeadings(items)` called directly inside the effect body.

- [ ] **Step 2: Apply the fix**

Replace the import line and effect in `src/components/blog/table-of-contents.tsx`:

Change the import from:
```tsx
import { useEffect, useState } from "react";
```
To:
```tsx
import { useEffect, useState, startTransition } from "react";
```

Change the first `useEffect` from:
```tsx
  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const elements = article.querySelectorAll("h2, h3");
    const items: TocItem[] = Array.from(elements)
      .filter((el) => el.id)
      .map((el) => ({
        id: el.id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      }));

    setHeadings(items);
  }, []);
```
To:
```tsx
  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const elements = article.querySelectorAll("h2, h3");
    const items: TocItem[] = Array.from(elements)
      .filter((el) => el.id)
      .map((el) => ({
        id: el.id,
        text: el.textContent || "",
        level: el.tagName === "H2" ? 2 : 3,
      }));

    startTransition(() => {
      setHeadings(items);
    });
  }, []);
```

- [ ] **Step 3: Verify lint passes**

Run:
```bash
pnpm lint
```
Expected: no errors or warnings.

- [ ] **Step 4: Verify TypeScript still passes**

Run:
```bash
pnpm type-check
```
Expected: no output (zero errors).

- [ ] **Step 5: Commit**

```bash
git add src/components/blog/table-of-contents.tsx
git commit -m "fix: resolve ESLint setState-in-effect error in TableOfContents"
```

---

## Task 2: Fix TableOfContents Scroll Behavior

**Category:** Accessibility + Design/UX  
**Files:**
- Modify: `src/components/blog/table-of-contents.tsx`

**Two problems:**
1. `scrollIntoView({ behavior: "smooth" })` ignores the user's `prefers-reduced-motion` setting
2. The scroll destination is covered by the sticky 64px navbar — the heading is hidden behind it

**Fix:** Replace `scrollIntoView` with a manual `window.scrollTo` that: (a) checks reduced motion preference, (b) offsets by 80px to clear the navbar.

- [ ] **Step 1: Replace the onClick scroll handler**

In `src/components/blog/table-of-contents.tsx`, find the `onClick` handler inside the `<a>` element (around line 66):

Change from:
```tsx
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
```
To:
```tsx
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(heading.id);
                if (!el) return;
                const prefersReducedMotion = window.matchMedia(
                  "(prefers-reduced-motion: reduce)"
                ).matches;
                const top =
                  el.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({
                  top,
                  behavior: prefersReducedMotion ? "instant" : "smooth",
                });
              }}
```

- [ ] **Step 2: Verify TypeScript passes**

```bash
pnpm type-check
```
Expected: no output.

- [ ] **Step 3: Commit**

```bash
git add src/components/blog/table-of-contents.tsx
git commit -m "fix: ToC scroll offset for sticky navbar + respect prefers-reduced-motion"
```

---

## Task 3: Add Twitter Card to Project Detail Pages

**Category:** SEO  
**Files:**
- Modify: `src/app/projects/[slug]/page.tsx`

**Problem:** `generateMetadata` sets `openGraph` but not `twitter`. When someone shares a project URL on Twitter/X, no card will render.

- [ ] **Step 1: Add twitter metadata**

In `src/app/projects/[slug]/page.tsx`, find `generateMetadata` (lines 16–31). Add `twitter` after the `openGraph` block:

Change from:
```tsx
  return {
    title: project.title.split("—")[0].trim(),
    description: project.oneLiner,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: project.title.split("—")[0].trim(),
      description: project.oneLiner,
      type: "website",
    },
  };
```
To:
```tsx
  const title = project.title.split("—")[0].trim();
  return {
    title,
    description: project.oneLiner,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title,
      description: project.oneLiner,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.oneLiner,
    },
  };
```

- [ ] **Step 2: Verify TypeScript passes**

```bash
pnpm type-check
```
Expected: no output.

- [ ] **Step 3: Commit**

```bash
git add src/app/projects/[slug]/page.tsx
git commit -m "feat: add twitter card metadata to project detail pages"
```

---

## Task 4: Add Twitter Card to Blog Post Pages

**Category:** SEO  
**Files:**
- Modify: `src/app/blog/[slug]/page.tsx`

**Problem:** Blog post `generateMetadata` sets `openGraph` but not `twitter`. Blog post shares on Twitter/X show no card.

- [ ] **Step 1: Add twitter metadata**

In `src/app/blog/[slug]/page.tsx`, find `generateMetadata` (lines 20–39). Add `twitter` after the `openGraph` block:

Change from:
```tsx
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
    },
  };
```
To:
```tsx
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
    },
  };
```

- [ ] **Step 2: Verify TypeScript passes**

```bash
pnpm type-check
```
Expected: no output.

- [ ] **Step 3: Commit**

```bash
git add src/app/blog/[slug]/page.tsx
git commit -m "feat: add twitter card metadata to blog post pages"
```

---

## Task 5: Add Article JSON-LD to Blog Posts

**Category:** SEO  
**Files:**
- Modify: `src/app/blog/[slug]/page.tsx`
- Modify: `src/types/blog.ts` (verify `excerpt` and `author` fields exist)

**Problem:** Blog posts have no structured data. Google uses Article JSON-LD to show rich results (author, date, read time) in search — currently all posts look like plain pages.

- [ ] **Step 1: Check the BlogFrontmatter type**

Read `src/types/blog.ts`. Verify the type has `title`, `date`, `author`, `excerpt`, and `tags` fields.

- [ ] **Step 2: Add Article JSON-LD to the blog post page**

In `src/app/blog/[slug]/page.tsx`, find the `return` statement inside `BlogPostPage` (around line 61). Add the JSON-LD script tag inside the `<main>` element, right after the opening `<main>` tag:

Change from:
```tsx
  return (
    <main className="py-16 md:py-24">
      <ReadingProgress />
```
To:
```tsx
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    datePublished: post.frontmatter.date,
    author: {
      "@type": "Person",
      name: post.frontmatter.author,
      url: "https://safdarayub.dev",
    },
    publisher: {
      "@type": "Person",
      name: "Safdar Ayub",
      url: "https://safdarayub.dev",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://safdarayub.dev/blog/${slug}`,
    },
  };

  return (
    <main className="py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <ReadingProgress />
```

- [ ] **Step 3: Verify TypeScript passes**

```bash
pnpm type-check
```
Expected: no output.

- [ ] **Step 4: Commit**

```bash
git add src/app/blog/[slug]/page.tsx
git commit -m "feat: add Article JSON-LD structured data to blog posts"
```

---

## Task 6: Fix Search Dialog ARIA

**Category:** Accessibility  
**Files:**
- Modify: `src/components/layout/search.tsx`

**Problem:** The search overlay is a modal dialog but has no ARIA roles. Screen readers don't announce "dialog" when it opens, and can't trap focus correctly. Specifically:
- The overlay `<div>` needs `role="dialog"`, `aria-modal="true"`, `aria-label`
- The search input should announce its relationship to the results list

- [ ] **Step 1: Add an id to the search button for aria-labelledby**

In `src/components/layout/search.tsx`, find the trigger `<button>` (around line 75). Add an `id`:

Change from:
```tsx
      <button
        onClick={handleOpen}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md border border-border bg-background"
        aria-label="Search (Ctrl+K)"
      >
```
To:
```tsx
      <button
        id="search-trigger"
        onClick={handleOpen}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md border border-border bg-background"
        aria-label="Search (Ctrl+K)"
      >
```

- [ ] **Step 2: Add ARIA to the dialog overlay**

Find the outer `<div>` of the open state (around line 87):

Change from:
```tsx
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]"
          onClick={handleClose}
        >
```
To:
```tsx
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]"
          onClick={handleClose}
          role="presentation"
        >
```

- [ ] **Step 3: Add ARIA to the dialog panel**

Find the inner content `<div>` (the one with `onClick={(e) => e.stopPropagation()}`):

Change from:
```tsx
          <div
            className="relative w-full max-w-lg mx-4 rounded-lg border bg-background shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
```
To:
```tsx
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            className="relative w-full max-w-lg mx-4 rounded-lg border bg-background shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
```

- [ ] **Step 4: Add aria-label to the search input**

Find the `<input>` element (around line 99). Add `aria-label`:

Change from:
```tsx
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects and blog posts..."
                className="flex-1 py-3 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
              />
```
To:
```tsx
              <input
                ref={inputRef}
                type="text"
                role="searchbox"
                aria-label="Search projects and blog posts"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects and blog posts..."
                className="flex-1 py-3 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
              />
```

- [ ] **Step 5: Verify TypeScript passes**

```bash
pnpm type-check
```
Expected: no output.

- [ ] **Step 6: Commit**

```bash
git add src/components/layout/search.tsx
git commit -m "fix: add dialog ARIA roles and searchbox label to search overlay"
```

---

## Task 7: Fix Language Progress Bar ARIA

**Category:** Accessibility  
**Files:**
- Modify: `src/components/about/github-stats.tsx`

**Problem:** The language breakdown progress bar uses colored `<div>` segments. Each segment has a `title` attribute (browser tooltip) but that only works on hover with a mouse. Screen readers cannot discover these percentages at all.

**Fix:** Wrap the progress bar in a container with `role="img"` and a descriptive `aria-label` that summarizes the language breakdown.

- [ ] **Step 1: Add aria-label to the progress bar container**

In `src/components/about/github-stats.tsx`, find the progress bar container (around line 51):

Change from:
```tsx
            <div className="flex rounded-full overflow-hidden h-3 mb-4">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className={`${lang.color}`}
                  style={{ width: `${lang.percentage}%` }}
                  title={`${lang.name}: ${lang.percentage}%`}
                />
              ))}
            </div>
```
To:
```tsx
            <div
              className="flex rounded-full overflow-hidden h-3 mb-4"
              role="img"
              aria-label="Language breakdown: TypeScript 35%, Python 30%, JavaScript 15%, MDX 10%, CSS 5%, Other 5%"
            >
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className={`${lang.color}`}
                  style={{ width: `${lang.percentage}%` }}
                  aria-hidden="true"
                />
              ))}
            </div>
```

- [ ] **Step 2: Verify TypeScript passes**

```bash
pnpm type-check
```
Expected: no output.

- [ ] **Step 3: Commit**

```bash
git add src/components/about/github-stats.tsx
git commit -m "fix: add accessible aria-label to language progress bar"
```

---

## Task 8: Add aria-hidden to Decorative Icons

**Category:** Accessibility  
**Files:**
- Modify: `src/components/home/testimonials.tsx`
- Modify: `src/components/home/services.tsx`
- Modify: `src/components/about/github-stats.tsx`

**Problem:** Lucide icons used purely for decoration are rendered as SVGs without `aria-hidden="true"`. Screen readers may announce them as unlabeled images, adding noise for users with visual impairments.

Icons to fix:
- `Quote` icon in testimonials (decorative — the text already reads as a quote)
- Service category icons (decorative — category name already conveys meaning)
- GitHub stat icons (decorative — the value and label already convey meaning)

- [ ] **Step 1: Fix testimonials.tsx — Quote icon**

In `src/components/home/testimonials.tsx`, find line 39:

Change from:
```tsx
                <Quote className="h-6 w-6 text-primary/30 mb-3 flex-shrink-0" />
```
To:
```tsx
                <Quote className="h-6 w-6 text-primary/30 mb-3 flex-shrink-0" aria-hidden="true" />
```

- [ ] **Step 2: Fix services.tsx — service icons**

In `src/components/home/services.tsx`, find the service icon rendering (around line 58):

Change from:
```tsx
                  <service.icon className="h-6 w-6 text-primary" />
```
To:
```tsx
                  <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
```

- [ ] **Step 3: Fix github-stats.tsx — stat icons**

In `src/components/about/github-stats.tsx`, find the stat icon rendering (around line 37):

Change from:
```tsx
                <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
```
To:
```tsx
                <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" aria-hidden="true" />
```

- [ ] **Step 4: Verify lint and TypeScript pass**

```bash
pnpm lint && pnpm type-check
```
Expected: no errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/home/testimonials.tsx src/components/home/services.tsx src/components/about/github-stats.tsx
git commit -m "fix: add aria-hidden to decorative icons in testimonials, services, and github stats"
```

---

## Task 9: Clean Up send-email TODO Comment

**Category:** Security / Code Quality  
**Files:**
- Modify: `src/lib/send-email.ts`

**Problem:** The `from` field has a TODO comment: `"Replace with verified domain sender when custom domain is configured"`. For the portfolio's current state (hosted on `safdarayub-dev.vercel.app`), `onboarding@resend.dev` is the correct Resend testing sender. The TODO comment is accurate but should be updated to reflect what the domain email address will be once the custom domain `safdarayub.dev` is configured with Resend.

**Fix:** Replace the vague TODO with a concrete comment that specifies exactly what to change and what value to use.

- [ ] **Step 1: Update the comment in send-email.ts**

In `src/lib/send-email.ts`, find lines 18–20:

Change from:
```ts
  const { error } = await resend.emails.send({
    // TODO: Replace with verified domain sender when custom domain is configured
    from: "Portfolio Contact <onboarding@resend.dev>",
```
To:
```ts
  const { error } = await resend.emails.send({
    // When safdarayub.dev is verified in Resend, change this to:
    // from: "Portfolio Contact <noreply@safdarayub.dev>"
    from: "Portfolio Contact <onboarding@resend.dev>",
```

- [ ] **Step 2: Verify lint and TypeScript pass**

```bash
pnpm lint && pnpm type-check
```
Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/send-email.ts
git commit -m "docs: clarify send-email from address comment with exact future value"
```

---

## Final Verification

After all 9 tasks are complete:

- [ ] **Run full lint + type check**

```bash
pnpm lint && pnpm type-check
```
Expected: zero errors, zero warnings.

- [ ] **Run a production build to catch any build-time errors**

```bash
pnpm build
```
Expected: build completes successfully. Check output for any errors.

- [ ] **Final commit if build passes**

```bash
git log --oneline -10
```
Verify all 9 task commits are present in order.
