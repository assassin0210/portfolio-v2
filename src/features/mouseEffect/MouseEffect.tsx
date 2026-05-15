'use client'
import { memo, ReactNode, useEffect, useRef } from 'react'

import { useTheme } from '@/widgets/providers/theme/ThemeProvider'

const GRADIENT =
  'radial-gradient(600px at var(--mx, -1000px) var(--my, -1000px), rgba(29, 78, 216, 0.15), transparent 80%)'

export const MouseEffect = memo(({ children }: { children: ReactNode }) => {
  const theme = useTheme()
  const overlayRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    if (theme !== 'dark') return

    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX
      const y = event.clientY
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        overlayRef.current?.style.setProperty('--mx', `${x}px`)
        overlayRef.current?.style.setProperty('--my', `${y}px`)
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [theme])

  return (
    <>
      <div
        ref={overlayRef}
        aria-hidden
        className="fixed inset-0 pointer-events-none z-[11] print:hidden"
        style={theme === 'dark' ? { background: GRADIENT } : undefined}
      />
      {children}
    </>
  )
})
