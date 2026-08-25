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

const POSTS_PER_PAGE = 6;

const rankedPostsMeta = () =>
  rankByViews(
    getAllPosts().map((item) => item.meta),
    'blog'
  );

const PopularBlogPage = (props: Props) => <Blog {...props} variant="popular" />;

export const getStaticPaths: GetStaticPaths = async () => {
  const pageCount = Math.ceil(rankedPostsMeta().length / POSTS_PER_PAGE);
  // Page 1 is built too, so /blog/popular/page/1 resolves; its canonical
  // points back at /blog/popular and it is kept out of the sitemap.
  const paths = Array.from({ length: pageCount }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const ranked = rankedPostsMeta();
  const pageCount = Math.ceil(ranked.length / POSTS_PER_PAGE);
  const page = parseInt(context.params?.page as string, 10) || 1;
  const start = (page - 1) * POSTS_PER_PAGE;

  return {
    props: {
      page,
      postsMeta: ranked.slice(start, start + POSTS_PER_PAGE),
      pageCount,
    },
  };
};

export default PopularBlogPage;
