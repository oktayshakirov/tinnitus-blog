const fs = require('fs');
const path = require('path');

/**
 * Real modification dates per URL. Stamping every entry with "now" on each
 * build teaches Google to ignore our lastmod, so read it from the source file.
 */
const contentLastmod = (urlPath) => {
  // /zen/videos and /zen/popular are listings, not MDX files; without this they
  // send the lookup after a content/zen/videos.mdx that does not exist.
  if (urlPath === '/zen/videos' || urlPath === '/zen/popular') return null;

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

    if (path.match(/\/blog\/page\/\d+$/) || path.match(/\/zen\/page\/\d+$/)) {
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
    } else if (path === '/app') {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path.startsWith('/blog')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/videos')) {
      // The video feed and the page per video. Like /zen/videos their main
      // content is video, which is what Google asks for before a video result
      // is on the table.
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path === '/zen/videos') {
      // The sound-therapy session listing - the one page here whose main
      // content is video, so it is the page worth submitting most eagerly.
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
    ],
    additionalSitemaps: ['https://www.tinnitushelp.me/sitemap.xml'],
  },
};

module.exports = config;
