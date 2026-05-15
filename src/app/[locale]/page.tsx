import { setRequestLocale } from 'next-intl/server'

import { Header } from '@/features/header/Header'
import { MobileNav } from '@/features/header/navbar/MobileNav'
import { HomePage } from '@/features/homePage/HomePage'
import { routing } from '@/i18n/routing'

export const generateStaticParams = () =>
  routing.locales.map((locale) => ({ locale }))

const Home = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className={'container'}>
      <MobileNav />
      <div className={'grid laptop:grid-cols-[auto_1fr] gap-16'}>
        <Header />
        <HomePage />
      </div>
    </div>
  )
}

export default Home
