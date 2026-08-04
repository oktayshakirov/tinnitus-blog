// Reads the build-time view snapshot (see scripts/generateViews.js) and ranks
// content by it. Import this only from getStaticProps - the snapshot is a build
// artefact, not something to ship to the browser.
import { ArticleMeta } from '@types';
import views from '../data/views.json';

// How many items a "Most viewed" listing shows. Enough to be worth a visit,
// short enough that the page needs no pagination of its own.
export const POPULAR_LIMIT = 12;

// The counter is mounted with these names, and the snapshot is keyed by them.
export type ViewType = 'blog' | 'zen';

const counts = views.counts as Record<string, number>;

export const viewCount = (type: ViewType, slug: string): number =>
  counts[`${type}/${slug}`] || 0;

/**
 * Most viewed first. Ties - including the all-zero case on a site whose
 * snapshot is empty - keep the order they came in with, which is the caller's
 * date ordering.
 */
export const rankByViews = (
  items: ArticleMeta[],
  type: ViewType,
  limit: number = POPULAR_LIMIT
): ArticleMeta[] =>
  items
    .map((item, index) => ({ item, index, count: viewCount(type, item.slug) }))
    .sort((a, b) => b.count - a.count || a.index - b.index)
    .slice(0, limit)
    .map(({ item }) => item);
