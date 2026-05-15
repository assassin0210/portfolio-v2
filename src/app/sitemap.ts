import { MetadataRoute } from 'next'

const SITE_URL = 'https://www.alexsokol.dev'

const ROUTES = [
  { path: '', priority: 1.0 },
  { path: '/archive', priority: 0.7 },
] as const

const sitemap = (): MetadataRoute.Sitemap => {
  const lastModified = new Date()
  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path || '/'}`,
    lastModified,
    changeFrequency: 'weekly',
    priority,
    alternates: {
      languages: {
        en: `${SITE_URL}${path || '/'}`,
        ru: `${SITE_URL}/ru${path}`,
        'x-default': `${SITE_URL}${path || '/'}`,
      },
    },
  }))
}

export default sitemap
