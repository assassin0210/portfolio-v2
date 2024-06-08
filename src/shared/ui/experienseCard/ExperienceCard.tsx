import { ReactNode } from 'react'

import { IconArrowUpRight, IconGithub } from '../../assets/icons/icons'
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
  href,
  githubLink,
}: {
  isHovered: boolean
  unactive: boolean
  leftSideContent: ReactNode | ((isHovered: boolean) => ReactNode)
  chips?: string[]
  linkName: string
  position?: string
  description?: string | string[]
  href?: string
  githubLink?: string
}) => {
  return (
    <a
      href={href || ''}
      target={'_blank'}
      className={`pb-5 group pt-4 pl-5 pr-7 grid laptop:grid-cols-[150px_1fr] gap-10 transition duration-300 rounded-md ${
        isHovered
          ? 'dark:bg-blue-100 bg-stone-200 drop-shadow-lg'
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
            isHovered
              ? 'group-hover:dark:text-green-200 group-hover:text-green-600'
              : ''
          }`}
        >
          <span
            className={`${
              isHovered
                ? 'dark:text-green-200 text-green-600 transition duration-300'
                : ''
            }`}
          >
            {linkName}
          </span>
          <div className={'relative w-3 h-5'}>
            <IconArrowUpRight
              className={`w-3 absolute transition-all duration-300 top-0 right-0 ${
                isHovered
                  ? 'transform translate-x-1 -translate-y-1 scale-110 dark:fill-green-200 fill-green-700'
                  : 'fill-black dark:fill-white'
              }`}
            />
          </div>
        </H3>
        {position && (
          <P16 className={'dark:text-gray-50 text-gray-700 font-medium mt-2'}>
            {position}
          </P16>
        )}
        {description &&
          (typeof description === 'string' ? (
            <P14 html={description} className={'text-gray-100 mt-2'} />
          ) : (
            <ol className="list-disc text-gray-100">
              {description.map((item, index) => (
                <li key={index}>
                  <P14 className={'text-gray-100 mt-2'}>{item}</P14>
                </li>
              ))}
            </ol>
          ))}
        {githubLink && (
          <div
            role={'button'}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.open(githubLink, '_blank')
            }}
            className={'flex items-center p-1 w-fit hover:scale-125 transition'}
          >
            <IconGithub className={'dark:fill-white w-6 opacity-75'} />
          </div>
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
