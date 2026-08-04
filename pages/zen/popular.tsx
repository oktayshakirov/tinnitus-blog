import Zen from '@ui/pages/Zen';
import { getAllZen } from '@lib/mdx';
import { rankByViews } from '@lib/popularity';
import { ArticleMeta } from '@types';
import { GetStaticProps } from 'next';

export type Props = {
  zenMeta: ArticleMeta[];
  page: number;
  pageCount: number;
};

const PopularZenPage = (props: Props) => <Zen {...props} variant="popular" />;

export const getStaticProps: GetStaticProps = async () => {
  const zenMeta = getAllZen().map((post) => post.meta);

  return {
    props: {
      page: 1,
      // pageCount 1 keeps the pagination control hidden - this listing is a
      // single ranked page, not a paged one.
      pageCount: 1,
      zenMeta: rankByViews(zenMeta, 'zen'),
    },
  };
};

export default PopularZenPage;
