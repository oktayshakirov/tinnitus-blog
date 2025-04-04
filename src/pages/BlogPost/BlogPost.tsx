import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Layout from '@components/Layout';
import MDXContent from '@components/MDX';
import ArticleNavigation from '@components/ArticleNavigation';
import { Props } from '@pages/blog/[slug]';
import BlogPostSEO from './BlogPost.SEO';
import {
  StyledDate,
  StyledDivider,
  StyledHeadline,
  StyledContainer,
} from './BlogPost.styled';
import AdComponent from '@components/AdComponent';
import GoBackLink from '@components/GoBackLink';

const BlogPost = ({
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
      <BlogPostSEO
        title={frontmatter?.title}
        description={frontmatter?.description}
        image={frontmatter?.image}
        slug={slug}
        createdAt={createdAt}
        updatedAt={updatedAt}
      />
      <Layout>
        <StyledContainer>
          <GoBackLink option="blog" />
          <StyledHeadline>
            <StyledDate>{frontmatter?.date}</StyledDate>
            <Typography component="h1" variant="h3">
              {frontmatter?.title}
            </Typography>
          </StyledHeadline>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} md={8}>
              <MDXContent content={content} />
              <StyledDivider />
            </Grid>
            <Grid container item xs={12} md={4} direction="column" spacing={4}>
              <Grid item>
                <ArticleNavigation
                  prev={prev}
                  next={next}
                  tags={frontmatter?.tags as unknown as string[]}
                />
              </Grid>
              <Grid item>
                <AdComponent />
              </Grid>
            </Grid>
          </Grid>
        </StyledContainer>
      </Layout>
    </>
  );
};

export default BlogPost;
