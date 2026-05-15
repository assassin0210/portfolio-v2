import { useTranslations } from 'next-intl'
import { memo } from 'react'

import { Resume } from '@/features/experience/Resume'
import { AnimationOneByOne } from '@/shared/animate/AnimationOneByOne'
import { useAnimateInTurn } from '@/shared/animate/useAnimateInTurn'
import { isStringArray } from '@/shared/helpers/isStringArray'
import { SectionHeader } from '@/shared/ui/SectionHeader'
import { P14, P16 } from '@/shared/ui/Typography'

export const InterestingExperience = memo(() => {
  const { wrapperRef, getProps } = useAnimateInTurn()
  const t = useTranslations('interestingExperience')
  const tNav = useTranslations('nav')

  const rawItems = t.raw('items')
  const items = isStringArray(rawItems) ? rawItems : []

  return (
    <AnimationOneByOne>
      <section className={'mt-4 laptop:mt-20 relative'}>
        <SectionHeader>{tNav('interestingExperience')}</SectionHeader>
        <div className={'flex flex-col gap-4'} ref={wrapperRef}>
          <P16 className={'font-medium'}>{t('intro')}</P16>

          <ol className="list-disc text-slate-700 dark:text-slate-400 pl-2">
            {items.map((item, index) => (
              <li {...getProps(index)} key={item}>
                <P14 className={'mt-2'}>{item}</P14>
              </li>
            ))}
          </ol>

          <P16 className={'font-medium'}>{t('outro')}</P16>
        </div>
        <Resume />
      </section>
    </AnimationOneByOne>
  )
})
