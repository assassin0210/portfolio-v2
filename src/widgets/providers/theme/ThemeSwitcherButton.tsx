'use client'
import { memo, useCallback } from 'react'

import { setThemeToCookie } from '@/shared/helpers/setThemeToCookie'
import { Switch } from '@/widgets/providers/theme/Switch'

import { useTheme } from './ThemeProvider'

export const ThemeSwitcherButton = memo(() => {
  const theme = useTheme()

  const handleSwitchTheme = useCallback(() => {
    setThemeToCookie(theme === 'dark' ? 'light' : 'dark')
  }, [theme])

  return (
    <Switch
      isDarkMode={theme === 'dark'}
      handleSwitchTheme={handleSwitchTheme}
    />
  )
})
