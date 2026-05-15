import { memo, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

import { AnimateFromSide } from '@/shared/animate/AnimateFromSide'

const variants = {
  hidden: { opacity: 0, x: 100, scale: 1.2 },
  visible: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -100, scale: 0.8 },
}

const transition = { duration: 0.2, type: 'spring' as const, stiffness: 100 }

export const AnimationOneByOne = memo(
  ({ children }: { children: ReactNode }) => {
    const [ref, inView] = useInView({ threshold: 0.5 })
    return (
      <div ref={ref}>
        <AnimateFromSide
          variants={variants}
          initial={'hidden'}
          transition={transition}
          animate={inView ? 'visible' : 'hidden'}
          type={'right'}
        >
          {children}
        </AnimateFromSide>
      </div>
    )
  }
)
