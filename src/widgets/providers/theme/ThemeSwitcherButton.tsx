'use client'
import React from 'react'

import { Switch } from '@/widgets/providers/theme/Switch'

import { getTheme } from './getTheme'
import { setTheme } from './setTheme'
import { useListenerTheme } from './useListenerTheme'

export const ThemeSwitcherButton = () => {
  const theme = useListenerTheme()

  const handleSwitchTheme = () => {
    const currentTheme = getTheme()
    if (currentTheme === 'DARK') {
      setTheme('LIGHT')
    } else if (currentTheme === 'LIGHT') {
      setTheme('DARK')
    } else {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        ? 'DARK'
        : 'LIGHT'
      setTheme(systemTheme === 'DARK' ? 'LIGHT' : 'DARK')
    }
  }
  return (
    <Switch
      isDarkMode={theme === 'DARK'}
      handleSwitchTheme={handleSwitchTheme}
    />
  )
}
