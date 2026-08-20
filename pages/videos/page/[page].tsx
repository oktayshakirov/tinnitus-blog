import { GetStaticPaths, GetStaticProps } from 'next';
import Videos, { Props } from '@ui/pages/Videos';
import { longVideos } from '@lib/videos';
import { videosPageProps, VIDEOS_PER_PAGE } from '@lib/videosPage';

const VideosPaginationPage = (props: Props) => <Videos {...props} />;

export const getStaticPaths: GetStaticPaths = async () => {
  const pageCount = Math.ceil(longVideos().length / VIDEOS_PER_PAGE);
  // Page 1 is built as well, matching /blog, so a link to it resolves.
  const paths = Array.from({ length: Math.max(pageCount, 1) }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => ({
  props: videosPageProps(parseInt(context.params?.page as string, 10) || 1),
});

export default VideosPaginationPage;
