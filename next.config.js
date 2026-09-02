/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      // Renamed 2026-09: the post's slug now matches its primary query
      // ("best tinnitus apps") instead of "apps that help tinnitus". The old
      // URL was indexed and linked from other posts, so 301 it rather than 404.
      {
        source: '/blog/apps-that-help-tinnitus',
        destination: '/blog/best-tinnitus-apps',
        permanent: true,
      },
      // The sound sessions used to have their own listing. They are a tab on
      // /videos now, so the old URL - indexed, and linked from the app - lands
      // there rather than 404ing. It opens on the explainers; the sessions are
      // one tap away and this page is statically generated, so there is no
      // honest way to preselect a tab from a query string.
      {
        source: '/zen/videos',
        destination: '/videos',
        permanent: true,
      },
      // Legacy pagination pattern. Google has /blog?page=N indexed alongside
      // /blog/page/N; collapse it onto the one canonical pattern. Page 1 is
      // built too (canonicalling back to /blog) so ?page=1 has a target.
      {
        source: '/blog',
        has: [{ type: 'query', key: 'page', value: '(?<page>\\d+)' }],
        destination: '/blog/page/:page',
        permanent: true,
      },
      {
        source: '/zen',
        has: [{ type: 'query', key: 'page', value: '(?<page>\\d+)' }],
        destination: '/zen/page/:page',
        permanent: true,
      },
      // The popular listings were briefly paginated, and those URLs made it
      // into the sitemap. Fold them back onto the single ranked page.
      {
        source: '/blog/popular/page/:page',
        destination: '/blog/popular',
        permanent: true,
      },
      {
        source: '/zen/popular/page/:page',
        destination: '/zen/popular',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  images: {
    deviceSizes: [332, 400, 450, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96],
    formats: ['image/webp', 'image/avif'],
    domains: ['www.tinnitushelp.me'],
  },
};

module.exports = nextConfig;
