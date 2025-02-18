const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const axios = require('axios');

const cachePath = path.join(__dirname, 'cache.json');

let cache = { posts: [], sounds: [] };
if (fs.existsSync(cachePath)) {
  try {
    const raw = fs.readFileSync(cachePath, 'utf8');
    cache = JSON.parse(raw);
  } catch (error) {
    console.error('Error reading cache file:', error);
  }
}

async function processFiles(directory, type) {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    if (data && data.title) {
      if (cache[type].includes(data.title)) {
        console.log(`Skipping already processed "${data.title}"`);
        continue;
      }
      try {
        await axios.post('http://tinnitushelp.me/api/triggerPushNotification', {
          type,
          title: data.title,
          docId: data.title,
        });
        console.log(`Successfully added "${data.title}"`);
        cache[type].push(data.title);
      } catch (error) {
        console.error(`Error adding "${data.title}":`, error.message);
      }
    } else {
      console.warn(`No title found in ${file}`);
    }
  }
}

async function run() {
  try {
    await processFiles(path.join(__dirname, '../../content/posts'), 'posts');
    await processFiles(path.join(__dirname, '../../content/zen'), 'sounds');
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2), 'utf8');
  } catch (error) {
    console.error('Error processing content:', error);
  }
}

run();
