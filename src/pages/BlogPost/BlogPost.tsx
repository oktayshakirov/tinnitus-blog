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
  StyledMetaRow,
} from './BlogPost.styled';
import AdComponent from '@components/AdComponent';
import GoBackLink from '@components/GoBackLink';
import ViewsCounter from '@components/ViewsCounter';
import AuthorByline from '@components/AuthorByline';
import FaqSection from '@components/FaqSection';
import References, { Source } from '@components/References';
import MedicalDisclaimer from '@components/MedicalDisclaimer';
import { getDefaultAuthor } from '@const/authors';
import { FaCalendarAlt } from 'react-icons/fa';
import Icon from '@components/Icon';
import { FaqItem } from '@lib/schema';

const asString = (value: unknown): string | undefined =>
  typeof value === 'string' ? value : undefined;

const asFaq = (value: unknown): FaqItem[] =>
  Array.isArray(value)
    ? value.filter(
        (item): item is FaqItem =>
          !!item &&
          typeof item.question === 'string' &&
          typeof item.answer === 'string'
      )
    : [];

const asSources = (value: unknown): Source[] =>
  Array.isArray(value)
    ? value.filter(
        (item): item is Source =>
          !!item && typeof item.title === 'string' && typeof item.url === 'string'
      )
    : [];

const BlogPost = ({
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
  const title = asString(frontmatter?.title);
  const description = asString(frontmatter?.description);
  const image = asString(frontmatter?.image);
  const date = asString(frontmatter?.date);
  const tags = (frontmatter?.tags as unknown as string[]) ?? [];
  const faq = asFaq(frontmatter?.faq);
  const sources = asSources(frontmatter?.sources);
  // Health content is the default here; culture/history posts opt out.
  const medical = frontmatter?.medical !== false;
  const author = getDefaultAuthor();

  return (
    <>
      <BlogPostSEO
        title={title}
        description={description}
        image={image}
        slug={slug}
        createdAt={createdAt}
        updatedAt={updatedAt}
        tags={tags}
        faq={faq}
        medical={medical}
      />
      <Layout>
        <StyledContainer>
          <GoBackLink option="blog" />
          <StyledHeadline>
            <Typography component="h1" variant="h3">
              {title}
            </Typography>
            <StyledMetaRow>
              <StyledDate>
                <Icon icon={FaCalendarAlt} />
                {date}
              </StyledDate>
              <ViewsCounter type="blog" slug={slug} />
            </StyledMetaRow>
          </StyledHeadline>
          <Grid container spacing={{ xs: 2, md: 4 }}>
            <Grid item xs={12} md={8}>
              <MDXContent content={content} />
              <FaqSection faq={faq} />
              <References sources={sources} />
              {medical && <MedicalDisclaimer />}
              <StyledDivider />
              <AuthorByline author={author} date={date} />
              <StyledDivider />
            </Grid>
            <Grid container item xs={12} md={4} direction="column" spacing={4}>
              <Grid item>
                <ArticleNavigation
                  prev={prev}
                  next={next}
                  tags={tags}
                  blogRecommendations={blogRecommendations}
                  zenRecommendations={zenRecommendations}
                />
              </Grid>
            </Grid>
          </Grid>
          <AdComponent />
        </StyledContainer>
      </Layout>
    </>
  );
};

export default BlogPost;
