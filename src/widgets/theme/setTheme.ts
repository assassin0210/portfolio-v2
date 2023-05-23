import { LOCALE_STORAGE } from '@/shared/consts/localeStogrageConsts'
import { ITheme } from '@/shared/lib/types/common'

export const setTheme = (theme: ITheme) => {
  localStorage.setItem(LOCALE_STORAGE.THEME, theme)
}
