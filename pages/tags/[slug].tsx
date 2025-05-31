import type { GetServerSideProps } from 'next';
import TagArticlesComponent, { TagArticlesProps } from '@ui/pages/TagArticles';
import { fetchArticlesByTag, getAllTags } from '@lib/mdx';
import { kebabize } from '@lib/strings';

export type TagPageProps = TagArticlesProps;

const TagPageContainer = (props: TagPageProps) => (
  <TagArticlesComponent {...props} />
);

export const getServerSideProps: GetServerSideProps<
  TagPageProps,
  { slug: string }
> = async (context) => {
  const articlesPerPage = 6;

  const kebabizedTagSlug = context.params?.slug;
  if (!kebabizedTagSlug) {
    return { notFound: true };
  }

  const page = Number(context.query.page) || 1;

  const allOriginalTags = getAllTags();
  const originalTag = allOriginalTags.find(
    (t) => kebabize(t) === kebabizedTagSlug
  );

  if (!originalTag) {
    return { notFound: true };
  }

  const allArticlesForTag = await fetchArticlesByTag(originalTag);

  if (!allArticlesForTag) {
    return {
      props: {
        tagSlug: originalTag,
        articles: [],
        page: 1,
        pageCount: 0,
      },
    };
  }

  const pageCount = Math.ceil(allArticlesForTag.length / articlesPerPage);

  if (
    page < 1 ||
    (pageCount > 0 && page > pageCount) ||
    (pageCount === 0 && page > 1)
  ) {
    if (pageCount > 0 && (page < 1 || page > pageCount)) {
      return {
        redirect: {
          destination: `/tags/${kebabizedTagSlug}`,
          permanent: false,
        },
      };
    }
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
    },
  };
};

export default TagPageContainer;
