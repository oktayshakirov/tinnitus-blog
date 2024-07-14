const config = {
  siteUrl: 'https://www.tinnitushelp.me/',
  generateRobotsTxt: true,
  generateIndexSitemap: false, 
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      }
    ],
    additionalSitemaps: [
      'https://www.tinnitushelp.me/sitemap.xml', 
    ],
  },
};

module.exports = config;
