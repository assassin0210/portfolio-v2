import { ImageResponse } from 'next/og'
import { getTranslations } from 'next-intl/server'

import { routing } from '@/i18n/routing'

export const runtime = 'nodejs'
export const alt = 'Alexandr Sokolov — Frontend Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export const generateStaticParams = () =>
  routing.locales.map((locale) => ({ locale }))

const Image = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'header' })
  const tMeta = await getTranslations({ locale, namespace: 'metadata' })

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
        background:
          'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f766e 100%)',
        color: '#f1f5f9',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div
          style={{
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: '#00c976',
          }}
        />
        <div
          style={{
            fontSize: '22px',
            color: '#5eead4',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          {t('availability')}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div
          style={{
            fontSize: '96px',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
          }}
        >
          {t('name')}
        </div>
        <div style={{ fontSize: '40px', color: '#5eead4', fontWeight: 600 }}>
          {t('role')}
        </div>
        <div
          style={{
            fontSize: '26px',
            color: '#cbd5e1',
            maxWidth: '900px',
            lineHeight: 1.4,
          }}
        >
          {tMeta('description')}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#94a3b8',
          fontSize: '24px',
        }}
      >
        <div>alexsokol.dev</div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <span>React</span>
          <span style={{ color: '#475569' }}>·</span>
          <span>Next.js</span>
          <span style={{ color: '#475569' }}>·</span>
          <span>TypeScript</span>
        </div>
      </div>
    </div>,
    size
  )
}

export default Image
