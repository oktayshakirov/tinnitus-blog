import { GetStaticProps } from 'next';
import Videos, { Props } from '@ui/pages/Videos';
import { videosPageProps } from '@lib/videosPage';

const VideoSessionsPage = (props: Props) => <Videos {...props} />;

// A static route, so it wins over /videos/[slug] - no explainer may be given
// the slug "sessions".
export const getStaticProps: GetStaticProps = async () => ({
  props: videosPageProps('sessions', 1),
});

export default VideoSessionsPage;
