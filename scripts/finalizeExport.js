// Last build step: turns `next build`'s out/ into what Cloudflare serves.
//
//  1. Copies the sitemap and robots.txt that next-sitemap / fix-robots just
//     rewrote in public/ (next build copied public/ into out/ before they ran).
//  2. Renders the WebP variants src/lib/imageLoader.js points next/image at:
//     one per source image per configured width, under out/_img/. Results are
//     cached by content hash in .image-cache/ so rebuilds only render new or
//     changed images.
//  3. Writes the home-screen widget feed (out/api/widget-sounds.json, served
//     at /api/widget-sounds by worker/index.js) with a plain 400px JPEG
//     thumbnail per sound. JPEG, not WebP, so every iOS version the widget
//     runs on can decode it.
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const sharp = require('sharp');
const nextConfig = require('../next.config.js');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'out');
const CACHE = path.join(ROOT, '.image-cache');
const SITE = 'https://www.tinnitushelp.me';
const RASTER = /\.(jpe?g|png|webp)$/i;
const WIDTHS = [
  ...new Set([
    ...nextConfig.images.imageSizes,
    ...nextConfig.images.deviceSizes,
  ]),
].sort((a, b) => a - b);
const WEBP_QUALITY = 75;
const CONCURRENCY = 8;

function imageVariantPath(sourcePath, width) {
  // Must match src/lib/imageLoader.js.
  return `/_img${sourcePath.replace(RASTER, '')}-${width}.webp`;
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

async function mapLimit(items, limit, fn) {
  let next = 0;
  const workers = Array.from({ length: limit }, async () => {
    while (next < items.length) {
      const item = items[next++];
      await fn(item);
    }
  });
  await Promise.all(workers);
}

function copyFromPublic(file) {
  const from = path.join(ROOT, 'public', file);
  if (!fs.existsSync(from)) throw new Error(`public/${file} is missing`);
  fs.copyFileSync(from, path.join(OUT, file));
}

async function renderCached(input, hash, key, render) {
  const cached = path.join(CACHE, `${hash}-${key}`);
  if (!fs.existsSync(cached)) {
    const tmp = `${cached}.${process.pid}.tmp`;
    await render(sharp(input, { failOn: 'none' })).toFile(tmp);
    fs.renameSync(tmp, cached);
  }
  return cached;
}

async function renderVariants() {
  // Every raster file in the export except Next's own fingerprinted assets.
  const sources = walk(OUT)
    .filter((file) => RASTER.test(file))
    .map((file) => '/' + path.relative(OUT, file).split(path.sep).join('/'))
    .filter((p) => !p.startsWith('/_next/') && !p.startsWith('/_img/'));

  let rendered = 0;
  await mapLimit(sources, CONCURRENCY, async (sourcePath) => {
    const input = fs.readFileSync(path.join(OUT, sourcePath));
    const hash = crypto.createHash('sha1').update(input).digest('hex');

    for (const width of WIDTHS) {
      const before = fs.existsSync(path.join(CACHE, `${hash}-${width}.webp`));
      const cached = await renderCached(input, hash, `${width}.webp`, (img) =>
        img
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: WEBP_QUALITY })
      );
      if (!before) rendered += 1;

      const target = path.join(OUT, imageVariantPath(sourcePath, width));
      fs.mkdirSync(path.dirname(target), { recursive: true });
      fs.copyFileSync(cached, target);
    }
  });

  console.log(
    `finalizeExport: ${sources.length} images x ${WIDTHS.length} widths ` +
      `(${rendered} rendered, the rest from .image-cache)`
  );
}

async function writeWidgetFeed() {
  const dir = path.join(ROOT, 'content', 'zen');
  const sounds = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx') && !file.startsWith('_'))
    .map((file) => {
      const { data } = matter(fs.readFileSync(path.join(dir, file), 'utf8'));
      return { slug: file.replace(/\.mdx$/, ''), data };
    })
    .filter(({ data }) => data.image && data.draft !== true)
    // Newest first, as getAllZen() orders them for the site.
    .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

  const items = [];
  for (const { slug, data } of sounds) {
    const source = path.join(
      OUT,
      data.image.startsWith(SITE) ? data.image.slice(SITE.length) : data.image
    );
    if (!fs.existsSync(source)) {
      throw new Error(`widget feed: ${slug} image ${data.image} is missing`);
    }
    const input = fs.readFileSync(source);
    const hash = crypto.createHash('sha1').update(input).digest('hex');
    const cached = await renderCached(input, hash, 'widget.jpg', (img) =>
      img
        .resize({ width: 400, withoutEnlargement: true })
        .flatten({ background: '#ffffff' })
        .jpeg({ quality: 75, mozjpeg: true })
    );
    const thumbPath = `/_img/widget/${slug}.jpg`;
    fs.mkdirSync(path.join(OUT, '_img', 'widget'), { recursive: true });
    fs.copyFileSync(cached, path.join(OUT, thumbPath));

    items.push({
      slug,
      title: data.title ?? slug,
      thumbnail: `${SITE}${thumbPath}`,
    });
  }

  fs.mkdirSync(path.join(OUT, 'api'), { recursive: true });
  fs.writeFileSync(
    path.join(OUT, 'api', 'widget-sounds.json'),
    JSON.stringify({ sounds: items, updatedAt: Date.now() })
  );
  console.log(`finalizeExport: widget feed with ${items.length} sounds`);
}

async function main() {
  if (!fs.existsSync(path.join(OUT, 'index.html'))) {
    throw new Error('out/index.html is missing - run next build first');
  }
  fs.mkdirSync(CACHE, { recursive: true });

  copyFromPublic('sitemap.xml');
  copyFromPublic('robots.txt');
  await renderVariants();
  await writeWidgetFeed();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
