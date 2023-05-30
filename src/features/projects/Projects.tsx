'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { projectsData } from '@/features/projects/data'
import { AnimationOneByOne } from '@/shared/animate/AnimationOneByOne'
import { useAnimateInTurn } from '@/shared/animate/useAnimateInTurn'
import { IconArrowUpRight } from '@/shared/assets/icons/icons'
import { ExperienceCard } from '@/shared/ui/experienseCard/ExperienceCard'
import { SectionHeader } from '@/shared/ui/SectionHeader'
import { P16 } from '@/shared/ui/Typography'

export const Projects = () => {
  const { wrapperRef, hoverId, getProps } = useAnimateInTurn()

  return (
    <div className={'flex flex-col gap-2 relative'} ref={wrapperRef}>
      <SectionHeader>Projects</SectionHeader>
      {projectsData
        .filter((el) => el.images)
        .map(({ images, projectName, ...rest }, index) => (
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
                    <Slider images={images || []} />
                  </div>
                )}
                unactive={hoverId !== null && index !== hoverId}
                isHovered={index === hoverId}
              />
            </AnimationOneByOne>
          </div>
        ))}
      <AnimationOneByOne>
        <Link href={'/archive'}>
          <div
            className={
              'relative py-2 px-2 group flex items-center gap-3 cursor-pointer my-10 mb-20 w-fit'
            }
          >
            <P16
              className={
                'text-green-600 dark:text-white group-hover:text-green-700  dark:group-hover:text-green-200 transition-all duration-300'
              }
            >
              View all Projects
            </P16>
            <IconArrowUpRight
              className={`dark:fill-white fill-green-600 group-hover:transform group-hover:translate-x-2 rotate-45
           group-hover:scale-110 dark:group-hover:fill-green-200 group-hover:fill-green-700 w-3 transition-all duration-300 `}
            />
            <div
              className={
                'h-[2px] absolute left-0 bottom-0 w-0 group-hover:w-full dark:bg-green-200 bg-green-700 transition-all duration-300'
              }
            />
          </div>
        </Link>
      </AnimationOneByOne>
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
