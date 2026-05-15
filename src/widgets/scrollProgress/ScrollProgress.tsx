'use client'
import { motion, useScroll, useSpring } from 'motion/react'
import { memo } from 'react'

const SPRING_CONFIG = { stiffness: 100, damping: 30, restDelta: 0.001 }

export const ScrollProgress = memo(() => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, SPRING_CONFIG)

  return (
    <motion.div
      style={{ scaleX }}
      className={
        'fixed top-0 left-0 right-0 h-[3px] bg-mainGreen z-50 origin-left print:hidden'
      }
    />
  )
})
