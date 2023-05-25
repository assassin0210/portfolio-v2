import { ReactNode } from 'react'

import { IconArrowUpRight } from '../../assets/icons/icons'
import { Chip } from '../Chip'
import { H3, P14, P16 } from '../Typography'

export const ExperienceCard = ({
  isHovered,
  unactive,
  leftSideContent,
  chips,
  linkName,
  position,
  description,
}: {
  isHovered: boolean
  unactive: boolean
  leftSideContent: ReactNode | ((isHovered: boolean) => ReactNode)
  chips?: string[]
  linkName: string
  position?: string
  description?: string
}) => {
  return (
    <a
      href={''}
      target={'_blank'}
      className={`pb-5 pt-4 pl-5 pr-7 grid grid-cols-[150px_1fr] gap-10 transition duration-300 rounded-md ${
        isHovered
          ? 'dark:bg-blue-100 bg-amber-50 drop-shadow-lg'
          : `${unactive ? 'dark:opacity-40 opacity-60' : ''}`
      }`}
      rel="noreferrer"
    >
      <div className={'mt-0.5'}>
        {typeof leftSideContent === 'function'
          ? leftSideContent(isHovered)
          : leftSideContent}
      </div>
      <div>
        <H3
          className={`flex items-start gap-2 transition duration-300 font-semibold ${
            isHovered ? '!text-green-200' : ''
          }`}
        >
          <span className={''}>{linkName}</span>
          <div className={'relative w-3 h-5'}>
            <IconArrowUpRight
              className={` w-3 absolute transition-all duration-300 top-0 right-0 ${
                isHovered
                  ? 'transform translate-x-1 -translate-y-1 scale-110 fill-green-200'
                  : 'fill-white'
              }`}
            />
          </div>
        </H3>
        {position && (
          <P16 className={'!text-gray-300 font-medium mt-2'}>{position}</P16>
        )}
        {/*<P16 className={'!text-gray-300 font-medium '}>role</P16>*/}
        {description && (
          <P14 className={'text-gray-100 mt-2'}>{description}</P14>
        )}
        {chips && (
          <div className={'mt-3 flex flex-wrap gap-2'}>
            {chips.map((el, index) => (
              <Chip key={index}>{el}</Chip>
            ))}
          </div>
        )}
      </div>
    </a>
  )
}
