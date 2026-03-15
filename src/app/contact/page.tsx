import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactLinks } from "@/components/contact/contact-links";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Safdar Ayub — AI Engineer & Full Stack Developer. Available for remote work worldwide.",
};

export default function ContactPage() {
  return (
    <main className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Page hero */}
        <div className="mb-12">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
          <p className="text-muted-foreground text-lg">
            Have a project in mind, a job opportunity, or just want to connect?
            I&apos;d love to hear from you.
          </p>
        </div>

        {/* Form + Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Contact info — shows first on mobile */}
          <div className="md:col-span-2 md:order-2">
            <ContactLinks />
          </div>

          {/* Contact form */}
          <div className="md:col-span-3 md:order-1">
            <Card>
              <CardContent className="pt-6">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
