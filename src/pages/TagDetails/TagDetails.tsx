import Container from '@mui/material/Container';
import Layout from '@components/Layout';
import { Article } from '@types';
import Typography from '@mui/material/Typography';
import PaginationItem from '@mui/material/PaginationItem';
import Link from '@components/Link';
import ArticlesGrid from '@components/ArticlesGrid';
import { StyledPagination } from './TagDetails.styled';
import { ChangeEvent, useState } from 'react';

const TagDetails = ({
  slug,
  articles,
}: {
  slug: string;
  articles: Article[];
}) => {
  const [page, setPage] = useState(1);
  const articlesPerPage = 9;
  const pageCount = Math.ceil(articles.length / articlesPerPage);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const articlesToDisplay = articles
    .slice((page - 1) * articlesPerPage, page * articlesPerPage)
    .map((article) => article.meta);

  return (
    <>
      <Layout>
        <Container>
          <Typography variant="h4" gutterBottom>
            Articles tagged with: {slug}
          </Typography>
          <ArticlesGrid articles={articlesToDisplay} />
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
                  href={`/tags/${slug}${
                    item.page === 1 ? '' : `?page=${item.page}`
                  }`}
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

export default TagDetails;
