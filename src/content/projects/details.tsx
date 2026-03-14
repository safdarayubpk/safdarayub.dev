import { Badge } from "@/components/ui/badge";

export const projectDetails: Record<string, React.ReactNode> = {
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
