import { MetadataRoute } from 'next'

const SITE_URL = 'https://www.alexsokol.dev'

const robots = (): MetadataRoute.Robots => ({
  rules: [{ userAgent: '*', allow: '/' }],
  sitemap: `${SITE_URL}/sitemap.xml`,
  host: SITE_URL,
})

export default robots
