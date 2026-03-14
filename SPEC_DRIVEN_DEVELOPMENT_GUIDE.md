# Spec-Driven Development — A Beginner's Complete Guide
## Written for developers who want to build projects the professional way

---

## What is Spec-Driven Development?

Spec-driven development is a simple idea:

**Write everything down BEFORE you write any code.**

"Spec" is short for "specification" — a document that describes exactly what you're building. Instead of opening your code editor and figuring things out as you go, you first create documents that answer every question. Then you build by following those documents.

Think of it like this:

| Approach | How It Works | Result |
|---|---|---|
| **No spec** | Open editor → start coding → figure it out as you go | Confusion, rebuilding, inconsistency |
| **Spec-driven** | Write documents → plan everything → code by following the plan | Clarity, efficiency, professional output |

### A Real-World Analogy

A builder doesn't show up to a construction site and start laying bricks randomly. They follow:
1. **Blueprints** (what does the building look like?)
2. **Materials list** (what do we need?)
3. **Construction schedule** (what do we build first, second, third?)

Spec-driven development is the same thing for software.

---

## The 4-Phase Workflow

Every spec-driven project follows this cycle:

```
    ┌─────────┐     ┌─────────┐     ┌──────────┐     ┌─────────┐
    │  SPEC   │ ──→ │ DESIGN  │ ──→ │ GENERATE │ ──→ │ REVIEW  │
    │  📄     │     │  🎨     │     │  💻      │     │  🔍     │
    └─────────┘     └─────────┘     └──────────┘     └─────────┘
    "What are we     "How does it    "Write the       "Does it match
     building?"      look & work?"   code"            the spec?"
```

### Phase 1: SPEC — Document What You're Building

This is the most important phase. You answer every question about the project **before touching code**.

#### What to Document

**A. Project Overview**
- What is this project?
- Who is it for?
- What problem does it solve?

**B. Requirements (Features)**
- List every feature the project needs
- Be specific — "user can filter projects by category" not just "projects page"
- Mark which features are required for launch vs nice-to-have

**C. Content**
- All text that appears on the website/app
- Page titles, descriptions, button labels
- Every word — don't leave anything to be "figured out later"

**D. Tech Stack**
- What framework, language, libraries will you use?
- Why each one? (forces you to think about your choices)
- What you're NOT using and why

**E. Environment & Services**
- What accounts do you need? (hosting, email service, analytics)
- What API keys are required?
- What does deployment look like?

#### Spec Document Template

```markdown
# PROJECT SPEC — [Project Name]

## 1. Overview
What is this project? Who is it for? What problem does it solve?

## 2. Tech Stack
| Layer      | Technology | Why                    |
|------------|-----------|------------------------|
| Framework  | Next.js   | SSR, file-based routing |
| Language   | TypeScript| Type safety             |
| Styling    | Tailwind  | Rapid development       |
| ...        | ...       | ...                     |

## 3. Features List
- [ ] Feature 1 — description
- [ ] Feature 2 — description
- [ ] Feature 3 — description

## 4. Pages / Routes
| Route     | Purpose          | Notes              |
|-----------|-----------------|---------------------|
| /         | Home page       | Static              |
| /about    | About page      | Static              |
| ...       | ...             | ...                 |

## 5. Environment Variables
| Variable       | Purpose              | Where to Get It |
|---------------|----------------------|-----------------|
| API_KEY       | Email service        | resend.com      |
| ...           | ...                  | ...             |

## 6. Deployment
- Platform: Vercel / Netlify / etc.
- Domain: example.com
- Branch strategy: main (production), dev (development)
```

#### Content Document Template

```markdown
# CONTENT DOCUMENT — [Project Name]

## Page 1: Home

### Hero Section
- Heading: "Your Name"
- Subtitle: "Your Title"
- Description: "One paragraph about you..."
- Buttons: [Download Resume] [View Projects] [Contact]

### Section 2: [Section Name]
- Heading: "..."
- Content: "..."

## Page 2: About
(same pattern — every word written out)

## Page 3: ...
```

