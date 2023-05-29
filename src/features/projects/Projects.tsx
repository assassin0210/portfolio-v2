'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { projectsData } from '@/features/projects/data'
import { AnimationOneByOne } from '@/shared/animate/AnimationOneByOne'
import { useAnimateInTurn } from '@/shared/animate/useAnimateInTurn'
import { ExperienceCard } from '@/shared/ui/experienseCard/ExperienceCard'
import { SectionHeader } from '@/shared/ui/SectionHeader'

export const Projects = () => {
  const { wrapperRef, hoverId, getProps } = useAnimateInTurn()

  return (
    <div className={'flex flex-col gap-2 relative'} ref={wrapperRef}>
      <SectionHeader>Projects</SectionHeader>
      {projectsData.map(({ images, projectName, ...rest }, index) => (
        <div {...getProps(index)} className={'w-full'} key={index}>
          <AnimationOneByOne>
            <ExperienceCard
              linkName={projectName}
              {...rest}
              leftSideContent={(isHover) => (
                <div
                  className={`border-[2px] transition  rounded-[6px] ${
                    isHover ? 'border-gray-300' : 'border-transparent'
                  }`}
                >
                  <Slider images={images} />
                </div>
              )}
              unactive={hoverId !== null && index !== hoverId}
              isHovered={index === hoverId}
            />
          </AnimationOneByOne>
        </div>
      ))}
    </div>
  )
}

const Slider = ({ images }: { images: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const randomDuration = Math.floor(Math.random() * (6500 - 2500 + 1)) + 3000

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2)
    }, randomDuration)

    return () => clearInterval(interval)
  }, [randomDuration])

  return (
    <div className="slider">
      <motion.div
        className="slide-container h-[200px] laptop:h-[100px]"
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <Image
          src={images[currentIndex]}
          quality={50}
          alt="Slide"
          objectFit={'cover'}
          className="object-cover h-full w-full top-0"
        />
      </motion.div>
    </div>
  )
}
