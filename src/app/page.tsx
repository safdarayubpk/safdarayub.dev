import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { SkillsGrid } from "@/components/home/skills-grid";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Timeline } from "@/components/home/timeline";
import { Testimonials } from "@/components/home/testimonials";
import { CtaBanner } from "@/components/home/cta-banner";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <SkillsGrid />
      <FeaturedProjects />
      <Timeline />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
