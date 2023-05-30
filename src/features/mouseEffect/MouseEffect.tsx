'use client'
import { ReactNode, useMemo, useState } from 'react'

import { useListenerTheme } from '@/widgets/providers/theme/useListenerTheme'

export const MouseEffect = ({ children }: { children: ReactNode }) => {
  const [position, setPosition] = useState({ x: '0px', y: '0px' })
  const theme = useListenerTheme()
  console.log(theme)
  // console.log(theme)
  const style = useMemo(
    () =>
      `radial-gradient(600px at ${position.x} ${position.y}, rgba(29, 78, 216, 0.15), transparent 80%)`,
    [position.x, position.y]
  )
  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({ x: event.clientX + 'px', y: event.clientY + 'px' })
  }
  return (
    <div className="h-full " onMouseMove={handleMouseMove}>
      <div
        className={
          'dark:bg-current fixed h-full w-full pointer-events-none z-[11]  bg-none'
        }
        style={
          theme === 'dark' ? { background: style } : { background: 'none' }
        }
      />
      {children}
    </div>
  )
}
