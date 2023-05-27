'use client'
import { ReactNode, useEffect, useLayoutEffect } from 'react'

import { LOCALE_STORAGE } from '@/shared/consts/localeStogrageConsts'

import { getTheme } from './getTheme'
import { setTheme } from './setTheme'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const mqListener = (e: MediaQueryListEvent) => {
    // const themeFromLocale = getTheme()
    const currentTheme = e.matches ? 'DARK' : 'LIGHT'
    document.documentElement.classList.value = currentTheme.toLowerCase()
  }

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
    darkThemeMq.addEventListener('change', mqListener)
    return () => darkThemeMq.removeEventListener('change', mqListener)
  }, [])

  useLayoutEffect(() => {
    if (!localStorage.getItem(LOCALE_STORAGE.THEME)) {
      document.documentElement.classList?.add(
        window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : ''
      )
    } else {
      setTheme(getTheme())
    }
  }, [])
  return <>{children}</>
}
