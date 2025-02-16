import Container from '@mui/material/Container';
import Layout from '@components/Layout';
import { Article } from '@types';
import Typography from '@mui/material/Typography';
import ArticlesGrid from '@components/ArticlesGrid';
import Box from '@mui/material/Box';
import AdComponent from '@components/AdComponent';
import TagDetailsSEO from './TagDetails.SEO';
import { StyledContainer, StyledTabContainer } from './TagDetails.styled';

const TagDetails = ({
  slug,
  articles,
}: {
  slug: string;
  articles: Article[];
}) => {
  const articlesToDisplay = articles.map((article) => article.meta);

  return (
    <>
      <TagDetailsSEO tag={slug} />
      <Layout>
        <StyledContainer>
          <StyledTabContainer>
            <Container>
              <Typography component="h1" variant="h4" gutterBottom>
                Articles tagged with: {slug}
              </Typography>
              <ArticlesGrid articles={articlesToDisplay} />
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

export default TagDetails;
