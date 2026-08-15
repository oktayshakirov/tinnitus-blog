import { NextSeo } from 'next-seo';
import JsonLd from '@components/JsonLd';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';
import { buildGraph } from '@lib/schema';
import { videoObjectSchema } from '@lib/videos';
import { SessionAlbum } from './ZenVideos';

type Props = {
  albums: SessionAlbum[];
};

const ZenVideosSEO = ({ albums }: Props) => {
  const canonical = `${DOMAIN}/zen/videos`;
  const title = `Tinnitus Sound Therapy Videos | ${DOMAIN_NAME}`;
  const description =
    'Free tinnitus masking and paced-breathing video sessions you can play straight through, cut from our sound therapy albums.';
  const sessions = albums.flatMap((album) => album.sessions);

  const graph = buildGraph([
    // Video is the main content here, so the VideoObjects are the page rather
    // than an addition to it. The ItemList tells Google the page is a listing
    // of them and not one video with duplicates.
    {
      '@type': 'ItemList',
      name: title,
      url: canonical,
      numberOfItems: sessions.length,
      itemListElement: sessions.map((session, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: videoObjectSchema(session, DOMAIN),
      })),
    },
  ]);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title,
          description,
          images: [{ url: `${DOMAIN}${DEFAULT_OG_IMAGE}`, type: 'image/jpeg' }],
          siteName: DOMAIN_NAME,
        }}
      />
      <JsonLd id="zen-videos" data={graph} />
    </>
  );
};

export default ZenVideosSEO;
