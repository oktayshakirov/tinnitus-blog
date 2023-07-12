import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MDXContent from '@components/MDX';
import Layout from '@components/Layout';
import ArticleNavigation from '@components/ArticleNavigation';
import { Props } from '@pages/zen/[slug]';
import ZenPostSEO from './ZenPost.SEO';
import { StyledHeadline, StyledDate, StyledDivider } from './ZenPost.styled';

const ZenPost = ({
  content,
  slug,
  prev,
  next,
  createdAt,
  updatedAt,
}: Props) => {
  const { frontmatter } = content;

  return (
    <>
      <ZenPostSEO
        title={frontmatter?.title as string}
        description={frontmatter?.description as string}
        image={frontmatter?.image as string}
        slug={slug}
        createdAt={createdAt}
        updatedAt={updatedAt}
      />
      <Layout>
        <Container>
          <StyledHeadline>
            <StyledDate>{frontmatter?.date as string}</StyledDate>
            <Typography component="h1" variant="h3">
              {frontmatter?.title as string}
            </Typography>
          </StyledHeadline>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item md={8}>
              <MDXContent content={content} />
              <StyledDivider />
            </Grid>
            <Grid item md={4}>
              <ArticleNavigation
                prev={prev}
                next={next}
                tags={frontmatter?.tags as unknown as string[]}
              />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default ZenPost;
