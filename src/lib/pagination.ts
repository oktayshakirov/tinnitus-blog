import { DOMAIN_NAME } from '@const/general';

/**
 * Titles and descriptions for one page of a paginated listing.
 *
 * Every page of a sequence otherwise ships the same title and description,
 * which reads as a set of duplicates. The page number disambiguates them
 * without inventing copy per page. It goes in ahead of the site name rather
 * than after it, so the brand stays where every other title on the site
 * keeps it.
 */
const BRAND_SUFFIX = new RegExp(`\\s*[-|]\\s*${DOMAIN_NAME}\\s*$`);

export const paginatedTitle = (title: string, page: number) => {
  if (page <= 1) return title;

  const brand = title.match(BRAND_SUFFIX);
  return brand
    ? `${title.slice(0, brand.index)} - Page ${page}${brand[0]}`
    : `${title} - Page ${page}`;
};

export const paginatedDescription = (description: string, page: number) =>
  page > 1 ? `${description} (Page ${page})` : description;

/**
 * Robots directive for a listing that re-sorts a set the site already
 * publishes in full elsewhere (the "Most popular" tabs).
 *
 * Page 1 of such a listing is a genuine curated top list and stays indexable.
 * Its deeper pages hold the same items as the main archive in a different
 * order and carry nothing unique, so they are kept out of the index while
 * staying crawlable, so the links on them are still followed through to the
 * articles.
 *
 * The date-ordered "Latest" pagination is deliberately left indexable: it is
 * the site's primary crawl path into the archive, and Google warns that
 * noindexing a primary sequence eventually costs you the deep items too.
 */
export const isRedundantSortPage = (variant: string, page: number) =>
  variant === 'popular' && page > 1;
