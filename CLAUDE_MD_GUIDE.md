# CLAUDE.md — Complete Guide for Beginners
## What it is, when to create it, when to update it, and the exact prompts to use

---

## What is CLAUDE.md?

CLAUDE.md is a file that tells **Claude Code** (the AI assistant) about your project. It is NOT for you — it's for the AI.

```
Your spec documents  → You read them while coding
CLAUDE.md            → Claude Code reads it automatically
```

Every time you open a new conversation with Claude Code inside your project folder, Claude Code looks for CLAUDE.md and reads it first. Without it, the AI doesn't know anything about your project — what framework you use, how to run it, where files are, or what rules to follow.

---

## When to Create It

**Once per project. At the very start of the GENERATE phase (when you scaffold the project).**

```
SPEC phase (writing documents)     → Don't create CLAUDE.md yet
DESIGN phase (wireframes, tasks)   → Don't create CLAUDE.md yet
GENERATE phase (writing code)      → Create CLAUDE.md at Task 1.1 ✓
```

### Two Ways to Create It

**Method 1: Automatic (Recommended)**

After scaffolding your project, type this in Claude Code:

```
/init
```

Claude Code will scan your project and generate CLAUDE.md automatically.

**Method 2: Manual**

Create the file yourself using the template in this guide (see Template section below).

---

## When to Update It

Update CLAUDE.md whenever something **structurally changes** in your project. Here's a simple checklist:

### Always Update When:

| Event | Example | What to Add |
|---|---|---|
| New tool/library installed | Installed ShadCN UI | Add to tech stack section |
| New command added | Added `pnpm test` script | Add to commands section |
| New API route created | Built POST /api/contact | Add to architecture section |
| New feature area added | Added blog system | Add blog structure to architecture |
| Folder structure changed | Moved components to new folder | Update structure section |
| New convention established | "All forms use React Hook Form + Zod" | Add to conventions section |
| Environment variable added | Added RESEND_API_KEY | Add to env variables section |

### Don't Update When:

| Event | Why Not |
|---|---|
| Added a new component | Claude can discover components by reading files |
| Fixed a bug | Bug fixes don't change project structure |
| Changed text content | Content is not architectural |
| Styled a component | Styling details are in the tech spec, not CLAUDE.md |
| Added a new page | Claude can discover pages from the file system |

### Simple Rule

> **If someone joining your project would need to know it to start working — it belongs in CLAUDE.md. If they can figure it out by reading the code — it doesn't.**

---

## The Exact Prompts to Use

### To Create CLAUDE.md (First Time)

**Prompt 1 — Automatic scan:**
```
/init
```

**Prompt 2 — If /init doesn't work or you want more control:**
```
Analyze this project and create a CLAUDE.md file with:
- How to build, run, and lint the project
- The tech stack
- Project structure and architecture
- Key conventions and rules
```

### To Update CLAUDE.md (After Changes)

**After completing a milestone:**
```
Update CLAUDE.md to reflect the current state of the project
```

**After adding a specific feature:**
```
Update CLAUDE.md — I added [describe what you added]
```

**After major changes:**
```
Read the project and rewrite CLAUDE.md from scratch based on the current codebase
```

### To Check If CLAUDE.md Is Accurate

```
Read CLAUDE.md and compare it with the actual project.
Is anything outdated or missing?
```

---

## What Goes Inside CLAUDE.md

### The 6 Sections Every CLAUDE.md Should Have

```
1. Project Overview    → One sentence about what this project is
2. Tech Stack          → Framework, language, key libraries
3. Commands            → How to install, run, build, lint, test
4. Architecture        → How data flows, key folders, key patterns
5. Environment Vars    → What env variables are needed
6. Key Conventions     → Rules the AI must follow
```

### What Does NOT Belong in CLAUDE.md

| Don't Include | Why |
|---|---|
| Every file and component listed | Claude can discover these by reading the codebase |
| Detailed content/copy | That belongs in your content document |
| Design details (colors, fonts) | That belongs in your tech spec |
| Task lists or todos | That belongs in your task breakdown |
| Generic advice ("write clean code") | Obvious and unhelpful |
| Sensitive data (API keys, passwords) | Security risk |

---

## CLAUDE.md Template

Copy this template for any future project. Fill in the blanks after scaffolding.

