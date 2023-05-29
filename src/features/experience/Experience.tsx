'use client'
import { experienceData } from '@/features/experience/data'
import { Resume } from '@/features/experience/Resume'
import { AnimationOneByOne } from '@/shared/animate/AnimationOneByOne'
import { useAnimateInTurn } from '@/shared/animate/useAnimateInTurn'
import { ExperienceCard } from '@/shared/ui/experienseCard/ExperienceCard'
import { SectionHeader } from '@/shared/ui/SectionHeader'
import { P14 } from '@/shared/ui/Typography'

export const Experience = () => {
  const { wrapperRef, hoverId, getProps } = useAnimateInTurn()
  return (
    <section className={' mt-4 laptop:mt-20 relative'}>
      <SectionHeader>Experience</SectionHeader>
      <div className={'flex flex-col gap-4'} ref={wrapperRef}>
        {experienceData.map(({ date, organization, ...rest }, index) => (
          <div {...getProps(index)} className={'w-fit'} key={index}>
            <AnimationOneByOne>
              <ExperienceCard
                {...rest}
                linkName={organization}
                leftSideContent={
                  <P14 className={'font-medium h-fit mt-0.5 uppercase'}>
                    {date}
                  </P14>
                }
                unactive={hoverId !== null && index !== hoverId}
                isHovered={index === hoverId}
              />
            </AnimationOneByOne>
          </div>
        ))}
      </div>
      <Resume />
    </section>
  )
}
