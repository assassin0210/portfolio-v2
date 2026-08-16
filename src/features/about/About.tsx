import { useTranslations } from 'next-intl'
import { memo, ReactNode } from 'react'

import { AnimateFromSide } from '@/shared/animate/AnimateFromSide'
import { Button } from '@/shared/ui/button/Button'
import { SectionHeader } from '@/shared/ui/SectionHeader'
import { P16 } from '@/shared/ui/Typography'

const ExternalLink = memo(
  ({ href, children }: { href: string; children: ReactNode }) => (
    <a href={href} target={'_blank'} rel="noreferrer">
      <Button buttonType={'LINK'}>{children}</Button>
    </a>
  )
)

const renderAgency = (chunks: ReactNode) => (
  <ExternalLink href={'https://zoftify.com/'}>{chunks}</ExternalLink>
)
const renderHugeCorporation = (chunks: ReactNode) => (
  <ExternalLink href={'https://www.helium10.com/'}>{chunks}</ExternalLink>
)

export const About = memo(() => {
  const t = useTranslations('about')
  const tNav = useTranslations('nav')

  return (
    <div className={'relative'}>
      <AnimateFromSide type={'right'}>
        <SectionHeader>{tNav('about')}</SectionHeader>
        <div className={'space-y-3'}>
          <P16>
            {t.rich('bio', {
              agency: renderAgency,
              hugeCorporation: renderHugeCorporation,
            })}
          </P16>
          <P16>{t('ai')}</P16>
          <P16>{t('looking')}</P16>
        </div>
      </AnimateFromSide>
    </div>
  )
})
