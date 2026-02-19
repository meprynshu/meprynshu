import { Github, Linkedin, MapPin, Twitter } from 'lucide-react'
import Image from 'next/image'

import { IDENTITY, SOCIAL_LINKS } from '@/data/content'

export function Hero() {
  return (
    <section className="border-b border-grid" id="intro">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid min-h-[52vh] grid-cols-1 md:min-h-[68vh] md:grid-cols-12">
          <div className="col-span-1 border-b border-grid py-10 md:col-span-8 md:border-b-0 md:border-r md:py-14">
            <h1 className="text-3xl font-semibold tracking-tighterPlus text-ink-primary md:text-5xl">
              {IDENTITY.name}
            </h1>
            <p className="mt-3 font-sans text-sm tracking-tight text-ink-secondary md:text-base">
              {IDENTITY.role}
            </p>

            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-primary md:text-base">
              I build production-grade AI systems, realtime apps, and frontend experiences that actually ship.
              I like hard problems, clean architecture, and dashboards that do not panic at 2 AM.
            </p>

            <div className="mt-6 space-y-2 font-mono text-xs text-ink-secondary md:text-[13px]">
              <p>{'// turning "can we automate this?" into "already done."'}</p>
              <p>{'// bugs fear logs. i fear no logs.'}</p>
              <p>{'// coffee-driven, latency-aware, pixel-respectful.'}</p>
            </div>
          </div>

          <div className="col-span-1 py-10 md:col-span-4 md:py-14">
            <div className="space-y-5 text-xs text-ink-secondary">
              <div className="relative h-36 w-36 overflow-hidden rounded-full border border-grid md:h-44 md:w-44">
                <Image
                  alt={`${IDENTITY.name} profile image`}
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 176px, 144px"
                  src="https://avatars.githubusercontent.com/u/68071219"
                />
              </div>

              <p className="flex items-center gap-2 font-mono">
                <MapPin size={14} strokeWidth={1.5} />
                {IDENTITY.location}
              </p>
              <div className="flex items-center gap-3">
                <a
                  aria-label="GitHub"
                  className="transition-colors hover:text-ink-primary"
                  href={SOCIAL_LINKS.github}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Github size={14} strokeWidth={1.5} />
                </a>
                <a
                  aria-label="LinkedIn"
                  className="transition-colors hover:text-ink-primary"
                  href={SOCIAL_LINKS.linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Linkedin size={14} strokeWidth={1.5} />
                </a>
                <a
                  aria-label="X"
                  className="transition-colors hover:text-ink-primary"
                  href={SOCIAL_LINKS.x}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Twitter size={14} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
