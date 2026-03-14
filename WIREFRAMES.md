# WIREFRAMES — SAFDAR AYUB PORTFOLIO
## Text-Based Page Layouts | March 2026

**Legend:**
- `[ ]` = button
- `[===]` = input field
- `---` = horizontal line/separator
- `|` = column divider
- `← →` = horizontal arrangement
- Content in `CAPS` = section labels (not displayed text)

---

## SHARED: NAVBAR (All Pages)

### Desktop (>1024px)
```
┌──────────────────────────────────────────────────────────────────────┐
│  Safdar Ayub          Home  About  Projects  Blog  Contact    [Download Resume] │
│                                                                 ☀/🌙              │
└──────────────────────────────────────────────────────────────────────┘
   ↑ Sticky on scroll, backdrop-blur background
   ↑ Logo/name is a link to Home
   ↑ Active page link is underlined/highlighted
   ↑ Theme toggle (sun/moon icon) next to resume button
```

### Mobile (<640px)
```
┌────────────────────────────────┐
│  Safdar Ayub            [☰]   │
└────────────────────────────────┘
   ↑ Hamburger opens slide-out drawer from RIGHT:

   ┌────────────────────┐
   │               [✕]  │
   │                    │
   │   Home             │
   │   About            │
   │   Projects         │
   │   Blog             │
   │   Contact          │
   │                    │
   │   [Download Resume]│
   │                    │
   │   ☀/🌙 Toggle      │
   └────────────────────┘
```

---

## SHARED: FOOTER (All Pages)

### Desktop
```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│  Safdar Ayub                    Quick Links        Connect           │
│  AI Engineer & Full Stack       Home               GitHub icon       │
│  Developer                      About              LinkedIn icon     │
│                                 Projects           Email icon        │
│                                 Blog               YouTube icon      │
│                                 Contact                              │
│                                 RSS Feed                             │
│                                 Privacy Policy                       │
│                                                                      │
│  ────────────────────────────────────────────────────────────────     │
│  © 2026 Safdar Ayub. All rights reserved.    Built with Next.js     │
└──────────────────────────────────────────────────────────────────────┘
```

### Mobile
```
┌────────────────────────────────┐
│                                │
│    Safdar Ayub                 │
│    AI Engineer & Full Stack    │
│    Developer                   │
│                                │
│    Home · About · Projects     │
│    Blog · Contact              │
│    RSS · Privacy               │
│                                │
│    GH  LI  EM  YT             │
│    (icons in a row)            │
│                                │
│  ──────────────────────────    │
│  © 2026 Safdar Ayub.          │
│  Built with Next.js           │
└────────────────────────────────┘
```

---

# PAGE 1: HOME

## Desktop Layout (>1024px)

### Section 1: HERO
```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│                         max-w-6xl centered                           │
│                                                                      │
│   LEFT (60%)                          │    RIGHT (40%)               │
│                                       │                              │
│   Safdar Ayub              (H1)      │    ┌──────────────┐          │
│   AI Engineer & Full Stack  (H2)      │    │              │          │
│   Developer                           │    │   Profile     │          │
│                                       │    │   Photo       │          │
│   I build autonomous AI agents,       │    │   400x400     │          │
│   cloud-native applications, and      │    │              │          │
│   production-ready full-stack         │    └──────────────┘          │
│   systems. 23+ years of military      │                              │
│   discipline, now engineering         │                              │
│   the future of AI.                   │                              │
│                                       │                              │
│   [Download Resume] [View Projects]   │                              │
│   [Get in Touch]                      │                              │
│                                       │                              │
│   GH   LI   EM   YT  (icon row)     │                              │
│                                       │                              │
└──────────────────────────────────────────────────────────────────────┘
```

### Section 2: STATS BAR
```
┌──────────────────────────────────────────────────────────────────────┐
│                    Full-width subtle background                      │
│                                                                      │
│   23+           148+          4              21+         Platinum    │
│   Years of      GitHub        Custom MCP     Architecture Hackathon │
│   Service       Repos         Servers        Decision     Tier      │
│                                              Records                 │
│                                                                      │
│   ↑ Numbers animate (count up) when scrolled into view              │
└──────────────────────────────────────────────────────────────────────┘
```

