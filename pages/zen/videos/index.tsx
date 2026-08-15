import { GetStaticProps } from 'next';
import ZenVideos, { Props, SessionAlbum } from '@ui/pages/ZenVideos';
import { getAllZen } from '@lib/mdx';
import { allSessions } from '@lib/videos';

const ZenVideosPage = (props: Props) => <ZenVideos {...props} />;

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

  return { props: { albums } };
};

export default ZenVideosPage;
