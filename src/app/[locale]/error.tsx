'use client'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

import { Button } from '@/shared/ui/button/Button'
import { H1, P16 } from '@/shared/ui/Typography'

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  const tError = useTranslations('error')
  const tCommon = useTranslations('common')

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main
      className={
        'container py-20 laptop:py-32 flex flex-col gap-6 items-start min-h-[60vh]'
      }
    >
      <H1>{tError('title')}</H1>
      <P16 className={'max-w-[420px]'}>
        {error.message || tError('fallback')}
      </P16>
      <div className={'flex gap-3'}>
        <Button onClick={reset}>{tError('retry')}</Button>
        <a href={'/'}>
          <Button
            className={
              '!bg-transparent !text-green-700 dark:!text-teal-300 border border-green-700 dark:border-teal-300 hover:!shadow-none hover:opacity-80'
            }
          >
            {tCommon('backToPortfolio')}
          </Button>
        </a>
      </div>
    </main>
  )
}

export default ErrorPage
