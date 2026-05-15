import { ImageResponse } from 'next/og'

export const size = { width: 192, height: 192 }
export const contentType = 'image/png'

const Icon = () =>
  new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #00c976 0%, #0f766e 100%)',
        color: '#0f172a',
        fontSize: 96,
        fontWeight: 800,
        letterSpacing: '-0.05em',
        fontFamily: 'sans-serif',
      }}
    >
      AS
    </div>,
    size
  )

export default Icon
