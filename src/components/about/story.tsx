import Image from "next/image";

export function Story() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Photo */}
          <div className="md:col-span-1">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-muted">
              <Image
                src="/images/safdar-ayub.png"
                alt="Safdar Ayub"
                fill
                className="object-cover object-[center_15%]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Narrative */}
          <div className="md:col-span-2 space-y-5">
            <h2 className="text-3xl font-bold">The Journey</h2>
            <p className="text-muted-foreground leading-relaxed">
              I served 23 years in the Pakistan Air Force as a Quality Control
              Inspector and Electronics Technician. From February 2000 to March
              2023, I led inspection teams in Air Logistics and engineering
              depots, maintained critical communication equipment, and managed
              cross-functional teams — including liaison with foreign personnel.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I retired in 2023, I didn&apos;t stop. I had already begun
              studying computer science — earning a Master&apos;s degree from
              Virtual University in 2012 and Python certifications from Cisco in
              2022. The military taught me discipline, precision, and the ability
              to manage complex systems under pressure. I wanted to apply those
              same qualities to technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In 2023, I joined the Artificial Intelligence and Computing Program
              under the Presidential Initiative for AI and Computing (PIAIC).
              I&apos;m now pursuing Certified Agentic and Robotic AI Engineering
              at Air University Islamabad. Since then, I&apos;ve been building
              production-grade AI systems — from an autonomous AI employee with a
              hybrid cloud-local architecture, to AI-powered video generation
              pipelines, to cloud-native applications deployed on Kubernetes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My Personal AI Employee project — a Platinum-tier hackathon
              achievement — best represents my approach: a 4-tier autonomous
              agent system with 4 MCP servers, 13 Claude Code skills, 21
              Architecture Decision Records, and a verified live demo. It
              monitors Gmail, WhatsApp, and the filesystem, drafts responses on a
              cloud VM while I&apos;m offline, and executes actions with my
              approval when I reconnect. That&apos;s not a tutorial project —
              that&apos;s production engineering.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My military background isn&apos;t just a footnote — it&apos;s my
              foundation. The same attention to detail that ensured
              military-grade quality standards now ensures production-grade code
              quality. The same leadership that managed teams across operational
              units now drives disciplined, spec-driven development methodology.
            </p>
            <p className="text-foreground font-medium">
              I&apos;m not just learning AI. I&apos;m building AI systems that
              actually work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
