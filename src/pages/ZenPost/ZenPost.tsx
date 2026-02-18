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
  StyledMetaRow,
} from './ZenPost.styled';
import AdComponent from '@components/AdComponent';
import GoBackLink from '@components/GoBackLink';
import ViewsCounter from '@components/ViewsCounter';
import { FaCalendarAlt } from 'react-icons/fa';
import Icon from '@components/Icon';

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
  const title = typeof frontmatter?.title === 'string' ? frontmatter.title : undefined;
  const description =
    typeof frontmatter?.description === 'string' ? frontmatter.description : undefined;
  const image = typeof frontmatter?.image === 'string' ? frontmatter.image : undefined;
  const date = typeof frontmatter?.date === 'string' ? frontmatter.date : undefined;

  return (
    <>
      <ZenPostSEO
        title={title}
        description={description}
        image={image}
        slug={slug}
        createdAt={createdAt}
        updatedAt={updatedAt}
      />
      <Layout>
        <StyledContainer>
          <GoBackLink option="zen" />
          <StyledHeadline>
            <Typography component="h1" variant="h3">
              {title}
            </Typography>
            <StyledMetaRow>
              <StyledDate>
                <Icon icon={FaCalendarAlt} />
                {date}
              </StyledDate>
              <ViewsCounter type="zen" slug={slug} />
            </StyledMetaRow>
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
