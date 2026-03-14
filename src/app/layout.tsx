import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Safdar Ayub — AI Engineer & Full Stack Developer",
    template: "%s | Safdar Ayub",
  },
  description:
    "Portfolio of Safdar Ayub — AI Engineer & Full Stack Developer building intelligent systems with Next.js, Python, and cloud-native technologies.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://safdarayub-dev.vercel.app"
  ),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Safdar Ayub",
              jobTitle: "AI Engineer & Full Stack Developer",
              url: "https://safdarayub-dev.vercel.app",
              sameAs: [
                "https://github.com/safdarayubpk",
                "https://linkedin.com/in/safdar-ayub-a9884694",
                "https://youtube.com/@safdarayubpk",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kohat District",
                addressRegion: "Khyber Pakhtunkhwa",
                addressCountry: "PK",
              },
              knowsAbout: [
                "Artificial Intelligence",
                "Agentic AI",
                "Full Stack Development",
                "Cloud-Native Development",
                "MCP Servers",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
