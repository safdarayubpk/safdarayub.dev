# CareerCoach Pakistan — Portfolio Entry Design

**Date:** 2026-05-09  
**Status:** Approved  
**Scope:** Add CareerCoach Pakistan to safdarayub.dev portfolio as priority-1 flagship under new "SaaS Products" category

---

## 1. Goal

Add CareerCoach Pakistan (https://careercoach-pakistan.vercel.app) to the portfolio website. It is the strongest project in the portfolio — a complete, live, paid SaaS — and should be the first project visitors see. A new "SaaS Products" filter category distinguishes it from demo/experiment projects.

---

## 2. What Changes

5 file touches. No structural rewrites.

| # | Action | File |
|---|--------|------|
| 1 | Create | `src/content/projects/careercoach-pakistan.ts` |
| 2 | Update | `src/content/projects/details.tsx` — add detail content |
| 3 | Update | `src/lib/projects.ts` — import + add to allProjects |
| 4 | Update | `src/content/projects/personal-ai-employee.ts` — priority 1 → 2 |
| 5 | Copy | Dashboard screenshot → `public/images/projects/careercoach-pakistan.png` |

The "SaaS Products" filter tab appears automatically — `projects/page.tsx` derives categories from `projects.map(p => p.category)`. No changes needed to the page or filter component.

---

## 3. Project Data File

**File:** `src/content/projects/careercoach-pakistan.ts`

```ts
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

---

## 4. Project Detail Content

**File:** `src/content/projects/details.tsx` — new key `"careercoach-pakistan"`

### Content outline

**Overview (2–3 sentences)**  
CareerCoach Pakistan is an AI-powered interview coaching SaaS built for the Pakistani job market. Users paste a job description, configure their role and experience level, and work through 10 AI-generated questions — receiving scored feedback (What You Got Right / What Was Missing / How to Improve) after each answer. The app supports both English and Urdu input.

**User Flow (ordered list)**
1. Land on marketing page → Start 7-day free trial
2. Sign in with Google (Supabase Auth)
3. Subscribe via Stripe (PKR 999/month, managed through Stripe customer portal)
4. Set up a session: job role, experience level (Junior/Mid/Senior), interview type (Technical/Behavioral/Mixed), optional JD paste
5. Answer 10 AI-generated questions; each answer scored 1–10 with structured feedback
6. Review session history and scores on dashboard

**Architecture Table**

| Layer | Technology | Role |
|-------|-----------|------|
| Auth | Supabase Auth + Google OAuth | User sessions, subscription gating |
| Database | Supabase Postgres | Sessions, questions, answers, scores |
| Billing | Stripe (subscriptions + customer portal) | PKR 999/month plans, trial management |
| AI | Groq API (LLaMA 3) | Question generation + answer scoring |
| Email | Resend + React Email | Transactional emails (welcome, billing) |
| Analytics | PostHog + Vercel Analytics | Usage tracking, funnel analysis |
| Hosting | Vercel (SSR) | Edge deployment |

**Key Engineering Decisions**
- Groq chosen over OpenAI for lower latency and cost at Pakistan-relevant price point
- Supabase RLS (Row Level Security) ensures users can only read their own sessions/answers
- Stripe customer portal handles all billing self-service — no custom billing UI needed
- JD trimming logic keeps prompts within Groq token limits (shown as "JD trimmed to fit AI limits" in UI)

---

## 5. Library Update

**File:** `src/lib/projects.ts`

- Import `careercoachPakistan` from `@/content/projects/careercoach-pakistan`
- Add as first element of `allProjects` array (sort by priority handles ordering)

---

## 6. Priority Bump

**File:** `src/content/projects/personal-ai-employee.ts`

Change `priority: 1` → `priority: 2`

All other project priorities remain unchanged (BusBot is priority 3, etc.).

---

## 7. Screenshot

Source: `/home/safdarayub/Pictures/Screenshot from 2026-05-09 06-10-48.png` (the dashboard view — shows real product with session data, scores, and navigation)

Destination: `public/images/projects/careercoach-pakistan.png`

The dashboard screenshot is chosen over the landing page because it shows the working interior of the app — more compelling for portfolio visitors than a marketing page.

---

## 8. Out of Scope

- No changes to the hero section "Featured Projects" on the homepage (it takes the top 3 by priority — CareerCoach will naturally appear there after the priority update)
- No new components needed
- No routing changes (dynamic route `/projects/[slug]` works automatically via `generateStaticParams`)
- No user count or revenue metrics on the card (honest: 2 users currently)
