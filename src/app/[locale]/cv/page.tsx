import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { memo, ReactNode } from 'react'

import { PrintButton } from '@/app/[locale]/cv/PrintButton'
import { experienceData } from '@/features/experience/data'
import { Link } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { isStringArray } from '@/shared/helpers/isStringArray'

const SKILL_GROUPS = [
  'frameworks',
  'state',
  'ui',
  'testing',
  'tooling',
  'backend',
  'ai',
  'architecture',
  'integrations',
] as const

export const generateStaticParams = () =>
  routing.locales.map((locale) => ({ locale }))

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> => {
  const { locale } = await params
  const tMeta = await getTranslations({ locale, namespace: 'metadata' })
  return {
    title: `CV — ${tMeta('siteName')}`,
    robots: { index: false, follow: false },
  }
}

const ExternalLink = memo(
  ({ href, label }: { href: string; label: string }) => (
    <a href={href} target={'_blank'} rel={'noreferrer'}>
      {label}
    </a>
  )
)

const CvSection = memo(
  ({ title, children }: { title: string; children: ReactNode }) => (
    <section className={'cv-section'}>
      <h2 className={'cv-section-title'}>{title}</h2>
      {children}
    </section>
  )
)

interface IPageProps {
  params: Promise<{ locale: string }>
}

const CvPage = async ({ params }: IPageProps) => {
  const { locale } = await params
  setRequestLocale(locale)

  const t = await getTranslations()

  return (
    <div className={'cv-screen min-h-screen bg-stone-100 dark:bg-slate-900'}>
      <div
        className={
          'cv-toolbar print:hidden flex items-center justify-between gap-4 max-w-[860px] mx-auto px-6 py-4'
        }
      >
        <Link
          href={'/'}
          className={
            'text-sm text-green-700 dark:text-teal-300 hover:underline'
          }
        >
          ← {t('cv.actions.backToPortfolio')}
        </Link>
        <PrintButton label={t('cv.actions.print')} />
      </div>

      <article className={'cv-document'}>
        <header className={'cv-header'}>
          <h1 className={'cv-name'}>{t('header.name')}</h1>
          <p className={'cv-role'}>{t('header.role')}</p>
          <div className={'cv-contact-grid'}>
            <span>{t('cv.contact.location')}</span>
            <span>{t('cv.contact.languages')}</span>
            <a href={`mailto:${t('cv.contact.email')}`}>
              {t('cv.contact.email')}
            </a>
            <a href={`tel:${t('cv.contact.phone').replace(/[\s-]/g, '')}`}>
              {t('cv.contact.phone')}
            </a>
            <ExternalLink
              href={`https://${t('cv.contact.portfolio')}`}
              label={t('cv.contact.portfolio')}
            />
            <ExternalLink
              href={`https://${t('cv.contact.github')}`}
              label={t('cv.contact.github')}
            />
            <ExternalLink
              href={`https://${t('cv.contact.telegram')}`}
              label={t('cv.contact.telegram')}
            />
          </div>
        </header>

        <CvSection title={t('cv.sections.summary')}>
          <p className={'cv-summary'}>{t('cv.summary')}</p>
        </CvSection>

        <CvSection title={t('cv.sections.experience')}>
          {experienceData.map(({ key, organization }) => {
            const date = t(`experience.items.${key}.date`)
            const position = t(`experience.items.${key}.position`)
            const rawDescription = t.raw(`experience.items.${key}.description`)
            const description = isStringArray(rawDescription)
              ? rawDescription
              : []

            return (
              <div key={key} className={'cv-experience-item'}>
                <div className={'cv-experience-head'}>
                  <div className={'cv-experience-title'}>
                    <strong>{organization}</strong>
                    <span className={'cv-position'}>{position}</span>
                  </div>
                  {date ? (
                    <span className={'cv-experience-date'}>{date}</span>
                  ) : null}
                </div>
                <ul className={'cv-bullets'}>
                  {description.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </CvSection>

        <CvSection title={t('cv.sections.skills')}>
          <dl className={'cv-skills'}>
            {SKILL_GROUPS.map((group) => (
              <div key={group} className={'cv-skill-row'}>
                <dt>{t(`cv.skillsGroups.${group}.label`)}</dt>
                <dd>{t(`cv.skillsGroups.${group}.value`)}</dd>
              </div>
            ))}
          </dl>
        </CvSection>
      </article>
    </div>
  )
}

export default CvPage
