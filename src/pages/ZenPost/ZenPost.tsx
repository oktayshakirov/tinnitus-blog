import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MDXContent from '@components/MDX';
import Layout from '@components/Layout';
import ArticleNavigation from '@components/ArticleNavigation';
import { Props } from '@pages/zen/[slug]';
import ZenPostSEO from './ZenPost.SEO';
import {
  StyledHeadline,
  StyledDate,
  StyledDivider,
  StyledContainer,
} from './ZenPost.styled';
import AdComponent from '@components/AdComponent';
import GoBackLink from '@components/GoBackLink';
import ViewsCounter from '@components/ViewsCounter';

const ZenPost = ({
  content,
  slug,
  prev,
  next,
  blogRecommendations,
  zenRecommendations,
  createdAt,
  updatedAt,
}: Props) => {
  const { frontmatter } = content;

  return (
    <>
      <ZenPostSEO
        title={frontmatter?.title}
        description={frontmatter?.description}
        image={frontmatter?.image}
        slug={slug}
        createdAt={createdAt}
        updatedAt={updatedAt}
      />
      <Layout>
        <StyledContainer>
          <GoBackLink option="zen" />
          <StyledHeadline>
            <StyledDate>{frontmatter?.date}</StyledDate>
            <ViewsCounter type="zen" slug={slug} />
            <Typography component="h1" variant="h3">
              {frontmatter?.title}
            </Typography>
          </StyledHeadline>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} md={8}>
              <MDXContent content={content} />
              <StyledDivider />
            </Grid>
            <Grid item xs={12} md={4} container direction="column" spacing={4}>
              <Grid item>
                <ArticleNavigation
                  prev={prev}
                  next={next}
                  tags={frontmatter?.tags as unknown as string[]}
                  blogRecommendations={blogRecommendations}
                  zenRecommendations={zenRecommendations}
                />
              </Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
          <AdComponent />
        </StyledContainer>
      </Layout>
    </>
  );
};

export default ZenPost;
