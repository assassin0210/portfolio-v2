'use client'
import { motion, MotionProps, useReducedMotion } from 'motion/react'
import { memo, ReactNode, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface IProps extends MotionProps {
  children: ReactNode
  type: 'left' | 'right'
  className?: string
}

const offsets: Record<'left' | 'right', number> = {
  left: -120,
  right: 120,
}

const ANIMATE_BREAKPOINT = 1024

const transition = {
  duration: 0.5,
  delay: 0.1,
  type: 'spring' as const,
  stiffness: 100,
}

export const AnimateFromSide = memo(
  ({ children, type = 'right', className, ...rest }: IProps) => {
    const [ref, inView] = useInView({ threshold: 0 })
    const [shouldAnimate, setShouldAnimate] = useState(true)
    const prefersReducedMotion = useReducedMotion()

    useEffect(() => {
      const handleResize = () => {
        setShouldAnimate(window.innerWidth >= ANIMATE_BREAKPOINT)
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    if (!shouldAnimate || prefersReducedMotion) {
      return <div className={className}>{children}</div>
    }

    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: offsets[type], y: -100, scale: 1.2 },
          visible: { opacity: 1, x: 0, y: 0, scale: 1 },
          exit: { opacity: 0, x: -100, scale: 0.8 },
        }}
        initial="hidden"
        exit="exit"
        animate={inView ? 'visible' : 'hidden'}
        transition={transition}
        className={className}
        {...rest}
      >
        {children}
      </motion.div>
    )
  }
)
