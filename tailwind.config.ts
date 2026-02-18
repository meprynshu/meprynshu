import type { Config } from 'tailwindcss'

const withOpacity = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: withOpacity('--paper'),
        surface: withOpacity('--surface'),
        grid: withOpacity('--grid'),
        ink: {
          primary: withOpacity('--ink-primary'),
          secondary: withOpacity('--ink-secondary'),
        },
        accent: {
          live: withOpacity('--accent-live'),
        },
        footer: {
          bg: withOpacity('--footer-bg'),
          fg: withOpacity('--footer-fg'),
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tighterPlus: '-0.03em',
      },
    },
  },
  plugins: [],
}

export default config
