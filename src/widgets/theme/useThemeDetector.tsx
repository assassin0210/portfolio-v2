import { useEffect, useState } from 'react'

import { ITheme } from '@/shared/lib/types/common'
import { getTheme } from '@/widgets/theme/getTheme'

export const useThemeDetector = () => {
  const getCurrentTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'DARK' : 'LIGHT'
  const [theme, setTheme] = useState<ITheme>(getCurrentTheme())
  const mqListener = (e: MediaQueryListEvent) => {
    const themeFromLocale = getTheme()
    if (!themeFromLocale) {
      const currentTheme = e.matches ? 'DARK' : 'LIGHT'
      setTheme(currentTheme)
      document.documentElement.classList.value = currentTheme.toLowerCase()
    }
  }

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
    darkThemeMq.addEventListener('change', mqListener)
    return () => darkThemeMq.removeEventListener('change', mqListener)
  }, [])
  return theme
}
