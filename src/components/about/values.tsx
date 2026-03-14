import { Shield, Award, BookOpen, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Shield,
    title: "Discipline",
    description: "Military-trained precision in every line of code",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "23 years of quality control — I don't ship broken things",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "From electronics to Python to Agentic AI — always evolving",
  },
  {
    icon: FileText,
    title: "Spec-Driven Development",
    description:
      "Document first, design second, build third — 21 ADRs and counting",
  },
];

export function Values() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card key={value.title}>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
