import Link from "next/link";
import { ArrowRight } from "lucide-react";

const timelineEntries = [
  {
    year: "2000",
    title: "Joined Pakistan Air Force",
    description: "Electronics Technician & Quality Control",
  },
  {
    year: "2012",
    title: "Master of Computer Science",
    description: "Virtual University of Pakistan",
  },
  {
    year: "2022",
    title: "Python Certification",
    description: "Cisco / OpenEDG",
  },
  {
    year: "2023",
    title: "Retired from PAF (23 years)",
    description:
      "AI & Computing Program — Presidential Initiative for AI and Computing (PIAIC)",
  },
  {
    year: "2026",
    title: "Built production AI systems",
    description:
      "Personal AI Employee (Platinum), AI Video Agent, Flow (Kubernetes), Robotics Textbook. Certified Agentic & Robotic AI Engineer (PIAIC, Air University Islamabad).",
  },
];

export function Timeline() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {timelineEntries.map((entry, index) => (
              <div
                key={entry.year}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 mt-1.5 z-10" />

                {/* Spacer for mobile left offset */}
                <div className="w-10 flex-shrink-0 md:hidden" />

                {/* Content */}
                <div className="flex-1 md:w-1/2 md:px-8">
                  <div
                    className={`bg-card border border-border/60 rounded-lg p-5 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <span className="text-sm font-bold text-primary">
                      {entry.year}
                    </span>
                    <h3 className="font-semibold mt-1">{entry.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {entry.description}
                    </p>
                  </div>
                </div>

                {/* Empty half for desktop alternating */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/about"
            className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
          >
            Read Full Story
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
