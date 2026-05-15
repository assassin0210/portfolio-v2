import { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => ({
  name: 'Alexandr Sokolov — Frontend Engineer',
  short_name: 'Alexandr Sokolov',
  description:
    'Frontend Engineer with 7+ years shipping React and Next.js production apps.',
  start_url: '/',
  display: 'standalone',
  background_color: '#0f172a',
  theme_color: '#00c976',
  icons: [
    { src: '/icon', sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: '/icon2', sizes: '512x512', type: 'image/png', purpose: 'any' },
    {
      src: '/apple-icon',
      sizes: '180x180',
      type: 'image/png',
      purpose: 'any',
    },
  ],
})

export default manifest
