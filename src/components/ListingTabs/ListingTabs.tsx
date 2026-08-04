import Link from '@components/Link';
import { StyledTabs } from './ListingTabs.styled';

type Props = {
  basePath: string;
  active: 'latest' | 'popular';
};

// "Latest" is the paginated, date-ordered listing; "Most viewed" is a single
// ranked page. Kept as two routes rather than one route with a sort parameter
// so both stay static and keep their own URLs.
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
      Most viewed
    </Link>
  </StyledTabs>
);

export default ListingTabs;
