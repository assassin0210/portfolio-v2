import { LOCALE_STORAGE } from '@/shared/consts/localeStogrageConsts'
import { ITheme } from '@/shared/lib/types/common'

export const setTheme = (theme: ITheme) => {
  localStorage.setItem(LOCALE_STORAGE.THEME, theme)
  document.body.classList.add('transition')
  if (theme === 'LIGHT') {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }
}
