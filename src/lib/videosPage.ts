import { getAllZen } from '@lib/mdx';
import { longVideos, allSessions } from '@lib/videos';
import { Props, SessionAlbum } from '@ui/pages/Videos';

export const VIDEOS_PER_PAGE = 6;

/**
 * Shared by /videos and /videos/page/N so both pages are built the same way.
 * Only the explainers paginate - the sessions are grouped by album and are
 * listed in full on every page, the way /zen lists them.
 *
 * It lives here rather than in the page module because /videos imports it, and
 * anything exported from a page besides getStaticProps is bundled for the
 * browser - which `fs` in the MDX reader will not survive.
 */
export const videosPageProps = (page: number): Props => {
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

  const videos = longVideos();
  const start = (page - 1) * VIDEOS_PER_PAGE;

  return {
    videos: videos.slice(start, start + VIDEOS_PER_PAGE),
    albums,
    page,
    pageCount: Math.ceil(videos.length / VIDEOS_PER_PAGE),
  };
};
