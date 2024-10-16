import { ChangeEvent, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import PaginationItem from '@mui/material/PaginationItem';
import { Props } from '@pages/zen';
import Link from '@components/Link';
import Layout from '@components/Layout';
import ArticlesGrid from '@components/ArticlesGrid';
import Headline from '@ui/pages/shared/Headline';
import ZenSEO from './Zen.SEO';
import { StyledPagination } from './Zen.styled';
import AdComponent from '@components/AdComponent';

const Zen = ({ page: pageFromUrl, pageCount, zenMeta }: Props) => {
  const [page, setPage] = useState(pageFromUrl);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ZenSEO />
      <Layout>
        <Container>
          <Headline>Zen Sound Therapy</Headline>
          <ArticlesGrid articles={zenMeta} />
          {pageCount > 1 && (
            <StyledPagination
              count={pageCount}
              color="primary"
              page={page}
              onChange={handleChange}
              hidePrevButton
              hideNextButton
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  href={`/Zen${item.page === 1 ? '' : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          )}
        </Container>
        <Container>
          <Box pt={3}>
            <AdComponent />
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default Zen;
