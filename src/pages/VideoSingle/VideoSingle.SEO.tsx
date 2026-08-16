import { NextSeo } from 'next-seo';
import JsonLd from '@components/JsonLd';
import { DOMAIN, DOMAIN_NAME } from '@const/general';
import { buildGraph, breadcrumbSchema } from '@lib/schema';
import { videoObjectSchema, SiteVideo } from '@lib/videos';

type Props = {
  video: SiteVideo;
};

const VideoSingleSEO = ({ video }: Props) => {
  const canonical = `${DOMAIN}/videos/${video.slug}`;
  const title = `${video.title} | ${DOMAIN_NAME}`;

  const graph = buildGraph([
    // Key moments are emitted here and nowhere else: this is the only page
    // where the video is the main content rather than a supplement to an
    // article, which is the condition Google puts on the video rich result.
    videoObjectSchema(video, DOMAIN, { withClips: true }),
    breadcrumbSchema([
      { name: 'Home', url: DOMAIN },
      { name: 'Videos', url: `${DOMAIN}/videos` },
      { name: video.title, url: canonical },
    ]),
  ]);

  return (
    <>
      <NextSeo
        title={title}
        description={video.description}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title,
          description: video.description,
          images: [{ url: `${DOMAIN}${video.poster}`, type: 'image/webp' }],
          siteName: DOMAIN_NAME,
        }}
      />
      <JsonLd id={`video-${video.slug}`} data={graph} />
    </>
  );
};

export default VideoSingleSEO;
