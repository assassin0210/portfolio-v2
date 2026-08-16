import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { memo } from 'react'

import { Socials } from '@/features/socials/Socials'
import { Link } from '@/i18n/navigation'
import { AnimateFromSide } from '@/shared/animate/AnimateFromSide'
import { imgMy } from '@/shared/assets/images/images'
import { getCvPdfFileName, getCvPdfHref } from '@/shared/consts/cvPdf'
import { Button } from '@/shared/ui/button/Button'
import { H1, H2, P16 } from '@/shared/ui/Typography'
import { LanguageSwitcher } from '@/widgets/providers/locale/LanguageSwitcher'
import { ThemeSwitcherButton } from '@/widgets/providers/theme/ThemeSwitcherButton'

import { Navbar } from './navbar/Navbar'

export const Header = memo(() => {
  const t = useTranslations('header')
  const tCommon = useTranslations('common')
  const locale = useLocale()

  return (
    <header
      className={
        'laptop:sticky top-0 pt-20 z-10 laptop:h-screen h-fit flex flex-col justify-between'
      }
    >
      <AnimateFromSide type={'left'}>
        <div className={'items-center z-10'}>
          <div
            className={
              'mb-4 w-20 h-20 rounded-full overflow-hidden ring-2 ring-green-700/30 dark:ring-teal-300/30 shadow-md'
            }
          >
            <Image
              src={imgMy}
              alt={t('name')}
              quality={90}
              priority
              className={'object-cover w-full h-full'}
              sizes={'80px'}
            />
          </div>
          <Link href={'/'} aria-label={t('name')}>
            <H1
              className={
                'bg-gradient-to-r from-green-800 to-green-700 dark:from-slate-50 dark:via-teal-200 dark:to-mainGreen bg-clip-text text-transparent'
              }
            >
              {t('name')}
            </H1>
          </Link>
          <H2 className={'mt-3 font-semibold'}>{t('role')}</H2>
          <ul
            className={
              'mt-3 flex flex-col gap-1 text-[13px] max-w-[320px] text-slate-700 dark:text-slate-400'
            }
          >
            <li className={'flex items-center gap-2'}>
              <span
                aria-hidden
                className={
                  'inline-block w-1.5 h-1.5 rounded-full bg-mainGreen animate-pulse'
                }
              />
              <span
                className={'font-medium text-green-800 dark:text-mainGreen'}
              >
                {t('availability')}
              </span>
            </li>
            <li>{t('location')}</li>
            <li>{t('languages')}</li>
          </ul>
          <P16 className={'mt-3 max-w-[320px]'}>{t('intro')}</P16>
          <div className={'mt-5 flex flex-wrap gap-3 max-w-[320px]'}>
            <a href={getCvPdfHref(locale)} download={getCvPdfFileName(locale)}>
              <Button buttonSize={'SMALL'}>{tCommon('downloadCv')}</Button>
            </a>
            <a href={'mailto:speedo210@gmail.com'}>
              <Button
                buttonSize={'SMALL'}
                className={
                  '!bg-transparent !text-green-700 dark:!text-teal-300 border border-green-700 dark:border-teal-300 hover:!shadow-none hover:opacity-80'
                }
              >
                {tCommon('emailMe')}
              </Button>
            </a>
          </div>
          <div className={'mt-10 hidden laptop:block'}>
            <Navbar />
          </div>
          <div className={'mt-2 flex items-center gap-4'}>
            <ThemeSwitcherButton />
            <LanguageSwitcher />
          </div>
        </div>
      </AnimateFromSide>
      <AnimateFromSide type={'left'}>
        <div className={'mt-auto laptop:pb-20 pt-12'}>
          <Socials />
        </div>
      </AnimateFromSide>
    </header>
  )
})
