import { useEffect, useRef, useState } from 'react'

const VISIBILITY_THRESHOLD_RATIO = 0.4

export const useNavScroll = (initialActiveId: string) => {
  const [activeId, setActiveId] = useState(initialActiveId)
  const prevScrollRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const blocks = Array.from(
        document.getElementsByClassName('content-block')
      )
      if (blocks.length === 0) return

      const currentScroll = window.scrollY
      const isScrollingDown = currentScroll > prevScrollRef.current
      prevScrollRef.current = currentScroll

      const threshold = VISIBILITY_THRESHOLD_RATIO * window.innerHeight
      let activeBlockId = initialActiveId

      if (isScrollingDown) {
        for (let i = blocks.length - 1; i >= 0; i--) {
          if (blocks[i].getBoundingClientRect().top <= threshold) {
            activeBlockId = blocks[i].id
            break
          }
        }
      } else {
        for (const block of blocks) {
          if (block.getBoundingClientRect().bottom >= threshold) {
            activeBlockId = block.id
            break
          }
        }
      }

      setActiveId(activeBlockId)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [initialActiveId])

  return activeId
}
