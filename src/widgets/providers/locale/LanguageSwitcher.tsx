'use client'
import { useLocale, useTranslations } from 'next-intl'
import { Fragment, memo, useCallback, useTransition } from 'react'

import { locales } from '@/i18n/config'
import { usePathname, useRouter } from '@/i18n/navigation'

export const LanguageSwitcher = memo(() => {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()
  const t = useTranslations('a11y')
  const [isPending, startTransition] = useTransition()

  const handleSwitch = useCallback(
    (next: (typeof locales)[number]) => {
      if (next === currentLocale) return
      startTransition(() => {
        router.replace(pathname, { locale: next })
      })
    },
    [currentLocale, pathname, router]
  )

  return (
    <div
      className={`flex items-center gap-1 text-[12px] font-semibold uppercase mt-6 ${
        isPending ? 'opacity-60' : ''
      }`}
    >
      {locales.map((locale, index) => {
        const isActive = locale === currentLocale
        return (
          <Fragment key={locale}>
            <button
              type={'button'}
              onClick={() => handleSwitch(locale)}
              aria-pressed={isActive}
              aria-label={t('switchToLocale', { locale: locale.toUpperCase() })}
              className={`transition cursor-pointer focus-visible:outline-2 focus-visible:outline-mainGreen focus-visible:outline-offset-2 rounded ${
                isActive
                  ? 'text-green-800 dark:text-mainGreen'
                  : 'text-slate-600 dark:text-slate-400 hover:text-green-700 dark:hover:text-teal-300'
              }`}
            >
              {locale}
            </button>
            {index < locales.length - 1 && (
              <span
                aria-hidden
                className={'mx-1 text-slate-400 dark:text-slate-600'}
              >
                /
              </span>
            )}
          </Fragment>
        )
      })}
    </div>
  )
})