### Section 3: SKILLS GRID ("What I Do")
```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│                     What I Do  (H2, centered)                        │
│                                                                      │
│   ┌─────────────────┐  ┌─────────────────┐                          │
│   │  🤖 Icon         │  │  💻 Icon         │                          │
│   │  Agentic AI      │  │  Full Stack      │                          │
│   │  Systems         │  │  Development     │                          │
│   │                  │  │                  │                          │
│   │  Building        │  │  End-to-end web  │                          │
│   │  autonomous      │  │  applications    │                          │
│   │  agents with     │  │  with Next.js,   │                          │
│   │  MCP servers...  │  │  FastAPI...      │                          │
│   └─────────────────┘  └─────────────────┘                          │
│   ┌─────────────────┐  ┌─────────────────┐                          │
│   │  ☁️ Icon         │  │  🖥️ Icon         │                          │
│   │  Cloud-Native    │  │  Hybrid Cloud    │                          │
│   │  & DevOps        │  │  Architecture    │                          │
│   │                  │  │                  │                          │
│   │  Production      │  │  Cloud VM        │                          │
│   │  deployments on  │  │  drafting +      │                          │
│   │  Kubernetes...   │  │  local exec...   │                          │
│   └─────────────────┘  └─────────────────┘                          │
│                                                                      │
│   ↑ 2x2 grid, each card has icon + title + short description        │
│   ↑ Cards fade-up with stagger on scroll                             │
└──────────────────────────────────────────────────────────────────────┘
```

### Section 4: FEATURED PROJECTS (Top 3)
```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│           Featured Projects  (H2, centered)                          │
│   Selected work showcasing AI engineering and full-stack dev         │
│                                                                      │
│   ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐    │
│   │ ┌──────────────┐ │ │ ┌──────────────┐ │ │ ┌──────────────┐ │    │
│   │ │  Screenshot  │ │ │ │  Screenshot  │ │ │ │  Screenshot  │ │    │
│   │ │  800x450     │ │ │ │  800x450     │ │ │ │  800x450     │ │    │
│   │ └──────────────┘ │ │ └──────────────┘ │ │ └──────────────┘ │    │
│   │                  │ │                  │ │                  │    │
│   │ [Platinum Tier]  │ │ [Live Demo]      │ │ [Live App]       │    │
│   │ Personal AI      │ │ AI Video         │ │ Flow — 8-Phase   │    │
│   │ Employee         │ │ Generation       │ │ Cloud-Native     │    │
│   │                  │ │ Agent            │ │ Todo             │    │
│   │ One-liner desc   │ │ One-liner desc   │ │ One-liner desc   │    │
│   │                  │ │                  │ │                  │    │
│   │ [Py] [MCP] [FM]  │ │ [TS] [React]    │ │ [K8s] [Kafka]   │    │
│   │                  │ │                  │ │                  │    │
│   │ [View Details →] │ │ [View Details →] │ │ [View Details →] │    │
│   └──────────────────┘ └──────────────────┘ └──────────────────┘    │
│                                                                      │
│                    [View All Projects →]                              │
│                                                                      │
│   ↑ 3-column grid                                                    │
│   ↑ Cards have subtle lift on hover                                  │
│   ↑ Badge is colored pill (top of card)                              │
│   ↑ Tech badges are small rounded pills at bottom                    │
└──────────────────────────────────────────────────────────────────────┘
```

### Section 5: TIMELINE ("My Journey")
```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│                     My Journey  (H2, centered)                       │
│                                                                      │
│              VERTICAL TIMELINE (center line)                         │
│                                                                      │
│                          │                                           │
│   ┌────────────────┐    ●                                           │
│   │ 2000            │    │                                           │
│   │ Joined Pakistan │    │                                           │
│   │ Air Force       │    │                                           │
│   └────────────────┘    │                                           │
│                          │                                           │
│                          ●    ┌────────────────┐                    │
│                          │    │ 2012            │                    │
│                          │    │ Master of       │                    │
│                          │    │ Computer Science│                    │
│                          │    └────────────────┘                    │
│                          │                                           │
│   ┌────────────────┐    ●                                           │
│   │ 2022            │    │                                           │
│   │ Python Cert     │    │                                           │
│   │ (Cisco/OpenEDG) │    │                                           │
│   └────────────────┘    │                                           │
│                          │                                           │
│                          ●    ┌────────────────┐                    │
│                          │    │ 2023            │                    │
│                          │    │ Retired from PAF│                    │
│                          │    │ Joined PIAIC    │                    │
│                          │    └────────────────┘                    │
│                          │                                           │
│   ┌────────────────┐    ●                                           │
│   │ 2026            │    │                                           │
│   │ Built production│    │                                           │
│   │ AI systems      │    │                                           │
│   │ • Flow          │    │                                           │
│   │ • AI Video Agent│    │                                           │
│   │ • Robotics Book │    │                                           │
│   │ • AI Employee   │    │                                           │
│   └────────────────┘    │                                           │
│                                                                      │
│                    [Read Full Story →]                                │
│                                                                      │
│   ↑ Cards alternate left/right of center line                        │
│   ↑ Each card slides in from its side on scroll                      │
│   ↑ Circle dots (●) on the center line mark each entry              │
└──────────────────────────────────────────────────────────────────────┘
```

