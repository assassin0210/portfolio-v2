'use client'
import { useTranslations } from 'next-intl'
import { memo } from 'react'

import { experienceData } from '@/features/experience/data'
import { Resume } from '@/features/experience/Resume'
import { AnimationOneByOne } from '@/shared/animate/AnimationOneByOne'
import { useAnimateInTurn } from '@/shared/animate/useAnimateInTurn'
import { isStringArray } from '@/shared/helpers/isStringArray'
import { ExperienceCard } from '@/shared/ui/experienceCard/ExperienceCard'
import { SectionHeader } from '@/shared/ui/SectionHeader'
import { P14 } from '@/shared/ui/Typography'

export const Experience = memo(() => {
  const { wrapperRef, hoverId, getProps } = useAnimateInTurn()
  const t = useTranslations('experience.items')
  const tNav = useTranslations('nav')

  return (
    <section className={'mt-4 laptop:mt-20 relative'}>
      <SectionHeader>{tNav('experience')}</SectionHeader>
      <div className={'flex flex-col gap-4'} ref={wrapperRef}>
        {experienceData.map(({ key, organization, ...rest }, index) => {
          const rawDescription = t.raw(`${key}.description`)
          const description = isStringArray(rawDescription)
            ? rawDescription
            : typeof rawDescription === 'string'
              ? rawDescription
              : undefined
          const date = t(`${key}.date`)

          return (
            <div {...getProps(index)} className={'w-fit'} key={key}>
              <AnimationOneByOne>
                <ExperienceCard
                  {...rest}
                  linkName={organization}
                  position={t(`${key}.position`)}
                  description={description}
                  leftSideContent={
                    date ? (
                      <P14 className={'font-medium h-fit mt-0.5 uppercase'}>
                        {date}
                      </P14>
                    ) : undefined
                  }
                  unactive={hoverId !== null && index !== hoverId}
                  isHovered={index === hoverId}
                />
              </AnimationOneByOne>
            </div>
          )
        })}
      </div>

      <Resume />
    </section>
  )
})
