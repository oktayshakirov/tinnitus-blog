import { NextSeo } from 'next-seo';
import JsonLd from '@components/JsonLd';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';
import { buildGraph, breadcrumbSchema } from '@lib/schema';
import { videoObjectSchema, SiteVideo } from '@lib/videos';
import { SessionAlbum } from './Videos';

type Props = {
  videos: SiteVideo[];
  albums: SessionAlbum[];
  page: number;
};

export const VIDEOS_TITLE = `Tinnitus Videos | ${DOMAIN_NAME}`;
export const VIDEOS_DESCRIPTION =
  'Short explainers on what tinnitus is, what causes it and how to live with it, plus masking and paced-breathing sound sessions you can play straight through.';

const VideosSEO = ({ videos, albums, page }: Props) => {
  // Page 1 is reachable as both /videos and /videos/page/1; the canonical
  // points at /videos so the two are not indexed separately, the same way
  // /blog does it.
  const canonical =
    page > 1 ? `${DOMAIN}/videos/page/${page}` : `${DOMAIN}/videos`;
  // Both kinds are on this page now, so both belong in the list. Sessions used
  // to be described by /zen/videos, which no longer exists.
  const all = [...videos, ...albums.flatMap((album) => album.sessions)];

  const graph = buildGraph([
    // Video is the main content here, so the VideoObjects are the page rather
    // than an addition to it. The ItemList tells Google the page is a listing
    // of them and not one video with duplicates.
    {
      '@type': 'ItemList',
      name: VIDEOS_TITLE,
      url: canonical,
      numberOfItems: all.length,
      itemListElement: all.map((video, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: videoObjectSchema(video, DOMAIN),
      })),
    },
    breadcrumbSchema([
      { name: 'Home', url: DOMAIN },
      { name: 'Videos', url: canonical },
    ]),
  ]);

  return (
    <>
      <NextSeo
        title={VIDEOS_TITLE}
        description={VIDEOS_DESCRIPTION}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title: VIDEOS_TITLE,
          description: VIDEOS_DESCRIPTION,
          images: [{ url: `${DOMAIN}${DEFAULT_OG_IMAGE}`, type: 'image/jpeg' }],
          siteName: DOMAIN_NAME,
        }}
      />
      <JsonLd id="videos" data={graph} />
    </>
  );
};

export default VideosSEO;
