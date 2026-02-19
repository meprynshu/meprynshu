import { ExternalLink } from 'lucide-react'

import { Label } from '@/components/atoms/Label'
import { PROJECTS } from '@/data/content'

export function Projects() {
  return (
    <section className="border-b border-grid" id="projects">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid grid-cols-1 border-b border-grid md:grid-cols-12">
          <div className="col-span-1 border-b border-grid p-4 md:col-span-2 md:border-b-0 md:border-r md:p-6">
            <Label>Build Archive</Label>
          </div>
          <div className="col-span-1 p-4 md:col-span-10 md:p-6">
            <p className="text-sm text-ink-secondary">Live Projects · Hiring Signal</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <article
              className="group relative border-b border-grid p-5 transition-colors duration-200 last:border-b-0 md:border-r md:p-6 md:[&:nth-child(2n)]:border-r-0 md:[&:nth-last-child(-n+2)]:border-b-0"
              key={project.id}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-primary/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="font-mono text-[11px] tracking-[0.12em] text-ink-secondary">
                {String(index + 1).padStart(2, '0')} / LIVE
              </p>

              <div className="mt-3 flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight text-ink-primary">{project.name}</h3>
                <a
                  aria-label={`Open ${project.name}`}
                  className="mt-1 text-ink-secondary transition-colors hover:text-ink-primary"
                  href={project.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <ExternalLink size={15} strokeWidth={1.8} />
                </a>
              </div>

              <p className="mt-2 text-[14px] leading-relaxed text-ink-primary">{project.summary}</p>
              <p className="mt-3 font-mono text-[11px] text-accent-live">{project.signal}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    className="bg-surface px-2 py-1 font-mono text-[11px] text-ink-secondary"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                className="mt-5 inline-flex font-mono text-[11px] uppercase tracking-[0.14em] text-ink-primary transition-colors duration-200 group-hover:text-accent-live"
                href={project.href}
                rel="noreferrer"
                target="_blank"
              >
                Open Live Project
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
