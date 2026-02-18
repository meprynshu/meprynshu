'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/atoms/Button'

type Theme = 'light' | 'dark'
type ThemeToggleProps = {
  variant?: 'default' | 'inverted'
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
}

export function ThemeToggle({ variant = 'default' }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  function toggleTheme() {
    setTheme((previousTheme) => (previousTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <Button
      aria-label="Toggle light and dark theme"
      className="justify-center gap-1.5 px-3 py-1.5 text-[11px]"
      onClick={toggleTheme}
      variant={variant}
    >
      <Sun
        size={13}
        strokeWidth={1.8}
        className={theme === 'light' ? 'text-accent-live' : 'text-ink-secondary'}
      />
      <Moon
        size={13}
        strokeWidth={1.8}
        className={theme === 'dark' ? 'text-accent-live' : 'text-ink-secondary'}
      />
      {theme === 'light' ? 'Light' : 'Dark'}
    </Button>
  )
}
