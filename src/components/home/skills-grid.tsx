import { Bot, Code, Cloud, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: Bot,
    title: "Agentic AI Systems",
    description:
      "Building autonomous agents with MCP servers, human-in-the-loop safety, and multi-tool orchestration",
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "End-to-end web applications with Next.js, FastAPI, PostgreSQL, and modern authentication",
  },
  {
    icon: Cloud,
    title: "Cloud-Native & DevOps",
    description:
      "Production deployments on Kubernetes with Docker, Helm, Dapr, and CI/CD pipelines",
  },
  {
    icon: Server,
    title: "Hybrid Cloud Architecture",
    description:
      "Cloud VM drafting + local execution with git-sync, offline tolerance, and PM2 daemon management",
  },
];

export function SkillsGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <Card key={skill.title}>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
