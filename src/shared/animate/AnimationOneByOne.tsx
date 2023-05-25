import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

import { AnimateFromSide } from '@/shared/animate/AnimateFromSide'

export const AnimationOneByOne = ({ children }: { children: ReactNode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  })
  return (
    <div ref={ref}>
      <AnimateFromSide
        variants={variants}
        initial={'hidden'}
        transition={{
          duration: 0.5,
          delay: 0.2,
          type: 'spring',
          stiffness: 100,
        }}
        animate={inView ? 'visible' : 'hidden'}
        type={'right'}
      >
        {children}
      </AnimateFromSide>
    </div>
  )
}
const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
}
