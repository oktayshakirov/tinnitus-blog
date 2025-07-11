import React, { ChangeEvent } from 'react';
import Container from '@mui/material/Container';
import Layout from '@components/Layout';
import { ArticleMeta } from '@types';
import Typography from '@mui/material/Typography';
import ArticlesGrid from '@components/ArticlesGrid';
import Box from '@mui/material/Box';
import AdComponent from '@components/AdComponent';
import TagArticlesSEO from './TagArticles.SEO';
import {
  StyledContainer,
  StyledTabContainer,
  StyledPagination,
} from './TagArticles.styled';
import PaginationItem from '@mui/material/PaginationItem';
import Link from '@components/Link';
import { kebabize } from '@lib/strings';
import { useRouter } from 'next/router';

export type TagArticlesProps = {
  tagSlug: string;
  articles: ArticleMeta[];
  page: number;
  pageCount: number;
};

const TagArticles = ({
  tagSlug,
  articles,
  page: initialPage,
  pageCount,
}: TagArticlesProps) => {
  const router = useRouter();
  const kebabizedTagForLink = kebabize(tagSlug);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    const newPath =
      value === 1
        ? `/tags/${kebabizedTagForLink}`
        : `/tags/${kebabizedTagForLink}/page/${value}`;
    router.push(newPath, undefined, { shallow: false }).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  return (
    <>
      <TagArticlesSEO tag={tagSlug} />
      <Layout>
        <StyledContainer>
          <StyledTabContainer>
            <Container>
              <Typography
                component="h1"
                variant="h4"
                gutterBottom
                sx={{ textTransform: 'capitalize' }}
              >
                Articles tagged with: {tagSlug}
              </Typography>
              {articles.length > 0 ? (
                <ArticlesGrid articles={articles} />
              ) : (
                <Typography sx={{ mt: 2 }}>
                  No articles found for this tag
                  {initialPage > 1 ? ` on page ${initialPage}` : ''}.
                </Typography>
              )}
              {pageCount > 1 && (
                <StyledPagination
                  count={pageCount}
                  page={initialPage}
                  color="primary"
                  hidePrevButton
                  hideNextButton
                  onChange={handlePageChange}
                  renderItem={(item) => (
                    <PaginationItem
                      component={Link}
                      href={
                        item.page === 1
                          ? `/tags/${kebabizedTagForLink}`
                          : `/tags/${kebabizedTagForLink}/page/${item.page}`
                      }
                      {...item}
                    />
                  )}
                />
              )}
            </Container>
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

export default TagArticles;
