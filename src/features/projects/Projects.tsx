'use client'
import { useTranslations } from 'next-intl'
import { memo } from 'react'

import { projectsData } from '@/features/projects/data'
import { Slider } from '@/features/projects/Slider'
import { AnimationOneByOne } from '@/shared/animate/AnimationOneByOne'
import { useAnimateInTurn } from '@/shared/animate/useAnimateInTurn'
import { ExperienceCard } from '@/shared/ui/experienceCard/ExperienceCard'
import { SectionHeader } from '@/shared/ui/SectionHeader'

export const Projects = memo(() => {
  const { wrapperRef, hoverId, getProps } = useAnimateInTurn()
  const tNav = useTranslations('nav')
  const tProjects = useTranslations('projects.items')
  const tRoles = useTranslations('projects.roles')

  return (
    <div className={'flex flex-col gap-2 relative pb-20'} ref={wrapperRef}>
      <SectionHeader>{tNav('projects')}</SectionHeader>
      {projectsData.map(
        ({ images, projectName, i18nKey, role, href, chips }, index) => (
          <div {...getProps(index)} className={'w-full'} key={projectName}>
            <AnimationOneByOne>
              <ExperienceCard
                linkName={projectName}
                href={href}
                chips={chips}
                subtitle={tRoles(role)}
                description={tProjects(i18nKey)}
                leftSideContent={(isHover) => (
                  <div
                    className={`border-[2px] transition rounded-[6px] ${
                      isHover
                        ? 'border-green-700 dark:border-teal-300'
                        : 'border-transparent'
                    }`}
                  >
                    <Slider images={images} alt={projectName} />
                  </div>
                )}
                unactive={hoverId !== null && index !== hoverId}
                isHovered={index === hoverId}
              />
            </AnimationOneByOne>
          </div>
        )
      )}
    </div>
  )
})
