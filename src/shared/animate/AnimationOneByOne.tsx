import { useAnimation } from 'framer-motion'
import { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

import { AnimateFromSide } from '@/shared/animate/AnimateFromSide'

export const AnimationOneByOne = ({ children }: { children: ReactNode }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <div ref={ref}>
      <AnimateFromSide
        variants={variants}
        initial={'hidden'}
        transition={{
          duration: 0.2,

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
  hidden: { opacity: 0, x: 100, scale: 1.2 },
  visible: { opacity: 1, x: 0, scale: 1 },
  exit: { opacity: 0, x: -100, scale: 0.8 }, // Анимация при исчезновении
}

export const useScroll = () => {
  const controls = useAnimation()
  const [element, view] = useInView({ threshold: 0.3 })
  if (view) {
    controls.start('show')
  } else {
    controls.start('hidden')
  }
  return [element, controls]
}
