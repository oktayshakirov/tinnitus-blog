import { GetStaticProps } from 'next';
import Blog from '@ui/pages/Blog';
import { getAllPosts } from '@lib/mdx';
import { rankByViews } from '@lib/popularity';
import { ArticleMeta } from '@types';

export type Props = {
  postsMeta: ArticleMeta[];
};

// A single, unpaginated top list. Paginating it would republish the whole blog
// under a second set of URLs holding the same posts in a different order, which
// is duplicate content Google has to resolve for us.
const TOP_COUNT = 12;

const PopularBlogPage = ({ postsMeta }: Props) => (
  <Blog postsMeta={postsMeta} page={1} pageCount={1} variant="popular" />
);

export const getStaticProps: GetStaticProps = async () => {
  const ranked = rankByViews(
    getAllPosts().map((item) => item.meta),
    'blog'
  );

  return {
    props: {
      postsMeta: ranked.slice(0, TOP_COUNT),
    },
  };
};

export default PopularBlogPage;
