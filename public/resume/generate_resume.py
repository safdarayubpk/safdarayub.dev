"""
Resume generator for Safdar Ayub — uses reportlab to produce a clean single-page PDF.
Run: python3 generate_resume.py
Output: Safdar_Ayub_Resume.pdf (overwrites existing)
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Table, TableStyle
)
from reportlab.lib.enums import TA_CENTER, TA_LEFT
import os

OUTPUT = os.path.join(os.path.dirname(__file__), "Safdar_Ayub_Resume.pdf")

# ── Colours ──────────────────────────────────────────────────────────────────
BLACK      = colors.HexColor("#000000")
DARK_GRAY  = colors.HexColor("#1a1a1a")
MID_GRAY   = colors.HexColor("#444444")
LIGHT_GRAY = colors.HexColor("#666666")
RULE_COLOR = colors.HexColor("#cccccc")

# ── Document ──────────────────────────────────────────────────────────────────
doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=letter,
    leftMargin=0.55 * inch,
    rightMargin=0.55 * inch,
    topMargin=0.45 * inch,
    bottomMargin=0.45 * inch,
)

# ── Styles ────────────────────────────────────────────────────────────────────
def S(name, **kw):
    base = ParagraphStyle(name)
    for k, v in kw.items():
        setattr(base, k, v)
    return base

name_style = S("Name",
    fontName="Helvetica-Bold", fontSize=18, leading=22,
    alignment=TA_CENTER, textColor=BLACK, spaceAfter=2)

title_style = S("Title",
    fontName="Helvetica", fontSize=9.5, leading=13,
    alignment=TA_CENTER, textColor=MID_GRAY, spaceAfter=2)

contact_style = S("Contact",
    fontName="Helvetica", fontSize=8.5, leading=12,
    alignment=TA_CENTER, textColor=MID_GRAY, spaceAfter=4)

section_style = S("Section",
    fontName="Helvetica-Bold", fontSize=9.5, leading=12,
    textColor=BLACK, spaceBefore=6, spaceAfter=2)

summary_style = S("Summary",
    fontName="Helvetica", fontSize=8.5, leading=12,
    textColor=DARK_GRAY, spaceAfter=2)

skills_label_style = S("SkillsLabel",
    fontName="Helvetica-Bold", fontSize=8.5, leading=12,
    textColor=DARK_GRAY)

skills_value_style = S("SkillsValue",
    fontName="Helvetica", fontSize=8.5, leading=12,
    textColor=DARK_GRAY)

proj_title_style = S("ProjTitle",
    fontName="Helvetica-Bold", fontSize=8.5, leading=11,
    textColor=BLACK, spaceBefore=5)

proj_tech_style = S("ProjTech",
    fontName="Helvetica-Oblique", fontSize=7.8, leading=11,
    textColor=LIGHT_GRAY, spaceAfter=1)

bullet_style = S("Bullet",
    fontName="Helvetica", fontSize=8.2, leading=11,
    leftIndent=10, firstLineIndent=-6, textColor=DARK_GRAY)

exp_title_style = S("ExpTitle",
    fontName="Helvetica-Bold", fontSize=8.5, leading=11,
    textColor=BLACK, spaceBefore=5)

exp_date_style = S("ExpDate",
    fontName="Helvetica-Oblique", fontSize=8.2, leading=11,
    textColor=LIGHT_GRAY)

edu_style = S("Edu",
    fontName="Helvetica", fontSize=8.2, leading=11,
    textColor=DARK_GRAY)

cert_style = S("Cert",
    fontName="Helvetica", fontSize=8.2, leading=11,
    leftIndent=10, firstLineIndent=-6, textColor=DARK_GRAY)

additional_style = S("Additional",
    fontName="Helvetica", fontSize=8.2, leading=11,
    leftIndent=10, firstLineIndent=-6, textColor=DARK_GRAY)

# ── Helpers ───────────────────────────────────────────────────────────────────
def rule():
    return HRFlowable(width="100%", thickness=0.5, color=RULE_COLOR, spaceAfter=3)

def section(title):
    return [Paragraph(title.upper(), section_style), rule()]

def bullet(text):
    return Paragraph(f"• {text}", bullet_style)

# ── Content ───────────────────────────────────────────────────────────────────
story = []

# Header
story.append(Paragraph("SAFDAR AYUB", name_style))
story.append(Paragraph("AI Engineer | Full Stack Developer | Cloud-Native Kubernetes", title_style))
story.append(Paragraph(
    "safdarayub@gmail.com | +92-332-961-1639 | Pakistan<br/>"
    "safdarayub-dev.vercel.app | LinkedIn | GitHub | YouTube",
    contact_style))

# Professional Summary
story += section("Professional Summary")
story.append(Paragraph(
    "Results-oriented AI Engineer and Full Stack Developer with 23+ years of distinguished service in the "
    "Pakistan Air Force. Specializing in agentic AI systems, autonomous agent orchestration, and cloud-native "
    "technologies. Hands-on experience building production AI-powered applications using OpenAI Agents SDK, "
    "Claude Code, MCP Protocol, and modern full-stack frameworks. Military leadership background translating "
    "to exceptional project management and quality assurance capabilities.",
    summary_style))
story.append(Paragraph(
    "<b>Agentic AI | MCP Servers | Full Stack Development | Cloud-Native Kubernetes | "
    "Spec-Driven Development | Docker | E-Commerce | CRM & Dashboard Systems | Team Leadership</b>",
    summary_style))

# Technical Skills
story += section("Technical Skills")

skills = [
    ("AI & Agentic Systems",
     "OpenAI Agents SDK, Claude Code (Opus), MCP SDK, FastMCP, Prompt Engineering, RAG Systems, Gemini TTS"),
    ("Programming Languages",
     "Python, TypeScript, JavaScript"),
    ("Frontend",
     "Next.js, React.js, Remotion, Tailwind CSS, ShadCN UI, Recharts, Framer Motion, Zustand"),
    ("Backend & Databases",
     "FastAPI, Node.js, REST APIs, Prisma, SQLModel, PostgreSQL, SQLite, Turso/LibSQL, Neon DB, Supabase, "
     "Qdrant Cloud, Upstash Redis"),
    ("Payments & Media",
     "Stripe Checkout, Cloudinary, browser-image-compression"),
    ("DevOps & Cloud",
     "Docker, Kubernetes, Helm Charts, OCI/OKE, NGINX Ingress, Dapr, Apache Kafka, GitHub Actions, Vercel"),
    ("Validation & Auth",
     "Zod, React Hook Form, NextAuth.js v5, Clerk, Better Auth, JWT, Gmail OAuth2"),
]

for label, value in skills:
    row_data = [[
        Paragraph(f"{label}:", skills_label_style),
        Paragraph(value, skills_value_style),
    ]]
    t = Table(row_data, colWidths=[1.45 * inch, None])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 1),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
    ]))
    story.append(t)

# Key Projects
story += section("Key Projects")

projects = [
    {
        "title": "Personal AI Employee — Autonomous Agent System (Hackathon Platinum Tier) | GitHub",
        "tech": "Tech Stack: Python, FastMCP, Claude Code, Gmail OAuth2, Playwright, Odoo RPC, APScheduler, Obsidian, PM2",
        "bullets": [
            "Built local-first AI agent monitoring Gmail, filesystem, and WhatsApp with priority-queue orchestration and human-in-the-loop approval gates",
            "Implemented 4 custom FastMCP servers (email, social media, Odoo ERP, documents) with circuit breaker patterns and correlation ID tracking",
            "Designed risk-based action routing (routine/sensitive/critical) with dry-run defaults and PM2 process management",
            "Integrated Obsidian vault pipeline with 12 Claude Code skills for automated task processing and weekly CEO briefing generation",
        ],
    },
    {
        "title": "AHF Auto Parts — Production JDM E-Commerce Platform | GitHub | Live",
        "tech": "Tech Stack: Next.js 16, TypeScript, PostgreSQL/Neon, Prisma, NextAuth.js v5, Stripe, Cloudinary, Zustand, Upstash Redis, Resend, Vercel",
        "bullets": [
            "Built production-grade e-commerce platform for a Japan-based auto parts business — vehicle compatibility lookup (Make → Model → Year cascade), product catalog with search/filter/sort, and image gallery",
            "Implemented Stripe Checkout and manual bank transfer with 30-minute stock reservation (Upstash Redis) to prevent overselling during concurrent checkout sessions",
            "Delivered full admin dashboard with Cloudinary image upload, order management, customer list, vehicle/category CRUD, contact inbox, and Recharts analytics",
            "Architected SSG + ISR (60s) for storefront pages and SSR for auth-protected routes; Google OAuth + credentials via NextAuth.js v5; transactional emails via Resend",
        ],
    },
    {
        "title": "Campaign Manager — Full-Stack CRM Dashboard | GitHub | Live Demo",
        "tech": "Tech Stack: Next.js 16, TypeScript, Tailwind CSS, ShadCN UI, Prisma, Turso/LibSQL, Zod, Recharts",
        "bullets": [
            "Built a full-stack CRM prototype with contacts CRUD, audience segmentation rule builder, multi-step campaign wizard, and analytics dashboard",
            "Implemented server-rendered dashboard with KPI cards and Recharts analytics — zero client-side data waterfalls",
            "Designed visual segment rule builder with AND logic, multiple operators, and live preview with 300ms debounce",
            "Engineered Prisma v7 dual adapter pattern (SQLite locally, Turso LibSQL in production) with Zod-validated API routes",
        ],
    },
    {
        "title": "AI Video Generation Agent — End-to-End Content Automation | GitHub | YouTube Demo",
        "tech": "Tech Stack: TypeScript, React, Remotion, Claude Code (Opus), Gemini TTS, Spring Physics, Lucide React",
        "bullets": [
            "Built AI pipeline that generates complete motion graphics videos from text prompts: script to storyboard to scenes to narration to rendered video",
            "Integrated Claude Code (Opus) as orchestrator with Remotion/React rendering engine and Gemini TTS for synchronized voiceover",
            "Produced 4-minute 1080p explainer video with spring physics animations and 3D card transformations",
        ],
    },
    {
        "title": "AI-Powered Todo Application (8-Phase Cloud-Native Evolution) | GitHub | Live",
        "tech": "Tech Stack: Next.js, FastAPI, SQLModel, Groq API, Docker, Kubernetes, Helm 3, Dapr, Apache Kafka, OCI OKE, Neon PostgreSQL",
        "bullets": [
            "Evolved application across 8 phases: Console App to Full-Stack to AI Chatbot to Kubernetes to Kafka Events to Dapr Microservices to OCI Cloud",
            "Integrated AI chatbot using Groq API for natural language task management with conversation history",
            "Deployed production system on OCI OKE with Helm charts, NGINX Ingress, Dapr sidecar injection, and free-tier optimization",
        ],
    },
    {
        "title": "Physical AI & Humanoid Robotics Interactive Textbook | GitHub | Live",
        "tech": "Tech Stack: Docusaurus, React, FastAPI, OpenAI Agents SDK, MCP SDK, Neon DB, Qdrant, Better Auth, Vercel",
        "bullets": [
            "Built interactive textbook with RAG chatbot using OpenAI Agents SDK, FastAPI, Neon Postgres, and Qdrant Cloud",
            "Created 6-chapter curriculum covering ROS 2, Gazebo, NVIDIA Isaac, and VLA models with user authentication",
        ],
    },
]

for p in projects:
    story.append(Paragraph(p["title"], proj_title_style))
    for b in p["bullets"]:
        story.append(bullet(b))
    story.append(Paragraph(p["tech"], proj_tech_style))

# Professional Experience
story += section("Professional Experience")
story.append(Paragraph(
    "Quality Control Inspector &amp; Electronics Technician (Retired) | Pakistan Air Force",
    exp_title_style))
story.append(Paragraph("February 2000 – March 2023 (23 Years)", exp_date_style))
story.append(bullet("Led quality control inspection in Air Logistics and engineering depots ensuring adherence to military-grade standards"))
story.append(bullet("Specialized in electronics and communication equipment maintenance across multiple operational units"))
story.append(bullet("Managed cross-functional teams, HR development, and protocol liaison with foreign personnel"))

# Education & Certifications
story += section("Education & Certifications")
story.append(Paragraph(
    "Certified Agentic and Robotic AI Engineer | PIAIC, Air University Islamabad | Expected 2026",
    edu_style))
story.append(Paragraph(
    "Master of Computer Science (CGPA: 3.11) | Virtual University of Pakistan | 2012",
    edu_style))
story.append(Paragraph(
    "DAE Radio Technology (71%) | School of Electronics, PAF Korangi Creek | 2003",
    edu_style))
story.append(Spacer(1, 3))
story.append(bullet("Artificial Intelligence and Computing Program — Presidential Initiative for AI and Computing (2023)"))
story.append(bullet("PCAP: Programming Essentials in Python — Cisco Networking Academy / OpenEDG Python Institute (2022)"))

# Additional
story += section("Additional")
story.append(bullet("Veteran: 23+ years of distinguished service in Pakistan Air Force"))
story.append(bullet("Active Contributor: Building production AI agents and open-source projects on GitHub"))
story.append(bullet("Operating Systems: Linux Ubuntu, Windows"))

# ── Build ──────────────────────────────────────────────────────────────────────
doc.build(story)
print(f"✓ Resume written to {OUTPUT}")
