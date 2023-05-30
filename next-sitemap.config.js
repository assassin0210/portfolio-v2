/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.alexsokol.dev',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  exclude: [],
  robotsTxtOptions: {
    additionalSitemaps: [`https://www.alexsokol.dev/server-sitemap.xml`],
  },
}
config.robotsTxtOptions.policies = [{ userAgent: '*', allow: '/' }]

module.exports = config
