import React from 'react';
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

export type TagArticlesProps = {
  tagSlug: string;
  articles: ArticleMeta[];
  page: number;
  pageCount: number;
};

const TagArticles = ({
  tagSlug,
  articles,
  page,
  pageCount,
}: TagArticlesProps) => {
  const kebabizedTagForLink = kebabize(tagSlug);

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
                  No articles found for this tag on this page.
                </Typography>
              )}
              {pageCount > 1 && (
                <StyledPagination
                  count={pageCount}
                  page={page}
                  color="primary"
                  hidePrevButton
                  hideNextButton
                  renderItem={(item) => {
                    let href = `/tags/${kebabizedTagForLink}`;
                    if (item.page && item.page > 1) {
                      href += `--page-${item.page}`;
                    }
                    return (
                      <PaginationItem component={Link} href={href} {...item} />
                    );
                  }}
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