---

### Phase 2: DESIGN — Plan How It Looks and How the Code Is Organized

Now you know WHAT to build. This phase answers HOW.

#### What to Create

**A. Wireframes (Page Layouts)**
- Rough visual layout of every page
- Where does each element sit on the screen?
- How does it change on mobile vs desktop?
- You don't need Figma — text-based wireframes work perfectly

**B. Component Architecture**
- What reusable components do you need?
- Which components are used on multiple pages?
- Which are client-side (interactive) vs server-side (static)?

**C. Data Flow**
- Where does your data come from? (files, API, database)
- How does it flow to the UI?

**D. Task Breakdown**
- Split the entire project into small, ordered tasks
- Each task = one focused piece of work (1-3 hours)
- Group tasks into milestones

#### Wireframe Template (Text-Based)

```
PAGE: Home — Desktop

┌──────────────────────────────────────────┐
│  NAVBAR                                  │
│  Logo    Links...    [CTA Button]        │
├──────────────────────────────────────────┤
│  HERO SECTION                            │
│                                          │
│  LEFT (60%)          │  RIGHT (40%)      │
│  Heading             │  Profile Photo    │
│  Subtitle            │                   │
│  Description         │                   │
│  [Button] [Button]   │                   │
├──────────────────────────────────────────┤
│  SECTION 2                               │
│  ...                                     │
├──────────────────────────────────────────┤
│  FOOTER                                  │
│  Links    Social Icons    Copyright      │
└──────────────────────────────────────────┘


PAGE: Home — Mobile

┌────────────────────┐
│  Logo       [☰]    │
├────────────────────┤
│  Profile Photo     │
│                    │
│  Heading           │
│  Subtitle          │
│  Description       │
│                    │
│  [Button] (full w) │
│  [Button] (full w) │
├────────────────────┤
│  SECTION 2         │
│  ...               │
├────────────────────┤
│  FOOTER (stacked)  │
└────────────────────┘
```

#### Task Breakdown Template

```markdown
# TASK BREAKDOWN — [Project Name]

## Milestone 1: Project Setup
### Task 1.1 — Scaffold project
- What to do: Run create-next-app, verify it runs
- Output: Default page loads at localhost:3000

### Task 1.2 — Initialize git
- What to do: git init, create GitHub repo, first commit
- Output: Repo visible on GitHub

## Milestone 2: Layout
### Task 2.1 — Build navbar
- What to do: Create navbar component matching wireframe
- Output: Navigation works on all pages

### Task 2.2 — Build footer
- What to do: ...
- Output: ...
```

---

### Phase 3: GENERATE — Write the Code

Now you finally open your code editor. But you're not improvising — you're following your documents.

#### The Rules

**Rule 1: Always have the spec open**
Before writing any component, open the relevant document and read what it should do.

```
Building the hero section?
→ Open CONTENT doc to get the exact text
→ Open WIREFRAME to see the layout
→ Open TECH SPEC to check colors/fonts/spacing
→ Now write the code
```

**Rule 2: Build one task at a time**
Don't jump around. Pick the next task from your breakdown, complete it, commit it, move on.

```
❌ Bad:  Start navbar → get distracted → work on hero →
        half-finish contact form → nothing is complete

✅ Good: Task 2.1 (navbar) → commit → Task 2.2 (footer) →
        commit → Task 2.3 (hero) → commit
```

**Rule 3: Don't add what's not in the spec**
If the spec doesn't mention it, don't build it. No "I think it would be cool to add..." during the build phase. If you have a new idea, write it down for a future phase.

```
❌ Bad:  "The spec says 3 buttons but I think 4 would be better"
        (now you're improvising and your spec is wrong)

✅ Good: "I think a 4th button would work. I'll add it to the
        spec for Phase 2 and build what's documented now."
```

