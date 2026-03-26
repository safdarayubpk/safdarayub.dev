import Link from "next/link";
import { ArrowRight, Brain, Code2, Cloud, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <span className="inline-block mb-4 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-sm font-medium tracking-wide">
          Available for Full-Time Roles
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Join Your Team
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
          Whether you need an AI agent, a full-stack application, or a
          cloud-native system — I&apos;m ready to contribute from day one.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-2">
            <Brain className="h-6 w-6" />
            <span className="text-sm font-medium">AI Engineering</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Code2 className="h-6 w-6" />
            <span className="text-sm font-medium">Full-Stack Dev</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Cloud className="h-6 w-6" />
            <span className="text-sm font-medium">Cloud-Native Systems</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <FileText className="h-6 w-6" />
            <span className="text-sm font-medium">Spec-Driven Dev</span>
          </div>
        </div>

        <p className="text-primary-foreground/70 text-sm mb-8">
          Open to remote work worldwide · Based in Pakistan (UTC+5)
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-primary font-semibold"
          >
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 font-semibold"
          >
            <a href="/resume/Safdar_Ayub_Resume.pdf" download>
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
