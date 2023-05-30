import './globals.css'

import { Varela } from 'next/font/google'
import { cookies } from 'next/headers'

import { MouseEffect } from '@/features/mouseEffect/MouseEffect'
import { COOKIES_KEYS } from '@/shared/consts/localeStogrageConsts'

const inter = Varela({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Alexandr Sokolov',
  description: 'React.js and Next.js Frontend developer Sokolov Alexandr',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookie = cookies().get(COOKIES_KEYS.THEME)?.value || 'dark'

  return (
    <html lang={'en'} className={`laptop:overflow-x-hidden ${cookie}`}>
      <link rel="icon" href="/sa16.svg" sizes="16x16x" type={'image/svg'} />
      <body
        className={`${inter.className} transition-all duration-500 dark:bg-slate-900 bg-stone-50 `}
      >
        <MouseEffect>{children}</MouseEffect>
      </body>
    </html>
  )
}
