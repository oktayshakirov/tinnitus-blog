import { ChangeEvent, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PaginationItem from '@mui/material/PaginationItem';
import Link from '@components/Link';
import Layout from '@components/Layout';
import ArticlesGrid from '@components/ArticlesGrid';
import ListingTabs from '@components/ListingTabs';
import Headline from '@ui/pages/shared/Headline';
import ZenSEO from './Zen.SEO';
import {
  StyledPagination,
  StyledContainer,
  StyledTabContainer,
} from './Zen.styled';
import AdComponent from '@components/AdComponent';
import { ArticleMeta } from '@types';

export type Props = {
  zenMeta: ArticleMeta[];
  page: number;
  pageCount: number;
  variant?: 'latest' | 'popular';
};

const Zen = ({
  page: pageFromUrl,
  pageCount,
  zenMeta,
  variant = 'latest',
}: Props) => {
  const [page, setPage] = useState(pageFromUrl);
  // Popular has its own paginated route, so page links must stay inside it.
  const listBase = variant === 'popular' ? '/zen/popular' : '/zen';

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ZenSEO page={pageFromUrl} />
      <Layout>
        <Container>
          <AdComponent />
        </Container>
        <StyledContainer>
          <StyledTabContainer>
            <Headline>
              <i
                className="fi fi-music-note"
                style={{
                  fontSize: '0.8em',
                  marginRight: '0.5em',
                }}
              />
              SOUNDS
            </Headline>
            <ListingTabs basePath="/zen" active={variant} />
            <ArticlesGrid articles={zenMeta} />
            {pageCount > 1 && (
              <StyledPagination
                count={pageCount}
                color="primary"
                hidePrevButton
                hideNextButton
                page={page}
                onChange={handleChange}
                renderItem={(item) => (
                  <PaginationItem
                    component={Link}
                    href={
                      item.page === 1
                        ? listBase
                        : `${listBase}/page/${item.page}`
                    }
                    {...item}
                  />
                )}
              />
            )}
          </StyledTabContainer>
          <Container>
            <Box pt={3}>
              <AdComponent />
            </Box>
          </Container>
        </StyledContainer>
      </Layout>
    </>
  );
};

export default Zen;
