import { GetStaticProps } from 'next';
import Videos, { Props } from '@ui/pages/Videos';
import { videosPageProps } from '@lib/videosPage';

const VideosPage = (props: Props) => <Videos {...props} />;

export const getStaticProps: GetStaticProps = async () => ({
  props: videosPageProps(1),
});

export default VideosPage;
