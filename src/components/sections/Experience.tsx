import { ExternalLink } from 'lucide-react'

import { Label } from '@/components/atoms/Label'
import { EXPERIENCES } from '@/data/content'

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function renderHighlightedText(text: string, terms: string[]) {
  if (terms.length === 0) {
    return text
  }

  const sortedTerms = [...terms].sort((a, b) => b.length - a.length)
  const pattern = new RegExp(`(${sortedTerms.map(escapeRegExp).join('|')})`, 'gi')
  const parts = text.split(pattern).filter(Boolean)

  return parts.map((part, index) => {
    const isHighlighted = sortedTerms.some((term) => term.toLowerCase() === part.toLowerCase())

    if (!isHighlighted) {
      return <span key={`${part}-${index}`}>{part}</span>
    }

    return (
      <span
        className="border-b border-ink-primary/30 bg-surface px-0.5 font-medium text-ink-primary"
        key={`${part}-${index}`}
      >
        {part}
      </span>
    )
  })
}

export function Experience() {
  return (
    <section className="border-b border-grid" id="experience">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid grid-cols-1 border-b border-grid md:grid-cols-12">
          <div className="col-span-1 border-b border-grid p-4 md:col-span-2 md:border-b-0 md:border-r md:p-6">
            <Label>Work Ledger</Label>
          </div>
          <div className="col-span-1 p-4 md:col-span-10 md:p-6">
            <p className="text-sm text-ink-secondary">Experience Timeline</p>
          </div>
        </div>

        {EXPERIENCES.map((entry) => (
          <article className="grid grid-cols-1 border-b border-grid last:border-b-0 md:grid-cols-12" key={entry.id}>
            <div className="col-span-1 border-b border-grid p-4 font-mono text-xs text-ink-secondary md:col-span-2 md:border-b-0 md:border-r md:p-6">
              {entry.period.year} / {entry.period.month}
            </div>

            <div className="col-span-1 p-4 md:col-span-10 md:p-6">
              <div className="flex items-center gap-2">
                <h3 className="text-base font-medium tracking-tight text-ink-primary">
                  {entry.role} · {entry.company}
                </h3>
                <a
                  aria-label={`${entry.company} website`}
                  className="text-ink-secondary transition-colors hover:text-ink-primary"
                  href={entry.companyUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <ExternalLink size={14} strokeWidth={1.5} />
                </a>
              </div>

              <p className="mt-1 font-mono text-xs text-ink-secondary">{entry.range}</p>

              <ul className="mt-4 space-y-2 text-[14px] leading-relaxed text-ink-primary">
                {entry.bullets.map((bullet, index) => (
                  <li className="flex gap-2" key={`${entry.id}-${index}`}>
                    <span className="font-mono text-ink-secondary">•</span>
                    <span>{renderHighlightedText(bullet, entry.highlightTerms ?? [])}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <span
                    className="border border-grid bg-surface px-2 py-1 font-mono text-[11px] text-ink-secondary"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
