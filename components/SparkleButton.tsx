'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

type Sparkle = {
  id: number
  x: number
  y: number
  size: number
  color: string
  createdAt: number
}

const STAR_PATH = 'M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5 Z'
const COLORS = ['#FFC700', '#FF8A00', '#FF3DAA', '#9C5BFF', '#3DBEFF']

const rand = (min: number, max: number) => Math.random() * (max - min) + min

function generateSparkle(width: number, height: number): Sparkle {
  return {
    id: Math.random(),
    x: rand(-12, width - 4),
    y: rand(-12, height - 4),
    size: rand(8, 16),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    createdAt: Date.now(),
  }
}

export default function SparkleButton({
  href,
  children,
  theme
}: {
  href: string
  children: ReactNode
  theme: 'light' | 'dark'
}) {
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isHovering || !wrapperRef.current) return
    const { width, height } = wrapperRef.current.getBoundingClientRect()

    const interval = setInterval(() => {
      setSparkles((prev) => {
        // remove old sparkles, add a new one
        const now = Date.now()
        const fresh = prev.filter((s) => now - s.createdAt < 700)
        return [...fresh, generateSparkle(width, height)]
      })
    }, 140)

    return () => clearInterval(interval)
  }, [isHovering])

  return (
    <span
      ref={wrapperRef}
      className="relative inline-block mt-2"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {sparkles.map((s) => (
        <svg
          key={s.id}
          width={s.size}
          height={s.size}
          viewBox="0 0 24 24"
          className="absolute pointer-events-none z-10 animate-sparkle"
          style={{ left: s.x, top: s.y }}
        >
          <path d={STAR_PATH} fill={s.color} />
        </svg>
      ))}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative z-5 inline-flex items-center rounded-md px-5 py-2 text-base font-medium no-underline 
        ${theme === 'dark' ? 'bg-foreground text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]' : 'border border-solid border-black/[.1] bg-background text-foreground transition-colors hover:border-transparent hover:bg-black/[.06] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]'}`}
      >
        {children}
      </a>
    </span>
  )
}