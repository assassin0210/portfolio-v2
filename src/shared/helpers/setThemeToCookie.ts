import { COOKIES_KEYS } from '@/shared/consts/cookieKeys'

export const setThemeToCookie = (theme: 'light' | 'dark', path = '/') => {
  const expirationDate = new Date()
  expirationDate.setMonth(expirationDate.getMonth() + 1)
  const expires = expirationDate.toUTCString()

  document.cookie = `${COOKIES_KEYS.THEME}=${theme}; expires=${expires}; path=${path}; SameSite=Lax`

  const root = document.documentElement
  if (theme === 'light') {
    root.classList.remove('dark')
    root.classList.add('light')
  } else {
    root.classList.remove('light')
    root.classList.add('dark')
  }
}
