import videosJson from '../data/videos.json';

// The registry is the source of truth for anything YouTube. Video metadata is
// deliberately not in MDX frontmatter: `id`, `uploadDate` and `duration` only
// exist after upload, and a video can host on more than one page.
// See docs/site-video-integration.md in the video-edit-automation repo.

export type VideoTargetType = 'blog' | 'zen';

/** `session` is a sound-therapy video, where the video *is* the content. */
export type VideoKind = 'long' | 'short' | 'session';

/**
 * `auto` - the layout places it, and the MDX file is never touched.
 * `inline` - the MDX body carries a <PostVideo /> and places it itself.
 * `none` - stays in the registry for the feed, off articles entirely.
 */
export type VideoPlacement = 'auto' | 'inline' | 'none';

export type VideoTarget = { type: VideoTargetType; slug: string };

/**
 * One chapter of a long-form video: where it starts, what it is called, and the
 * narration spoken in it. The text is the script, not the article's prose, so a
 * full transcript is 450-700 words that exist nowhere else on the site - which
 * is what keeps /videos/<slug> from being a thin page.
 */
export type VideoChapter = { start: number; title: string; text: string };

export type SiteVideo = {
  slug: string;
  id: string;
  kind: VideoKind;
  title: string;
  /**
   * Sessions only. One /zen album spawns many sessions, so the card needs a
   * short phrase that distinguishes them - the album name is already the page
   * title and repeating it in every row reads as noise.
   */
  label?: string;
  description: string;
  uploadDate: string;
  duration: string;
  seconds: number;
  poster: string;
  target: VideoTarget | null;
  alsoOn: VideoTarget[];
  placement: VideoPlacement;
  /** Long form only; a session has no narration to transcribe. */
  chapters?: VideoChapter[];
};

const VIDEOS = videosJson.videos as SiteVideo[];

export const allVideos = (): SiteVideo[] => VIDEOS;

export const getVideoById = (id: string): SiteVideo | null =>
  VIDEOS.find((video) => video.id === id) ?? null;

export const getVideoBySlug = (slug: string): SiteVideo | null =>
  VIDEOS.find((video) => video.slug === slug) ?? null;

// Every page a video is meant to appear on: its own article plus any neighbours
// it was deliberately spread to.
const hostPages = (video: SiteVideo): VideoTarget[] =>
  [video.target, ...(video.alsoOn ?? [])].filter(Boolean) as VideoTarget[];

const onPage = (video: SiteVideo, type: VideoTargetType, slug: string) =>
  video.placement !== 'none' &&
  hostPages(video).some((page) => page.type === type && page.slug === slug);

/**
 * The single video a page renders in its compact bar. Articles get at most one
 * explainer, so this is the right shape for /blog. It is the wrong shape for
 * /zen - use `getAlbumSessions` there.
 */
export const getPageVideo = (
  type: VideoTargetType,
  slug: string
): SiteVideo | null =>
  VIDEOS.find(
    (video) => video.kind !== 'session' && onPage(video, type, slug)
  ) ?? null;

/**
 * Every sound-therapy session cut from one /zen album, shortest first. The
 * many-to-one relation is the whole reason sessions are not modelled like
 * article explainers: one album of white noise can carry a 1-minute, a
 * 5-minute and a 30-minute session, and they all belong on the same page.
 */
export const getAlbumSessions = (albumSlug: string): SiteVideo[] =>
  VIDEOS.filter(
    (video) => video.kind === 'session' && onPage(video, 'zen', albumSlug)
  ).sort((a, b) => a.seconds - b.seconds);

/** Every session on the site, for the /zen/videos listing. */
export const allSessions = (): SiteVideo[] =>
  VIDEOS.filter((video) => video.kind === 'session').sort(
    (a, b) => a.seconds - b.seconds
  );

/**
 * The /videos feed: article explainers, newest first.
 *
 * These are exactly the videos with a page of their own, because they are the
 * ones carrying chapters and a transcript. Shorts have neither and make a bad
 * 16:9 card besides; sessions have no narration to transcribe and get their own
 * listing at /zen/videos, grouped by the album each was cut from.
 */
export const longVideos = (): SiteVideo[] =>
  VIDEOS.filter((video) => video.kind === 'long').sort((a, b) =>
    a.uploadDate < b.uploadDate ? 1 : -1
  );

/**
 * The page a video came from - the article for an explainer, the sound album
 * for a session. Used for the "read the article" link under a feed card.
 */
export const videoSourceHref = (video: SiteVideo): string | null =>
  video.target ? `/${video.target.type}/${video.target.slug}` : null;

// 160 -> "2:40". The registry also carries ISO 8601 `duration`, but that is for
// schema, not for humans.
export const formatDuration = (seconds: number): string => {
  if (!Number.isFinite(seconds)) return '';
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${String(secs).padStart(2, '0')}`;
};

/**
 * `uploadDate` and `duration` come from the YouTube API through the registry and
 * must stay truthful; a made-up uploadDate is a structured-data violation.
 *
 * Note what this does *not* buy: since Google's August 2023 change the video
 * rich result is shown mainly where video is the page's main content, so an
 * article with a supplementary embed generally does not qualify. /videos and
 * /zen/videos are the exception - there the video really is the content.
 */
export const videoObjectSchema = (
  video: SiteVideo | null,
  domain: string,
  { withClips = false }: { withClips?: boolean } = {}
) => {
  if (!video) return null;
  const contentUrl = `https://www.youtube.com/watch?v=${video.id}`;
  const schema: Record<string, unknown> = {
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: `${domain}${video.poster}`,
    uploadDate: video.uploadDate,
    duration: video.duration,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
    contentUrl,
  };

  // Key moments. Only worth emitting on /videos/<slug>, where the video is the
  // page's main content - on an article the embed is supplementary and Google
  // will not surface them. The chapter data is validated on render by
  // `meta.check_chapters` in the video repo.
  const chapters = video.chapters ?? [];
  if (withClips && chapters.length) {
    schema.hasPart = chapters.map((chapter, index) => ({
      '@type': 'Clip',
      name: chapter.title,
      startOffset: chapter.start,
      endOffset:
        index + 1 < chapters.length ? chapters[index + 1].start : video.seconds,
      url: `${contentUrl}&t=${chapter.start}s`,
    }));
  }

  return schema;
};
