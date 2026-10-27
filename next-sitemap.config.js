const fs = require('fs');
const path = require('path');

/**
 * Real modification dates per URL. Stamping every entry with "now" on each
 * build teaches Google to ignore our lastmod, so read it from the source file.
 */
const contentLastmod = (urlPath) => {
  // /zen/popular is a listing, not an MDX file; without this the lookup goes
  // after a content/zen/popular.mdx that does not exist.
  if (urlPath === '/zen/popular') return null;

  const match = urlPath.match(/^\/(blog|zen)\/([^/]+)$/);
  if (!match) return null;

  const [, section, slug] = match;
  const dir = section === 'zen' ? 'zen' : 'posts';
  const filePath = path.join(process.cwd(), 'content', dir, `${slug}.mdx`);

  try {
    return fs.statSync(filePath).mtime.toISOString();
  } catch {
    return null;
  }
};

const BLOCKED_CRAWLERS = [
  'GPTBot',
  'ClaudeBot',
  'CCBot',
  'Bytespider',
  'meta-externalagent',
  'Amazonbot',
  'ImageSiftBot',
  'SemrushBot',
  'MJ12bot',
  'DotBot',
  'DataForSeoBot',
  'Barkrowler',
  'BLEXBot',
  'serpstatbot',
];

const config = {
  siteUrl: 'https://www.tinnitushelp.me/',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';

    // Exclude tag pages
    if (path.startsWith('/tags')) {
      return null;
    }

    if (path.match(/\/(blog|zen|videos)(\/popular|\/sessions)?\/page\/\d+$/)) {
      return null;
    }

    // The Impressum carries the operator's postal address. It stays linked and
    // crawlable as section 5 DDG requires, but is noindex and not submitted.
    if (path === '/impressum') {
      return null;
    }

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (
      [
        '/about',
        '/contact',
        '/faq',
        '/privacy',
        '/terms',
        '/disclaimer',
      ].includes(path)
    ) {
      // Legal pages carry no search value and were pulling crawl attention
      // away from articles; keep them indexable but clearly deprioritised.
      priority = ['/privacy', '/terms', '/disclaimer'].includes(path)
        ? 0.2
        : 0.6;
      changefreq = 'monthly';
    } else if (path === '/app' || path === '/audiobook') {
      // The two product pages. Both are landing pages people are sent to from
      // outside the site, so they rank above articles.
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path.startsWith('/blog')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/videos')) {
      // The video feed and the page per video: the only pages here whose main
      // content is video, which is what Google asks for before a video result
      // is on the table.
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/zen')) {
      priority = 0.7;
      changefreq = 'monthly';
    } else if (path.startsWith('/authors')) {
      priority = 0.4;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: contentLastmod(path) ?? new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        // Nothing is disallowed. Tag pages are linked from every article, and
        // blocking them turned ~780 internal links into dead ends that no
        // crawler could follow through to the posts. They carry a noindex
        // instead, which keeps them out of the index while letting crawlers
        // read the links on them. Parameterised URLs like /app?ref=producthunt
        // are likewise left crawlable so Google can see their canonical and
        // fold them into /app.
        disallow: [],
      },
      // Crawlers that take the content and send no visitors back: AI training
      // scrapers and SEO-tool indexes. Every page they fetch is an ISR read on
      // Vercel. Search engines and the AI *search* bots (OAI-SearchBot,
      // ChatGPT-User, PerplexityBot, Claude-SearchBot) stay allowed because they
      // cite and link. AhrefsBot stays allowed for our own Ahrefs reports. A
      // Vercel firewall rule matches the same list for bots that ignore this.
      ...BLOCKED_CRAWLERS.map((userAgent) => ({ userAgent, disallow: '/' })),
    ],
    additionalSitemaps: ['https://www.tinnitushelp.me/sitemap.xml'],
  },
};

module.exports = config;
