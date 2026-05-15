import { useCallback, useState } from 'react'

export const useHoverHelper = () => {
  const [hoverId, setHoverId] = useState<number | null>(null)

  const onMouseEnter = useCallback((idx: number) => {
    setHoverId((prev) => (prev === idx ? prev : idx))
  }, [])

  const onMouseLeave = useCallback(() => {
    setHoverId((prev) => (prev === null ? prev : null))
  }, [])

  return { onMouseEnter, onMouseLeave, hoverId }
}
