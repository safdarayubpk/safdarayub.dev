import { Project } from "@/types/project";

export const campaignManager: Project = {
  slug: "campaign-manager",
  title: "Campaign Manager — Full-Stack CRM Dashboard",
  oneLiner:
    "A CRM prototype with contacts CRUD, audience segmentation rule builder, multi-step campaign wizard, and analytics dashboard — powered by Prisma and Turso.",
  category: "Full Stack",
  image: "/images/projects/campaign-manager.png",
  techStack: [
    "Next.js 16",
    "TypeScript",
    "Tailwind CSS",
    "ShadCN UI",
    "Prisma",
    "Turso",
    "Zod",
    "Recharts",
  ],
  links: {
    github: "https://github.com/safdarayubpk/campaign-manager",
    live: "https://campaign-manager-flax.vercel.app",
  },
  isFlagship: false,
  priority: 2,
};
