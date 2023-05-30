import { COOKIES_KEYS } from '@/shared/consts/localeStogrageConsts'

export const getThemeFromCookie = () => {
  const cookies = document.cookie.split(';')

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim()
    if (cookie.startsWith(`${COOKIES_KEYS.THEME}=`)) {
      return cookie.substring(COOKIES_KEYS.THEME.length + 1)
    }
  }

  return 'dark'
}
