import { useCallback, useEffect, useState } from 'react'

export const useNavScroll = (
  className: string,
  initialActiveClassName: string
) => {
  const [activeMenu, setActiveMenu] = useState(initialActiveClassName)

  const handleScroll = useCallback(() => {
    const prevScrollPos = window.pageYOffset
    const blocks = Array.from(document.getElementsByClassName('content-block'))
    let activeBlockId = initialActiveClassName
    const currentScrollPos = window.pageYOffset
    const windowHeight = window.innerHeight
    const visibilityThreshold = 0.4 * windowHeight

    if (currentScrollPos > prevScrollPos) {
      for (let i = blocks.length - 1; i >= 0; i--) {
        const rect = blocks[i].getBoundingClientRect()

        if (rect.top <= visibilityThreshold) {
          activeBlockId = blocks[i].id
          break
        }
      }
    } else {
      for (let i = 0; i < blocks.length; i++) {
        const rect = blocks[i].getBoundingClientRect()

        if (rect.bottom >= visibilityThreshold) {
          activeBlockId = blocks[i].id
          break
        }
      }
    }

    setActiveMenu(activeBlockId)
  }, [initialActiveClassName])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [className, handleScroll, initialActiveClassName])

  useEffect(handleScroll, [handleScroll])

  return activeMenu
}
