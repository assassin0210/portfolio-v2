'use client'
import React from 'react'

import { getThemeFromCookie } from '@/shared/helpers/getThemeFromCookie'
import { setThemeToCookie } from '@/shared/helpers/setThemeToCookie'
import { ITheme } from '@/shared/lib/types/common'
import { Switch } from '@/widgets/providers/theme/Switch'

import { useListenerTheme } from './useListenerTheme'

export const ThemeSwitcherButton = () => {
  const theme = useListenerTheme()

  const handleSwitchTheme = () => {
    const currentTheme = getThemeFromCookie() as ITheme
    if (currentTheme === 'dark') {
      setThemeToCookie('light')
    } else if (currentTheme === 'light') {
      setThemeToCookie('dark')
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        ? 'dark'
        : 'light'
      setThemeToCookie(systemTheme === 'dark' ? 'light' : 'dark')
    }
  }
  return (
    <Switch
      isDarkMode={theme === 'dark'}
      handleSwitchTheme={handleSwitchTheme}
    />
  )
}
