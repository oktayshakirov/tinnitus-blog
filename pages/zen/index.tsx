import Zen from '@ui/pages/Zen';
import { getAllZen } from '@lib/mdx';
import { ArticleMeta } from '@types';
import { GetStaticProps } from 'next';

export type Props = {
  zenMeta: ArticleMeta[];
  page: number;
  pageCount: number;
};

const ZEN_PER_PAGE = 6;

const ZenPage = (props: Props) => <Zen {...props} />;

export const getStaticProps: GetStaticProps = async () => {
  const zenMeta = getAllZen().map((post) => post.meta);
  const pageCount = Math.ceil(zenMeta.length / ZEN_PER_PAGE);
  const currentZenMeta = zenMeta.slice(0, ZEN_PER_PAGE);

  return {
    props: {
      page: 1,
      zenMeta: currentZenMeta,
      pageCount,
    },
  };
};

export default ZenPage;
