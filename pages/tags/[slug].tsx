import type { GetStaticPaths, GetStaticProps } from 'next';
import TagDetails from '@ui/pages/TagDetails';
import { getAllTags } from '@lib/mdx';
import { kebabize } from '@lib/strings';
import { fetchArticlesByTag } from '@lib/mdx';
import { Article } from '@types';

export type Props = {
  slug: string;
  articles: Article[];
};

const TagPage = (props: Props) => <TagDetails {...props} />;

const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags();

  const paths = tags.map((tag) => ({
    params: {
      slug: kebabize(tag),
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  if (!slug) {
    return { notFound: true };
  }

  const articles = await fetchArticlesByTag(slug);

  if (!articles || articles.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      slug,
      articles,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default TagPage;
