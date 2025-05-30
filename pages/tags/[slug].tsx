import type { GetStaticPaths, GetStaticProps } from 'next';
import TagArticlesComponent from '@ui/pages/TagArticles';
import { getAllTags, fetchArticlesByTag } from '@lib/mdx';
import { kebabize } from '@lib/strings';
import { ArticleMeta } from '@types';

const ARTICLES_PER_PAGE = 6;

export type TagPageProps = {
  tagSlug: string;
  articles: ArticleMeta[];
  page: number;
  pageCount: number;
};

const TagPageContainer = (props: TagPageProps) => (
  <TagArticlesComponent {...props} />
);

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags();
  const paths = [];

  for (const tag of tags) {
    const articlesForTag = await fetchArticlesByTag(tag);
    const pageCount = Math.ceil(articlesForTag.length / ARTICLES_PER_PAGE);
    const kebabizedTag = kebabize(tag);

    paths.push({ params: { slug: kebabizedTag } });

    for (let i = 2; i <= pageCount; i++) {
      paths.push({ params: { slug: `${kebabizedTag}--page-${i}` } });
    }
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  TagPageProps,
  { slug: string }
> = async (context) => {
  const combinedSlug = context.params?.slug as string;

  if (!combinedSlug) {
    return { notFound: true };
  }

  let pageSpecificTagSlug: string;
  let page: number;

  if (combinedSlug.includes('--page-')) {
    const parts = combinedSlug.split('--page-');
    pageSpecificTagSlug = parts[0];
    page = parseInt(parts[1], 10);
  } else {
    pageSpecificTagSlug = combinedSlug;
    page = 1;
  }

  const allOriginalTags = getAllTags();
  const originalTag = allOriginalTags.find(
    (t) => kebabize(t) === pageSpecificTagSlug
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

  const pageCount = Math.ceil(allArticlesForTag.length / ARTICLES_PER_PAGE);

  if (
    page < 1 ||
    (page > pageCount && pageCount > 0) ||
    (page > 1 && pageCount === 0)
  ) {
    return { notFound: true };
  }

  const startIndex = (page - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
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
