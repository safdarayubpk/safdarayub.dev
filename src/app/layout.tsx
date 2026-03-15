import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://safdarayub-dev.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1120" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Safdar Ayub — AI Engineer & Full Stack Developer",
    template: "%s | Safdar Ayub",
  },
  description:
    "Portfolio of Safdar Ayub — AI Engineer & Full Stack Developer building intelligent systems with Next.js, Python, and cloud-native technologies.",
  metadataBase: new URL(siteUrl),
  authors: [{ name: "Safdar Ayub", url: siteUrl }],
  keywords: [
    "AI Engineer",
    "Full Stack Developer",
    "Next.js",
    "Python",
    "Agentic AI",
    "Cloud-Native",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Safdar Ayub",
    title: "Safdar Ayub — AI Engineer & Full Stack Developer",
    description:
      "Portfolio of Safdar Ayub — AI Engineer & Full Stack Developer building intelligent systems with Next.js, Python, and cloud-native technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safdar Ayub — AI Engineer & Full Stack Developer",
    description:
      "Portfolio of Safdar Ayub — AI Engineer & Full Stack Developer building intelligent systems with Next.js, Python, and cloud-native technologies.",
  },
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
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
