import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Story } from "@/components/about/story";
import { Values } from "@/components/about/values";
import { SkillsDetailed } from "@/components/about/skills-detailed";
import { Education } from "@/components/about/education";
import { ByTheNumbers } from "@/components/about/by-the-numbers";

export const metadata: Metadata = {
  title: "About",
  description:
    "From Pakistan Air Force to AI Engineering — the journey of Safdar Ayub.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-bold mb-3">About Me</h1>
          <p className="text-muted-foreground text-lg">
            From Pakistan Air Force to AI Engineering
          </p>
        </div>
      </section>

      <Story />
      <Values />
      <SkillsDetailed />
      <Education />
      <ByTheNumbers />

      {/* Personal + CTA */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          <p className="text-muted-foreground mb-2">
            Based in Kohat District, KP, Pakistan
          </p>
          <p className="text-muted-foreground mb-2">
            Linux Ubuntu user &bull; Veteran of the Pakistan Air Force
          </p>
          <p className="text-muted-foreground mb-8">
            Open to remote work worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