```markdown
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working
with code in this repository.

## Project Overview

[One sentence: What is this project and what does it do?]

## Tech Stack

- **Framework:** [e.g., Next.js 15 (App Router)]
- **Language:** [e.g., TypeScript]
- **Styling:** [e.g., Tailwind CSS + ShadCN UI]
- **Package Manager:** [e.g., pnpm]
- **Deployment:** [e.g., Vercel]
[Add other key technologies]

## Commands

```bash
[pkg-manager] install        # Install dependencies
[pkg-manager] dev            # Dev server
[pkg-manager] build          # Production build
[pkg-manager] lint           # Lint code
[pkg-manager] test           # Run tests (if applicable)
```

## Architecture

### Project Structure
```
src/
├── app/           # Pages and routes
├── components/    # UI components
├── lib/           # Utility functions
├── types/         # TypeScript types
└── content/       # Data files (if applicable)
```

### Data Flow
[Describe how data moves from source to UI]

### Key Patterns
[List architectural patterns: server vs client components,
 rendering strategy, state management approach, etc.]

## Environment Variables

```
VARIABLE_NAME=description_of_what_it_does
```

## Key Conventions

- [Rule 1: e.g., "Use pnpm, not npm"]
- [Rule 2: e.g., "All pages are statically generated"]
- [Rule 3: e.g., "Dark mode is the default theme"]
[Add project-specific rules]
```

---

## CLAUDE.md Update Schedule

Here's when to update during a typical project build:

### Phase 1: Foundation

```
Task 1.1  Scaffold project          → CREATE CLAUDE.md (or run /init)
Task 2.1  Install UI library        → UPDATE: add to tech stack
Task 6.2  Build API route           → UPDATE: add API to architecture
Task 7.7  Final deploy              → UPDATE: add deployment URL
```

### Phase 2: New Features

```
Blog system added                   → UPDATE: add blog architecture
Analytics added                     → UPDATE: add analytics info
New scripts added                   → UPDATE: add new commands
```

### Phase 3: Maintenance

```
Major refactor                      → REWRITE: scan and regenerate
New developer joins                 → REVIEW: make sure it's complete
Switching tools                     → UPDATE: change tech stack
```

---

## Real Example: Your Portfolio Project

Here's what your CLAUDE.md looks like right now and when each part was added:

```markdown
# CLAUDE.md  ← Created at project start

## Project Overview  ← Written once, never changed
Personal portfolio website for Safdar Ayub (safdarayub.dev)

## Tech Stack  ← Written once, updated when new tools added
- Next.js 15, TypeScript, Tailwind CSS, ShadCN UI, Framer Motion

## Commands  ← Written once, updated when new scripts added
pnpm dev, pnpm build, pnpm lint, pnpm type-check

## Architecture  ← Updated as project grows
- Data flow: content files → lib utilities → pages → components
- Contact form: API route → Resend email service
- Blog: MDX files → parsed with gray-matter + next-mdx-remote
  (↑ this line gets added when you build the blog in Phase 2)

## Environment Variables  ← Written once
RESEND_API_KEY, NEXT_PUBLIC_SITE_URL, CONTACT_EMAIL

## Key Conventions  ← Grows over time as you discover patterns
- Respect prefers-reduced-motion
- ShadCN components in src/components/ui/ (don't manually edit)
- Git: main (production), dev (development), feature/* branches
```

---

## CLAUDE.md vs Other AI Tool Configs

If you use other AI coding tools in the future, each has its own config file:

| AI Tool | Config File | Works the Same Way? |
|---|---|---|
| **Claude Code** | `CLAUDE.md` | Yes — auto-read at conversation start |
| **GitHub Copilot** | `.github/copilot-instructions.md` | Yes — similar concept |
| **Cursor** | `.cursor/rules/*.md` or `.cursorrules` | Yes — similar concept |
| **Windsurf** | `.windsurfrules` | Yes — similar concept |

The content is similar for all of them — project overview, tech stack, conventions. If you switch tools, you can copy most of the content between these files.

---

## Quick Reference

```
┌──────────────────────────────────────────────┐
│           CLAUDE.md CHEAT SHEET              │
├──────────────────────────────────────────────┤
│                                              │
│  WHAT:   Config file for Claude Code (AI)    │
│  WHO:    Claude Code reads it, you write it  │
│  WHEN:   Create at project scaffold          │
│                                              │
│  CREATE IT:                                  │
│    /init                                     │
│    or write manually using template          │
│                                              │
│  UPDATE IT:                                  │
│    "Update CLAUDE.md to reflect the          │
│     current state of the project"            │
│                                              │
│  CHECK IT:                                   │
│    "Is CLAUDE.md still accurate?"            │
│                                              │
│  INCLUDES:                                   │
│    ✓ Project overview                        │
│    ✓ Tech stack                              │
│    ✓ Run/build/lint commands                 │
│    ✓ Architecture & data flow                │
│    ✓ Environment variables                   │
│    ✓ Key conventions                         │
│                                              │
│  DOES NOT INCLUDE:                           │
│    ✗ Every file listed                       │
│    ✗ Content/copy text                       │
│    ✗ Design details (colors, fonts)          │
│    ✗ Task lists                              │
│    ✗ API keys or secrets                     │
│    ✗ Generic advice                          │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Summary

1. **Create once** — when you scaffold the project (use `/init`)
2. **Update occasionally** — when project structure changes (use the prompts above)
3. **Don't overthink it** — it's a simple reference file, not a detailed document
4. **Let Claude help** — you don't need to write it manually, just ask

That's everything you need to know about CLAUDE.md. Save this guide and reference it for any future project.
