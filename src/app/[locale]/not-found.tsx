import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/navigation'
import { ArrowLink } from '@/shared/ui/ArrowLink'
import { H1, P16 } from '@/shared/ui/Typography'

const NotFound = () => {
  const tNotFound = useTranslations('notFound')
  const tCommon = useTranslations('common')

  return (
    <main
      className={
        'container py-20 laptop:py-32 flex flex-col gap-6 items-start min-h-[60vh]'
      }
    >
      <H1>{tNotFound('title')}</H1>
      <P16 className={'max-w-[420px]'}>{tNotFound('description')}</P16>
      <Link href={'/'} className={'block w-fit'}>
        <ArrowLink direction={'back'}>{tCommon('backToPortfolio')}</ArrowLink>
      </Link>
    </main>
  )
}

export default NotFound
