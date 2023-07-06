import { GetServerSideProps } from 'next';
import Zen from '@ui/pages/Zen';
import { getAllZen } from '@lib/mdx';
import { ArticleMeta } from '@types';

export type Props = {
  zenMeta: ArticleMeta[];
  page: number;
  pageCount: number;
};

const ZenPage = (props: Props) => <Zen {...props} />;

const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const zenPerPage = 10;
  const { page = 1 } = query;
  const zenMeta = getAllZen().map((post) => post.meta);
  const pageCount = Math.ceil(zenMeta.length / zenPerPage);

  return {
    props: {
      page,
      zenMeta,
      pageCount,
    },
  };
};

export { getServerSideProps };
export default ZenPage;
