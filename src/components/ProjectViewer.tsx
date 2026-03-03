'use client'

import Image from 'next/image'
import { useState } from 'react'

import type { Project } from '@/lib/projects'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type ProjectViewerProps = {
  projects: Project[]
  featured: Project
}

export function ProjectViewer({ projects, featured }: ProjectViewerProps) {
  const [selected, setSelected] = useState<Project>(featured)

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
      {/* Primary viewer */}
      <Card className="border-zinc-800/80 bg-zinc-900/60">
        <CardContent className="flex flex-col gap-5 p-5 sm:p-6">
          <div className="overflow-hidden rounded-xl border border-zinc-800/80 bg-black">
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${selected.youtubeId}`}
                title={selected.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-zinc-50 sm:text-lg">
              {selected.title}
            </h3>
            <p className="text-sm text-zinc-300">{selected.overview}</p>
            <div className="flex flex-wrap gap-2">
              {selected.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-zinc-700/80 bg-zinc-900/90 px-2.5 py-1 text-[11px] text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1 pt-1 text-sm">
              <a
                href={selected.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>View on GitHub</span>
              </a>
              <a
                href={`https://youtu.be/${selected.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>Watch on YouTube</span>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Project list */}
      <Card className="h-full border-zinc-800/80 bg-zinc-950/60">
        <CardHeader className="border-zinc-800/80">
          <CardTitle className="text-sm text-zinc-100">
            Project library
          </CardTitle>
          <CardDescription className="text-xs text-zinc-400">
            Quickly skim through projects, then dive into the ones that
            resonate.
          </CardDescription>
        </CardHeader>
        <CardContent className="max-h-112 space-y-3 overflow-y-auto p-3 sm:p-4">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelected(project)}
              className={`group flex w-full items-stretch gap-3 rounded-xl border p-2 text-left transition-colors hover:bg-zinc-900/80 ${
                selected.id === project.id
                  ? 'border-zinc-500/70 bg-zinc-800/60'
                  : 'border-transparent bg-zinc-900/40 hover:border-zinc-700/80'
              }`}
            >
              <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-900">
                <Image
                  src={project.screenshotUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-between gap-1">
                <div className="space-y-0.5">
                  <p className="truncate text-xs font-medium text-zinc-100 sm:text-sm">
                    {project.title}
                  </p>
                  <p className="line-clamp-2 text-[11px] text-zinc-400 sm:text-xs">
                    {project.overview}
                  </p>
                </div>
                <div className="flex items-center justify-between text-[10px] text-zinc-500">
                  <span className="inline-flex flex-wrap gap-1">
                    {project.tech.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-zinc-900/90 px-1.5 py-0.5 text-[10px] text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 2 ? (
                      <span className="rounded-full bg-zinc-900/90 px-1.5 py-0.5 text-[10px] text-zinc-400">
                        +{project.tech.length - 2}
                      </span>
                    ) : null}
                  </span>
                  <span className="opacity-70 transition-opacity group-hover:opacity-100">
                    Case study
                  </span>
                </div>
              </div>
            </button>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
