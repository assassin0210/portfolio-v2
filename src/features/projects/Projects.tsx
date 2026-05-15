'use client'
import { useTranslations } from 'next-intl'
import { memo } from 'react'

import { projectsWithImages } from '@/features/projects/data'
import { Slider } from '@/features/projects/Slider'
import { Link } from '@/i18n/navigation'
import { AnimationOneByOne } from '@/shared/animate/AnimationOneByOne'
import { useAnimateInTurn } from '@/shared/animate/useAnimateInTurn'
import { ArrowLink } from '@/shared/ui/ArrowLink'
import { ExperienceCard } from '@/shared/ui/experienceCard/ExperienceCard'
import { SectionHeader } from '@/shared/ui/SectionHeader'

export const Projects = memo(() => {
  const { wrapperRef, hoverId, getProps } = useAnimateInTurn()
  const tNav = useTranslations('nav')
  const tCommon = useTranslations('common')
  const tProjects = useTranslations('projects.items')
  const tRoles = useTranslations('projects.roles')

  return (
    <div className={'flex flex-col gap-2 relative'} ref={wrapperRef}>
      <SectionHeader>{tNav('projects')}</SectionHeader>
      {projectsWithImages.map(
        (
          { images, projectName, i18nKey, role, year: _year, ...rest },
          index
        ) => {
          return (
            <div {...getProps(index)} className={'w-full'} key={projectName}>
              <AnimationOneByOne>
                <ExperienceCard
                  linkName={projectName}
                  {...rest}
                  subtitle={role ? tRoles(role) : undefined}
                  description={i18nKey ? tProjects(i18nKey) : undefined}
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
        }
      )}
      <AnimationOneByOne>
        <Link href={'/archive'} className={'block my-10 mb-20 w-fit'}>
          <ArrowLink>{tCommon('viewAllProjects')}</ArrowLink>
        </Link>
      </AnimationOneByOne>
    </div>
  )
})
