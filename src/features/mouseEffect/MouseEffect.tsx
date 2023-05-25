'use client'
import { ReactNode, useState } from 'react'

import { useListenerTheme } from '@/widgets/providers/theme/useListenerTheme'

export const MouseEffect = ({ children }: { children: ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const theme = useListenerTheme()
  const handleMouseMove = (event: React.MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY })
  }
  return (
    <div className="h-full" onMouseMove={handleMouseMove}>
      <div className={'fixed h-full w-full'}>
        <div
          className={`transition-colors derk: ${
            theme === 'DARK' ? 'gradient-dark ' : 'bg-white'
          } gradient blur-2xl`}
          style={{
            left: position.x - 300,
            top: position.y - 300,
          }}
        />
      </div>
      {children}
    </div>
  )
}