### Section 6: TESTIMONIALS
```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│                   What People Say  (H2, centered)                    │
│                                                                      │
│              ┌──────────────────────────────────┐                    │
│              │                                  │                    │
│              │  "Testimonials coming soon.       │                    │
│              │   I'm currently building my       │                    │
│              │   professional network in         │                    │
│              │   the AI space."                  │                    │
│              │                                  │                    │
│              └──────────────────────────────────┘                    │
│                                                                      │
│   ↑ Placeholder for now                                              │
│   ↑ When filled: carousel or 2-3 cards with quote + name + role     │
└──────────────────────────────────────────────────────────────────────┘
```

### Section 7: CTA BANNER
```
┌──────────────────────────────────────────────────────────────────────┐
│                                                                      │
│             Full-width, primary color background                     │
│                                                                      │
│             Let's Build Something Together  (H2)                     │
│                                                                      │
│             Whether you need an AI agent, a full-stack               │
│             application, or a cloud-native system —                  │
│             I'm ready to help.                                       │
│                                                                      │
│                      [Get in Touch]                                  │
│                                                                      │
│   ↑ Centered text, contrasting button color                          │
└──────────────────────────────────────────────────────────────────────┘
```

---

## HOME — Mobile Layout (<640px)

```
┌────────────────────────────────┐
│          HERO                  │
│                                │
│    ┌────────────────────┐      │
│    │   Profile Photo     │      │
│    │   200x200 circle    │      │
│    └────────────────────┘      │
│                                │
│    Safdar Ayub        (H1)    │
│    AI Engineer & Full  (H2)   │
│    Stack Developer             │
│                                │
│    Description text...         │
│                                │
│    [Download Resume]  (full w) │
│    [View Projects]    (full w) │
│    [Get in Touch]     (full w) │
│                                │
│    GH  LI  EM  YT             │
│                                │
│ ────────────────────────────── │
│          STATS BAR             │
│                                │
│    23+          148+           │
│    Years        Repos          │
│                                │
│    4            21+            │
│    MCP Servers  ADRs           │
│                                │
│    Platinum                    │
│    Hackathon Tier              │
│                                │
│    ↑ 2x2 grid + 1 centered    │
│                                │
│ ────────────────────────────── │
│          SKILLS                │
│                                │
│    What I Do (H2)              │
│                                │
│    ┌────────────────────┐      │
│    │ Agentic AI Systems │      │
│    │ Description...      │      │
│    └────────────────────┘      │
│    ┌────────────────────┐      │
│    │ Full Stack Dev      │      │
│    │ Description...      │      │
│    └────────────────────┘      │
│    ┌────────────────────┐      │
│    │ Cloud-Native        │      │
│    │ Description...      │      │
│    └────────────────────┘      │
│    ┌────────────────────┐      │
│    │ Hybrid Cloud        │      │
│    │ Description...      │      │
│    └────────────────────┘      │
│                                │
│    ↑ Single column, stacked    │
│                                │
│ ────────────────────────────── │
│       FEATURED PROJECTS        │
│                                │
│    Featured Projects (H2)      │
│                                │
│    ┌────────────────────┐      │
│    │ [Screenshot]        │      │
│    │ [Platinum Tier]     │      │
│    │ Personal AI Employee│      │
│    │ One-liner...        │      │
│    │ [Py] [MCP] [FM]    │      │
│    │ [View Details →]    │      │
│    └────────────────────┘      │
│                                │
│    (repeat for 2 more cards)   │
│                                │
│    [View All Projects →]       │
│                                │
│ ────────────────────────────── │
│         TIMELINE               │
│                                │
│    My Journey (H2)             │
│                                │
│    │                           │
│    ●  2000                     │
│    │  Joined PAF               │
│    │                           │
│    ●  2012                     │
│    │  Master of CS             │
│    │                           │
│    ●  2022                     │
│    │  Python Cert              │
│    │                           │
│    ●  2023                     │
│    │  Retired, PIAIC           │
│    │                           │
│    ●  2026                     │
│    │  Production AI systems    │
│    │                           │
│                                │
│    ↑ Line on LEFT, all cards   │
│      on right side only        │
│                                │
│ ────────────────────────────── │
│       TESTIMONIALS             │
│    (placeholder — same)        │
│                                │
│ ────────────────────────────── │
│         CTA BANNER             │
│    Let's Build Something       │
│    Together                    │
│    Subtext...                  │
│    [Get in Touch] (full width) │
│                                │
└────────────────────────────────┘
```

