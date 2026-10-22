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
      // The sound sessions used to have their own listing here. They live at
      // /videos/sessions now, so the old URL - indexed, and linked from the
      // app - lands there rather than 404ing.
      {
        source: '/zen/videos',
        destination: '/videos/sessions',
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
      // No rule for /_next/static: Next.js already serves it immutable in
      // production. Adding one here also applies it in dev, where Turbopack
      // keeps chunk names stable across edits, so the browser keeps running a
      // year-cached old chunk and every edit shows up as a hydration mismatch.
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
    // Every entry here multiplies the number of optimized variants Vercel
    // generates per source image (billed as "Image Optimization -
    // Transformations"). The content column tops out around 800px, so a
    // handful of steps up to a retina desktop hero is enough - trimmed from
    // nine to five in 2026-09 to keep the shared Vercel team under the Hobby
    // transformation cap.
    deviceSizes: [400, 640, 828, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96],
    // WebP only. AVIF shaves ~10% more off the bytes but doubles the
    // transformation count, which is the metric we are actually near.
    formats: ['image/webp'],
    // Source images under /images/* are served immutable, so there is no
    // reason to let optimized variants fall out of cache and be regenerated.
    minimumCacheTTL: 2678400, // 31 days
    domains: ['www.tinnitushelp.me'],
  },
};

module.exports = nextConfig;
