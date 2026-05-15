'use client'
import { motion, useReducedMotion } from 'motion/react'
import Image, { StaticImageData } from 'next/image'
import { memo, useEffect, useRef, useState } from 'react'

interface IProps {
  images: readonly StaticImageData[]
  alt: string
}

const MIN_DURATION_MS = 2500
const MAX_DURATION_MS = 6500

const randomDuration = () =>
  Math.floor(Math.random() * (MAX_DURATION_MS - MIN_DURATION_MS + 1)) +
  MIN_DURATION_MS

const transition = { duration: 2 }

export const Slider = memo(({ images, alt }: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const durationRef = useRef(randomDuration())
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (images.length <= 1 || prefersReducedMotion) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, durationRef.current)
    return () => clearInterval(interval)
  }, [images.length, prefersReducedMotion])

  return (
    <div className="slider">
      <motion.div
        className="slide-container h-[200px] laptop:h-[100px]"
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
      >
        <Image
          src={images[currentIndex]}
          quality={50}
          alt={alt}
          placeholder={'blur'}
          sizes={'(max-width: 1024px) 100vw, 150px'}
          className="object-cover h-full w-full top-0"
        />
      </motion.div>
    </div>
  )
})
