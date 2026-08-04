import { GetStaticPaths, GetStaticProps } from 'next';
import Zen from '@ui/pages/Zen';
import { getAllZen } from '@lib/mdx';
import { rankByViews } from '@lib/popularity';
import { ArticleMeta } from '@types';

export type Props = {
  zenMeta: ArticleMeta[];
  page: number;
  pageCount: number;
};

const PER_PAGE = 6;

const PopularZenPage = (props: Props) => <Zen {...props} variant="popular" />;

export const getStaticPaths: GetStaticPaths = async () => {
  const pageCount = Math.ceil(getAllZen().length / PER_PAGE);
  return {
    paths: Array.from({ length: pageCount }, (_, i) => ({
      params: { page: (i + 1).toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const ranked = rankByViews(
    getAllZen().map((item) => item.meta),
    'zen'
  );
  const page = parseInt((context.params?.page as string) ?? '1', 10) || 1;
  const start = (page - 1) * PER_PAGE;

  return {
    props: {
      page,
      zenMeta: ranked.slice(start, start + PER_PAGE),
      pageCount: Math.ceil(ranked.length / PER_PAGE),
    },
  };
};

export default PopularZenPage;
