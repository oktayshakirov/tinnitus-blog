import TagArticlesComponent, { TagArticlesProps } from '@ui/pages/TagArticles';
import { fetchArticlesByTag, getAllTags } from '@lib/mdx';
import { kebabize } from '@lib/strings';
import { GetStaticProps, GetStaticPaths } from 'next';

export type TagPageProps = TagArticlesProps & { slug: string };

const TagPageContainer = (props: TagPageProps) => (
  <TagArticlesComponent {...props} />
);

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags();
  const articlesPerPage = 6;
  const paths: { params: { slug: string; page: string } }[] = [];
  for (const tag of tags) {
    const kebabTag = kebabize(tag);
    const allArticlesForTag = await fetchArticlesByTag(tag);
    const pageCount = Math.ceil(allArticlesForTag.length / articlesPerPage);
    for (let i = 2; i <= pageCount; i++) {
      paths.push({ params: { slug: kebabTag, page: i.toString() } });
    }
  }
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  TagPageProps,
  { slug: string; page: string }
> = async (context) => {
  const articlesPerPage = 6;
  const kebabizedTagSlug = context.params?.slug;
  const pageParam = context.params?.page;
  if (!kebabizedTagSlug || !pageParam) {
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
  const page = parseInt(pageParam, 10) || 1;
  if (page < 1 || page > pageCount) {
    return { notFound: true };
  }
  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticlesMeta = allArticlesForTag
    .slice(startIndex, endIndex)
    .map((article) => article.meta);
  return {
    props: {
      tagSlug: originalTag,
      articles: currentArticlesMeta,
      page,
      pageCount,
      slug: kebabizedTagSlug,
    },
  };
};

export default TagPageContainer;
