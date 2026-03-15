import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { SkillsGrid } from "@/components/home/skills-grid";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Timeline } from "@/components/home/timeline";
import { Testimonials } from "@/components/home/testimonials";
import { CtaBanner } from "@/components/home/cta-banner";
import { AnimateOnScroll } from "@/components/animations/animate-on-scroll";

export default function Home() {
  return (
    <main>
      <AnimateOnScroll variant="fade-in">
        <Hero />
      </AnimateOnScroll>
      <AnimateOnScroll variant="fade-up">
        <StatsBar />
      </AnimateOnScroll>
      <AnimateOnScroll variant="fade-up" delay={0.1}>
        <SkillsGrid />
      </AnimateOnScroll>
      <AnimateOnScroll variant="fade-up" delay={0.1}>
        <FeaturedProjects />
      </AnimateOnScroll>
      <AnimateOnScroll variant="fade-up">
        <Timeline />
      </AnimateOnScroll>
      <AnimateOnScroll variant="fade-up">
        <Testimonials />
      </AnimateOnScroll>
      <AnimateOnScroll variant="fade-up">
        <CtaBanner />
      </AnimateOnScroll>
    </main>
  );
}
