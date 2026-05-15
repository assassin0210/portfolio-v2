import '../globals.css'

import { Metadata, Viewport } from 'next'
import { Varela } from 'next/font/google'
import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { ReactNode } from 'react'

import { MouseEffect } from '@/features/mouseEffect/MouseEffect'
import { routing } from '@/i18n/routing'
import { imgMy } from '@/shared/assets/images/images'
import { COOKIES_KEYS } from '@/shared/consts/cookieKeys'
import { Theme } from '@/shared/lib/types/common'
import { ThemeProvider } from '@/widgets/providers/theme/ThemeProvider'
import { ScrollProgress } from '@/widgets/scrollProgress/ScrollProgress'

const inter = Varela({ subsets: ['latin'], weight: '400' })

const SITE_URL = 'https://www.alexsokol.dev'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafaf9' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  colorScheme: 'dark light',
}

const localePath = (locale: string) =>
  locale === routing.defaultLocale ? '/' : `/${locale}`

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> => {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  const path = localePath(locale)

  return {
    metadataBase: new URL(SITE_URL),
    title: t('title'),
    description: t('description'),
    applicationName: t('siteName'),
    authors: [{ name: 'Alexandr Sokolov', url: SITE_URL }],
    creator: 'Alexandr Sokolov',
    icons: {
      icon: [{ url: '/sa16.svg', type: 'image/svg+xml' }],
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: path,
      languages: {
        en: '/',
        ru: '/ru',
        'x-default': '/',
      },
    },
    openGraph: {
      type: 'website',
      siteName: t('siteName'),
      title: t('title'),
      description: t('description'),
      url: `${SITE_URL}${path}`,
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      creator: '@sokol_dev',
    },
  }
}

interface IProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alexandr Sokolov',
  url: SITE_URL,
  image: `${SITE_URL}${imgMy.src}`,
  jobTitle: 'Frontend Engineer',
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'TanStack Query',
    'Mantine',
    'Web Performance',
    'Accessibility',
  ],
  knowsLanguage: ['en', 'ru'],
  sameAs: ['https://github.com/assassin0210', 'https://t.me/sokol_dev'],
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Alexandr Sokolov — Frontend Engineer',
  url: SITE_URL,
  inLanguage: ['en', 'ru'],
  author: { '@id': `${SITE_URL}#person` },
}

const RootLayout = async ({ children, params }: IProps) => {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const cookieStore = await cookies()
  const theme: Theme =
    cookieStore.get(COOKIES_KEYS.THEME)?.value === 'light' ? 'light' : 'dark'

  const messages = await getMessages()

  return (
    <html lang={locale} className={`laptop:overflow-x-hidden ${theme}`}>
      <body
        className={`${inter.className} transition-all duration-500 dark:bg-slate-900 bg-stone-50`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                { ...personJsonLd, '@id': `${SITE_URL}#person` },
                websiteJsonLd,
              ],
            }),
          }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider initialTheme={theme}>
            <ScrollProgress />
            <MouseEffect>{children}</MouseEffect>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
