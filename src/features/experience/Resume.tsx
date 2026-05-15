import { useTranslations } from 'next-intl'
import { memo } from 'react'

import { Link } from '@/i18n/navigation'
import { AnimationOneByOne } from '@/shared/animate/AnimationOneByOne'
import { ArrowLink } from '@/shared/ui/ArrowLink'

export const Resume = memo(() => {
  const t = useTranslations('common')

  return (
    <div className={'overflow-hidden'}>
      <AnimationOneByOne>
        <Link href={'/cv'} className={'block my-10 mb-20 w-fit'}>
          <ArrowLink>{t('downloadCv')}</ArrowLink>
        </Link>
      </AnimationOneByOne>
    </div>
  )
})
