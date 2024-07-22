import { ChangeEvent, useState } from 'react';
import Container from '@mui/material/Container';
import PaginationItem from '@mui/material/PaginationItem';
import { Props } from '@pages/blog';
import Link from '@components/Link';
import Layout from '@components/Layout';
import ArticlesGrid from '@components/ArticlesGrid';
import Headline from '@ui/pages/shared/Headline';
import BlogSEO from './Blog.SEO';
import { StyledPagination } from './Blog.styled';

const Blog = ({ page: pageFromUrl, pageCount, postsMeta }: Props) => {
  const [page, setPage] = useState(pageFromUrl);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <BlogSEO />
      <Layout>
        <Container>
          <Headline>Tinnitus Help Blog</Headline>
          <ArticlesGrid articles={postsMeta} />
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
                  href={`/blog${item.page === 1 ? '' : `?page=${item.page}`}`}
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

export default Blog;
