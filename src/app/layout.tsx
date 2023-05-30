import './globals.css'

import { Varela } from 'next/font/google'

import { MouseEffect } from '@/features/mouseEffect/MouseEffect'
import { ThemeProvider } from '@/widgets/providers/theme/ThemeProvider'

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
  return (
    <html lang={'en'} className={'dark laptop:overflow-x-hidden '}>
      <link rel="icon" href="/favicon32.png" sizes="32x32" type="image/png" />
      <link rel="icon" href="/favicon16.png" sizes="16x16" type="image/png" />
      <body
        className={`${inter.className} transition-all duration-500 dark:bg-slate-900 bg-stone-50 `}
      >
        <ThemeProvider>
          <MouseEffect>{children}</MouseEffect>
        </ThemeProvider>
      </body>
    </html>
  )
}
