/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  reactStrictMode: true,
  async redirects() {
    return [
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
