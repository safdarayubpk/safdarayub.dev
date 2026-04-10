import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for safdarayub.dev — what data is collected and how it is used.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        />

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              What Data Is Collected
            </h2>
            <p>
              When you use the contact form on this website, the following
              information is collected: your name, email address, and the
              message you submit. This data is collected solely to respond to
              your inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              How Data Is Used
            </h2>
            <p>
              Your contact form submissions are used only to respond to your
              inquiries. No data is sold or shared with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Analytics
            </h2>
            <p>
              This website uses privacy-friendly analytics (Vercel Analytics)
              that does not track personal data or use cookies for tracking
              purposes. Only aggregated, anonymous data is collected (page
              views, referrers, device types, country).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Data Retention
            </h2>
            <p>
              Contact form data is deleted after 90 days if there is no ongoing
              conversation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Right to Deletion
            </h2>
            <p>
              You may request deletion of your data at any time by emailing{" "}
              <a
                href="mailto:safdarayub@gmail.com"
                className="text-primary hover:underline"
              >
                safdarayub@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              Cookies
            </h2>
            <p>
              This website uses only essential cookies for theme preference
              (dark/light mode). No tracking cookies are used. With
              privacy-friendly analytics, no cookie consent banner is needed.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
