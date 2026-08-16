import { GetStaticPaths, GetStaticProps } from 'next';
import VideoSingle, { Props } from '@ui/pages/VideoSingle';
import { longVideos, getVideoBySlug } from '@lib/videos';

const VideoPage = (props: Props) => <VideoSingle {...props} />;

// Long form only. A session is the same sound in a different length and belongs
// on its album; a short has no chapters and no transcript, so its page would be
// a thumbnail and a sentence - exactly the thin page this feed avoids.
export const getStaticPaths: GetStaticPaths = async () => ({
  paths: longVideos().map((video) => ({ params: { slug: video.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const video = getVideoBySlug(params?.slug as string);

  if (!video) return { notFound: true };

  return {
    props: {
      video,
      related: longVideos()
        .filter((item) => item.slug !== video.slug)
        .slice(0, 3),
    },
  };
};

export default VideoPage;