**Rule 4: Commit after every completed task**
Each commit = one finished task. This creates a clean history and lets you undo mistakes easily.

```
git commit -m "Add navbar component with mobile menu"
git commit -m "Add footer component"
git commit -m "Add hero section with CTA buttons"
```

**Rule 5: Use placeholder content when assets aren't ready**
Don't stop building because you don't have the final photo or screenshot. Use a colored box with the correct dimensions. Swap the real asset later.

---

### Phase 4: REVIEW — Verify Against the Spec

After completing a milestone (group of tasks), you stop and check your work against the spec.

#### Review Checklist

```markdown
## Review: [Milestone Name]

### Content Check
- [ ] All text matches the content document exactly
- [ ] No placeholder "Lorem ipsum" left behind
- [ ] All links point to correct destinations

### Layout Check
- [ ] Desktop layout matches wireframe
- [ ] Mobile layout matches wireframe
- [ ] Spacing follows design system (padding, gaps)

### Design Check
- [ ] Colors match tech spec
- [ ] Fonts match tech spec
- [ ] Dark mode works correctly
- [ ] Light mode works correctly

### Functionality Check
- [ ] All buttons work
- [ ] All navigation links work
- [ ] No console errors in browser

### Responsive Check
- [ ] Test at 375px (mobile)
- [ ] Test at 768px (tablet)
- [ ] Test at 1280px (desktop)
```

If something doesn't match the spec → fix it now, before moving to the next milestone.

---

## How to Start a New Project from Scratch

Here's the exact step-by-step process for any project:

### Step 1: Create a Project Folder
```
my-project/
└── (empty for now)
```

### Step 2: Write Your Spec Documents
Create these files BEFORE any code:

```
my-project/
├── PROJECT_SPEC.md           ← Tech stack, features, architecture
├── CONTENT_DOCUMENT.md       ← All text and copy
├── WIREFRAMES.md             ← Page layouts (desktop + mobile)
└── TASK_BREAKDOWN.md         ← Ordered list of tasks
```

### Step 3: Review Your Documents
Ask yourself:
- Can someone who knows nothing about this project build it from these documents alone?
- Is every page described?
- Is every feature listed?
- Is the text for every section written?
- Do I know exactly what each page looks like?

If the answer to any question is "no" — go back and add the missing information.

### Step 4: Start Building (Phase 3: GENERATE)
Follow the task breakdown. One task at a time. Always reference the spec.

### Step 5: Review Each Milestone (Phase 4: REVIEW)
After completing each milestone, compare the output against the spec and wireframes.

---

## Common Mistakes Beginners Make

### Mistake 1: Skipping the Spec
"I'll just figure it out as I code."

**Why it fails:** You'll make different decisions at different times. The hero section you build on Monday won't visually match the footer you build on Friday. You'll waste time rewriting things.

### Mistake 2: Writing Vague Specs
"Home page should look nice and have some buttons."

**Why it fails:** This tells you nothing. What buttons? What text on them? Where do they go? Be specific:
"Hero section has 3 buttons: [Download Resume] links to /resume/file.pdf, [View Projects] links to /projects, [Get in Touch] links to /contact."

### Mistake 3: Over-Specifying
Writing 50 pages of spec for a simple todo app.

**Why it fails:** The spec should match the complexity of the project. Simple project = simple spec. Complex project = detailed spec. Don't write more spec than the code itself.

### Mistake 4: Not Updating the Spec
You discover during building that something needs to change, but you only change the code, not the document.

**Why it fails:** Now your spec and code are out of sync. The spec becomes useless. If you change the code, update the spec first, then change the code.

### Mistake 5: Building Everything at Once
Trying to finish the entire project in one sitting.

**Why it fails:** You'll get overwhelmed and lose track. Milestones exist so you can finish one group of tasks, see progress, and stay motivated.

---

## Spec-Driven Development for Different Project Types

### Portfolio Website
```
Documents needed:
├── Content doc (all text, page by page)
├── Tech spec (stack, colors, fonts, deployment)
├── Wireframes (page layouts)
└── Task breakdown (ordered build steps)
```

