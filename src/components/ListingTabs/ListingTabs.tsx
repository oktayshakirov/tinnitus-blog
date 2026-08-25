import Link from '@components/Link';
import { StyledTabs } from './ListingTabs.styled';

export type ListingTab = 'latest' | 'popular';

type Props = {
  basePath: string;
  active: ListingTab;
};

// "Latest" is the date-ordered listing; "Most popular" is the same set ranked
// by views. Both are paginated. Kept as separate routes rather than one route
// with a sort parameter so they all stay static and keep their own URLs.
const ListingTabs = ({ basePath, active }: Props) => (
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
  </StyledTabs>
);

export default ListingTabs;
