import './globals.css'

import { Inter } from 'next/font/google'

import { Footer } from '@/features/footer/Footer'
import { Header } from '@/features/header/Header'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
