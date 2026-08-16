import { useLocale, useTranslations } from 'next-intl'
import { memo } from 'react'

import { AnimationOneByOne } from '@/shared/animate/AnimationOneByOne'
import { getCvPdfFileName, getCvPdfHref } from '@/shared/consts/cvPdf'
import { ArrowLink } from '@/shared/ui/ArrowLink'

export const Resume = memo(() => {
  const t = useTranslations('common')
  const locale = useLocale()

  return (
    <div className={'overflow-hidden'}>
      <AnimationOneByOne>
        <a
          href={getCvPdfHref(locale)}
          download={getCvPdfFileName(locale)}
          className={'block my-10 mb-20 w-fit'}
        >
          <ArrowLink>{t('downloadCv')}</ArrowLink>
        </a>
      </AnimationOneByOne>
    </div>
  )
})
