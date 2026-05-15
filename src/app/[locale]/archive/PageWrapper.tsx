'use client'
import { motion } from 'motion/react'
import { memo, ReactNode } from 'react'

const variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
}

const transition = { duration: 0.5 }

export const PageWrapper = memo(({ children }: { children: ReactNode }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}
    transition={transition}
  >
    {children}
  </motion.div>
))