### E-Commerce App
```
Documents needed:
├── Requirements doc (features, user flows)
├── Database schema (products, orders, users)
├── API spec (endpoints, request/response formats)
├── Tech spec (stack, architecture, payments)
├── Wireframes (key pages and flows)
└── Task breakdown
```

### Mobile App
```
Documents needed:
├── Requirements doc (features, screens)
├── User flow diagrams (how users navigate)
├── API spec (if talking to a backend)
├── Tech spec (React Native / Flutter, state management)
├── Wireframes (every screen, both platforms)
└── Task breakdown
```

### API / Backend Service
```
Documents needed:
├── API spec (every endpoint, inputs, outputs)
├── Database schema (tables, relationships)
├── Tech spec (framework, hosting, auth method)
├── Error handling strategy
└── Task breakdown
```

The documents change based on the project, but the process is always the same:
**SPEC → DESIGN → GENERATE → REVIEW**

---

## Architecture Decision Records (ADRs)

ADRs are a powerful habit used by senior developers. They document **why** you made a decision, not just what you decided.

### ADR Template

```markdown
# ADR-001: [Decision Title]

## Status
Accepted | Rejected | Superseded by ADR-XXX

## Context
What situation are we facing? What problem needs a decision?

## Decision
What did we decide?

## Consequences
What happens because of this decision?
- Positive: ...
- Negative: ...
- Trade-offs: ...
```

### ADR Example

```markdown
# ADR-001: Use Local MDX Files Instead of CMS

## Status
Accepted

## Context
The portfolio needs a blog system. Options considered:
1. Headless CMS (Sanity, Contentful)
2. Local MDX files in the repository

## Decision
Use local MDX files stored in src/content/blog/

## Consequences
- Positive: Free, version controlled with git, no external dependency
- Positive: Can embed React components in blog posts
- Negative: Adding a new post requires a code commit and redeploy
- Trade-off: Acceptable for a personal blog with infrequent posts
```

### When to Write ADRs
- When choosing between 2+ valid options
- When a decision is hard to reverse
- When future-you might wonder "why did I do this?"

You don't need ADRs for obvious decisions ("we use CSS for styling"). Use them for meaningful choices.

---

## Quick Reference Card

Save this for any future project:

```
┌──────────────────────────────────────────────────┐
│         SPEC-DRIVEN DEVELOPMENT                  │
│         Quick Reference                          │
├──────────────────────────────────────────────────┤
│                                                  │
│  PHASE 1: SPEC                                   │
│  □ Project overview written                      │
│  □ All features listed                           │
│  □ Tech stack decided (with reasons)             │
│  □ All content/copy written                      │
│  □ Environment & services identified             │
│                                                  │
│  PHASE 2: DESIGN                                 │
│  □ Wireframes for every page (desktop + mobile)  │
│  □ Component list identified                     │
│  □ Data flow mapped                              │
│  □ Tasks broken down and ordered                 │
│                                                  │
│  PHASE 3: GENERATE                               │
│  □ One task at a time                            │
│  □ Always reference the spec                     │
│  □ Don't add what's not in the spec              │
│  □ Commit after every task                       │
│  □ Use placeholders for missing assets           │
│                                                  │
│  PHASE 4: REVIEW                                 │
│  □ Content matches spec                          │
│  □ Layout matches wireframe                      │
│  □ Design matches tech spec                      │
│  □ All links and buttons work                    │
│  □ Responsive on all screen sizes                │
│                                                  │
│  REPEAT for each milestone until done            │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## Summary

Spec-driven development is not complicated. It's just one principle:

**Document first. Build second. Verify third.**

The time you spend writing specs is never wasted — it saves you 3x the time you would have spent confused, rewriting code, and making inconsistent decisions during the build.

Your documents are your contract with yourself. Follow them, and you'll build exactly what you planned, every time.
