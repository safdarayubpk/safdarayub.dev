export const siteConfig = {
  url:
    process.env.NEXT_PUBLIC_SITE_URL || "https://safdarayub-dev.vercel.app",
  name: "Safdar Ayub",
  title: "Safdar Ayub — AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Safdar Ayub — AI Engineer & Full Stack Developer building intelligent systems with Next.js, Python, and cloud-native technologies.",
} as const;

export const socialLinks = {
  github: "https://github.com/safdarayubpk",
  linkedin: "https://linkedin.com/in/safdar-ayub-a9884694",
  youtube: "https://youtube.com/@safdarayub3584",
  email: "mailto:safdarayub@gmail.com",
  phone: "tel:+923329611639",
} as const;

export const contactInfo = {
  email: "safdarayub@gmail.com",
  phone: "+92-332-961-1639",
  location: "Kohat District, KP, Pakistan",
  timezone: "PKT (UTC+5)",
} as const;
