import { COOKIES_KEYS } from '@/shared/consts/localeStogrageConsts'

export const setThemeToCookie = (theme: string, path = '/') => {
  const expirationDate = new Date()
  expirationDate.setMonth(expirationDate.getMonth() + 1)
  const expires = expirationDate.toUTCString()

  document.cookie = `${encodeURIComponent(
    COOKIES_KEYS.THEME
  )}=${encodeURIComponent(
    theme
  )}; expires=${expires}; path=${encodeURIComponent(path)}`

  // document.body.classList?.add('transition')
  if (theme === 'light') {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.remove('light')
    document.documentElement.classList?.add('dark')
  }
}
