'use client'
import {
  createContext,
  memo,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { Theme } from '@/shared/lib/types/common'

const ThemeContext = createContext<Theme>('dark')

interface IProps {
  children: ReactNode
  initialTheme: Theme
}

export const ThemeProvider = memo(({ children, initialTheme }: IProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      setTheme(root.classList.contains('dark') ? 'dark' : 'light')
    })
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
})

export const useTheme = (): Theme => useContext(ThemeContext)
