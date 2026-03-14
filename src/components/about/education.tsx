import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    qualification: "Certified Agentic & Robotic AI Engineer",
    institution: "PIAIC, Air University Islamabad",
    year: "Expected 2026",
  },
  {
    qualification: "Master of Computer Science (CGPA: 3.11)",
    institution: "Virtual University of Pakistan",
    year: "2012",
  },
  {
    qualification: "DAE Radio Technology (71%)",
    institution: "School of Electronics, PAF Korangi Creek",
    year: "2003",
  },
  {
    qualification: "AI & Computing Program",
    institution: "Presidential Initiative for AI and Computing (PIAIC)",
    year: "2023",
  },
  {
    qualification: "PCAP: Python Essentials",
    institution: "Cisco / OpenEDG Python Institute",
    year: "2022",
  },
  {
    qualification: "Quality Control & Management",
    institution: "Pakistan Air Force",
    year: "During service",
  },
];

export function Education() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Education &amp; Certifications
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-left font-semibold">
                  Qualification
                </th>
                <th className="px-4 py-3 text-left font-semibold">
                  Institution
                </th>
                <th className="px-4 py-3 text-left font-semibold">Year</th>
              </tr>
            </thead>
            <tbody>
              {education.map((item) => (
                <tr
                  key={item.qualification}
                  className="border-b border-border/50"
                >
                  <td className="px-4 py-3 font-medium">
                    {item.qualification}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {item.institution}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {item.year}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {education.map((item) => (
            <Card key={item.qualification}>
              <CardContent className="pt-4">
                <div className="flex gap-3">
                  <GraduationCap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-sm">
                      {item.qualification}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.institution}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.year}
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
