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
  return (
    <html lang={'en'} className={'dark laptop:overflow-x-hidden '}>
      <body
        className={`${inter.className} transition-all duration-500 dark:bg-slate-900 bg-stone-50 `}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
