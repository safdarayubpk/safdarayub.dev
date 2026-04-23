import { Project } from "@/types/project";

export const aiMlJobMarketPipeline: Project = {
  slug: "ai-ml-job-market-pipeline",
  title: "AI/ML Job Market Intelligence Pipeline",
  oneLiner:
    "End-to-end ML pipeline that scrapes RemoteOK, clusters jobs with K-Means + TF-IDF, classifies seniority across 3 models, generates LLM market insights via Groq LLaMA 3.3 70B, and pushes automated reports to Google Sheets — all from one API call.",
  category: "ML Pipelines",
  image: "/images/projects/ai-ml-job-market-pipeline.svg",
  techStack: [
    "Python",
    "scikit-learn",
    "FastAPI",
    "PostgreSQL",
    "Groq API",
    "Google Sheets",
    "SQLAlchemy",
    "Docker",
  ],
  links: {
    github: "https://github.com/safdarayubpk/ai-ml-job-market-pipeline",
  },
  isFlagship: false,
  priority: 2,
  lastUpdated: "2026-04-23",
};
