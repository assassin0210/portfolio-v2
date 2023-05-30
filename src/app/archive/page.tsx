import Link from 'next/link'
import React, { ReactNode } from 'react'

import { PageWrapper } from '@/app/archive/PageWrapper'
import { projectsData } from '@/features/projects/data'
import { IconArrowUpRight } from '@/shared/assets/icons/icons'
import { Chip } from '@/shared/ui/Chip'
import { H1, P14, P16 } from '@/shared/ui/Typography'

const Archive = () => {
  return (
    <PageWrapper>
      <div className={'container py-12 laptop:py-20 relative'}>
        <Link
          className={'group flex items-center gap-2 w-fit mb-2 relative'}
          href={'/'}
        >
          <div
            className={
              'relative py-2 px-2 group flex items-center gap-3 cursor-pointer w-fit'
            }
          >
            <IconArrowUpRight
              className={`rotate-[225deg] dark:fill-white fill-green-600 group-hover:transform group-hover:-translate-x-2 
           group-hover:scale-110 dark:group-hover:fill-green-200 group-hover:fill-green-700 w-3 transition-all duration-300 `}
            />
            <P16
              className={
                'text-green-600 dark:text-white group-hover:text-green-700  dark:group-hover:text-green-200 transition-all duration-300'
              }
            >
              Sokolov Alexandr
            </P16>

            <div
              className={
                'h-[2px]  absolute right-0 bottom-0 w-0 group-hover:w-full bg-green-600 dark:bg-green-200 transition-all duration-300'
              }
            />
          </div>
        </Link>
        <H1>All projects</H1>
        <div>
          <TableComponent
            data={projectsData.sort((a, b) => Number(b.year) - Number(a.year))}
          />
        </div>
      </div>
    </PageWrapper>
  )
}

export default Archive

const TableComponent = ({ data }: { data: typeof projectsData }) => {
  return (
    <table className="min-w-max w-full table-auto">
      <thead
        className={
          'border-b sticky top-0 border-gray-200/50 bg-stone-50/75 dark:bg-slate-900/75 backdrop-blur transition z-10 duration-500'
        }
      >
        <tr className="text-gray-600  text-sm leading-normal ">
          <HeaderCell>Year</HeaderCell>
          <HeaderCell>Project</HeaderCell>
          <HeaderCell className="hidden laptop:table-cell">Made at</HeaderCell>
          <HeaderCell className="hidden desktop:table-cell">
            Built with
          </HeaderCell>
          <HeaderCell className="hidden tablet:table-cell">Link</HeaderCell>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {data.map(({ chips, year, projectName, href, org }, index) => (
          <tr key={index} className="border-b border-gray-200/50">
            <Cell>{year}</Cell>
            <ProjectCell project={projectName} href={href} />
            <Cell className={'laptop:table-cell hidden'}>{org}</Cell>
            <Cell className={'desktop:table-cell hidden'}>
              <div className={'flex gap-1.5 max-w-[350px] flex-wrap'}>
                {chips.map((el) => (
                  <Chip key={el}>{el}</Chip>
                ))}
              </div>
            </Cell>
            <LinkCell className={'tablet:table-cell hidden'} href={href} />
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const ProjectCell = ({ project, href }: { project: string; href?: string }) => {
  return (
    <>
      <th className={`pr-5 py-3.5 text-left hidden tablet:block`}>
        <P14 className={'dark:text-white !font-bold '}>{project}</P14>
      </th>
      <LinkCell
        className={'tablet:!hidden !tablet-cell'}
        textClassName={'!text-[16px]'}
        href={href}
        alt={project}
      />
    </>
  )
}

const LinkCell = ({
  href,
  className = '',
  textClassName = '',
  alt,
}: {
  href?: string
  className?: string
  textClassName?: string
  alt?: string
}) => {
  return (
    <th className={`pr-5 py-3.5  ${className}`}>
      {href ? (
        <a
          className={'group flex gap-2 p-1 w-fit'}
          href={href}
          target={'_blank'}
          rel="noreferrer"
        >
          <P14
            className={`transition duration-300 group-hover:dark:text-green-200 group-hover:text-green-600 dark:text-white text-slate-900 ${textClassName}`}
          >
            {href.includes('https://') ? href.replace('https://', '') : href}
          </P14>
          <IconArrowUpRight
            className={`w-3 transform  transition-all duration-300 top-0 right-0 fill-black dark:fill-white
             group-hover:fill-green-700 group-hover:scale-110 group-hover:dark:fill-green-200 group-hover:translate-x-1 group-hover:-translate-y-1
        `}
          />
        </a>
      ) : alt ? (
        <P16 className={'dark:text-white text-slate-900 text-left p-2'}>
          {alt}
        </P16>
      ) : (
        ''
      )}
    </th>
  )
}

const HeaderCell = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <th className={`pr-5 py-3.5 text-left  ${className}`}>
      <P14 className={'dark:text-white !font-bold'}>{children}</P14>
    </th>
  )
}
const Cell = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <td className={`pr-5 py-3.5 text-left ${className}`}>
      {typeof children === 'string' ? (
        <P14 className={'!font-medium'}>{children}</P14>
      ) : (
        children
      )}
    </td>
  )
}
