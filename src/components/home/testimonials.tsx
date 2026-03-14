import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What People Say
        </h2>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6 text-center">
              <Quote className="h-8 w-8 text-primary/30 mx-auto mb-4" />
              <p className="text-muted-foreground italic text-lg">
                Testimonials coming soon. I&apos;m currently building my
                professional network in the AI space.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
