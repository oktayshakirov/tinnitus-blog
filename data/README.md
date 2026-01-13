# Initial Views Data

This directory contains the initial view counts imported from Google Analytics before deploying the ViewsCounter component.

## Files

- `initial-views.json` - JSON file containing view counts mapped to `type_slug` format (e.g., `blog_airpods-and-tinnitus`, `zen_white-noise`)

## Usage

### 1. Generate initial views data from Google Analytics CSV

```bash
node scripts/import-ga-views.js
```

This script:
- Parses the Google Analytics CSV export
- Matches page titles with blog/zen post titles
- Creates `data/initial-views.json` with view counts

### 2. Import views to Firebase

Before running this, make sure your Firebase environment variables are set:
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

```bash
node scripts/import-views-to-firebase.js
```

This script:
- Reads `data/initial-views.json`
- Imports all view counts to Firebase Firestore `views` collection
- Sets up documents with the format: `{ count, type, slug, lastUpdated }`

## Data Format

The `initial-views.json` file uses the following format:

```json
{
  "blog_airpods-and-tinnitus": 90,
  "zen_white-noise": 29,
  ...
}
```

Where:
- Key: `{type}_{slug}` (e.g., `blog_airpods-and-tinnitus`)
- Value: Number of views from Google Analytics

## Notes

- View counts are cumulative from Google Analytics (Dec 16, 2023 - Jan 13, 2025)
- Duplicate entries in CSV are automatically summed
- Home page and non-article pages are excluded
- After importing, the ViewsCounter component will continue tracking new views from this baseline