---

# PAGE 2: PROJECTS LISTING

## Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  BREADCRUMBS: Home > Projects                                        │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│                      Projects  (H1, centered)                        │
│       Production AI agents, full-stack applications, and             │
│                cloud-native systems                                  │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  FILTER TAGS:                                                        │
│  [All ✓] [AI Agents] [Full Stack] [Cloud-Native] [Video] [Education]│
│                                                                      │
│  ↑ Pill-shaped buttons, selected one is filled/primary color         │
│  ↑ Click to filter, "All" shows everything                           │
│  ↑ Client-side filtering (no page reload)                            │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  PROJECT GRID (2 columns):                                           │
│                                                                      │
│  ┌────────────────────────────┐  ┌────────────────────────────┐     │
│  │ ┌────────────────────────┐ │  │ ┌────────────────────────┐ │     │
│  │ │    Screenshot 800x450  │ │  │ │    Screenshot 800x450  │ │     │
│  │ └────────────────────────┘ │  │ └────────────────────────┘ │     │
│  │                            │  │                            │     │
│  │ [Platinum Tier]            │  │ [Live Demo on YouTube]     │     │
│  │                            │  │                            │     │
│  │ Personal AI Employee —     │  │ AI Video Generation Agent  │     │
│  │ Hybrid Cloud-Local         │  │ — End-to-End Content       │     │
│  │ Autonomous Agent           │  │ Automation                 │     │
│  │                            │  │                            │     │
│  │ One-liner description...   │  │ One-liner description...   │     │
│  │                            │  │                            │     │
│  │ [Python] [FastMCP]         │  │ [TypeScript] [React]       │     │
│  │ [Claude] [Gmail]           │  │ [Remotion] [Gemini]        │     │
│  │                            │  │                            │     │
│  │ [GitHub]  [Live]  [Details]│  │ [GitHub] [YouTube] [Detail]│     │
│  └────────────────────────────┘  └────────────────────────────┘     │
│                                                                      │
│  ┌────────────────────────────┐  ┌────────────────────────────┐     │
│  │      Flow — 8-Phase        │  │    Robotics Textbook       │     │
│  │      (same card layout)    │  │    (same card layout)      │     │
│  └────────────────────────────┘  └────────────────────────────┘     │
│                                                                      │
│  ↑ Flagship project (AI Employee) has subtle border glow or         │
│    "FLAGSHIP" indicator to stand out                                 │
│  ↑ Cards have hover: lift + shadow increase                          │
└──────────────────────────────────────────────────────────────────────┘
```

## Mobile Layout

```
┌────────────────────────────────┐
│  Home > Projects               │
│                                │
│  Projects (H1)                 │
│  Subtitle...                   │
│                                │
│  FILTER (horizontal scroll):   │
│  [All ✓] [AI Agents] [Full →  │
│                                │
│  ↑ Scrollable row on mobile    │
│                                │
│  ┌────────────────────────┐    │
│  │ [Screenshot - full w]  │    │
│  │ [Platinum Tier]        │    │
│  │ Personal AI Employee   │    │
│  │ One-liner...           │    │
│  │ [Py] [MCP] [Claude]   │    │
│  │ [GitHub] [Live] [More] │    │
│  └────────────────────────┘    │
│                                │
│  ┌────────────────────────┐    │
│  │ (next project card)    │    │
│  └────────────────────────┘    │
│                                │
│  ↑ Single column, full width   │
└────────────────────────────────┘
```

---

# PAGE 3: PROJECT DETAIL (e.g., Personal AI Employee)

## Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  BREADCRUMBS: Home > Projects > Personal AI Employee                 │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  [← Back to Projects]                                                │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  HEADER AREA:                                                        │
│                                                                      │
│  [Hackathon Platinum Tier]  [Production]     ← badge + status pill  │
│                                                                      │
│  Personal AI Employee — Hybrid Cloud-Local    (H1)                  │
│  Autonomous Agent                                                    │
│                                                                      │
│  A 24/7 autonomous AI agent that monitors Gmail, WhatsApp,          │
│  and filesystem — drafts responses on a cloud VM while you're       │
│  offline, then executes with your approval when you reconnect.      │
│                                                                      │
│  [GitHub] [Live Demo] [Architecture Diagram] [Demo Video]           │
│  ↑ Icon buttons with labels                                          │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  HERO IMAGE:                                                         │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │                                                              │    │
│  │              Project Screenshot / Architecture Diagram        │    │
│  │              1200 x 675px                                     │    │
│  │                                                              │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  TWO-COLUMN CONTENT:                                                 │
│                                                                      │
│  LEFT (65%)                           │  RIGHT SIDEBAR (35%)        │
│                                       │                              │
│  Overview  (H2)                       │  Tech Stack                  │
│                                       │  ┌────────────────────┐     │
│  Full description paragraph 1...      │  │ Python 3.13+       │     │
│  Full description paragraph 2...      │  │ FastMCP            │     │
│                                       │  │ Claude Code        │     │
│  The Four Tiers  (H2)                │  │ Gmail OAuth2       │     │
│                                       │  │ Playwright         │     │
│  ┌──────────────────────────────┐    │  │ Odoo RPC           │     │
│  │ BRONZE │ File Watcher +      │    │  │ APScheduler        │     │
│  │        │ Vault Processing    │    │  │ Watchdog           │     │
│  ├────────┼─────────────────────┤    │  │ PM2                │     │
│  │ SILVER │ Multi-Source        │    │  │ Git-sync           │     │
│  │        │ Orchestration       │    │  │ Docker             │     │
│  ├────────┼─────────────────────┤    │  └────────────────────┘     │
│  │ GOLD   │ MCP Servers +       │    │                              │
│  │        │ External Integr.    │    │  Category                    │
│  ├────────┼─────────────────────┤    │  [AI Agents]                 │
│  │ PLAT.  │ Hybrid Cloud-Local  │    │  [Full Stack]                │
│  │        │ Offline Tolerance   │    │                              │
│  └──────────────────────────────┘    │  Links                       │
│                                       │  GitHub →                    │
│  MCP Servers  (H2)                   │  Live Demo →                 │
│                                       │                              │
│  ┌────────────┬───────────┬───────┐  │                              │
│  │ Server     │ Purpose   │ HITL  │  │                              │
│  ├────────────┼───────────┼───────┤  │                              │
│  │ fte-email  │ Gmail API │ Med   │  │                              │
│  │ fte-social │ Social    │ High  │  │                              │
│  │ fte-odoo   │ ERP       │ High  │  │                              │
│  │ fte-docs   │ Reports   │ Low   │  │                              │
│  └────────────┴───────────┴───────┘  │                              │
│                                       │                              │
│  Key Engineering Patterns  (H2)      │                              │
│                                       │                              │
│  • Circuit breaker pattern            │                              │
│  • Correlation ID tracking            │                              │
│  • Risk-based action routing          │                              │
│  • Atomic claim-by-move               │                              │
│  • 21 ADRs                            │                              │
│                                       │                              │
│  Live Demo  (H2)                     │                              │
│                                       │                              │
│  (8-step demo table showing           │                              │
│   the verified correlation ID         │                              │
│   flow from email → approval)         │                              │
│                                       │                              │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  OTHER PROJECTS:                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │ AI Video     │  │ Flow         │  │ Robotics     │              │
│  │ Agent        │  │              │  │ Textbook     │              │
│  │ [View →]     │  │ [View →]     │  │ [View →]     │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
│                                                                      │
│  ↑ "Other Projects" row at bottom — small cards linking to others   │
└──────────────────────────────────────────────────────────────────────┘
```

## Mobile Layout

```
┌────────────────────────────────┐
│  Home > Projects > AI Employee │
│                                │
│  [← Back to Projects]         │
│                                │
│  [Platinum Tier] [Production]  │
│                                │
│  Personal AI Employee (H1)    │
│                                │
│  One-liner description...      │
│                                │
│  [GitHub] [Live Demo]          │
│  (full-width buttons stacked)  │
│                                │
│  ┌────────────────────────┐    │
│  │  Screenshot/Diagram    │    │
│  │  full width            │    │
│  └────────────────────────┘    │
│                                │
│  Tech Stack                    │
│  [Py] [MCP] [Claude] [Gmail]  │
│  [Playwright] [PM2] [Docker]  │
│  ↑ Wrapping pill badges        │
│                                │
│  ──────────────────────────    │
│                                │
│  Overview (H2)                 │
│  Full description...           │
│                                │
│  The Four Tiers (H2)          │
│  (stacked cards, each tier)    │
│                                │
│  MCP Servers (H2)             │
│  (stacked cards instead of     │
│   table on mobile)             │
│                                │
│  Key Patterns (H2)            │
│  • Bullet list                 │
│                                │
│  Live Demo (H2)               │
│  (step cards stacked)          │
│                                │
│  ──────────────────────────    │
│                                │
│  Other Projects                │
│  (horizontal scroll cards)     │
│  [AI Video] [Flow] [Robotics] │
│                                │
└────────────────────────────────┘
```

---

# PAGE 4: ABOUT

## Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  BREADCRUMBS: Home > About                                           │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  PAGE HERO:                                                          │
│                                                                      │
│                        About Me  (H1, centered)                      │
│             From Pakistan Air Force to AI Engineering                │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  MY STORY SECTION:                                                   │
│                                                                      │
│  ┌──────────────────┐     The Journey  (H2)                         │
│  │                  │                                                │
│  │  Profile Photo   │     I served 23 years in the Pakistan         │
│  │  (larger, maybe  │     Air Force as a Quality Control            │
│  │   rectangular)   │     Inspector and Electronics                 │
│  │                  │     Technician...                              │
│  └──────────────────┘                                                │
│                           (Full narrative from content doc)           │
│                           Multiple paragraphs...                     │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  CORE VALUES:                                                        │
│                                                                      │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌────────────┐ │
│  │  Discipline   │ │  Quality     │ │  Continuous  │ │ Spec-Driven│ │
│  │               │ │  First       │ │  Learning    │ │ Development│ │
│  │  Military-    │ │  23 years of │ │  From elec-  │ │ Document   │ │
│  │  trained      │ │  quality     │ │  tronics to  │ │ first...   │ │
│  │  precision... │ │  control...  │ │  AI...       │ │            │ │
│  └──────────────┘ └──────────────┘ └──────────────┘ └────────────┘ │
│                                                                      │
│  ↑ 4-column grid, each card has title + description                  │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  TECHNICAL SKILLS:                                                   │
│                                                                      │
│  (Grouped in columns by category)                                    │
│                                                                      │
│  AI & Agentic        │  Languages      │  Frontend                  │
│  ────────────        │  ─────────      │  ────────                  │
│  OpenAI Agents SDK   │  Python         │  Next.js                   │
│  Claude Code         │  TypeScript     │  React                     │
│  MCP SDK / FastMCP   │  JavaScript     │  Remotion                  │
│  Prompt Engineering  │  Shell          │  Tailwind CSS              │
│  RAG Systems         │                 │  ShadCN UI                 │
│  Gemini TTS          │                 │  Docusaurus                │
│                      │                 │                             │
│  Backend & DB        │  DevOps & Cloud │  Agent Infra               │
│  ────────────        │  ──────────────  │  ───────────               │
│  FastAPI             │  Docker         │  Watchdog                  │
│  Node.js             │  Kubernetes     │  APScheduler               │
│  PostgreSQL          │  Helm Charts    │  Playwright                │
│  Supabase            │  OCI / OKE      │  Circuit breakers          │
│  Qdrant Cloud        │  Kafka          │  HITL safety gates         │
│  ...                 │  ...            │  ...                       │
│                                                                      │
│  ↑ Could also be a tag cloud or grouped badge layout                 │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  EDUCATION:                                                          │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐      │
│  │ Qualification              │ Institution        │ Year    │      │
│  ├────────────────────────────┼────────────────────┼─────────┤      │
│  │ Certified Agentic & Robot. │ PIAIC, Air Univ.   │ 2026    │      │
│  │ Master of Computer Science │ Virtual Univ.      │ 2012    │      │
│  │ DAE Radio Technology       │ School of Elec.    │ 2003    │      │
│  │ AI & Computing Program     │ PIAIC              │ 2023    │      │
│  │ PCAP Python Essentials     │ Cisco / OpenEDG    │ 2022    │      │
│  │ Quality Control & Mgmt     │ Pakistan Air Force │ Service │      │
│  └────────────────────────────┴────────────────────┴─────────┘      │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  BY THE NUMBERS:                                                     │
│                                                                      │
│  (Same layout as home Stats Bar but with all 7 metrics)              │
│                                                                      │
│  23+      148+     21+      4        13       Platinum   4          │
│  Years    Repos    ADRs     MCP      Skills   Tier       Projects   │
│                             Servers                       Deployed   │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  PERSONAL:                                                           │
│  Based in Kohat District, KPK, Pakistan                              │
│  Linux Ubuntu user | PAF Veteran | Open to remote work worldwide    │
│                                                                      │
│  [Download Resume]  [Get in Touch]                                   │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

## About — Mobile

```
┌────────────────────────────────┐
│  Home > About                  │
│                                │
│  About Me (H1)                 │
│  From PAF to AI Engineering    │
│                                │
│  ┌────────────────────┐        │
│  │  Profile Photo      │        │
│  │  (full width)       │        │
│  └────────────────────┘        │
│                                │
│  The Journey (H2)              │
│  Story paragraphs...           │
│                                │
│  Core Values                   │
│  (2x2 grid on tablet,          │
│   single column on phone)      │
│                                │
│  Technical Skills              │
│  (Accordion by category:       │
│   tap "AI & Agentic" to        │
│   expand that group)           │
│                                │
│  Education                     │
│  (Stacked cards instead of     │
│   table on mobile)             │
│                                │
│  By the Numbers                │
│  (2x2 grid + extras)          │
│                                │
│  [Download Resume] (full w)    │
│  [Get in Touch]    (full w)    │
└────────────────────────────────┘
```

---

# PAGE 5: BLOG LISTING

## Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  BREADCRUMBS: Home > Blog                                            │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│                          Blog  (H1, centered)                        │
│          Insights on Agentic AI, full-stack development, and         │
│             my journey from military to tech                         │
│                                                                      │
│                      [Subscribe via RSS 🔗]                          │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  TAG FILTER:                                                         │
│  [All] [Agentic AI] [MCP Servers] [Claude Code] [Full Stack]        │
│  [Cloud-Native] [Career Transition] [Tutorials] [Spec-Driven Dev]   │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  BLOG CARDS (single column, wide):                                   │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │                                                              │    │
│  │  LEFT (image)                │  RIGHT (content)              │    │
│  │  ┌────────────────────┐     │                                │    │
│  │  │  Cover Image       │     │  Mar 15, 2026  ·  12 min read │    │
│  │  │  400x225           │     │                                │    │
│  │  └────────────────────┘     │  Building a Platinum-Tier     │    │
│  │                              │  AI Employee  (H3, link)      │    │
│  │                              │                                │    │
│  │                              │  How I built a 4-tier          │    │
│  │                              │  autonomous AI agent...        │    │
│  │                              │                                │    │
│  │                              │  [Agentic AI] [MCP Servers]   │    │
│  │                              │  [Project Breakdowns]          │    │
│  │                              │                                │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐    │
│  │  (Next blog card — same layout)                              │    │
│  └──────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ↑ Cards are horizontal: image left, content right                   │
│  ↑ Clicking title or card navigates to full post                     │
│  ↑ Tags are clickable filters                                        │
└──────────────────────────────────────────────────────────────────────┘
```

## Blog — Mobile

```
┌────────────────────────────────┐
│  Home > Blog                   │
│                                │
│  Blog (H1)                     │
│  Subtitle...                   │
│  [RSS 🔗]                      │
│                                │
│  Tags (horizontal scroll):     │
│  [All] [Agentic AI] [MCP →    │
│                                │
│  ┌────────────────────────┐    │
│  │ ┌────────────────────┐ │    │
│  │ │  Cover Image        │ │    │
│  │ │  (full width)       │ │    │
│  │ └────────────────────┘ │    │
│  │                        │    │
│  │ Mar 15, 2026 · 12 min  │    │
│  │                        │    │
│  │ Building a Platinum-   │    │
│  │ Tier AI Employee (H3)  │    │
│  │                        │    │
│  │ Description...          │    │
│  │                        │    │
│  │ [Agentic AI] [MCP]     │    │
│  └────────────────────────┘    │
│                                │
│  ↑ Stacked vertically:         │
│    image on top, text below    │
└────────────────────────────────┘
```

---

# PAGE 6: CONTACT

## Desktop Layout

```
┌──────────────────────────────────────────────────────────────────────┐
│  BREADCRUMBS: Home > Contact                                         │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│                     Get in Touch  (H1, centered)                     │
│       Have a project in mind, a job opportunity, or just want        │
│                    to connect? I'd love to hear from you.            │
│                                                                      │
│  ─────────────────────────────────────────────────────────────────   │
│                                                                      │
│  TWO-COLUMN LAYOUT:                                                  │
│                                                                      │
│  LEFT (55%) — FORM                │  RIGHT (45%) — INFO             │
│                                    │                                 │
│  Full Name *                       │  Direct Contact                 │
│  [===========================]    │                                 │
│                                    │  ✉  safdarayub@gmail.com       │
│  Email Address *                   │  🔗  LinkedIn                   │
│  [===========================]    │  🐙  GitHub                      │
│                                    │  📺  YouTube                    │
│  Subject *                         │  📞  +92-332-961-1639          │
│  [▼ Select a subject ========]    │                                 │
│  • Job Opportunity                 │  ────────────────────          │
│  • Freelance Project               │                                 │
│  • Collaboration                   │  Location                      │
│  • General Inquiry                 │  📍 Kohat District, KPK,       │
│                                    │     Pakistan                    │
│  Message *                         │                                 │
│  ┌───────────────────────────┐    │  Availability                   │
│  │                           │    │  🌍 Open to remote work         │
│  │                           │    │     worldwide                    │
│  │                           │    │  🏢 On-site in Islamabad/       │
│  │                           │    │     Rawalpindi area              │
│  │                           │    │  🕐 PKT (UTC+5)                 │
│  └───────────────────────────┘    │                                 │
│                                    │                                 │
│  [Send Message]                    │                                 │
│                                    │                                 │
│  ↑ Validation errors appear        │                                 │
│    below each field in red         │                                 │
│  ↑ Button shows spinner while      │                                 │
│    submitting                      │                                 │
│  ↑ Success: green toast/banner     │                                 │
│  ↑ Error: red toast with fallback  │                                 │
│    email suggestion                │                                 │
│                                    │                                 │
└──────────────────────────────────────────────────────────────────────┘
```

## Contact — Mobile

```
┌────────────────────────────────┐
│  Home > Contact                │
│                                │
│  Get in Touch (H1)             │
│  Subtitle...                   │
│                                │
│  Direct Contact                │
│  ✉ Email  🔗 LinkedIn          │
│  🐙 GitHub  📞 Phone           │
│  (icon grid or list)           │
│                                │
│  📍 Kohat, KP, Pakistan      │
│  🕐 PKT (UTC+5)               │
│  🌍 Remote worldwide          │
│                                │
│  ──────────────────────────    │
│                                │
│  Or send a message:            │
│                                │
│  Full Name *                   │
│  [========================]   │
│                                │
│  Email Address *               │
│  [========================]   │
│                                │
│  Subject *                     │
│  [▼ Select ===============]   │
│                                │
│  Message *                     │
│  ┌────────────────────────┐    │
│  │                        │    │
│  │                        │    │
│  └────────────────────────┘    │
│                                │
│  [Send Message] (full width)   │
│                                │
│  ↑ Contact info moves ABOVE    │
│    the form on mobile (most    │
│    people just want the email  │
│    or phone number quickly)    │
└────────────────────────────────┘
```

---

## DESIGN NOTES ACROSS ALL PAGES

### Spacing Rhythm
```
Section padding:     py-16 (mobile)  →  py-24 (desktop)
Between sections:    Visible separator line OR generous whitespace
Card internal:       p-6
Card gaps:           gap-6 (mobile)  →  gap-8 (desktop)
Container:           max-w-6xl mx-auto px-4 md:px-6
```

### Component Reuse Map
```
ProjectCard      → used in: Home (featured), Projects (listing), Project Detail (related)
TechBadge        → used in: ProjectCard, Project Detail sidebar
StatsCounter     → used in: Home (stats bar), About (by the numbers)
SectionHeading   → used in: every section (H2 + optional subtitle)
AnimateOnScroll  → wraps: every section for fade-up entrance
BlogCard         → used in: Blog listing
FilterTags       → used in: Projects page, Blog page
Breadcrumbs      → used in: all pages except Home
BackToTop        → used in: all pages (fixed position)
```

### Interactive States
```
Buttons:     hover → scale(1.02) + darker shade
Cards:       hover → translateY(-2px) + shadow-md
Nav links:   hover → primary color, active → underline
Tags/Badges: hover → slightly darker background
Form inputs: focus → primary color border ring
```
