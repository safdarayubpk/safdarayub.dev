import { Badge } from "@/components/ui/badge";

export const projectDetails: Record<string, React.ReactNode> = {
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

  "ai-ml-job-market-pipeline": (
    <>
      <h2>Overview</h2>
      <p>
        An end-to-end ML data pipeline that monitors the AI/ML job market in
        real time. A single <code>POST /run-pipeline</code> triggers the full
        chain: async scraping → PostgreSQL storage → TF-IDF clustering →
        seniority classification → Groq LLaMA 3.3 70B market briefing →
        Google Sheets report with a dated tab per run.
      </p>
      <p>
        Built as a portfolio project to demonstrate every layer of an ML
        engineering stack — scraping, databases, unsupervised and supervised ML,
        LLM integration, external API automation, and containerised deployment.
        Live run: 97 jobs scraped, 8 clusters found, 36/36 tests passing.
      </p>

      <h2>Pipeline Architecture</h2>
      <div className="not-prose overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-2 text-left font-semibold">Step</th>
              <th className="px-4 py-2 text-left font-semibold">Component</th>
              <th className="px-4 py-2 text-left font-semibold">Technology</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">Async Scraper</td>
              <td className="px-4 py-2">aiohttp · asyncio · BeautifulSoup4 · RemoteOK JSON API</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">2</td>
              <td className="px-4 py-2">Storage</td>
              <td className="px-4 py-2">PostgreSQL · SQLAlchemy 2 · Alembic migrations</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">3</td>
              <td className="px-4 py-2">Feature Extraction</td>
              <td className="px-4 py-2">TF-IDF vectorisation (5,000 features) · skill frequency analysis</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">4</td>
              <td className="px-4 py-2">Clustering</td>
              <td className="px-4 py-2">K-Means · silhouette k-selection (k=2–7) · PCA visualisation</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">5</td>
              <td className="px-4 py-2">Seniority Classifier</td>
              <td className="px-4 py-2">Logistic Regression · LinearSVC · Random Forest · 5-fold CV F1</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">6</td>
              <td className="px-4 py-2">LLM Insights</td>
              <td className="px-4 py-2">Groq API · LLaMA 3.3 70B · structured prompt template</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">7</td>
              <td className="px-4 py-2">Reporter</td>
              <td className="px-4 py-2">gspread · Google Service Account · dated tab per run</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">8</td>
              <td className="px-4 py-2">API</td>
              <td className="px-4 py-2">FastAPI · uvicorn · POST /run-pipeline</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Key Engineering Decisions</h2>
      <ul>
        <li>
          <strong>Silhouette k-selection:</strong> <code>find_optimal_k()</code> tries k=2–7 and picks the highest silhouette score automatically — no hardcoded cluster count, adapts to each day&apos;s data distribution
        </li>
        <li>
          <strong>Classifier comparison:</strong> All three models are evaluated via 5-fold cross-validation F1 macro on every run — the winning model and score are returned in the API response
        </li>
        <li>
          <strong>RemoteOK JSON API over Playwright:</strong> Switched from headless browser scraping to the public JSON API via aiohttp — more reliable, faster, no browser install
        </li>
        <li>
          <strong>Deduplication by URL:</strong> Jobs are keyed on <code>source_url</code> — re-running never double-counts; second run on the same day shows <code>jobs_scraped: 0</code> by design
        </li>
        <li>
          <strong>SQLite in tests:</strong> Integration tests use SQLite in-memory with mocked LLM and Sheets — no external services needed in CI
        </li>
        <li>
          <strong>Groq free tier:</strong> LLaMA 3.3 70B via Groq — no credit card required; rate-limit retries built in with 10-second backoff
        </li>
      </ul>

      <h2>Live Run Results (2026-04-23)</h2>
      <div className="not-prose overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-2 text-left font-semibold">Metric</th>
              <th className="px-4 py-2 text-left font-semibold">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-2">Jobs scraped</td>
              <td className="px-4 py-2 font-mono">97</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">Clusters found</td>
              <td className="px-4 py-2 font-mono">8</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">Best classifier (F1)</td>
              <td className="px-4 py-2 font-mono">LogisticRegression — 0.417</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">LinearSVC F1</td>
              <td className="px-4 py-2 font-mono">0.404</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">Random Forest F1</td>
              <td className="px-4 py-2 font-mono">0.351</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">Tests passing</td>
              <td className="px-4 py-2 font-mono">36 / 36</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Google Sheets Output</h2>
      <p>
        Each pipeline run writes a new dated tab (e.g. <code>2026-04-23</code>) containing:
      </p>
      <ul>
        <li>LLM-generated 2–3 paragraph market intelligence briefing</li>
        <li>Top 20 skills by mention rate across all job listings</li>
        <li>Cluster breakdown — job count and percentage per cluster</li>
        <li>Seniority distribution — junior / mid / senior counts</li>
      </ul>
    </>
  ),

  "personal-ai-employee": (
    <>
      <h2>Overview</h2>
      <p>
        A hybrid cloud-local autonomous AI agent that evolved through four
        architectural tiers (Bronze → Silver → Gold → Platinum). The system
        monitors multiple sources (Gmail, WhatsApp, filesystem), processes tasks
        through a git-synced Obsidian vault pipeline, and executes actions via
        MCP servers with human-in-the-loop safety gates.
      </p>
      <p>
        The cloud VM (Ubuntu 24.04) runs 24/7, detecting emails and drafting
        responses. When the local laptop reconnects, a 60-second git-sync cycle
        pulls pending actions for human approval. This hybrid architecture
        enables true offline tolerance — the agent works while you sleep.
      </p>

      <h2>The Four Tiers</h2>
      <div className="not-prose overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-2 text-left font-semibold">Tier</th>
              <th className="px-4 py-2 text-left font-semibold">Name</th>
              <th className="px-4 py-2 text-left font-semibold">What It Does</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-2"><Badge variant="outline">Bronze</Badge></td>
              <td className="px-4 py-2">File Watcher + Vault Processing</td>
              <td className="px-4 py-2">Filesystem monitoring via Watchdog, YAML-frontmatter metadata, risk-based routing</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2"><Badge variant="outline">Silver</Badge></td>
              <td className="px-4 py-2">Multi-Source Orchestration</td>
              <td className="px-4 py-2">4 watchers (filesystem, Gmail, WhatsApp, scheduled), centralized priority queue, PM2 management</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2"><Badge variant="outline">Gold</Badge></td>
              <td className="px-4 py-2">MCP Servers + External Integrations</td>
              <td className="px-4 py-2">4 FastMCP servers, circuit breaker pattern, correlation ID tracking, health monitoring</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2"><Badge variant="default">Platinum</Badge></td>
              <td className="px-4 py-2">Hybrid Cloud-Local</td>
              <td className="px-4 py-2">Cloud VM drafting + local execution, 60-second git-sync, offline tolerance, live verified demo</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>4 MCP Servers</h2>
      <div className="not-prose overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-2 text-left font-semibold">Server</th>
              <th className="px-4 py-2 text-left font-semibold">Purpose</th>
              <th className="px-4 py-2 text-left font-semibold">HITL Level</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-2 font-mono text-xs">fte-email</td>
              <td className="px-4 py-2">Draft, send, search emails via Gmail API</td>
              <td className="px-4 py-2">Routine / Sensitive</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2 font-mono text-xs">fte-social</td>
              <td className="px-4 py-2">Post to Facebook, Instagram, Twitter/X</td>
              <td className="px-4 py-2">Sensitive / Routine</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2 font-mono text-xs">fte-odoo</td>
              <td className="px-4 py-2">Odoo 19 ERP — invoices, payments, summaries</td>
              <td className="px-4 py-2">Routine / Critical</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2 font-mono text-xs">fte-documents</td>
              <td className="px-4 py-2">Generate reports and CEO briefings</td>
              <td className="px-4 py-2">Routine</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Key Engineering Patterns</h2>
      <ul>
        <li>Circuit breaker pattern (3 failures → 300s cooldown)</li>
        <li>Correlation IDs: <code>corr-YYYYMMDD-HHMMSS-XXXX</code></li>
        <li>Risk-based action routing (routine/sensitive/critical)</li>
        <li>Dry-run defaults for safety</li>
        <li>Atomic claim-by-move concurrency (prevents duplication)</li>
        <li>Stale detection (&gt;48h pending, &gt;7d rejected)</li>
        <li>Secrets isolation (3 layers: .gitignore, pre-commit hook, cloud audit)</li>
        <li>21 Architecture Decision Records (ADRs)</li>
      </ul>

      <h2>Live Demo (Verified March 12, 2026)</h2>
      <p>Correlation ID: <code>corr-2026-03-12-d16b3470</code></p>
      <div className="not-prose overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-2 text-left font-semibold">Step</th>
              <th className="px-4 py-2 text-left font-semibold">Event</th>
              <th className="px-4 py-2 text-left font-semibold">Agent</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border"><td className="px-4 py-2">1</td><td className="px-4 py-2">Test email sent to Gmail</td><td className="px-4 py-2">User</td></tr>
            <tr className="border-t border-border"><td className="px-4 py-2">2</td><td className="px-4 py-2">Gmail watcher detected (120s poll)</td><td className="px-4 py-2">Cloud VM</td></tr>
            <tr className="border-t border-border"><td className="px-4 py-2">3</td><td className="px-4 py-2">Orchestrator drafted → Pending_Approval/</td><td className="px-4 py-2">Cloud VM</td></tr>
            <tr className="border-t border-border"><td className="px-4 py-2">4</td><td className="px-4 py-2">Git-sync pushed to remote</td><td className="px-4 py-2">Cloud VM</td></tr>
            <tr className="border-t border-border"><td className="px-4 py-2">5</td><td className="px-4 py-2">Local git pull fetched file</td><td className="px-4 py-2">Local</td></tr>
            <tr className="border-t border-border"><td className="px-4 py-2">6</td><td className="px-4 py-2">User moved to Approved/</td><td className="px-4 py-2">Local</td></tr>
            <tr className="border-t border-border"><td className="px-4 py-2">7</td><td className="px-4 py-2">Approval watcher sent via Gmail API</td><td className="px-4 py-2">Local</td></tr>
            <tr className="border-t border-border"><td className="px-4 py-2">8</td><td className="px-4 py-2">File moved to Done/ (status: completed)</td><td className="px-4 py-2">Local</td></tr>
          </tbody>
        </table>
      </div>
    </>
  ),

  "ahf-auto-parts": (
    <>
      <h2>Overview</h2>
      <p>
        A production-grade e-commerce platform built for a Japan-based auto
        parts business. The platform supports the complete customer journey —
        browsing by vehicle or category, cart management, Stripe and bank
        transfer checkout, order tracking, and a full admin dashboard for
        business operations.
      </p>
      <p>
        Markets: Japan · Pakistan · International. Parts catalogue covers
        genuine OEM, new aftermarket, and graded used parts (Grade A–D), all
        sourced directly from Japan.
      </p>

      <h2>Key Features</h2>
      <div className="not-prose overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-2 text-left font-semibold">Area</th>
              <th className="px-4 py-2 text-left font-semibold">Features</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-2 font-medium">Storefront</td>
              <td className="px-4 py-2">Vehicle compatibility lookup (Make → Model → Year cascade), product catalog with search/filter/sort, image gallery, stock status</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2 font-medium">Cart & Checkout</td>
              <td className="px-4 py-2">Zustand cart drawer, wishlist with badge, Stripe Checkout, manual bank transfer, 30-min stock reservation to prevent overselling</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2 font-medium">Auth & Account</td>
              <td className="px-4 py-2">Google OAuth + credentials (NextAuth.js v5), order history, saved addresses, wishlist management</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2 font-medium">Admin Dashboard</td>
              <td className="px-4 py-2">Product manager (Cloudinary upload), order status updates, customer list, vehicle/category management, inquiry inbox, Recharts analytics</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2 font-medium">SEO & Performance</td>
              <td className="px-4 py-2">JSON-LD structured data, XML sitemap, SSG + ISR (60s), WebP/AVIF via Cloudinary CDN, Open Graph per page</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Architecture Highlights</h2>
      <ul>
        <li>SSG + ISR for storefront pages; SSR for auth-protected account and admin routes</li>
        <li>Upstash Redis for rate limiting across API routes</li>
        <li>Zustand stores (cart + wishlist) persisted to localStorage</li>
        <li>Cloudinary + browser-image-compression for optimized product imagery</li>
        <li>Resend for transactional emails (order confirmation, shipping updates)</li>
        <li>30-minute stock reservation TTL to prevent checkout race conditions</li>
      </ul>

      <h2>Roadmap</h2>
      <ul>
        <li><strong>Phase 2 — AI Features:</strong> Semantic search (pgvector), AI chatbot (Vercel AI SDK), smart recommendations, abandoned cart recovery</li>
        <li><strong>Phase 3 — Growth:</strong> B2B portal, multi-language (JP/EN), calculated shipping rates, loyalty program</li>
      </ul>
    </>
  ),

  "campaign-manager": (
    <>
      <h2>Overview</h2>
      <p>
        A full-stack CRM dashboard prototype demonstrating contacts management,
        audience segmentation, and campaign workflows. The dashboard features
        real-time KPI cards, lifecycle stage analytics, and campaign performance
        charts — all rendered server-side for zero client-side data waterfalls.
      </p>
      <p>
        Built with Next.js 16 App Router, Prisma v7 with a dual adapter pattern
        (SQLite for local dev, Turso LibSQL for production), and ShadCN UI
        components. Every API route is Zod-validated with input bounds and column
        whitelisting.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Dashboard with KPI cards and Recharts analytics (server component, no waterfalls)</li>
        <li>Contacts data table with server-side search, filtering, sorting, and pagination</li>
        <li>Visual segment rule builder with AND logic and live preview (debounced 300ms)</li>
        <li>3-step campaign wizard: Select Audience → Compose Message → Review &amp; Send</li>
        <li>Full CRUD operations via modal dialogs</li>
        <li>Send simulation with realistic open/click statistics</li>
      </ul>

      <h2>Architecture Highlights</h2>
      <ul>
        <li>Prisma v7 dual adapter — <code>better-sqlite3</code> locally, <code>libsql</code> for Turso in production</li>
        <li>Shared <code>buildWhereClause</code> function keeps segment filtering DRY across APIs</li>
        <li>Route group <code>(app)</code> pattern for shared sidebar layout without URL pollution</li>
        <li>Recharts loaded via <code>next/dynamic</code> with <code>ssr: false</code> to avoid hydration mismatches</li>
        <li>Zod validation on all API routes with whitelisted sort columns and capped page size</li>
        <li>Seed data: 55 contacts, 4 segments, 5 campaigns</li>
      </ul>
    </>
  ),

  "ai-video-generation-agent": (
    <>
      <h2>Overview</h2>
      <p>
        An AI pipeline that generates complete motion graphics videos from text
        prompts. The workflow covers the entire production cycle: script writing →
        storyboard generation → scene composition → narration synthesis →
        rendered video output.
      </p>
      <p>
        Claude Code (Opus) serves as the orchestrator, coordinating
        Remotion/React for the rendering engine and Gemini TTS for synchronized
        voiceover. The system produces 1080p explainer videos with spring
        physics animations and 3D card transformations.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Text-to-video pipeline (prompt → complete video)</li>
        <li>Claude Code (Opus) as AI orchestrator</li>
        <li>Remotion/React rendering engine</li>
        <li>Gemini TTS for synchronized narration</li>
        <li>Spring physics animations and 3D card effects</li>
        <li>1080p output quality</li>
        <li>Spec-driven four-phase workflow</li>
      </ul>
    </>
  ),

  "flow-cloud-native-todo": (
    <>
      <h2>Overview</h2>
      <p>
        This project documents the intentional evolution of a simple application
        across 8 distinct architectural phases: Console App → Full-Stack Web →
        AI Chatbot → Docker Containerization → Kubernetes Orchestration → Kafka
        Event Streaming → Dapr Microservices → OCI Cloud Deployment.
      </p>
      <p>
        The AI chatbot layer uses Groq API for natural language task management
        with full conversation history. The production system runs on Oracle
        Cloud (OCI OKE) with Helm charts, NGINX Ingress, Dapr sidecar
        injection, and free-tier optimization.
      </p>

      <h2>8-Phase Evolution</h2>
      <ol>
        <li>Console App</li>
        <li>Full-Stack Web</li>
        <li>AI Chatbot</li>
        <li>Docker Containerization</li>
        <li>Kubernetes Orchestration</li>
        <li>Kafka Event Streaming</li>
        <li>Dapr Microservices</li>
        <li>OCI Cloud Deployment</li>
      </ol>

      <h2>Key Features</h2>
      <ul>
        <li>8-phase architectural evolution (documented)</li>
        <li>AI chatbot with natural language task management</li>
        <li>Groq API integration with conversation history</li>
        <li>Kubernetes deployment with Helm 3</li>
        <li>Dapr sidecar injection for microservice communication</li>
        <li>Apache Kafka for event streaming</li>
        <li>11+ Architecture Decision Records (ADRs)</li>
        <li>OCI free-tier production optimization</li>
      </ul>
    </>
  ),

  "busbot-pakistan": (
    <>
      <h2>Overview</h2>
      <p>
        Pakistan&apos;s first AI-powered public bus guide. Millions of daily
        commuters in Lahore, Karachi, and Islamabad rely on buses with no
        reliable digital map — route information is shared by word of mouth, and
        most apps are English-only. BusBot Pakistan solves this by letting users
        speak their origin and destination in Urdu and receive a conversational
        route response in the same language.
      </p>
      <p>
        Built in one day for the <strong>AI Seekho 2026</strong> competition
        (Google + Government of Pakistan, App Banao track) using Google AI
        Studio Vibe Coding. Deployed on Google Cloud Run with a fully RTL Urdu
        interface and Pakistan Green theme.
      </p>

      <h2>How It Works</h2>
      <div className="not-prose overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-2 text-left font-semibold">Step</th>
              <th className="px-4 py-2 text-left font-semibold">What Happens</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-2">1. Input</td>
              <td className="px-4 py-2">User speaks or types a route query in Urdu (e.g. &ldquo;Johar Town se Liberty kaise jaun?&rdquo;)</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">2. Voice</td>
              <td className="px-4 py-2">Web Speech API transcribes Urdu speech to text natively in Chrome/Android</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">3. AI Processing</td>
              <td className="px-4 py-2">Gemini 3 Flash Preview receives query + city context + pre-seeded route database</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">4. Reasoning</td>
              <td className="px-4 py-2">AI identifies origin/destination, matches stops, and formats a friendly Urdu reply</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">5. Output</td>
              <td className="px-4 py-2">Bus number, boarding/alighting stops, estimated fare, and travel time — in conversational Urdu</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Urdu Voice Input:</strong> Tap the mic and speak — Web Speech API handles transcription natively</li>
        <li><strong>Multi-City Support:</strong> Lahore, Karachi, and Islamabad with pre-seeded route data</li>
        <li><strong>Community Driven:</strong> Logged-in users can add new routes to help fellow commuters (Firebase Google Sign-In)</li>
        <li><strong>Smart Caching:</strong> LocalStorage caching of results for lightning-fast repeated queries</li>
        <li><strong>Automatic Retry Logic:</strong> Multi-stage retries with backoff to handle platform spikes</li>
        <li><strong>One-Tap Sharing:</strong> Share routes via WhatsApp/social on mobile, copy to clipboard on desktop</li>
        <li><strong>RTL Urdu Interface:</strong> Fully right-to-left layout with Pakistan Green theme</li>
        <li><strong>Persistent Preferences:</strong> Remembers your last selected city via LocalStorage</li>
      </ul>

      <h2>Route Database</h2>
      <div className="not-prose overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead>
            <tr className="bg-muted">
              <th className="px-4 py-2 text-left font-semibold">City</th>
              <th className="px-4 py-2 text-left font-semibold">Pre-seeded Routes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-border">
              <td className="px-4 py-2">Lahore</td>
              <td className="px-4 py-2 font-mono text-xs">Bus 27, 5, 12, 8, 3</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">Karachi</td>
              <td className="px-4 py-2 font-mono text-xs">W11, 3A, 4K, K-11, N-3</td>
            </tr>
            <tr className="border-t border-border">
              <td className="px-4 py-2">Islamabad</td>
              <td className="px-4 py-2 font-mono text-xs">Terminal 1, Feeder 3, Metro Feeder</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Competition Context</h2>
      <p>
        Built for <strong>AI Seekho 2026</strong> — a national AI competition
        organized by Google and the Government of Pakistan under the App Banao
        (Build an App) track. The project was built entirely in one day using
        Google AI Studio&apos;s Vibe Coding workflow, demonstrating how AI tools
        can enable rapid development of high-utility civic applications.
      </p>
    </>
  ),

  "robotics-textbook": (
    <>
      <h2>Overview</h2>
      <p>
        Built an interactive educational platform covering Physical AI and
        Humanoid Robotics. The textbook includes 6 chapters covering ROS 2,
        Gazebo simulation, NVIDIA Isaac, and Vision-Language-Action (VLA) models.
      </p>
      <p>
        The platform features a RAG (Retrieval-Augmented Generation) chatbot
        built with OpenAI Agents SDK that can answer questions directly from the
        textbook content. The backend uses FastAPI with Neon Postgres for data
        storage and Qdrant Cloud for vector search.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>6-chapter curriculum (ROS 2, Gazebo, NVIDIA Isaac, VLA models)</li>
        <li>RAG chatbot using OpenAI Agents SDK</li>
        <li>Vector search with Qdrant Cloud</li>
        <li>User authentication with Better Auth</li>
        <li>Responsive design with Docusaurus</li>
      </ul>
    </>
  ),
};
