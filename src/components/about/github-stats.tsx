import { socialLinks } from "@/config/site";

export function GitHubStats() {
  const username = "safdarayubpk";

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-3">GitHub Activity</h2>
        <p className="text-muted-foreground text-center mb-10">
          148+ repositories and counting
        </p>

        <div className="flex flex-col items-center gap-6">
          {/* Contribution graph */}
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-3xl"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/3b82f6/${username}`}
              alt={`${username}'s GitHub contribution graph`}
              className="w-full rounded-lg"
              loading="lazy"
            />
          </a>

          {/* Stats cards */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=00000000&text_color=888888&title_color=3b82f6&icon_color=3b82f6&hide_title=true&hide_rank=true`}
              alt="GitHub stats"
              className="flex-1 rounded-lg border bg-card"
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=00000000&text_color=888888&title_color=3b82f6&langs_count=6&hide_title=true`}
              alt="Top languages"
              className="flex-1 rounded-lg border bg-card"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
