'use client'
import { AnimationProps, motion } from 'framer-motion'
import { ReactNode } from 'react'

interface IProps extends AnimationProps {
  children: ReactNode
  type: 'left' | 'right'
}
export const AnimateFromSide = ({
  children,
  type = 'right',
  ...rest
}: IProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: types[type] },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={'visible'}
      transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 100 }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
const types: Record<'left' | 'right', number> = {
  left: -120,
  right: 120,
}
