import { longVideos, allSessions } from '@lib/videos';
import { Props, VideosTab } from '@ui/pages/Videos';

export const VIDEOS_PER_PAGE = 6;

const tabVideos = (tab: VideosTab) =>
  tab === 'sessions' ? sessionsNewestFirst() : longVideos();

// Newest first, like the explainers, so both tabs read the same way.
const sessionsNewestFirst = () =>
  [...allSessions()].sort((a, b) => (a.uploadDate < b.uploadDate ? 1 : -1));

/** How many pages a tab has, for getStaticPaths. */
export const videosPageCount = (tab: VideosTab): number =>
  Math.max(Math.ceil(tabVideos(tab).length / VIDEOS_PER_PAGE), 1);

/**
 * Shared by /videos, /videos/sessions and their /page/N pages so all four are
 * built the same way. Each tab is a route of its own and paginates on its own.
 *
 * It lives here rather than in the page module because the pages import it, and
 * anything exported from a page besides getStaticProps is bundled for the
 * browser.
 */
export const videosPageProps = (tab: VideosTab, page: number): Props => {
  const videos = tabVideos(tab);
  const start = (page - 1) * VIDEOS_PER_PAGE;

  return {
    tab,
    videos: videos.slice(start, start + VIDEOS_PER_PAGE),
    hasSessions: allSessions().length > 0,
    page,
    pageCount: Math.ceil(videos.length / VIDEOS_PER_PAGE),
  };
};
