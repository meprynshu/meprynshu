'use client'

import { animate, motionValue, useReducedMotion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'

type TypewriterTextProps = {
  text: string
  charDelayMs?: number
  className?: string
  startDelayMs?: number
}

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(' ')
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

const CURSOR_GAP_PX = 4
const CURSOR_Y_OFFSET_PX = 2

function measureCharacterWidths(node: HTMLElement, text: string) {
  const style = window.getComputedStyle(node)
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  if (!context) {
    return [0]
  }

  context.font = [
    style.fontStyle,
    style.fontVariant,
    style.fontWeight,
    style.fontSize,
    style.fontFamily,
  ]
    .filter(Boolean)
    .join(' ')

  const letterSpacing = parseFloat(style.letterSpacing)
  const spacing = Number.isFinite(letterSpacing) ? letterSpacing : 0

  const widths = [0]
  for (let index = 1; index <= text.length; index += 1) {
    const partial = text.slice(0, index)
    const base = context.measureText(partial).width
    const extraSpacing = spacing * Math.max(0, index - 1)
    widths.push(base + extraSpacing)
  }

  return widths
}

export function TypewriterText({
  text,
  className,
  charDelayMs = 58,
  startDelayMs = 420,
}: TypewriterTextProps) {
  const prefersReducedMotion = useReducedMotion()
  const measureRef = useRef<HTMLSpanElement>(null)
  const [widthMap, setWidthMap] = useState<number[]>([0])
  const [progressChars, setProgressChars] = useState(0)

  const chars = useMemo(() => Array.from(text), [text])
  const charCount = chars.length

  useEffect(() => {
    const measureNode = measureRef.current
    if (!measureNode) {
      return
    }

    const updateWidths = () => {
      const nextMap = measureCharacterWidths(measureNode, text)
      setWidthMap(nextMap)
    }

    updateWidths()

    const observer = new ResizeObserver(updateWidths)
    observer.observe(measureNode)

    if ('fonts' in document) {
      void document.fonts.ready.then(updateWidths)
    }

    window.addEventListener('resize', updateWidths)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateWidths)
    }
  }, [text])

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const counter = motionValue(0)
    const typeDuration = (Math.max(1, charCount) * charDelayMs) / 1000
    const holdDuration = startDelayMs / 1000
    const eraseDuration = Math.max(0.9, typeDuration * 0.75)
    const totalDuration = typeDuration + holdDuration + eraseDuration + holdDuration * 0.75

    const unsubscribe = counter.on('change', (value) => {
      const next = clamp(value, 0, charCount)
      setProgressChars((current) => (Math.abs(current - next) < 0.001 ? current : next))
    })

    const controls = animate(counter, [0, charCount, charCount, 0, 0], {
      duration: totalDuration,
      ease: 'linear',
      repeat: Infinity,
      times: [
        0,
        typeDuration / totalDuration,
        (typeDuration + holdDuration) / totalDuration,
        (typeDuration + holdDuration + eraseDuration) / totalDuration,
        1,
      ],
    })

    return () => {
      unsubscribe()
      controls.stop()
    }
  }, [charCount, charDelayMs, prefersReducedMotion, startDelayMs])

  const safeProgress = prefersReducedMotion ? charCount : clamp(progressChars, 0, charCount)
  const leadingIndex = Math.floor(safeProgress)
  const fraction = safeProgress - leadingIndex
  const fromWidth = widthMap[leadingIndex] ?? 0
  const toWidth = widthMap[Math.min(charCount, leadingIndex + 1)] ?? fromWidth
  const cursorX = fromWidth + (toWidth - fromWidth) * fraction

  return (
    <span className={cn('relative inline-block whitespace-pre align-baseline', className)}>
      <span aria-hidden className="invisible whitespace-pre" ref={measureRef}>
        {text}
      </span>

      <span className="absolute left-0 top-0 inline-flex whitespace-pre">
        {chars.map((character, index) => (
          <span
            key={`${character}-${index}`}
            style={{
              opacity: prefersReducedMotion ? 1 : clamp(safeProgress - index, 0, 1),
            }}
          >
            {character}
          </span>
        ))}

        <span
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 h-[1.05em] w-[2px] animate-pulse bg-current"
          style={{
            opacity: prefersReducedMotion ? 0.45 : 1,
            transform: `translateX(${cursorX + CURSOR_GAP_PX}px) translateY(${CURSOR_Y_OFFSET_PX}px)`,
          }}
        />
      </span>
    </span>
  )
}
