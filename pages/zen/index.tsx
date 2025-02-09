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
  const zenPerPage = 6;
  const { page = 1 } = query;
  const currentPage = Number(page);

  const zenMeta = getAllZen().map((post) => post.meta);
  const pageCount = Math.ceil(zenMeta.length / zenPerPage);
  const startIndex = (currentPage - 1) * zenPerPage;
  const endIndex = startIndex + zenPerPage;
  const currentZenMeta = zenMeta.slice(startIndex, endIndex);

  return {
    props: {
      page: currentPage,
      zenMeta: currentZenMeta,
      pageCount,
    },
  };
};

export { getServerSideProps };
export default ZenPage;
