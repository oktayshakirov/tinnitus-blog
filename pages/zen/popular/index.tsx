import { GetStaticProps } from 'next';
import Zen from '@ui/pages/Zen';
import { getAllZen } from '@lib/mdx';
import { rankByViews } from '@lib/popularity';
import { ArticleMeta } from '@types';

export type Props = {
  zenMeta: ArticleMeta[];
};

// Unpaginated, for the same reason as /blog/popular.
const TOP_COUNT = 6;

const PopularZenPage = ({ zenMeta }: Props) => (
  <Zen zenMeta={zenMeta} page={1} pageCount={1} variant="popular" />
);

export const getStaticProps: GetStaticProps = async () => {
  const ranked = rankByViews(
    getAllZen().map((item) => item.meta),
    'zen'
  );

  return {
    props: {
      zenMeta: ranked.slice(0, TOP_COUNT),
    },
  };
};

export default PopularZenPage;
