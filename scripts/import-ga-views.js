/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Paths
const CSV_PATH = path.join(
  __dirname,
  '..',
  'Pages_and_screens_Page_title_and_screen_class.csv'
);
const POSTS_PATH = path.join(__dirname, '..', 'content', 'posts');
const ZEN_PATH = path.join(__dirname, '..', 'content', 'zen');
const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'initial-views.json');

// Read and parse CSV
function parseCSV() {
  const csvContent = fs.readFileSync(CSV_PATH, 'utf-8');
  const lines = csvContent.split('\n');
  const viewsMap = {};

  // Skip header line (line 10) and process data
  for (let i = 10; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Parse CSV line (handling quoted fields)
    const matches = line.match(/^"?(.+?)"?\s*,\s*(\d+)/);
    if (!matches) continue;

    const pageTitle = matches[1].trim();
    const views = parseInt(matches[2], 10);

    // Remove " | Tinnitus Help" suffix and variations
    let cleanTitle = pageTitle
      .replace(/\s*\|\s*Tinnitus Help\s*$/i, '')
      .replace(/\s*\|\s*TinnitusHelp\.me\s*$/i, '')
      .replace(/\s*\|\s*Blog\s*$/i, '')
      .trim();

    // Skip non-article pages
    if (
      cleanTitle.includes('404') ||
      cleanTitle.includes('(not set)') ||
      cleanTitle.includes('Tags') ||
      cleanTitle.includes('About Us') ||
      cleanTitle.includes('Contact Us') ||
      cleanTitle.includes('Privacy Policy') ||
      cleanTitle.includes('Terms and Conditions') ||
      cleanTitle.includes('Medical Disclaimer') ||
      cleanTitle.includes('FAQ') ||
      cleanTitle.includes('App') ||
      cleanTitle.includes('TinnitusHelp.me') ||
      cleanTitle.startsWith('Articles tagged with:') ||
      cleanTitle.includes('Tinnitus Help | TinnitusHelp.me')
    ) {
      continue;
    }

    // Store views by title (handle duplicates by summing)
    if (viewsMap[cleanTitle]) {
      viewsMap[cleanTitle] += views;
    } else {
      viewsMap[cleanTitle] = views;
    }
  }

  return viewsMap;
}

// Get all posts/zen with their titles
function getArticles(type) {
  const directory = type === 'blog' ? POSTS_PATH : ZEN_PATH;
  const files = fs.readdirSync(directory);
  const articles = {};

  files.forEach((file) => {
    if (!file.endsWith('.mdx')) return;

    const filePath = path.join(directory, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    const slug = file.replace('.mdx', '');

    if (data.title) {
      articles[data.title.trim()] = {
        slug,
        type,
      };
    }
  });

  return articles;
}

// Main function
function main() {
  console.log('Parsing Google Analytics CSV...');
  const viewsMap = parseCSV();

  console.log('Reading blog and zen articles...');
  const blogArticles = getArticles('blog');
  const zenArticles = getArticles('zen');
  const allArticles = { ...blogArticles, ...zenArticles };

  console.log('Matching titles and creating views data...');
  const viewsData = {};

  // Match CSV titles with article titles
  Object.entries(viewsMap).forEach(([title, views]) => {
    // Try exact match first
    if (allArticles[title]) {
      const { slug, type } = allArticles[title];
      const key = `${type}_${slug}`;
      // Sum if already exists (handle duplicates)
      viewsData[key] = (viewsData[key] || 0) + views;
      console.log(`Matched: "${title}" -> ${key}: ${views} views`);
      return;
    }

    // Try case-insensitive match
    const matchedKey = Object.keys(allArticles).find(
      (articleTitle) => articleTitle.toLowerCase() === title.toLowerCase()
    );
    if (matchedKey) {
      const { slug, type } = allArticles[matchedKey];
      const key = `${type}_${slug}`;
      viewsData[key] = (viewsData[key] || 0) + views;
      console.log(
        `Matched (case-insensitive): "${title}" -> ${key}: ${views} views`
      );
      return;
    }

    // Try partial match (title contains article title or vice versa)
    const partialMatch = Object.keys(allArticles).find(
      (articleTitle) =>
        title.toLowerCase().includes(articleTitle.toLowerCase()) ||
        articleTitle.toLowerCase().includes(title.toLowerCase())
    );
    if (partialMatch && title.length > 10 && partialMatch.length > 10) {
      const { slug, type } = allArticles[partialMatch];
      const key = `${type}_${slug}`;
      viewsData[key] = (viewsData[key] || 0) + views;
      console.log(`Matched (partial): "${title}" -> ${key}: ${views} views`);
      return;
    }

    // Special handling for home page
    if (
      title.includes('Ultimate Guide to Tinnitus Relief') ||
      title === 'Tinnitus Help' ||
      title === 'TinnitusHelp.me'
    ) {
      // Skip home page - it's not a blog/zen post
      console.log(`ℹ️  Skipped home page: "${title}" (${views} views)`);
      return;
    }

    // Log unmatched titles for manual review
    if (views > 5) {
      // Only log if significant views
      console.log(`⚠️  Unmatched: "${title}" (${views} views)`);
    }
  });

  // Write output
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(viewsData, null, 2), 'utf-8');
  console.log(`\n✅ Created ${Object.keys(viewsData).length} view entries`);
  console.log(`📁 Output saved to: ${OUTPUT_PATH}`);
  console.log(
    `\nTotal views: ${Object.values(viewsData).reduce((a, b) => a + b, 0)}`
  );
}

main();
