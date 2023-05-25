'use client'
import { useEffect, useMemo, useState } from 'react'

import { getTheme } from './getTheme'

export const useListenerTheme = () => {
  const [className, setClassName] = useState('DARK')
  useEffect(() => {
    typeof window !== 'undefined' && setClassName(getTheme())
  }, [])
  const divRef =
    typeof document !== 'undefined' ? document.documentElement : null

  useEffect(() => {
    const observeClassNameChanges = (mutationsList: any) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          const newClassName = mutation.target.className
          setClassName(newClassName)
        }
      }
    }

    const observer = new MutationObserver(observeClassNameChanges)

    if (divRef) {
      observer.observe(divRef, { attributes: true })
    }

    return () => {
      if (divRef) {
        observer.disconnect()
      }
    }
  }, [divRef])
  return useMemo(
    () => (className.toLowerCase() === 'dark' ? 'DARK' : 'LIGHT'),
    [className]
  )
}
