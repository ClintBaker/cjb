import Image from 'next/image'
import Link from 'next/link'

import { ProjectViewer } from '@/components/ProjectViewer'
import { getFeaturedProject, getProjects } from '@/lib/projects'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Home() {
  const projects = getProjects()
  const featured = getFeaturedProject()

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 pb-20 pt-16 sm:px-10 sm:pt-20 lg:gap-20">
      {/* Overview / welcome */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.25fr)] md:items-start">
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="relative h-24 w-24 overflow-hidden rounded-full bg-zinc-800 ring-1 ring-zinc-600/50">
            <Image
              src="/clinton-b.png"
              alt="Clinton Baker"
              fill
              className="object-cover object-center"
              priority
              sizes="96px"
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
              Building intelligent systems at the intersection of data,
              software, and decision-making.
            </h1>
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-zinc-300 sm:text-base mx-auto md:mx-0">
              Data Systems Engineer with 2 years building production data
              pipelines and internal tools. ASU B.S. Data Science, December
              2026, continuing to an ASU M.S. in Computer Science — big data
              systems — in Spring 2027.
            </p>
            <p className="max-w-xl text-pretty text-xs leading-relaxed text-zinc-400 sm:text-sm mx-auto md:mx-0">
              Salt Lake City, UT • Open to remote and Salt Lake City metro
              roles in data engineering, analytics, and software •{' '}
              <a
                href="mailto:clintjbaker@gmail.com"
                className="text-zinc-200 underline-offset-4 hover:text-emerald-300 hover:underline"
              >
                clintjbaker@gmail.com
              </a>
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
            <Button
              size="lg"
              asChild
              className="group bg-zinc-600 text-white hover:bg-zinc-500 border-0 shadow-md"
            >
              <a href="#projects" className="inline-flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                Projects
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/ClintBaker"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.linkedin.com/in/clintjbaker/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="/clinton-baker-resume.pdf"
                download="Clinton-Baker-Resume.pdf"
                className="inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </a>
            </Button>
          </div>
        </div>

        <Card className="relative overflow-hidden border-zinc-600/70 bg-zinc-800/95 shadow-xl">
          <CardHeader className="relative border-b border-zinc-600/70">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-300">
              Highlight
            </p>
            <CardTitle className="text-lg text-white">
              {featured.title}
            </CardTitle>
            <CardDescription className="text-zinc-200">
              {featured.overview}
            </CardDescription>
          </CardHeader>
          <CardContent className="relative flex flex-col gap-4">
            <div className="overflow-hidden rounded-xl border border-zinc-600/70 bg-black">
              <div className="aspect-video w-full">
                {featured.youtubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${featured.youtubeId}`}
                    title={featured.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : featured.liveUrl ? (
                  <a
                    href={featured.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-full w-full flex-col items-center justify-center gap-3 bg-linear-to-br from-zinc-800 via-zinc-900 to-black px-6 text-center transition-colors hover:from-zinc-700 hover:via-zinc-800"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                      Live site
                    </span>
                    <span className="text-balance text-lg font-semibold text-zinc-50 sm:text-xl">
                      {featured.title}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-emerald-300">
                      Visit the live site
                      <span aria-hidden>↗</span>
                    </span>
                  </a>
                ) : null}
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-300">
              <div className="inline-flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-600/80 bg-zinc-700/80 px-2.5 py-1 text-[11px] text-zinc-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href="#projects"
                className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-100 underline-offset-4 hover:text-emerald-300 hover:underline"
              >
                Jump to full case studies
                <span aria-hidden>↗</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Experience */}
      <section id="experience" className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
            Experience
          </h2>
          <p className="max-w-xl text-sm text-zinc-400">
            Production data work, not just coursework.
          </p>
        </div>

        <Card className="border-zinc-800/80 bg-zinc-900/60">
          <CardHeader className="border-zinc-800/80">
            <CardTitle className="text-base text-zinc-50 sm:text-lg">
              Data Systems Engineer — JLB Companies
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Salt Lake City, UT / Remote • Dec 2023 – Jan 2026
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-300">
              <li>
                Built and maintained high-volume data ingestion pipelines and
                automated ETL workflows, unifying disparate inputs into a
                centralized Supabase PostgreSQL environment.
              </li>
              <li>
                Implemented OCR-based ingestion using the Google AI API,
                processing roughly 1,000 forms per day and avoiding an
                estimated 5–10 minutes of manual data entry per form.
              </li>
              <li>
                Built internal Next.js tools that let stakeholders securely
                upload, edit, validate, and visualize data in real time, and
                managed the project&apos;s CI/CD pipeline (GitHub / Vercel).
              </li>
              <li>
                Developed Jupyter Notebook workflows with pandas and Plotly
                Express to analyze trends and support leadership
                decision-making.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Project viewer */}
      <section id="projects" className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
              Selected work
            </h2>
            <p className="max-w-xl text-sm text-zinc-400">
              Embedded demos, quick context, and links to dig into the code for
              each project.
            </p>
          </div>
        </div>

        <ProjectViewer projects={projects} featured={featured} />
      </section>

      {/* Contact */}
      <section id="contact" className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
            Contact
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-zinc-300">
          Salt Lake City, UT • Open to remote and Salt Lake City metro roles
          in data engineering, analytics, and software •{' '}
          <a
            href="mailto:clintjbaker@gmail.com"
            className="text-zinc-100 underline-offset-4 hover:text-emerald-300 hover:underline"
          >
            clintjbaker@gmail.com
          </a>
        </p>
        <p className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
          <a
            href="https://www.linkedin.com/in/clintjbaker"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 underline-offset-4 transition-colors hover:text-zinc-100 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ClintBaker"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 underline-offset-4 transition-colors hover:text-zinc-100 hover:underline"
          >
            GitHub
          </a>
        </p>
      </section>
    </main>
  )
}
