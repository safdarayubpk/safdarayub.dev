import Image from "next/image";
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    title: "Certified Agentic & Robotic AI Engineer",
    issuer: "PIAIC, Air University Islamabad",
    year: "Expected 2026",
    image: "/images/piaic-certificate.png",
  },
  {
    title: "PCAP: Certified Associate in Python Programming",
    issuer: "Cisco / OpenEDG Python Institute",
    year: "2022",
  },
  {
    title: "Quality Control & Management",
    issuer: "Pakistan Air Force",
    year: "During service",
  },
];

export function Certifications() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card key={cert.title} className="overflow-hidden h-full">
              {cert.image && (
                <div className="relative aspect-[4/3] bg-muted">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
              <CardContent className={cert.image ? "pt-4" : "pt-6"}>
                <div className="flex gap-3">
                  <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {cert.year}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
