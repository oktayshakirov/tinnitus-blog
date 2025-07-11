import TagArticlesComponent, { TagArticlesProps } from '@ui/pages/TagArticles';
import { fetchArticlesByTag, getAllTags } from '@lib/mdx';
import { kebabize } from '@lib/strings';
import { GetStaticProps, GetStaticPaths } from 'next';

export type TagPageProps = TagArticlesProps;

const TagPageContainer = (props: TagPageProps) => (
  <TagArticlesComponent {...props} />
);

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags();
  const paths = tags.map((tag) => ({
    params: { slug: kebabize(tag) },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  TagPageProps,
  { slug: string }
> = async (context) => {
  const articlesPerPage = 6;
  const kebabizedTagSlug = context.params?.slug;
  if (!kebabizedTagSlug) {
    return { notFound: true };
  }
  const allOriginalTags = getAllTags();
  const originalTag = allOriginalTags.find(
    (t) => kebabize(t) === kebabizedTagSlug
  );
  if (!originalTag) {
    return { notFound: true };
  }
  const allArticlesForTag = await fetchArticlesByTag(originalTag);
  const pageCount = Math.ceil(allArticlesForTag.length / articlesPerPage);
  const currentArticlesMeta = allArticlesForTag
    .slice(0, articlesPerPage)
    .map((article) => article.meta);
  return {
    props: {
      tagSlug: originalTag,
      articles: currentArticlesMeta,
      page: 1,
      pageCount,
    },
  };
};

export default TagPageContainer;
