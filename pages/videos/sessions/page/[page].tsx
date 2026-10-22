import { GetStaticPaths, GetStaticProps } from 'next';
import Videos, { Props } from '@ui/pages/Videos';
import { videosPageProps, videosPageCount } from '@lib/videosPage';

const VideoSessionsPaginationPage = (props: Props) => <Videos {...props} />;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Array.from({ length: videosPageCount('sessions') }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => ({
  props: videosPageProps(
    'sessions',
    parseInt(context.params?.page as string, 10) || 1
  ),
});

export default VideoSessionsPaginationPage;
