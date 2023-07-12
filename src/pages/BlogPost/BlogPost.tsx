import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Layout from '@components/Layout';
import MDXContent from '@components/MDX';
import ArticleNavigation from '@components/ArticleNavigation';
import { Props } from '@pages/blog/[slug]';
import BlogPostSEO from './BlogPost.SEO';
import { StyledDate, StyledDivider, StyledHeadline } from './BlogPost.styled';

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
        <Container>
          <StyledHeadline>
            <StyledDate>{frontmatter?.date}</StyledDate>
            <Typography component="h1" variant="h3">
              {frontmatter?.title}
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

export default BlogPost;
