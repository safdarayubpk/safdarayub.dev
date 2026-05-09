# CareerCoach Pakistan Portfolio Entry Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add CareerCoach Pakistan as priority-1 flagship project under a new "SaaS Products" category on safdarayub.dev.

**Architecture:** 5 file touches — one new project data file, one detail JSX block added to the existing details registry, one import added to the projects library, one priority number changed, and one screenshot copied. No new components, no routing changes, no page restructuring.

**Tech Stack:** Next.js 16 App Router · TypeScript · Tailwind CSS · pnpm

---

## File Map

| Action | File | What changes |
|--------|------|--------------|
| Create | `src/content/projects/careercoach-pakistan.ts` | New project data object |
| Modify | `src/content/projects/details.tsx` | Add `"careercoach-pakistan"` key to `projectDetails` record |
| Modify | `src/lib/projects.ts` | Import + add `careercoachPakistan` to `allProjects` |
| Modify | `src/content/projects/personal-ai-employee.ts` | `priority: 1` → `priority: 2` |
| Copy | screenshot → `public/images/projects/careercoach-pakistan.png` | Card thumbnail |

---

## Task 1: Copy the screenshot

**Files:**
- Copy: `/home/safdarayub/Pictures/Screenshot from 2026-05-09 06-10-48.png` → `public/images/projects/careercoach-pakistan.png`

- [ ] **Step 1: Copy the dashboard screenshot**

```bash
cp "/home/safdarayub/Pictures/Screenshot from 2026-05-09 06-10-48.png" \
   "/home/safdarayub/Desktop/software house projects_3/safdarayub.dev/public/images/projects/careercoach-pakistan.png"
```

- [ ] **Step 2: Verify it exists**

```bash
ls -lh "/home/safdarayub/Desktop/software house projects_3/safdarayub.dev/public/images/projects/careercoach-pakistan.png"
```

Expected: file present, non-zero size.

- [ ] **Step 3: Commit**

```bash
cd "/home/safdarayub/Desktop/software house projects_3/safdarayub.dev"
git add public/images/projects/careercoach-pakistan.png
git commit -m "feat: add CareerCoach Pakistan dashboard screenshot"
```

---

## Task 2: Create the project data file

**Files:**
- Create: `src/content/projects/careercoach-pakistan.ts`

- [ ] **Step 1: Create the file**

Create `src/content/projects/careercoach-pakistan.ts` with this exact content:

```ts
import { Project } from "@/types/project";

export const careercoachPakistan: Project = {
  slug: "careercoach-pakistan",
  title: "CareerCoach Pakistan — AI Interview Coach",
  oneLiner:
    "Full-stack SaaS — paste a job description, answer 10 AI-generated questions in English or Urdu, and get instant scored feedback. Subscription billing, Google auth, transactional email, and analytics included.",
  category: "SaaS Products",
  image: "/images/projects/careercoach-pakistan.png",
  techStack: [
    "Next.js 16",
    "Supabase",
    "Stripe",
    "Groq AI",
    "Resend",
    "PostHog",
    "Tailwind CSS",
  ],
  links: {
    github: "https://github.com/safdarayubpk/careercoach-pakistan",
    live: "https://careercoach-pakistan.vercel.app",
  },
  isFlagship: true,
  priority: 1,
  lastUpdated: "2026-05-09",
};
```

- [ ] **Step 2: Type-check**

```bash
cd "/home/safdarayub/Desktop/software house projects_3/safdarayub.dev"
pnpm type-check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/content/projects/careercoach-pakistan.ts
git commit -m "feat: add CareerCoach Pakistan project data"
```

---

## Task 3: Add detail content to details.tsx

**Files:**
- Modify: `src/content/projects/details.tsx`

The `projectDetails` record currently ends at line 577 with `"robotics-textbook": (...)`. Add a new `"careercoach-pakistan"` entry **before** `"ai-ml-job-market-pipeline"` (i.e. as the first key), so it appears first in the file. The order of keys in this record does not affect functionality — position is just convention.

- [ ] **Step 1: Add the detail entry**

In `src/content/projects/details.tsx`, insert the following immediately after the opening `{` of `projectDetails` (after line 3), before the `"ai-ml-job-market-pipeline"` entry:

