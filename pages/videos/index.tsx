import { GetStaticProps } from 'next';
import Videos, { Props } from '@ui/pages/Videos';
import { longVideos } from '@lib/videos';

const VideosPage = (props: Props) => <Videos {...props} />;

export const getStaticProps: GetStaticProps = async () => ({
  props: { videos: longVideos() },
});

export default VideosPage;
