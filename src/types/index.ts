export interface Identity {
  name: string
  role: string
  location: string
}

export interface Experience {
  id: string
  period: {
    year: string
    month: string
  }
  range: string
  role: string
  company: string
  companyUrl: string
  bullets: string[]
  tags: string[]
  highlightTerms?: string[]
}

export interface Education {
  degree: string
  institution: string
  expectedGraduation: string
}

export interface Skill {
  index: string
  name: string
}

export interface ContactLink {
  label: string
  href: string
}

export interface Project {
  id: string
  name: string
  href: string
  summary: string
  signal: string
  tags: string[]
}