```tsx
  "careercoach-pakistan": (
    <>
      <h2>Overview</h2>
      <p>
        CareerCoach Pakistan is an AI-powered interview coaching SaaS built for
        the Pakistani job market. Users paste a job description, configure their
        role and experience level, and work through 10 AI-generated questions —
        receiving scored feedback after each answer. The app supports both
        English and Urdu input.
      </p>
      <p>
        Each answer is evaluated by Groq AI across three dimensions:{" "}
        <strong>What You Got Right</strong>,{" "}
        <strong>What Was Missing</strong>, and{" "}
        <strong>How to Improve</strong> — plus a model answer to compare
        against. Scores are tracked per session on the dashboard.
      </p>

      <h2>User Flow</h2>
      <ol>
        <li>Land on marketing page → start 7-day free trial (no credit card)</li>
        <li>Sign in with Google (Supabase Auth)</li>
        <li>Subscribe via Stripe — PKR 999/month, cancel anytime via customer portal</li>
        <li>
          Set up a session: job role, experience level (Junior / Mid / Senior),
          interview type (Technical / Behavioral / Mixed), optional JD paste
        </li>
        <li>Answer 10 AI-generated questions — each scored 1–10 with structured feedback</li>
        <li>Review session history, scores, and averages on the dashboard</li>
      </ol>

      <h2>Architecture</h2>
      <div className="not-prose overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-2 text-left font-semibold">Layer</th>
              <th className="px-4 py-2 text-left font-semibold">Technology</th>
              <th className="px-4 py-2 text-left font-semibold">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-2">Auth</td>
              <td className="px-4 py-2">Supabase Auth · Google OAuth</td>
              <td className="px-4 py-2">User sessions, subscription gating</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">Database</td>
              <td className="px-4 py-2">Supabase Postgres · RLS</td>
              <td className="px-4 py-2">Sessions, questions, answers, scores</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">Billing</td>
              <td className="px-4 py-2">Stripe subscriptions · customer portal</td>
              <td className="px-4 py-2">PKR 999/month plans, trial management</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">AI</td>
              <td className="px-4 py-2">Groq API · LLaMA 3</td>
              <td className="px-4 py-2">Question generation · answer scoring</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">Email</td>
              <td className="px-4 py-2">Resend · React Email</td>
              <td className="px-4 py-2">Welcome and billing transactional emails</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">Analytics</td>
              <td className="px-4 py-2">PostHog · Vercel Analytics</td>
              <td className="px-4 py-2">Usage tracking, funnel analysis</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">Hosting</td>
              <td className="px-4 py-2">Vercel (SSR)</td>
              <td className="px-4 py-2">Edge deployment</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Key Engineering Decisions</h2>
      <ul>
        <li>
          <strong>Groq over OpenAI:</strong> Lower latency and cost — important
          at a PKR 999/month price point where margins matter
        </li>
        <li>
          <strong>Supabase RLS:</strong> Row-Level Security policies ensure
          users can only read their own sessions and answers — no custom
          authorization middleware needed
        </li>
        <li>
          <strong>Stripe customer portal:</strong> All billing self-service
          (cancel, update card, view invoices) handled by Stripe — no custom
          billing UI to build or maintain
        </li>
        <li>
          <strong>JD trimming:</strong> Job descriptions are trimmed
          server-side before being sent to Groq to stay within token limits —
          surfaced to users as &ldquo;JD trimmed to fit AI limits&rdquo;
        </li>
      </ul>
    </>
  ),

```

- [ ] **Step 2: Type-check**

```bash
cd "/home/safdarayub/Desktop/software house projects_3/safdarayub.dev"
pnpm type-check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/content/projects/details.tsx
git commit -m "feat: add CareerCoach Pakistan project detail content"
```

---

## Task 4: Register project in the library

**Files:**
- Modify: `src/lib/projects.ts`

- [ ] **Step 1: Add the import and register the project**

In `src/lib/projects.ts`, make two changes:

**Add import** (after the existing imports, before `import { Project }`):

```ts
import { careercoachPakistan } from "@/content/projects/careercoach-pakistan";
```

**Add to allProjects array** (append as last element — the sort by priority handles display order):

```ts
const allProjects: Project[] = [
  personalAiEmployee,
  aiMlJobMarketPipeline,
  busbotPakistan,
  ahfAutoParts,
  campaignManager,
  aiVideoGenerationAgent,
  flowCloudNativeTodo,
  roboticsTextbook,
  careercoachPakistan,
];
```

- [ ] **Step 2: Type-check**

```bash
cd "/home/safdarayub/Desktop/software house projects_3/safdarayub.dev"
pnpm type-check
```

Expected: no errors.

- [ ] **Step 3: Commit**

```bash
git add src/lib/projects.ts
git commit -m "feat: register CareerCoach Pakistan in projects library"
```

---

## Task 5: Bump Personal AI Employee priority

**Files:**
- Modify: `src/content/projects/personal-ai-employee.ts`

- [ ] **Step 1: Change priority from 1 to 2**

In `src/content/projects/personal-ai-employee.ts`, change line 24:

```ts
  priority: 2,
```

(was `priority: 1`)

- [ ] **Step 2: Type-check and build**

```bash
cd "/home/safdarayub/Desktop/software house projects_3/safdarayub.dev"
pnpm type-check && pnpm build
```

Expected: type-check passes, build completes with no errors. The build output will show all project slugs generated including `careercoach-pakistan`.

- [ ] **Step 3: Commit**

```bash
git add src/content/projects/personal-ai-employee.ts
git commit -m "feat: set CareerCoach Pakistan as priority-1 flagship"
```

---

## Verification Checklist

After all tasks complete, confirm:

- [ ] `pnpm build` succeeds with no type errors or build failures
- [ ] `/projects` page shows "SaaS Products" filter tab (derived automatically from the new category)
- [ ] CareerCoach Pakistan card appears first in the "All" view and in "SaaS Products" filter
- [ ] CareerCoach Pakistan appears in the homepage "Featured Projects" section (top 3 by priority)
- [ ] `/projects/careercoach-pakistan` detail page renders correctly with the architecture table
- [ ] Card image loads (the dashboard screenshot)
- [ ] Both GitHub and Live links are present on the card/detail page
