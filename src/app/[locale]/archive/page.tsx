import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import React, { ReactNode } from 'react'

import { PageWrapper } from '@/app/[locale]/archive/PageWrapper'
import { projectsByYearDesc } from '@/features/projects/data'
import { Link } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { IconArrowUpRight } from '@/shared/assets/icons/icons'
import { ArrowLink } from '@/shared/ui/ArrowLink'
import { Chip } from '@/shared/ui/Chip'
import { H1, P14, P16 } from '@/shared/ui/Typography'

const SITE_URL = 'https://www.alexsokol.dev'

const localeArchivePath = (locale: string) =>
  locale === routing.defaultLocale ? '/archive' : `/${locale}/archive`

export const generateStaticParams = () =>
  routing.locales.map((locale) => ({ locale }))

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> => {
  const { locale } = await params
  const tArchive = await getTranslations({ locale, namespace: 'archive' })
  const tMeta = await getTranslations({ locale, namespace: 'metadata' })

  const title = `${tArchive('title')} — ${tMeta('siteName')}`
  const path = localeArchivePath(locale)

  return {
    title,
    description: tMeta('description'),
    alternates: {
      canonical: path,
      languages: {
        en: '/archive',
        ru: '/ru/archive',
        'x-default': '/archive',
      },
    },
    openGraph: {
      title,
      description: tMeta('description'),
      url: `${SITE_URL}${path}`,
      type: 'website',
    },
  }
}

interface ITableLabels {
  year: string
  project: string
  madeAt: string
  builtWith: string
  link: string
}

const Archive = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params
  setRequestLocale(locale)

  const tArchive = await getTranslations('archive')
  const tCommon = await getTranslations('common')

  const labels: ITableLabels = {
    year: tArchive('table.year'),
    project: tArchive('table.project'),
    madeAt: tArchive('table.madeAt'),
    builtWith: tArchive('table.builtWith'),
    link: tArchive('table.link'),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: tCommon('backToPortfolio'),
        item: `${SITE_URL}${locale === routing.defaultLocale ? '/' : `/${locale}`}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: tArchive('title'),
        item: `${SITE_URL}${localeArchivePath(locale)}`,
      },
    ],
  }

  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className={'container py-12 laptop:py-20 relative'}>
        <Link href={'/'} className={'block w-fit mb-2'}>
          <ArrowLink direction={'back'}>{tCommon('backToPortfolio')}</ArrowLink>
        </Link>
        <H1>{tArchive('title')}</H1>
        <div>
          <TableComponent data={projectsByYearDesc} labels={labels} />
        </div>
      </div>
    </PageWrapper>
  )
}

export default Archive

const TableComponent = ({
  data,
  labels,
}: {
  data: typeof projectsByYearDesc
  labels: ITableLabels
}) => (
  <table className="min-w-max w-full table-auto">
    <caption className="sr-only">{labels.project}</caption>
    <thead
      className={
        'border-b sticky top-0 border-slate-300/50 dark:border-slate-700/50 bg-stone-50/75 dark:bg-slate-900/75 backdrop-blur transition z-10 duration-500'
      }
    >
      <tr className="text-sm leading-normal">
        <HeaderCell>{labels.year}</HeaderCell>
        <HeaderCell>{labels.project}</HeaderCell>
        <HeaderCell className="hidden laptop:table-cell">
          {labels.madeAt}
        </HeaderCell>
        <HeaderCell className="hidden desktop:table-cell">
          {labels.builtWith}
        </HeaderCell>
        <HeaderCell className="hidden tablet:table-cell">
          {labels.link}
        </HeaderCell>
      </tr>
    </thead>
    <tbody className="text-sm font-light">
      {data.map(({ chips, year, projectName, href, org }) => (
        <tr
          key={projectName}
          className="border-b border-slate-300/50 dark:border-slate-700/50"
        >
          <Cell>{year}</Cell>
          <ProjectCell project={projectName} href={href} />
          <Cell className={'laptop:table-cell hidden'}>{org}</Cell>
          <Cell className={'desktop:table-cell hidden'}>
            <div className={'flex gap-1.5 max-w-[350px] flex-wrap'}>
              {chips.map((chip) => (
                <Chip key={chip}>{chip}</Chip>
              ))}
            </div>
          </Cell>
          <Cell className={'tablet:table-cell hidden'}>
            <ProjectLink href={href} />
          </Cell>
        </tr>
      ))}
    </tbody>
  </table>
)

const ProjectCell = ({ project, href }: { project: string; href?: string }) => (
  <>
    <td
      scope="row"
      className={'pr-5 py-3.5 text-left align-top hidden tablet:table-cell'}
    >
      <P14 className={'!text-slate-900 dark:!text-slate-50 !font-bold'}>
        {project}
      </P14>
    </td>
    <td className={'tablet:hidden pr-5 py-3.5 text-left align-top'}>
      <ProjectLink
        href={href}
        fallbackText={project}
        textClassName={'!text-[16px]'}
      />
    </td>
  </>
)

const ProjectLink = ({
  href,
  fallbackText,
  textClassName = '',
}: {
  href?: string
  fallbackText?: string
  textClassName?: string
}) => {
  if (href) {
    return (
      <a
        className={'group flex gap-2 p-1 w-fit'}
        href={href}
        target={'_blank'}
        rel="noreferrer"
      >
        <P14
          className={`transition duration-300 group-hover:!text-green-700 dark:group-hover:!text-teal-300 ${textClassName}`}
        >
          {href.replace(/^https?:\/\//, '')}
        </P14>
        <IconArrowUpRight
          aria-hidden
          className={
            'w-3 transform transition-all duration-300 top-0 right-0 fill-slate-900 dark:fill-slate-50 group-hover:fill-green-800 group-hover:scale-110 dark:group-hover:fill-teal-300 group-hover:translate-x-1 group-hover:-translate-y-1'
          }
        />
      </a>
    )
  }
  if (fallbackText) {
    return <P16 className={'text-left p-2'}>{fallbackText}</P16>
  }
  return null
}

const HeaderCell = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) => (
  <th className={`pr-5 py-3.5 text-left ${className}`}>
    <P14 className={'!text-slate-900 dark:!text-slate-50 !font-bold'}>
      {children}
    </P14>
  </th>
)

const Cell = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) => (
  <td className={`pr-5 py-3.5 text-left align-top ${className}`}>
    {typeof children === 'string' ? (
      <P14 className={'!font-medium'}>{children}</P14>
    ) : (
      children
    )}
  </td>
)
