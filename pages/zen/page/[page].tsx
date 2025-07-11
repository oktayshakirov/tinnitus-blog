import { GetStaticPaths, GetStaticProps } from 'next';
import Zen from '@ui/pages/Zen';
import { getAllZen } from '@lib/mdx';
import { ArticleMeta } from '@types';

export type Props = {
  zenMeta: ArticleMeta[];
  page: number;
  pageCount: number;
};

const ZEN_PER_PAGE = 6;

const ZenPage = (props: Props) => <Zen {...props} />;

export const getStaticPaths: GetStaticPaths = async () => {
  const zenMeta = getAllZen().map((post) => post.meta);
  const pageCount = Math.ceil(zenMeta.length / ZEN_PER_PAGE);
  const paths = Array.from({ length: pageCount }, (_, i) => {
    const pageNum = i + 1;
    if (pageNum === 1) return null; // Do not generate /zen/page/1
    return { params: { page: pageNum.toString() } };
  }).filter((p): p is { params: { page: string } } => p !== null);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pageParam = context.params?.page as string;
  const zenMeta = getAllZen().map((post) => post.meta);
  const pageCount = Math.ceil(zenMeta.length / ZEN_PER_PAGE);
  const page = parseInt(pageParam, 10) || 1;
  const start = (page - 1) * ZEN_PER_PAGE;
  const end = start + ZEN_PER_PAGE;
  const currentZenMeta = zenMeta.slice(start, end);

  return {
    props: {
      page,
      zenMeta: currentZenMeta,
      pageCount,
    },
  };
};

export default ZenPage;
