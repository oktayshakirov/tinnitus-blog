// Emits public/content-index.json: the machine-readable list of everything this
// site publishes.
//
// The mobile app polls this file to discover new content and fire its "New
// Post" push notifications. Generating it as part of the build is what makes
// that safe: the file only becomes visible once the deployment carrying it is
// live, so anything the app can see in the feed is, by construction, a page it
// can also open. Nothing here talks to Firestore.
const fs = require('fs');
const path = require('path');
const { collectContent } = require('../src/lib/contentIndex');

const root = path.join(__dirname, '..');
const outputPath = path.join(root, 'public/content-index.json');

const items = collectContent(root).sort((a, b) => {
  if (a.type !== b.type) return a.type.localeCompare(b.type);
  return a.slug.localeCompare(b.slug);
});

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(
  outputPath,
  `${JSON.stringify({ version: 1, items }, null, 2)}\n`
);

console.log(`Wrote ${items.length} items to public/content-index.json`);
