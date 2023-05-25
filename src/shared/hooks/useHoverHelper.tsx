import { useState } from 'react'

export const useHoverHelper = () => {
  const [hoverId, setHoverId] = useState<number | null>(null)
  const onMouseEnter = (idx: number) => {
    if (idx === hoverId) {
      return
    } else {
      setHoverId(idx)
    }
  }

  const onMouseLeave = () => {
    if (hoverId === null) {
      return
    } else {
      setHoverId(null)
    }
  }
  return { onMouseEnter, onMouseLeave, hoverId }
}
