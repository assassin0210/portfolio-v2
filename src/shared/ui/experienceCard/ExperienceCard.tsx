import { memo, ReactNode } from 'react'

import { IconArrowUpRight, IconGithub } from '../../assets/icons/icons'
import { Chip } from '../Chip'
import { H3, P14, P16 } from '../Typography'

interface IProps {
  isHovered: boolean
  unactive: boolean
  leftSideContent: ReactNode | ((isHovered: boolean) => ReactNode)
  chips?: readonly string[]
  linkName: string
  position?: string
  subtitle?: string
  description?: string | readonly string[]
  href?: string
  githubLink?: string
}

export const ExperienceCard = memo(
  ({
    isHovered,
    unactive,
    leftSideContent,
    chips,
    linkName,
    position,
    subtitle,
    description,
    href,
    githubLink,
  }: IProps) => {
    const wrapperClass = `relative pb-5 group pt-4 pl-5 pr-7 grid laptop:grid-cols-[150px_1fr] gap-10 transition duration-300 rounded-md ring-1 ring-transparent hover:ring-slate-300 dark:hover:ring-slate-700 ${
      isHovered
        ? 'dark:bg-slate-800 bg-stone-200 drop-shadow-lg'
        : unactive
          ? 'dark:opacity-40 opacity-60'
          : ''
    }`

    const content = (
      <>
        <div className={'mt-0.5'}>
          {typeof leftSideContent === 'function'
            ? leftSideContent(isHovered)
            : leftSideContent}
        </div>
        <div>
          <H3
            className={`flex items-start gap-2 transition duration-300 font-semibold ${
              isHovered
                ? 'group-hover:dark:text-teal-300 group-hover:text-green-700'
                : ''
            }`}
          >
            <span
              className={
                isHovered
                  ? 'dark:text-teal-300 text-green-700 transition duration-300'
                  : ''
              }
            >
              {linkName}
            </span>
            {href && (
              <span className={'relative w-3 h-5'} aria-hidden>
                <IconArrowUpRight
                  className={`w-3 absolute transition-all duration-300 top-0 right-0 ${
                    isHovered
                      ? 'transform translate-x-1 -translate-y-1 scale-110 dark:fill-teal-300 fill-green-800'
                      : 'fill-slate-900 dark:fill-slate-50'
                  }`}
                />
              </span>
            )}
          </H3>
          {subtitle && (
            <P14
              className={'!text-slate-600 dark:!text-slate-400 mt-1 uppercase'}
            >
              {subtitle}
            </P14>
          )}
          {position && (
            <P16
              className={
                '!text-slate-700 dark:!text-slate-300 font-medium mt-2'
              }
            >
              {position}
            </P16>
          )}
          {description &&
            (typeof description === 'string' ? (
              <P14 html={description} className={'mt-2'} />
            ) : (
              <ol className="list-disc text-slate-700 dark:text-slate-400">
                {description.map((item) => (
                  <li key={item}>
                    <P14 className={'mt-2'}>{item}</P14>
                  </li>
                ))}
              </ol>
            ))}
          {chips && (
            <div className={'mt-3 flex flex-wrap gap-2'}>
              {chips.map((chip) => (
                <Chip key={chip}>{chip}</Chip>
              ))}
            </div>
          )}
        </div>
      </>
    )

    return (
      <article className={wrapperClass}>
        {href ? (
          <a
            href={href}
            target={'_blank'}
            rel="noreferrer"
            aria-label={linkName}
            className={'absolute inset-0 z-0 rounded-md'}
          />
        ) : null}
        <div className={'contents pointer-events-none'}>{content}</div>
        {githubLink && (
          <a
            href={githubLink}
            target={'_blank'}
            rel="noreferrer"
            aria-label={`${linkName} — GitHub`}
            onClick={(e) => e.stopPropagation()}
            className={
              'absolute right-3 bottom-3 z-10 p-1 rounded hover:scale-125 transition focus-visible:outline-2 focus-visible:outline-mainGreen focus-visible:outline-offset-2'
            }
          >
            <IconGithub className={'dark:fill-slate-50 w-6 opacity-75'} />
          </a>
        )}
      </article>
    )
  }
)
