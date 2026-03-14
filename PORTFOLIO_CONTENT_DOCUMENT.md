# PORTFOLIO CONTENT DOCUMENT — SAFDAR AYUB
## Version 2.0 | March 2026

### Changelog
- **v2.1** — Fixed timeline dates (all projects are 2026). Removed misleading commit count (most were automated git-sync). Replaced with meaningful metrics (4 tiers, 4 MCP servers, 13 skills, 21 ADRs). Corrected PIAIC entry. Removed Urdu (English only).
- **v2.0** — Updated Personal AI Employee to Platinum tier with full hybrid cloud-local architecture, 21 ADRs, 13 skills. Added missing sections: 404 page, privacy policy, accessibility, analytics, mobile UX. Resolved all v1 gaps.

---

## TABLE OF CONTENTS

1. [Sitemap & Navigation](#1-sitemap--navigation)
2. [Home Page](#2-home-page)
3. [About Page](#3-about-page)
4. [Projects Page](#4-projects-page)
5. [Blog Page](#5-blog-page)
6. [Contact Page](#6-contact-page)
7. [Shared Components](#7-shared-components)
8. [404 & Error Pages](#8-404--error-pages)
9. [Assets Checklist](#9-assets-checklist)
10. [SEO & Metadata](#10-seo--metadata)
11. [Accessibility & Performance](#11-accessibility--performance)
12. [Analytics & Privacy](#12-analytics--privacy)
13. [Mobile UX Notes](#13-mobile-ux-notes)

---

## 1. SITEMAP & NAVIGATION

```
safdarayub.dev (suggested domain)
├── / (Home)
├── /about
├── /projects
│   ├── /projects/personal-ai-employee
│   ├── /projects/ai-video-generation-agent
│   ├── /projects/flow-cloud-native-todo
│   └── /projects/robotics-textbook
├── /blog
│   ├── /blog/[slug] (individual posts)
│   ├── /blog/tags/[tag]
│   └── /blog/rss.xml (RSS feed)
├── /contact
├── /privacy (Privacy Policy)
└── /404 (Not Found)
```

### Navigation Bar Items
- Home
- About
- Projects
- Blog
- Contact
- **[Download Resume]** (button — prominent, right-aligned)

### Footer Links
- Email: safdarayub@gmail.com
- LinkedIn: linkedin.com/in/safdar-ayub-a9884694
- GitHub: github.com/safdarayubpk
- YouTube: [TODO — channel link needed]
- RSS Feed: /blog/rss.xml
- Privacy Policy: /privacy
- © 2026 Safdar Ayub. All rights reserved.

---

## 2. HOME PAGE

### 2.1 Hero Section

**Tagline (H1):**
> Safdar Ayub

**Subtitle (H2):**
> AI Engineer & Full Stack Developer

**Description (1-2 lines):**
> I build autonomous AI agents, cloud-native applications, and production-ready full-stack systems. 23+ years of military discipline, now engineering the future of AI.

**CTA Buttons:**
- [Download Resume] → PDF download
- [View Projects] → /projects
- [Get in Touch] → /contact

**Social Icons Row:**
- GitHub | LinkedIn | Email | YouTube

---

### 2.2 Stats Bar (Social Proof)

A horizontal bar with key numbers:

| Stat | Value |
|---|---|
| Years of Service | 23+ |
| GitHub Repositories | 148+ |
| Custom MCP Servers | 4 |
| Architecture Decision Records | 21+ |
| Hackathon Achievement | Platinum Tier |

---

### 2.3 Featured Skills (Quick Overview)

**Section Title:** What I Do

| Skill Area | Icon | Short Description |
|---|---|---|
| **Agentic AI Systems** | Bot/Robot | Building autonomous agents with MCP servers, human-in-the-loop safety, and multi-tool orchestration |
| **Full Stack Development** | Code | End-to-end web applications with Next.js, FastAPI, PostgreSQL, and modern authentication |
| **Cloud-Native & DevOps** | Cloud | Production deployments on Kubernetes with Docker, Helm, Dapr, and CI/CD pipelines |
| **Hybrid Cloud Architecture** | Server | Cloud VM drafting + local execution with git-sync, offline tolerance, and PM2 daemon management |

---

### 2.4 Featured Projects (Top 3 Cards)

**Section Title:** Featured Projects
**Subtitle:** Selected work showcasing AI engineering and full-stack development

> (Show top 3 project cards with thumbnail, title, one-line description, tech badges, and "View Details" link)

**[View All Projects →]** button at bottom

---

### 2.5 Career Snapshot (Mini Timeline)

**Section Title:** My Journey

```
2000 ──── Joined Pakistan Air Force
           Electronics Technician & Quality Control

2012 ──── Master of Computer Science
           Virtual University of Pakistan

2022 ──── Python Certification (Cisco/OpenEDG)

2023 ──── Retired from PAF (23 years)
           AI & Computing Program — Presidential Initiative for AI and Computing (PIAIC)

2026 ──── Built production AI systems:
           • Flow — 8-Phase Cloud-Native Todo (Kubernetes, Kafka, Dapr, OCI)
           • AI Video Generation Agent (Remotion + Claude Code pipeline)
           • Physical AI & Robotics Interactive Textbook (RAG + OpenAI Agents SDK)
           • Personal AI Employee — Platinum Tier (4 MCP servers, 21 ADRs, hybrid cloud)
           Certified Agentic & Robotic AI Engineer (PIAIC, Air University Islamabad)
```

**[Read Full Story →]** link to /about

---

### 2.6 Testimonials Section

**Section Title:** What People Say

**Card Template:**
```
"[Testimonial quote here]"
— [Name], [Title/Role], [Company/Context]
```

**Placeholder Text:**
> "Testimonials coming soon. I'm currently building my professional network in the AI space."

---

### 2.7 Call to Action Banner

**Heading:** Let's Build Something Together
**Subtext:** Whether you need an AI agent, a full-stack application, or a cloud-native system — I'm ready to help.
**CTA Button:** [Get in Touch] → /contact

---

## 3. ABOUT PAGE

### 3.1 Page Hero

**Title:** About Me
**Subtitle:** From Pakistan Air Force to AI Engineering

---

### 3.2 My Story (Narrative)

**Heading:** The Journey

> I served 23 years in the Pakistan Air Force as a Quality Control Inspector and Electronics Technician. From February 2000 to March 2023, I led inspection teams in Air Logistics and engineering depots, maintained critical communication equipment, and managed cross-functional teams — including liaison with foreign personnel.
>
> When I retired in 2023, I didn't stop. I had already begun studying computer science — earning a Master's degree from Virtual University in 2012 and Python certifications from Cisco in 2022. The military taught me discipline, precision, and the ability to manage complex systems under pressure. I wanted to apply those same qualities to technology.
>
> In 2023, I joined the Artificial Intelligence and Computing Program under the Presidential Initiative for AI and Computing (PIAIC). I'm now pursuing Certified Agentic and Robotic AI Engineering at Air University Islamabad. Since then, I've been building production-grade AI systems — from an autonomous AI employee with a hybrid cloud-local architecture, to AI-powered video generation pipelines, to cloud-native applications deployed on Kubernetes.
>
> My Personal AI Employee project — a Platinum-tier hackathon achievement — best represents my approach: a 4-tier autonomous agent system with 4 MCP servers, 13 Claude Code skills, 21 Architecture Decision Records, and a verified live demo. It monitors Gmail, WhatsApp, and the filesystem, drafts responses on a cloud VM while I'm offline, and executes actions with my approval when I reconnect. That's not a tutorial project — that's production engineering.
>
> My military background isn't just a footnote — it's my foundation. The same attention to detail that ensured military-grade quality standards now ensures production-grade code quality. The same leadership that managed teams across operational units now drives disciplined, spec-driven development methodology.
>
> I'm not just learning AI. I'm building AI systems that actually work.

---

### 3.3 Core Values

| Value | Description |
|---|---|
| **Discipline** | Military-trained precision in every line of code |
| **Quality First** | 23 years of quality control — I don't ship broken things |
| **Continuous Learning** | From electronics to Python to Agentic AI — always evolving |
| **Spec-Driven Development** | Document first, design second, build third — 21 ADRs and counting |

---

### 3.4 Technical Skills (Detailed)

**AI & Agentic Systems**
- OpenAI Agents SDK
- Claude Code (Opus)
- MCP SDK / FastMCP
- Prompt Engineering
- RAG Systems
- Gemini TTS

**Programming Languages**
- Python (primary — 82.7% of AI Employee codebase)
- TypeScript
- JavaScript
- Shell scripting

**Frontend**
- Next.js (App Router)
- React.js
- Remotion (Video rendering)
- Tailwind CSS
- ShadCN UI
- Docusaurus

**Backend & Databases**
- FastAPI
- Node.js
- REST APIs
- SQLModel
- PostgreSQL / Neon DB
- Supabase
- Qdrant Cloud (Vector DB)

**DevOps & Cloud**
- Docker / Docker Compose
- Kubernetes / Helm Charts
- OCI / OKE (Oracle Cloud)
- NGINX Ingress
- Dapr (microservices)
- Apache Kafka
- GitHub Actions
- Vercel
- PM2 (process management)
- Git-sync (hybrid cloud)

**Agent Infrastructure**
- Watchdog (filesystem monitoring)
- APScheduler (scheduled tasks)
- Playwright (browser automation)
- Circuit breaker patterns
- Correlation ID tracking
- Human-in-the-loop (HITL) safety gates
- Risk-based action routing

**Authentication & APIs**
- NextAuth / Clerk / Better Auth
- JWT
- Gmail OAuth2
- Twitter API (Tweepy)
- Meta Graph API (Facebook/Instagram)
- Odoo RPC (ERP integration)

---

### 3.5 Education & Certifications

| Qualification | Institution | Year |
|---|---|---|
| Certified Agentic & Robotic AI Engineer | PIAIC, Air University Islamabad | Expected 2026 |
| Master of Computer Science (CGPA: 3.11) | Virtual University of Pakistan | 2012 |
| DAE Radio Technology (71%) | School of Electronics, PAF Korangi Creek | 2003 |
| AI & Computing Program | Presidential Initiative for AI and Computing (PIAIC) | 2023 |
| PCAP: Python Essentials | Cisco / OpenEDG Python Institute | 2022 |
| Quality Control & Management | Pakistan Air Force | During service |

---

### 3.6 By the Numbers

| Metric | Value |
|---|---|
| Years of military service | 23+ |
| GitHub repositories | 148+ |
| Architecture Decision Records | 21+ |
| Custom MCP servers built | 4 |
| Claude Code skills created | 13 |
| Hackathon tier achieved | Platinum |
| Production projects deployed | 4 |

---

### 3.7 Personal

- Based in Kohat District, Khyber Pakhtunkhwa, Pakistan
- Linux Ubuntu user
- Veteran of the Pakistan Air Force
- Open to remote work worldwide

---

## 4. PROJECTS PAGE

### 4.1 Page Hero

**Title:** Projects
**Subtitle:** Production AI agents, full-stack applications, and cloud-native systems

**Filter Tags:** All | AI Agents | Full Stack | Cloud-Native | Video/Media | Education

---

### 4.2 Project 1: Personal AI Employee (FLAGSHIP)

**Badge:** Hackathon Platinum Tier
**Status:** Production (Live on Cloud VM)
**Priority:** FLAGSHIP — featured first, largest card

**Title:** Personal AI Employee — Hybrid Cloud-Local Autonomous Agent

**One-liner:** A 24/7 autonomous AI agent that monitors Gmail, WhatsApp, and filesystem — drafts responses on a cloud VM while you're offline, then executes with your approval when you reconnect.

**Full Description:**
> A hybrid cloud-local autonomous AI agent that evolved through four architectural tiers (Bronze → Silver → Gold → Platinum). The system monitors multiple sources (Gmail, WhatsApp, filesystem), processes tasks through a git-synced Obsidian vault pipeline, and executes actions via MCP servers with human-in-the-loop safety gates.
>
> The cloud VM (Ubuntu 24.04) runs 24/7, detecting emails and drafting responses. When the local laptop reconnects, a 60-second git-sync cycle pulls pending actions for human approval. This hybrid architecture enables true offline tolerance — the agent works while you sleep.

**The Four Tiers:**

| Tier | Name | What It Does |
|---|---|---|
| **Bronze** | File Watcher + Vault Processing | Filesystem monitoring via Watchdog, YAML-frontmatter metadata, risk-based routing to Done/ or Pending_Approval/ |
| **Silver** | Multi-Source Orchestration | 4 watchers (filesystem, Gmail OAuth2, WhatsApp via Playwright, scheduled tasks), centralized priority queue, batch processing, PM2 process management |
| **Gold** | MCP Servers + External Integrations | 4 FastMCP servers (email, social media, Odoo ERP, documents), circuit breaker pattern, correlation ID tracking, health monitoring |
| **Platinum** | Hybrid Cloud-Local with Offline Tolerance | Cloud VM drafting + local execution, 60-second git-sync, atomic claim-by-move concurrency, stale detection, secrets isolation (3 layers), live verified demo |

**4 MCP Servers:**

| Server | Purpose | HITL Level |
|---|---|---|
| `fte-email` | Draft, send, search emails via Gmail API | Routine / Sensitive |
| `fte-social` | Post to Facebook, Instagram, Twitter/X | Sensitive / Routine |
| `fte-odoo` | Odoo 19 ERP — invoices, payments, financial summaries | Routine / Critical |
| `fte-documents` | Generate reports and CEO briefings | Routine |

**13 Claude Code Skills:**
vault-interact, process-needs-action, check-and-process-needs-action, central-orchestrator, action-executor, gmail-watcher, whatsapp-watcher, daily-scheduler, ralph-retry, social-media-poster, odoo-connector, ceo-briefing, health-monitor

**Key Engineering Patterns:**
- Circuit breaker pattern (3 failures → 300s cooldown)
- Correlation IDs: `corr-YYYYMMDD-HHMMSS-XXXX`
- Risk-based action routing (routine/sensitive/critical)
- Dry-run defaults for safety
- Atomic claim-by-move concurrency (prevents duplication)
- Stale detection (>48h pending, >7d rejected)
- Secrets isolation (3 layers: .gitignore, pre-commit hook, cloud audit)
- 21 Architecture Decision Records (ADRs)

**Live Demo (Verified March 12, 2026):**
Correlation ID: `corr-2026-03-12-d16b3470`

| Step | Event | Agent |
|---|---|---|
| 1 | Test email sent to Gmail | User |
| 2 | Gmail watcher detected (120s poll) | Cloud VM |
| 3 | Orchestrator drafted → Pending_Approval/ | Cloud VM |
| 4 | Git-sync pushed to remote | Cloud VM |
| 5 | Local `git pull` fetched file | Local |
| 6 | User moved to Approved/ | Local |
| 7 | Approval watcher sent via Gmail API | Local |
| 8 | File moved to Done/ (status: completed) | Local |

**Tech Stack:** Python 3.13+, FastMCP, Claude Code (Opus), Gmail OAuth2, Playwright, Odoo RPC, APScheduler, Watchdog, Tweepy, PM2, Git-sync, Docker, Ubuntu 24.04

**Links:**
- GitHub: github.com/safdarayubpk/PersonalAIEmployee
- Cloud VM: 141.145.146.17
- Architecture Diagram: [TODO — create from docs/architecture.md]
- Demo Video: [TODO — record from docs/demo-script.md]

---

### 4.3 Project 2: AI Video Generation Agent

**Badge:** Live Demo on YouTube
**Status:** Production

**Title:** AI Video Generation Agent — End-to-End Content Automation

**One-liner:** Type a prompt, get a full 4-minute motion graphics video with narration — completely AI-generated.

**Full Description:**
> An AI pipeline that generates complete motion graphics videos from text prompts. The workflow covers the entire production cycle: script writing → storyboard generation → scene composition → narration synthesis → rendered video output.
>
> Claude Code (Opus) serves as the orchestrator, coordinating Remotion/React for the rendering engine and Gemini TTS for synchronized voiceover. The system produces 1080p explainer videos with spring physics animations and 3D card transformations.
>
> This project demonstrates spec-driven development methodology with a four-phase workflow: Spec → Design → Generate → Review.

**Key Features:**
- Text-to-video pipeline (prompt → complete video)
- Claude Code (Opus) as AI orchestrator
- Remotion/React rendering engine
- Gemini TTS for synchronized narration
- Spring physics animations and 3D card effects
- 1080p output quality
- Spec-driven four-phase workflow

**Tech Stack:** TypeScript, React, Remotion, Claude Code (Opus), Gemini TTS, Spring Physics, Lucide React

**Links:**
- GitHub: github.com/safdarayubpk/general-agent-video-maker
- YouTube Demo: youtube.com/watch?v=7NoWCL33IUQ
- Architecture Diagram: [TODO — needs to be created]

---

### 4.4 Project 3: Flow — AI-Powered Todo (8-Phase Cloud-Native Evolution)

**Badge:** Live App
**Status:** Production (deployed)

**Title:** Flow — 8-Phase Cloud-Native Todo Application

**One-liner:** A todo app that evolved through 8 architectural phases — from console script to Kubernetes-deployed microservice with AI chatbot.

**Full Description:**
> This project documents the intentional evolution of a simple application across 8 distinct architectural phases: Console App → Full-Stack Web → AI Chatbot → Docker Containerization → Kubernetes Orchestration → Kafka Event Streaming → Dapr Microservices → OCI Cloud Deployment.
>
> The AI chatbot layer uses Groq API for natural language task management with full conversation history. The production system runs on Oracle Cloud (OCI OKE) with Helm charts, NGINX Ingress, Dapr sidecar injection, and free-tier optimization.
>
> Each phase is documented with Architecture Decision Records (ADRs) — 11+ total — following spec-driven development methodology.

**Key Features:**
- 8-phase architectural evolution (documented)
- AI chatbot with natural language task management
- Groq API integration with conversation history
- Kubernetes deployment with Helm 3
- Dapr sidecar injection for microservice communication
- Apache Kafka for event streaming
- 11+ Architecture Decision Records (ADRs)
- OCI free-tier production optimization

**Tech Stack:** Next.js, FastAPI, SQLModel, Groq API, Docker, Kubernetes, Helm 3, Dapr, Apache Kafka, OCI OKE, Neon PostgreSQL

**Links:**
- GitHub: github.com/safdarayubpk/flow
- Live App: 139.185.51.243
- ADR Documentation: [in repo]

---

### 4.5 Project 4: Physical AI & Humanoid Robotics Interactive Textbook

**Badge:** Deployed
**Status:** Live

**Title:** Physical AI & Humanoid Robotics — Interactive Textbook with RAG Chatbot

**One-liner:** A 6-chapter interactive textbook on robotics with a built-in AI chatbot that answers questions from the content.

**Full Description:**
> Built an interactive educational platform covering Physical AI and Humanoid Robotics. The textbook includes 6 chapters covering ROS 2, Gazebo simulation, NVIDIA Isaac, and Vision-Language-Action (VLA) models.
>
> The platform features a RAG (Retrieval-Augmented Generation) chatbot built with OpenAI Agents SDK that can answer questions directly from the textbook content. The backend uses FastAPI with Neon Postgres for data storage and Qdrant Cloud for vector search. User authentication is handled via Better Auth.

**Key Features:**
- 6-chapter curriculum (ROS 2, Gazebo, NVIDIA Isaac, VLA models)
- RAG chatbot using OpenAI Agents SDK
- Vector search with Qdrant Cloud
- User authentication with Better Auth
- Responsive design with Docusaurus

**Tech Stack:** Docusaurus, React, FastAPI, OpenAI Agents SDK, MCP SDK, Neon DB, Qdrant Cloud, Better Auth, Vercel

**Links:**
- GitHub: github.com/safdarayubpk
- Live Site: 2-book.vercel.app

---

### 4.6 Project Card Design Template

Each project card on the listing page:

```
┌─────────────────────────────────┐
│  [Screenshot / GIF]             │
│                                 │
│  [Badge: Platinum Tier]         │
│  Project Title                  │
│  One-liner description          │
│                                 │
│  [Python] [FastMCP] [Claude]    │  ← tech badges
│                                 │
│  [GitHub] [Live Demo] [Details] │  ← action links
└─────────────────────────────────┘
```

---

## 5. BLOG PAGE

### 5.1 Page Hero

**Title:** Blog
**Subtitle:** Insights on Agentic AI, full-stack development, and my journey from military to tech

**RSS Link:** [Subscribe via RSS] → /blog/rss.xml

---

### 5.2 Blog Categories/Tags

- Agentic AI
- MCP Servers
- Claude Code
- Full Stack
- Cloud-Native
- Career Transition
- Tutorials
- Project Breakdowns
- Hybrid Cloud
- Spec-Driven Development

---

### 5.3 Suggested First 5 Blog Posts (Titles & Outlines)

**Post 1:** "Building a Platinum-Tier AI Employee: From File Watcher to Hybrid Cloud Agent"
- The 4-tier evolution: Bronze → Silver → Gold → Platinum
- Why hybrid cloud-local architecture matters
- Key engineering patterns (circuit breakers, correlation IDs, HITL gates)
- The verified live demo walkthrough
- What 21 ADRs taught me about documentation
- *Tag: Agentic AI, MCP Servers, Project Breakdowns, Hybrid Cloud*

**Post 2:** "From Pakistan Air Force to AI Engineering — My Career Transition Story"
- 23 years of military service
- Why I chose AI after retirement
- The PIAIC journey
- Lessons from military that apply to software engineering
- *Tag: Career Transition*

**Post 3:** "Spec-Driven Development: Why I Write 21 ADRs Before Shipping"
- What is spec-driven development
- The four-phase workflow (Spec → Design → Generate → Review)
- ADRs and why they matter — real examples from my projects
- How military planning parallels software specs
- *Tag: Spec-Driven Development, Tutorials*

**Post 4:** "Building AI Video Generation: From Text Prompt to 4-Minute Video"
- The complete pipeline explained
- Claude Code as orchestrator
- Remotion rendering engine
- Challenges and solutions
- *Tag: Agentic AI, Claude Code, Project Breakdowns*

**Post 5:** "4 Custom MCP Servers: Email, Social Media, ERP, and Documents"
- What are MCP servers and why they matter
- Designing each server (fte-email, fte-social, fte-odoo, fte-documents)
- Circuit breaker patterns for reliability
- HITL safety levels (routine/sensitive/critical)
- *Tag: MCP Servers, Agentic AI, Tutorials*

---

### 5.4 Blog Post Template

```
Title:
Date:
Author: Safdar Ayub
Tags: [tag1, tag2]
Read Time: X min
Cover Image: [image]

Introduction (2-3 paragraphs)
---
Main Content (with code blocks, diagrams, screenshots)
---
Key Takeaways (bullet points)
---
Related Projects (links)
---
Share: [Twitter] [LinkedIn] [Copy Link]
```

### 5.5 RSS Feed

- Format: RSS 2.0 / Atom
- Include: title, description, author, date, tags, full content or summary
- URL: /blog/rss.xml
- Auto-generate from blog posts via Next.js

---

## 6. CONTACT PAGE

### 6.1 Page Hero

**Title:** Get in Touch
**Subtitle:** Have a project in mind, a job opportunity, or just want to connect? I'd love to hear from you.

---

### 6.2 Contact Form Fields

| Field | Type | Required | Validation |
|---|---|---|---|
| Full Name | Text input | Yes | Min 2 characters |
| Email Address | Email input | Yes | Valid email format |
| Subject | Dropdown | Yes | Job Opportunity / Freelance Project / Collaboration / General Inquiry |
| Message | Textarea | Yes | Min 10 characters, max 2000 |
| [Send Message] | Submit button | — | Rate limit: 3 per hour |

**Success Message:** "Thank you for reaching out! I'll get back to you within 24-48 hours."
**Error Message:** "Something went wrong. Please try again or email me directly at safdarayub@gmail.com."

---

### 6.3 Direct Contact Links

| Channel | Link | Icon |
|---|---|---|
| Email | safdarayub@gmail.com | Mail icon |
| LinkedIn | linkedin.com/in/safdar-ayub-a9884694 | LinkedIn icon |
| GitHub | github.com/safdarayubpk | GitHub icon |
| YouTube | [TODO — channel link] | YouTube icon |
| Phone | +92-332-961-1639 | Phone icon |

---

### 6.4 Location & Availability

**Text:** Based in Kohat District, Khyber Pakhtunkhwa, Pakistan
**Availability:** Open to remote work worldwide | On-site in Islamabad/Rawalpindi area | Hybrid arrangements
**Timezone:** PKT (UTC+5)

---

## 7. SHARED COMPONENTS

### 7.1 Header/Navbar
- Logo or name "Safdar Ayub" (left)
- Nav links: Home | About | Projects | Blog | Contact
- [Download Resume] button (right, prominent)
- Mobile: hamburger menu with slide-out drawer
- Sticky on scroll with subtle backdrop blur

### 7.2 Footer
- Name + tagline: "Safdar Ayub — AI Engineer & Full Stack Developer"
- Quick links: Home, About, Projects, Blog, Contact
- Social icons: GitHub, LinkedIn, Email, YouTube
- Additional: RSS Feed | Privacy Policy
- Copyright: © 2026 Safdar Ayub. All rights reserved.
- "Built with Next.js & Tailwind CSS"

### 7.3 Resume PDF
- File: Safdar_Ayub_Resume_Updated.pdf (existing — needs update to Platinum tier)
- Download button in: Hero section, Navbar, About page
- Should open in new tab or trigger download
- **NOTE:** Resume PDF must be updated to reflect Platinum tier, 21 ADRs, hybrid cloud architecture

### 7.4 Back to Top Button
- Appears after scrolling past first viewport
- Smooth scroll to top
- Fixed position, bottom-right corner

### 7.5 Loading States
- Skeleton loaders for project cards and blog posts
- Spinner for contact form submission
- Progressive image loading (blur placeholder → full image)

### 7.6 Breadcrumbs
- Show on all inner pages: Home > Projects > Personal AI Employee
- Not shown on Home page

---

## 8. 404 & ERROR PAGES

### 8.1 404 Page

**Title:** Page Not Found
**Message:** The page you're looking for doesn't exist or has been moved.
**CTA Buttons:**
- [Go Home] → /
- [View Projects] → /projects
- [Contact Me] → /contact

**Fun touch (optional):** "Even my AI agents couldn't find this page."

### 8.2 500 / Error Page

**Title:** Something Went Wrong
**Message:** An unexpected error occurred. Please try again.
**CTA:** [Go Home] → /

---

## 9. ASSETS CHECKLIST

| # | Asset | Status | Priority | Notes |
|---|---|---|---|---|
| 1 | Professional headshot photo | [TODO] | HIGH | For hero and about page |
| 2 | Favicon / logo | [TODO] | HIGH | Simple "SA" monogram or custom design |
| 3 | Open Graph image (1200x630px) | [TODO] | HIGH | For social sharing |
| 4 | Personal AI Employee — architecture diagram | [TODO] | HIGH | Create from docs/architecture.md in repo |
| 5 | Personal AI Employee — 4-tier evolution diagram | [TODO] | HIGH | Bronze → Silver → Gold → Platinum visual |
| 6 | Personal AI Employee — demo video | [TODO] | HIGH | Record from docs/demo-script.md |
| 7 | Personal AI Employee — live demo screenshot | [TODO] | HIGH | Show correlation ID flow |
| 8 | AI Video Agent — architecture diagram | [TODO] | MEDIUM | Pipeline visualization |
| 9 | AI Video Agent — YouTube video (exists) | DONE | — | youtube.com/watch?v=7NoWCL33IUQ |
| 10 | Flow app — screenshot of live app | [TODO] | HIGH | Screenshot of 139.185.51.243 |
| 11 | Flow app — 8-phase evolution diagram | [TODO] | MEDIUM | Console → ... → OCI visual |
| 12 | Robotics Textbook — screenshot | [TODO] | MEDIUM | Screenshot of 2-book.vercel.app |
| 13 | Robotics Textbook — live site (exists) | DONE | — | 2-book.vercel.app |
| 14 | Resume PDF (exists) | DONE | — | Needs update to Platinum tier |
| 15 | Blog post cover images (5) | [TODO] | LOW | For initial blog posts |
| 16 | Skill/tech icons set | [TODO] | LOW | Can use devicon or simple-icons |

---

## 10. SEO & METADATA

### Homepage Meta

```
Title: Safdar Ayub — AI Engineer & Full Stack Developer
Description: AI Engineer specializing in agentic AI systems, autonomous agents, and cloud-native full-stack development. Builder of Platinum-tier AI Employee with 4 MCP servers and 21 ADRs. 23+ years military leadership now engineering production AI solutions.
Keywords: AI Engineer, Agentic AI, Full Stack Developer, MCP Servers, Claude Code, Pakistan, Kubernetes, FastAPI, Next.js, Personal AI Employee
```

### Open Graph (Social Sharing)

```
og:title: Safdar Ayub — AI Engineer & Full Stack Developer
og:description: Building autonomous AI agents and cloud-native applications. Platinum-tier hackathon winner.
og:image: [OG image — needs creation]
og:url: safdarayub.dev
og:type: website
twitter:card: summary_large_image
twitter:creator: @[TODO — Twitter handle]
```

### Per-Page Titles

| Page | Title Tag |
|---|---|
| Home | Safdar Ayub — AI Engineer & Full Stack Developer |
| About | About — Safdar Ayub |
| Projects | Projects — Safdar Ayub |
| Blog | Blog — Safdar Ayub |
| Contact | Contact — Safdar Ayub |
| Project Detail | [Project Name] — Safdar Ayub |
| Blog Post | [Post Title] — Safdar Ayub |
| Privacy | Privacy Policy — Safdar Ayub |
| 404 | Page Not Found — Safdar Ayub |

### Structured Data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Safdar Ayub",
  "jobTitle": "AI Engineer & Full Stack Developer",
  "url": "https://safdarayub.dev",
  "sameAs": [
    "https://github.com/safdarayubpk",
    "https://linkedin.com/in/safdar-ayub-a9884694"
  ],
  "alumniOf": [
    {"@type": "Organization", "name": "Pakistan Air Force"},
    {"@type": "Organization", "name": "PIAIC, Air University Islamabad"},
    {"@type": "Organization", "name": "Virtual University of Pakistan"}
  ]
}
```

---

## 11. ACCESSIBILITY & PERFORMANCE

### Accessibility (WCAG 2.1 AA)
- All images must have descriptive alt text
- Color contrast ratio: minimum 4.5:1 for normal text, 3:1 for large text
- Keyboard navigation support on all interactive elements
- Focus indicators visible on all focusable elements
- Skip-to-content link for screen readers
- ARIA labels on icon-only buttons (social links, hamburger menu)
- Form fields: proper labels, error messages linked to inputs

### Performance Targets
- Lighthouse score: 90+ on all categories (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.5s
- Image optimization: WebP format, lazy loading, blur placeholders
- Font loading: swap display strategy, preload critical fonts

---

## 12. ANALYTICS & PRIVACY

### Analytics
- Use **Vercel Analytics** (privacy-friendly, no cookies) or **Plausible** (open-source, GDPR-compliant)
- Track: page views, referrers, top pages, device types, country
- No Google Analytics (too heavy, privacy concerns)

### Privacy Policy (/privacy)

**Title:** Privacy Policy
**Content Summary:**
- What data is collected (contact form submissions: name, email, message)
- How data is used (to respond to inquiries only)
- No data is sold or shared with third parties
- Analytics: privacy-friendly, no personal data tracking
- Contact form data retention: deleted after 90 days if no ongoing conversation
- Right to deletion: email safdarayub@gmail.com to request data removal
- Cookies: only essential (theme preference) — no tracking cookies

### Cookie Consent
- With Vercel Analytics / Plausible: no cookie banner needed (cookieless tracking)
- Theme preference cookie: classified as essential (functional)

---

## 13. MOBILE UX NOTES

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Mobile-Specific Behavior
- Navbar: hamburger menu → slide-out drawer from right
- Hero: stack vertically (text above CTA buttons)
- Project cards: single column, full width
- Stats bar: 2x grid instead of horizontal row
- Blog posts: single column, larger tap targets
- Contact form: full-width inputs
- Timeline: vertical only (no horizontal variant)
- Resume download button: full-width on mobile
- Touch targets: minimum 44x44px (Apple HIG)
- No hover-dependent interactions (use tap/click)

---

## DOCUMENT STATUS

- [x] Sitemap & Navigation — Complete
- [x] Home Page Content — Complete (with Stats Bar)
- [x] About Page Content — Complete (Platinum, hybrid cloud, PIAIC corrected, dates fixed)
- [x] Projects Page Content — Complete (full Platinum rewrite with 4 tiers, 21 ADRs, live demo)
- [x] Blog Page Content — Complete (with RSS)
- [x] Contact Page Content — Complete (with validation rules, timezone, availability)
- [x] Shared Components — Complete (loading states, breadcrumbs, back-to-top)
- [x] 404 & Error Pages — Complete
- [x] Assets Checklist — Complete
- [x] SEO & Metadata — Complete (with structured data JSON-LD)
- [x] Accessibility & Performance — Complete
- [x] Analytics & Privacy — Complete
- [x] Mobile UX Notes — Complete
- [x] Language: English only (Urdu removed — not industry standard for tech portfolios)
- [ ] Resume PDF update to Platinum tier — Pending (before launch)
- [ ] Asset creation — Pending (before build)

---

*This document serves as the single source of truth for all content on safdarayub.dev. No content should be written during the build phase — everything comes from here.*
