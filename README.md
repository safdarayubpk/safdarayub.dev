# safdarayub.dev

Personal portfolio of **Safdar Ayub** — AI Engineer & Full Stack Developer.

**Live:** [safdarayub-dev.vercel.app](https://safdarayub-dev.vercel.app)

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Content:** MDX (via next-mdx-remote)
- **Email:** Resend API
- **Analytics:** Vercel Analytics + Speed Insights
- **Deployment:** Vercel

## Features

- Responsive, accessible design with dark/light mode
- MDX blog with syntax highlighting, RSS feed, and tag filtering
- Project showcase with category filters and detail pages
- Contact form with Zod validation, rate limiting, and email delivery
- Dynamic OG images for social sharing
- SEO: sitemap, robots.txt, JSON-LD structured data, breadcrumbs
- Security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- Scroll animations and page transitions

## Getting Started

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Fill in RESEND_API_KEY and CONTACT_EMAIL

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # Next.js App Router pages and API routes
├── components/       # React components (layout, home, blog, projects, contact, ui)
├── config/           # Centralized site configuration
├── content/          # MDX blog posts and project data
├── lib/              # Utilities (blog parser, projects, email, validation)
└── types/            # TypeScript type definitions
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm lint` | Run ESLint |
| `pnpm start` | Start production server |

## License

All rights reserved. This is a personal portfolio — not intended for reuse or redistribution.
