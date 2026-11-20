/** @type {import('next').NextConfig} */
const nextConfig = {
  // The whole site is prerendered (every getStaticPaths uses fallback: false),
  // so it ships as plain files in out/ and Cloudflare serves them as static
  // assets - free and unmetered, unlike Vercel's ISR reads. The two dynamic
  // endpoints (view counter, widget feed) live in worker/index.js.
  //
  // Static export ignores redirects() and headers(), so they live in
  // public/_redirects and public/_headers (plus the two query-string redirects
  // in the Worker, which _redirects cannot match). Add new 301s there.
  output: 'export',
  compiler: {
    emotion: true,
  },
  reactStrictMode: true,
  images: {
    // No image optimizer at request time. The loader points next/image at
    // WebP variants that scripts/finalizeExport.js renders once per build
    // into out/_img/. Every width listed here gets a variant for every source
    // image, so keep the lists short.
    loader: 'custom',
    loaderFile: './src/lib/imageLoader.js',
    deviceSizes: [400, 640, 828, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96],
  },
};

module.exports = nextConfig;
