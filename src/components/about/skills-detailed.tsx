import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "AI & Agentic Systems",
    skills: [
      "OpenAI Agents SDK",
      "Claude Code (Opus)",
      "MCP SDK / FastMCP",
      "Prompt Engineering",
      "RAG Systems",
      "Gemini TTS",
    ],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Shell scripting"],
  },
  {
    title: "Frontend",
    skills: [
      "Next.js (App Router)",
      "React.js",
      "Remotion",
      "Tailwind CSS",
      "ShadCN UI",
      "Docusaurus",
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      "FastAPI",
      "Node.js",
      "REST APIs",
      "SQLModel",
      "PostgreSQL / Neon DB",
      "Supabase",
      "Qdrant Cloud",
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      "Docker / Docker Compose",
      "Kubernetes / Helm Charts",
      "OCI / OKE",
      "NGINX Ingress",
      "Dapr",
      "Apache Kafka",
      "GitHub Actions",
      "Vercel",
      "PM2",
      "Git-sync",
    ],
  },
  {
    title: "Agent Infrastructure",
    skills: [
      "Watchdog",
      "APScheduler",
      "Playwright",
      "Circuit breaker patterns",
      "Correlation ID tracking",
      "HITL safety gates",
      "Risk-based routing",
    ],
  },
];

export function SkillsDetailed() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-semibold mb-3 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
