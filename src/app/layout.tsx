import './globals.css'

import { Varela } from 'next/font/google'

import { ThemeProvider } from '@/widgets/providers/theme/ThemeProvider'

const inter = Varela({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const cookieStore = cookies()

  return (
    <html lang={'en'} className={'dark'}>
      <body
        className={`${inter.className} overflow-x-hidden relative transition-all duration-500 dark:bg-mainBlue bg-stone-50 `}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
