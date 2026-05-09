import { Project } from "@/types/project";

export const careercoachPakistan: Project = {
  slug: "careercoach-pakistan",
  title: "CareerCoach Pakistan — AI Interview Coach",
  oneLiner:
    "Full-stack SaaS — paste a job description, answer 10 AI-generated questions in English or Urdu, and get instant scored feedback. Subscription billing, Google auth, transactional email, and analytics included.",
  category: "SaaS Products",
  image: "/images/projects/careercoach-pakistan.png",
  techStack: [
    "Next.js 16",
    "Supabase",
    "Stripe",
    "Groq AI",
    "Resend",
    "PostHog",
    "Tailwind CSS",
  ],
  links: {
    github: "https://github.com/safdarayubpk/careercoach-pakistan",
    live: "https://careercoach-pakistan.vercel.app",
  },
  isFlagship: true,
  priority: 1,
  lastUpdated: "2026-05-09",
};
