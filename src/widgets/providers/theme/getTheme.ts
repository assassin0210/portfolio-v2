'use client'
import { LOCALE_STORAGE } from '../../../shared/consts/localeStogrageConsts'
import { ITheme } from '../../../shared/lib/types/common'

export const getTheme = (): ITheme => {
  if (typeof localStorage === 'undefined') {
    return 'LIGHT'
  }
  const theme = localStorage.getItem(LOCALE_STORAGE.THEME) as ITheme

  if (theme) {
    return theme
  } else if (!theme) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'DARK'
      : 'LIGHT'
  } else {
    return 'LIGHT'
  }
}
