/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    emotion: true,
  },
  reactStrictMode: true,
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
