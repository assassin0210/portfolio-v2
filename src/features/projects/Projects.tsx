'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { useAnimateInTurn } from '@/shared/animate/useAnimateInTurn'
import { ExperienceCard } from '@/shared/ui/experienseCard/ExperienceCard'

import { imgLightTheme } from '../../shared/assets/images/images'

export const Projects = () => {
  const { wrapperRef, hoverId, getProps } = useAnimateInTurn()

  return (
    <div className={'flex flex-col gap-2'} ref={wrapperRef}>
      {[1, 2, 3, 4, 5].map((el, index) => (
        <motion.div {...getProps(index)} className={'w-fit'} key={index}>
          <ExperienceCard
            linkName={'1'}
            leftSideContent={
              <Image
                className={'max-w-[70px]'}
                src={imgLightTheme}
                alt={'test'}
              />
            }
            unactive={hoverId !== null && index !== hoverId}
            isHovered={index === hoverId}
            chips={['Chip', 'Chip', 'Chip', 'Chip', 'Chip', 'Chip']}
          />
        </motion.div>
      ))}
    </div>
  )
}
