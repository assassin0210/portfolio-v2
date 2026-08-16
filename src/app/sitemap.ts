import { MetadataRoute } from 'next'

const SITE_URL = 'https://www.alexsokol.dev'

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: `${SITE_URL}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
    alternates: {
      languages: {
        en: `${SITE_URL}/`,
        ru: `${SITE_URL}/ru`,
        'x-default': `${SITE_URL}/`,
      },
    },
  },
]

export default sitemap
