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
const { collectContent, contentRev } = require('../src/lib/contentIndex');

const root = path.join(__dirname, '..');
const outputPath = path.join(root, 'public/content-index.json');

const items = collectContent(root).sort((a, b) => {
  if (a.type !== b.type) return a.type.localeCompare(b.type);
  return a.slug.localeCompare(b.slug);
});

// contentRev fingerprints the content files this build was made from, so
// scripts/waitForDeploy.js can tell whether production is serving THIS
// commit rather than merely a deployment with the same slugs. It is an
// additive field and `items` is unchanged, so version stays 1: the mobile
// app reads `items` and ignores anything it does not know.
const rev = contentRev(root);

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(
  outputPath,
  `${JSON.stringify({ version: 1, contentRev: rev, items }, null, 2)}\n`
);

console.log(
  `Wrote ${items.length} items to public/content-index.json (contentRev ${rev})`
);
