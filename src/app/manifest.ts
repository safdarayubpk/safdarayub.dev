import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Safdar Ayub — AI Engineer & Full Stack Developer",
    short_name: "Safdar Ayub",
    description:
      "Portfolio of Safdar Ayub — AI Engineer & Full Stack Developer building intelligent systems with Next.js, Python, and cloud-native technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1120",
    theme_color: "#3B82F6",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
