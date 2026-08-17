import { GetStaticProps } from 'next';
import Videos, { Props, SessionAlbum } from '@ui/pages/Videos';
import { getAllZen } from '@lib/mdx';
import { longVideos, allSessions } from '@lib/videos';

const VideosPage = (props: Props) => <Videos {...props} />;

export const getStaticProps: GetStaticProps = async () => {
  const zen = getAllZen().map((item) => item.meta);
  const sessions = allSessions();

  // Grouped by album, in the albums' own listing order, so this page and /zen
  // read the same way. A session whose target album no longer exists is
  // dropped rather than rendered with a broken link.
  const albums: SessionAlbum[] = zen
    .map((album) => ({
      slug: album.slug,
      title: album.title,
      sessions: sessions.filter(
        (session) => session.target?.slug === album.slug
      ),
    }))
    .filter((album) => album.sessions.length > 0);

  return { props: { videos: longVideos(), albums } };
};

export default VideosPage;
