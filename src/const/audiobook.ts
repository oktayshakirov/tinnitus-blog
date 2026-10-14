// One place for the audiobook's links and copy, so the footer banner, the
// in-post CTA and anything added later cannot drift apart.
export const AUDIOBOOK = {
  title: 'Shut Up, Tinnitus',
  subtitle:
    'Why Your Ears Ring, Why It Gets Louder, and How to Make It Disappear Into the Background',
  runtime: '58 minutes',
  spotify: 'https://open.spotify.com/show/1qdS3WtgeMVxABswacmtC7',
  googlePlay:
    'https://play.google.com/store/audiobooks/details?id=AQAAAEBGqBToQM',
  chapters: 13,
  price: '4.99',
  cover: '/images/audiobook-cover.jpg',
  // 192px for the footer card: 2x its 96px slot, served as-is so it costs no
  // Image Optimization transformations.
  coverThumb: '/images/audiobook-cover-thumb.jpg',
  ogImage: '/images/audiobook-og.jpg',
  narrator: 'Kokoro (AI Voice)',
  author: 'Oktay Shakirov',
  released: '2026-10-07',
  // The free sample on YouTube: introduction plus chapter 1. Registered in
  // src/data/videos.json, which owns its metadata and its VideoObject schema
  // on /videos/<slug>, so nothing here duplicates it.
  sampleVideoId: 'AGjidIWwqPg',
  sampleVideoSlug: 'shut-up-tinnitus-sample',
} as const;

// One row per track, as the stores list them. Lengths are measured from the
// rendered files, not estimated.
export const AUDIOBOOK_CHAPTERS = [
  ['Introduction', 'The Sound Is Not the Problem', '3:15'],
  ['Chapter 1', "Beethoven's Letter from Vienna", '5:07'],
  ['Chapter 2', 'Your Ears Are Not Ringing. Your Brain Is.', '5:10'],
  ['Chapter 3', 'The Fear Loop', '5:03'],
  ['Chapter 4', 'Silence Is Making It Worse', '5:02'],
  ['Chapter 5', 'The Three A.M. Problem', '4:11'],
  ['Chapter 6', 'Your Jaw, Your Neck, Your Ears', '4:10'],
  ['Chapter 7', 'Coffee, Wine, and Other Things You Blamed', '3:40'],
  ['Chapter 8', 'The Supplement Aisle Is Lying to You', '4:17'],
  ['Chapter 9', 'You Are Not Broken. You Are Hypervigilant.', '2:50'],
  ['Chapter 10', 'Stop Listening For It', '7:24'],
  ['Chapter 11', 'The Thirty Day Tinnitus Reset', '5:27'],
  ['Conclusion', 'The Day You Stop Checking', '2:31'],
] as const;

// Rendered at 40px high to match the app badges in the banner above.
//
// Only the Spotify badge is new: it was trimmed of its transparent margin and
// quantised to a 128-colour palette, which is invisible on flat artwork and
// about a tenth of the bytes. Google Play reuses the badge the app banner
// already ships, since it is the same storefront and the same artwork.
export const AUDIOBOOK_BADGES = [
  {
    href: AUDIOBOOK.spotify,
    src: '/spotify-badge.png',
    alt: 'Listen to Shut Up, Tinnitus on Spotify',
    width: 135,
    height: 40,
  },
  {
    href: AUDIOBOOK.googlePlay,
    src: '/google-play-badge.png',
    alt: 'Get Shut Up, Tinnitus on Google Play Books',
    width: 120,
    height: 40,
  },
] as const;
