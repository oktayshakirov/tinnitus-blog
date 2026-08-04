import { GetStaticPaths, GetStaticProps } from 'next';
import Blog from '@ui/pages/Blog';
import { getAllPosts } from '@lib/mdx';
import { rankByViews } from '@lib/popularity';
import { ArticleMeta } from '@types';

export type Props = {
  postsMeta: ArticleMeta[];
  page: number;
  pageCount: number;
};

const PER_PAGE = 6;

const PopularBlogPage = (props: Props) => <Blog {...props} variant="popular" />;

export const getStaticPaths: GetStaticPaths = async () => {
  const pageCount = Math.ceil(getAllPosts().length / PER_PAGE);
  return {
    paths: Array.from({ length: pageCount }, (_, i) => ({
      params: { page: (i + 1).toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const ranked = rankByViews(
    getAllPosts().map((item) => item.meta),
    'blog'
  );
  const page = parseInt((context.params?.page as string) ?? '1', 10) || 1;
  const start = (page - 1) * PER_PAGE;

  return {
    props: {
      page,
      postsMeta: ranked.slice(start, start + PER_PAGE),
      pageCount: Math.ceil(ranked.length / PER_PAGE),
    },
  };
};

export default PopularBlogPage;
