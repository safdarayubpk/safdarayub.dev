import { Project } from "@/types/project";

export const ahfAutoParts: Project = {
  slug: "ahf-auto-parts",
  title: "AHF Auto Parts — JDM E-Commerce Platform",
  oneLiner:
    "Production-grade e-commerce platform for a Japan-based auto parts business — vehicle compatibility lookup, Stripe checkout, admin dashboard, and full order management.",
  category: "Full Stack",
  image: "/images/projects/ahf-auto-parts.png",
  techStack: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "NextAuth.js",
    "Stripe",
    "Cloudinary",
    "Zustand",
    "Upstash Redis",
  ],
  links: {
    github: "https://github.com/safdarayubpk/ahf-auto-parts",
    live: "https://ahf-auto-parts.vercel.app",
  },
  isFlagship: true,
  priority: 2,
  lastUpdated: "2026-04-18",
};
