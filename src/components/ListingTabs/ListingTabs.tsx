import Link from '@components/Link';
import { StyledTabs } from './ListingTabs.styled';

export type ListingTab = 'latest' | 'popular' | 'videos';

type Props = {
  basePath: string;
  active: ListingTab;
  /** /zen adds a third tab for the sound-therapy video sessions. */
  showVideos?: boolean;
};

// "Latest" is the paginated, date-ordered listing; "Most popular" is a single
// ranked page. Kept as separate routes rather than one route with a sort
// parameter so they all stay static and keep their own URLs.
const ListingTabs = ({ basePath, active, showVideos = false }: Props) => (
  <StyledTabs aria-label="Sort order">
    <Link
      href={basePath}
      aria-current={active === 'latest' ? 'page' : undefined}
    >
      Latest
    </Link>
    <Link
      href={`${basePath}/popular`}
      aria-current={active === 'popular' ? 'page' : undefined}
    >
      Most popular
    </Link>
    {showVideos && (
      <Link
        href={`${basePath}/videos`}
        aria-current={active === 'videos' ? 'page' : undefined}
      >
        Videos
      </Link>
    )}
  </StyledTabs>
);

export default ListingTabs;
