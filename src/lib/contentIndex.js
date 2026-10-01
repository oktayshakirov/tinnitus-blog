// Single definition of what content this site publishes, where each section
// lives on disk, which Firestore collection it feeds, and the URL its pages are
// served from.
//
// Three consumers share it, and they must never disagree:
//   - scripts/generateContentIndex.js -> public/content-index.json, the feed the
//     app polls to discover new content
//   - scripts/syncContent.js          -> writes those entries into Firestore
//   - the URL a push notification links to (mirrored in the app's
//     functions/src/index.ts)
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const SITE_URL = 'https://www.tinnitushelp.me';

const SECTIONS = [
  { dir: 'content/posts', collection: 'posts', urlPath: '/blog' },
  { dir: 'content/zen', collection: 'sounds', urlPath: '/zen' },
];

function parsePublishedAt(value) {
  if (!value) return null;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
}

/**
 * Reads one section's published content.
 *
 * `root` is the repository root, so this works both from a script run at the
 * repo root and from a build step.
 */
function readSection(root, section) {
  const directory = path.join(root, section.dir);

  if (!fs.existsSync(directory)) {
    console.warn(`Skipping missing directory ${directory}`);
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => /\.mdx?$/.test(file))
    // Section index files such as _index.mdx are not real content.
    .filter((file) => !file.startsWith('_'))
    .map((file) => {
      const { data } = matter(
        fs.readFileSync(path.join(directory, file), 'utf8')
      );

      const title = data && (data.title || data.name);

      if (!title) {
        console.warn(`No title found in ${file}`);
        return null;
      }

      if (data.draft === true) {
        return null;
      }

      const slug = file.replace(/\.mdx?$/, '');
      const publishedAt = parsePublishedAt(data.date);

      return {
        type: section.collection,
        slug,
        title,
        url: `${SITE_URL}${section.urlPath}/${slug}`,
        date: publishedAt ? publishedAt.toISOString() : null,
      };
    })
    .filter(Boolean);
}

/**
 * Videos, which are not MDX and so cannot come through `readSection`.
 *
 * They live in src/data/videos.json because the id, uploadDate and duration
 * only exist once a video is uploaded. Only long form is listed: those are the
 * ones with a page at /videos/<slug> for a notification to open. Sound sessions
 * are a tab on /videos rather than pages of their own, so they are left out.
 */
function readVideos(root) {
  const file = path.join(root, 'src/data/videos.json');

  if (!fs.existsSync(file)) {
    console.warn(`Skipping missing ${file}`);
    return [];
  }

  const { videos = [] } = JSON.parse(fs.readFileSync(file, 'utf8'));

  return videos
    .filter((video) => video.kind === 'long' && video.slug && video.title)
    .map((video) => {
      const publishedAt = parsePublishedAt(video.uploadDate);
      return {
        type: 'videos',
        slug: video.slug,
        title: video.title,
        url: `${SITE_URL}/videos/${video.slug}`,
        date: publishedAt ? publishedAt.toISOString() : null,
      };
    });
}

/** Every published item across every section. */
function collectContent(root) {
  return [
    ...SECTIONS.flatMap((section) => readSection(root, section)),
    ...readVideos(root),
  ];
}

/** Every file whose bytes decide what the site publishes, repo-relative. */
function contentSourceFiles(root) {
  const files = [];

  for (const section of SECTIONS) {
    const directory = path.join(root, section.dir);
    if (!fs.existsSync(directory)) continue;
    for (const file of fs.readdirSync(directory)) {
      if (/\.mdx?$/.test(file)) files.push(`${section.dir}/${file}`);
    }
  }

  if (fs.existsSync(path.join(root, 'src/data/videos.json'))) {
    files.push('src/data/videos.json');
  }

  return files.sort();
}

/**
 * A fingerprint of the content in this checkout.
 *
 * scripts/waitForDeploy.js uses this to tell whether production is serving
 * THIS commit's content. The slug list alone cannot: editing an existing post
 * adds no slug, so the previous deployment already satisfied the old check and
 * the wait returned instantly against stale content.
 *
 * Hashed over raw file bytes keyed by repo-relative path, so it is identical
 * in any checkout of the same commit. Deliberately not the git SHA: this file
 * is committed, and a build cannot know the SHA of the commit containing it.
 */
function contentRev(root) {
  const hash = crypto.createHash('sha256');

  for (const relative of contentSourceFiles(root)) {
    // The path is hashed too, so a rename changes the rev even when the bytes
    // do not. NUL separators keep path and body unambiguous.
    hash.update(relative);
    hash.update('\0');
    hash.update(fs.readFileSync(path.join(root, relative)));
    hash.update('\0');
  }

  return hash.digest('hex').slice(0, 16);
}

module.exports = {
  SITE_URL,
  SECTIONS,
  collectContent,
  contentRev,
  contentSourceFiles,
  parsePublishedAt,
};
