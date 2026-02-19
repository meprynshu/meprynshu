'use client'

import type Lenis from 'lenis'
import { useEffect, useMemo, useRef, useState } from 'react'

declare global {
  interface Window {
    __lenis?: Lenis
  }
}

const NAV_ITEMS = [
  { id: 'intro', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

type NavId = (typeof NAV_ITEMS)[number]['id']

export function SectionSidebar() {
  const itemRefs = useRef(new Map<NavId, HTMLButtonElement>())
  const markerRef = useRef<HTMLSpanElement>(null)
  const [activeId, setActiveId] = useState<NavId>(NAV_ITEMS[0].id)
  const [hoverId, setHoverId] = useState<NavId | null>(null)

  const indicatorId = useMemo(() => hoverId ?? activeId, [activeId, hoverId])

  const updateMarker = (id: NavId) => {
    const markerElement = markerRef.current
    if (!markerElement) {
      return
    }

    const activeItem = itemRefs.current.get(id)
    if (!activeItem) {
      markerElement.style.opacity = '0'
      return
    }

    markerElement.style.opacity = '1'
    markerElement.style.height = `${activeItem.offsetHeight}px`
    markerElement.style.transform = `translateY(${activeItem.offsetTop}px)`
  }

  useEffect(() => {
    const syncActiveSection = () => {
      const firstId = NAV_ITEMS[0].id
      const lastId = NAV_ITEMS[NAV_ITEMS.length - 1].id
      const scrollTop = window.scrollY
      const viewportHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollTop <= 12) {
        setActiveId((current) => (current === firstId ? current : firstId))
        return
      }

      if (scrollTop + viewportHeight >= documentHeight - 12) {
        setActiveId((current) => (current === lastId ? current : lastId))
        return
      }

      const probeLine = scrollTop + viewportHeight * 0.42
      let nextActive: NavId = firstId

      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id)
        if (!section) {
          continue
        }

        if (probeLine >= section.offsetTop - 4) {
          nextActive = item.id
          continue
        }

        break
      }

      setActiveId((current) => (current === nextActive ? current : nextActive))
    }

    let frame = 0
    const onScrollOrResize = () => {
      if (frame !== 0) {
        return
      }

      frame = window.requestAnimationFrame(() => {
        syncActiveSection()
        frame = 0
      })
    }

    syncActiveSection()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame)
      }
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])

  useEffect(() => {
    updateMarker(indicatorId)
  }, [indicatorId])

  useEffect(() => {
    const onResize = () => {
      updateMarker(indicatorId)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [indicatorId])

  const scrollToSection = (id: NavId) => {
    const section = document.getElementById(id)
    if (!section) {
      return
    }

    setActiveId(id)
    if (window.__lenis) {
      window.__lenis.scrollTo(section, { duration: 1.2, offset: -16 })
      return
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <aside
      aria-label="Section navigation"
      className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 md:block"
      onMouseLeave={() => setHoverId(null)}
    >
      <div className="relative pl-6">
        <span
          aria-hidden
          className="absolute left-0 w-[3px] rounded-full bg-ink-primary transition-[transform,height,opacity] duration-300 ease-out"
          ref={markerRef}
          style={{ height: 0, opacity: 0, transform: 'translateY(0px)' }}
        />

        <nav className="flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              className={`py-1.5 font-mono text-[13px] tracking-wide transition-colors duration-200 ${
                activeId === item.id || hoverId === item.id ? 'text-ink-primary' : 'text-ink-secondary'
              }`}
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => setHoverId(item.id)}
              ref={(element) => {
                if (!element) {
                  itemRefs.current.delete(item.id)
                  return
                }
                itemRefs.current.set(item.id, element)
              }}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  )
}
