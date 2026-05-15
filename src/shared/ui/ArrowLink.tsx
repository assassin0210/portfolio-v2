import { memo, ReactNode } from 'react'

import { IconArrowUpRight } from '@/shared/assets/icons/icons'
import { P16 } from '@/shared/ui/Typography'

interface IProps {
  children: ReactNode
  direction?: 'forward' | 'back'
}

const arrowRotation = {
  forward: 'rotate-45 group-hover:translate-x-2',
  back: 'rotate-[225deg] group-hover:-translate-x-2',
} as const

const underlinePosition = {
  forward: 'left-0',
  back: 'right-0',
} as const

export const ArrowLink = memo(({ children, direction = 'forward' }: IProps) => {
  return (
    <div
      className={
        'relative py-2 px-2 group flex items-center gap-3 cursor-pointer w-fit'
      }
    >
      {direction === 'back' && (
        <ArrowIcon className={arrowRotation[direction]} />
      )}
      <P16
        className={
          '!text-green-700 dark:!text-teal-300 group-hover:!text-green-800 dark:group-hover:!text-teal-200 transition-all duration-300'
        }
      >
        {children}
      </P16>
      {direction === 'forward' && (
        <ArrowIcon className={arrowRotation[direction]} />
      )}
      <div
        className={`h-[2px] absolute ${underlinePosition[direction]} bottom-0 w-0 group-hover:w-full bg-green-800 dark:bg-teal-300 transition-all duration-300`}
      />
    </div>
  )
})

const ArrowIcon = memo(({ className }: { className: string }) => (
  <IconArrowUpRight
    className={`w-3 fill-green-700 dark:fill-teal-300 group-hover:fill-green-800 dark:group-hover:fill-teal-200 group-hover:scale-110 transform transition-all duration-300 ${className}`}
  />
))
