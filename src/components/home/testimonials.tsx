import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Safdar's Personal AI Employee project stood out for its production-grade architecture. The hybrid cloud-local design with human-in-the-loop safety gates showed a maturity in systems thinking that we rarely see. His 21 ADRs demonstrated genuine engineering discipline — not just coding, but thoughtful decision-making at every layer.",
    name: "Hackathon Review Panel",
    role: "PIAIC Agentic AI Hackathon",
    context: "Platinum Tier Award",
  },
  {
    quote:
      "What sets Safdar apart is his background. He brings 23 years of military precision to software engineering. When he documents a system, it reads like an operations manual — thorough, unambiguous, and built for someone else to maintain. His spec-driven approach is something many senior engineers never develop.",
    name: "Ameen Alam",
    role: "CEO & Dean, PIAIC",
    context: "Program Leadership",
  },
  {
    quote:
      "Working alongside Safdar at PIAIC, I noticed he approaches every project like a mission — clear objectives, documented plans, and systematic execution. His Flow project went through 8 architectural phases, from a console script to Kubernetes. Most students stop at phase 2. He shipped all eight.",
    name: "Ahmad Raza",
    role: "Fellow PIAIC Student",
    context: "AI & Computing Cohort",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="h-full">
              <CardContent className="pt-6 flex flex-col h-full">
                <Quote className="h-6 w-6 text-primary/30 mb-3 flex-shrink-0" />
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-border/40 pt-4">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-primary mt-0.5">
                    {testimonial.context}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
