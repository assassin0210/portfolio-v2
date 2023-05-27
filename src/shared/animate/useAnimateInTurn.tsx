import { useCallback, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'

import { useHoverHelper } from '../hooks/useHoverHelper'

export const useAnimateInTurn = () => {
  const { onMouseLeave, onMouseEnter, hoverId } = useHoverHelper()

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  })

  const getProps = useCallback(
    (index: number) => ({
      variants,
      onMouseLeave,
      initial: 'hidden',
      animate: inView ? 'visible' : 'hidden',
      onMouseEnter: () => onMouseEnter(index),
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        type: 'spring',
        stiffness: 100,
      },
    }),
    [inView, onMouseEnter, onMouseLeave]
  )

  return useMemo(
    () => ({
      getProps,
      wrapperRef: ref,
      hoverId,
    }),
    [getProps, hoverId, ref]
  )
}

const variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
}
