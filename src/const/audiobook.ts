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
} as const;

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
