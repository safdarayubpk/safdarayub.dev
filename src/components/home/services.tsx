import Link from "next/link";
import { ArrowRight, Bot, Globe, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Bot,
    title: "AI Agent Development",
    description:
      "Custom autonomous agents that handle real workflows — email triage, content generation, data pipelines. Built with MCP servers, human-in-the-loop safety, and production monitoring.",
    deliverables: [
      "Custom MCP server integrations",
      "Multi-tool agent orchestration",
      "Production deployment with PM2/Docker",
    ],
  },
  {
    icon: Globe,
    title: "Full-Stack Web Applications",
    description:
      "End-to-end web apps from database to deployment. Responsive, accessible, and optimized for performance with modern frameworks and cloud-native infrastructure.",
    deliverables: [
      "Next.js / React frontends",
      "FastAPI / Node.js backends",
      "Database design & API architecture",
    ],
  },
  {
    icon: Workflow,
    title: "AI-Powered Automation",
    description:
      "Transform manual processes into intelligent automated pipelines. From content generation to data processing, reduce hours of work to minutes.",
    deliverables: [
      "Workflow automation pipelines",
      "AI content generation systems",
      "Cloud deployment & monitoring",
    ],
  },
];

export function Services() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">What I Can Build for You</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to production — I deliver working systems, not just
            prototypes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {services.map((service) => (
            <Card key={service.title} className="h-full">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1.5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1 text-xs">&#9679;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link href="/contact">
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
