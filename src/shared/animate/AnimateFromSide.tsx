'use client'
import { AnimationProps, motion } from 'framer-motion'
import { ReactNode, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface IProps extends AnimationProps {
  children: ReactNode
  type: 'left' | 'right'
  className?: string
}
export const AnimateFromSide = ({
  children,
  type = 'right',
  className,
  ...rest
}: IProps) => {
  const [ref, inView] = useInView({
    threshold: 0,
  })
  const [shouldAnimate, setShouldAnimate] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setShouldAnimate(window.innerWidth >= 1024)
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return shouldAnimate ? (
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
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  ) : (
    <div> {children}</div>
  )
}
const types: Record<'left' | 'right', number> = {
  left: -120,
  right: 120,
}
