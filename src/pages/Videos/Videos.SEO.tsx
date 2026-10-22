import { NextSeo } from 'next-seo';
import JsonLd from '@components/JsonLd';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';
import { buildGraph, breadcrumbSchema } from '@lib/schema';
import { videoObjectSchema, SiteVideo } from '@lib/videos';
import { VideosTab, VIDEOS_TAB_PATH } from './Videos';
import { paginatedTitle, paginatedDescription } from '@lib/pagination';

type Props = {
  tab: VideosTab;
  videos: SiteVideo[];
  page: number;
};

export const VIDEOS_TITLE = `Tinnitus Videos | ${DOMAIN_NAME}`;
export const VIDEOS_DESCRIPTION =
  'Short explainers on what tinnitus is, what causes it and how to live with it, from causes and treatments to the science behind the ringing.';

export const SESSIONS_TITLE = `Tinnitus Sound Therapy Sessions | ${DOMAIN_NAME}`;
export const SESSIONS_DESCRIPTION =
  'Masking and paced-breathing sound sessions for tinnitus: white noise, rain, waterfalls and more, ready to play straight through.';

const VideosSEO = ({ tab, videos, page }: Props) => {
  const basePath = `${DOMAIN}${VIDEOS_TAB_PATH[tab]}`;
  // Page 1 is reachable as both the tab root and its /page/1; the canonical
  // points at the root so the two are not indexed separately, the same way
  // /blog does it.
  const canonical = page > 1 ? `${basePath}/page/${page}` : basePath;
  const isSessions = tab === 'sessions';
  const title = paginatedTitle(
    isSessions ? SESSIONS_TITLE : VIDEOS_TITLE,
    page
  );
  const description = paginatedDescription(
    isSessions ? SESSIONS_DESCRIPTION : VIDEOS_DESCRIPTION,
    page
  );

  const graph = buildGraph([
    // Video is the main content here, so the VideoObjects are the page rather
    // than an addition to it. The ItemList tells Google the page is a listing
    // of them and not one video with duplicates.
    {
      '@type': 'ItemList',
      name: title,
      url: canonical,
      numberOfItems: videos.length,
      itemListElement: videos.map((video, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: videoObjectSchema(video, DOMAIN),
      })),
    },
    breadcrumbSchema([
      { name: 'Home', url: DOMAIN },
      { name: 'Videos', url: `${DOMAIN}/videos` },
      ...(isSessions ? [{ name: 'Sound sessions', url: basePath }] : []),
    ]),
  ]);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title: title,
          description: description,
          images: [{ url: `${DOMAIN}${DEFAULT_OG_IMAGE}`, type: 'image/jpeg' }],
          siteName: DOMAIN_NAME,
        }}
      />
      <JsonLd id="videos" data={graph} />
    </>
  );
};

export default VideosSEO;
