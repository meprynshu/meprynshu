'use client'

import Lenis from 'lenis'
import { useEffect } from 'react'

declare global {
  interface Window {
    __lenis?: Lenis
  }
}

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.15,
    })
    window.__lenis = lenis

    let frameId = 0

    const animate = (time: number) => {
      lenis.raf(time)
      frameId = window.requestAnimationFrame(animate)
    }

    frameId = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(frameId)
      delete window.__lenis
      lenis.destroy()
    }
  }, [])

  return null
}
