import { GetStaticPaths, GetStaticProps } from 'next';
import Videos, { Props } from '@ui/pages/Videos';
import { videosPageProps, videosPageCount } from '@lib/videosPage';

const VideosPaginationPage = (props: Props) => <Videos {...props} />;

export const getStaticPaths: GetStaticPaths = async () => {
  // Page 1 is built as well, matching /blog, so a link to it resolves.
  const paths = Array.from(
    { length: videosPageCount('explainers') },
    (_, i) => ({
      params: { page: (i + 1).toString() },
    })
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => ({
  props: videosPageProps(
    'explainers',
    parseInt(context.params?.page as string, 10) || 1
  ),
});

export default VideosPaginationPage;
