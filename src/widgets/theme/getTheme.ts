import { LOCALE_STORAGE } from '@/shared/consts/localeStogrageConsts'
import { ITheme } from '@/shared/lib/types/common'

export const getTheme = (): ITheme | null => {
  return (localStorage.getItem(LOCALE_STORAGE.THEME) as ITheme) || null
}
