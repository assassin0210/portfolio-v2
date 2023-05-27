'use client'
import { AnimationProps, motion } from 'framer-motion'
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

interface IProps extends AnimationProps {
  children: ReactNode
  type: 'left' | 'right'
}
export const AnimateFromSide = ({
  children,
  type = 'right',
  ...rest
}: IProps) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: types[type], y: -100, scale: 1.2 },
        visible: { opacity: 1, x: 0, y: 0, scale: 1 },
        exit: { opacity: 0, x: -100, scale: 0.8 },
      }}
      initial="hidden"
      exit="exit"
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        duration: 0.5,
        delay: 0.1,
        type: 'spring',
        stiffness: 100,
      }}
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
