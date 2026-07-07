import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllZen } from '@lib/mdx';

// Feeds the app's "Sound of the Day" home-screen widget. Returns the live zen
// list (so newly-added sounds appear automatically) with a low-quality
// thumbnail served through Next's image optimizer.
const SITE = 'https://www.tinnitushelp.me';

// Low-quality thumbnail via Next's image optimizer. `w` must be one of the
// sizes in next.config.js (332 is the smallest deviceSize) and `q` must be an
// allowed quality — this deployment only accepts q=75 (q=50 returns HTTP 400).
function thumbnail(imagePath: string): string {
  const abs = imagePath.startsWith('http') ? imagePath : `${SITE}${imagePath}`;
  return `${SITE}/_next/image?url=${encodeURIComponent(abs)}&w=332&q=75`;
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const sounds = getAllZen()
      .filter((z) => z.meta.image)
      .map((z) => ({
        slug: z.meta.slug,
        title: z.meta.title,
        thumbnail: thumbnail(z.meta.image),
      }));

    res.setHeader(
      'Cache-Control',
      'public, max-age=21600, s-maxage=21600, stale-while-revalidate=86400'
    );
    res.status(200).json({ sounds, updatedAt: Date.now() });
  } catch (error) {
    console.error('widget-sounds error:', error);
    res.status(500).json({ error: 'Failed to load sounds' });
  }
}
