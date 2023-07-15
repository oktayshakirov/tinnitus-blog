import { ChangeEvent, useState } from 'react';
import Container from '@mui/material/Container';
import PaginationItem from '@mui/material/PaginationItem';
import { Props } from '@pages/zen';
import Link from '@components/Link';
import Layout from '@components/Layout';
import ArticlesGrid from '@components/ArticlesGrid';
import Headline from '@ui/pages/shared/Headline';
import ZenSEO from './Zen.SEO';
import { StyledPagination, StyledZenHeadline } from './Zen.styled';

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
          <StyledZenHeadline>
            <Headline>Zen Sound Therapy</Headline>
          </StyledZenHeadline>
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
      </Layout>
    </>
  );
};

export default Zen;
