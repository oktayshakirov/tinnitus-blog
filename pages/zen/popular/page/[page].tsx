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

const ZEN_PER_PAGE = 6;

const rankedZenMeta = () =>
  rankByViews(
    getAllZen().map((item) => item.meta),
    'zen'
  );

const PopularZenPage = (props: Props) => <Zen {...props} variant="popular" />;

export const getStaticPaths: GetStaticPaths = async () => {
  const pageCount = Math.ceil(rankedZenMeta().length / ZEN_PER_PAGE);
  // Page 1 is built too, so /zen/popular/page/1 resolves; its canonical
  // points back at /zen/popular and it is kept out of the sitemap.
  const paths = Array.from({ length: pageCount }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const ranked = rankedZenMeta();
  const pageCount = Math.ceil(ranked.length / ZEN_PER_PAGE);
  const page = parseInt(context.params?.page as string, 10) || 1;
  const start = (page - 1) * ZEN_PER_PAGE;

  return {
    props: {
      page,
      zenMeta: ranked.slice(start, start + ZEN_PER_PAGE),
      pageCount,
    },
  };
};

export default PopularZenPage;
