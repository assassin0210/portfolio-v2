'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
export const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
const variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
}
