/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://alexsokol.vercel.app/',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  exclude: [],
  robotsTxtOptions: {
    additionalSitemaps: [`https://alexsokol.vercel.app/server-sitemap.xml`],
  },
}
config.robotsTxtOptions.policies = [{ userAgent: '*', allow: '/' }]

module.exports = config
