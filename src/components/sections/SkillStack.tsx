import { Label } from '@/components/atoms/Label'
import { EDUCATION, SKILLS } from '@/data/content'

export function SkillStack() {
  return (
    <section className="border-b border-grid" id="skills">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-1 border-b border-grid py-8 md:col-span-4 md:border-b-0 md:border-r md:py-10">
            <Label>Technical Infrastructure</Label>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-ink-primary">{EDUCATION.degree}</p>
            <p className="mt-1 text-xs text-ink-secondary">{EDUCATION.institution}</p>
            <p className="mt-1 font-mono text-[11px] text-ink-secondary">{EDUCATION.expectedGraduation}</p>
          </div>

          <div className="col-span-1 md:col-span-8">
            <div className="grid grid-cols-2 border-l border-t border-grid md:grid-cols-4">
              {SKILLS.map((skill) => (
                <div
                  className="aspect-square border-b border-r border-grid p-4"
                  key={`${skill.index}-${skill.name}`}
                >
                  <div className="flex h-full flex-col justify-between">
                    <span className="font-mono text-xs text-ink-secondary">{skill.index}</span>
                    <p className="text-sm font-medium tracking-tight text-ink-primary">{skill.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
