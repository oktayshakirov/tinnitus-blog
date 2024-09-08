const config = {
  siteUrl: 'https://www.tinnitushelp.me/',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'daily';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (
      ['/about', '/contact', '/faq', '/privacy', '/terms'].includes(path)
    ) {
      priority = 0.6;
      changefreq = 'monthly';
    } else if (path.startsWith('/blog')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/zen')) {
      priority = 0.6;
      changefreq = 'weekly';
    } else if (path.startsWith('/tags')) {
      priority = 0.5;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: ['https://www.tinnitushelp.me/sitemap.xml'],
  },
};

module.exports = config;
