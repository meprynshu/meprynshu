import { GridLines } from '@/components/atoms/GridLines'
import { SectionSidebar } from '@/components/atoms/SectionSidebar'
import { Experience } from '@/components/sections/Experience'
import { FooterCLI } from '@/components/sections/FooterCLI'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { SkillStack } from '@/components/sections/SkillStack'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-paper text-ink-primary">
      <GridLines />
      <SectionSidebar />
      <div className="relative z-10">
        <Hero />
        <Experience />
        <Projects />
        <SkillStack />
        <FooterCLI />
      </div>
    </main>
  )
}
