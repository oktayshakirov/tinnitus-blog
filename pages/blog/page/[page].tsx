import { GetStaticPaths, GetStaticProps } from 'next';
import Blog from '@ui/pages/Blog';
import { getAllPosts } from '@lib/mdx';
import { ArticleMeta } from '@types';

export type Props = {
  postsMeta: ArticleMeta[];
  page: number;
  pageCount: number;
};

const POSTS_PER_PAGE = 6;

const BlogPage = (props: Props) => <Blog {...props} />;

export const getStaticPaths: GetStaticPaths = async () => {
  const postsMeta = getAllPosts().map((post) => post.meta);
  const pageCount = Math.ceil(postsMeta.length / POSTS_PER_PAGE);
  // Page 1 is built as well so the legacy /blog?page=1 redirect has a target.
  // Its canonical points back at /blog, so it will not be indexed separately.
  const paths = Array.from({ length: pageCount }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pageParam = context.params?.page as string;
  const postsMeta = getAllPosts().map((post) => post.meta);
  const pageCount = Math.ceil(postsMeta.length / POSTS_PER_PAGE);
  const page = parseInt(pageParam, 10) || 1;
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const currentPostsMeta = postsMeta.slice(start, end);

  return {
    props: {
      page,
      postsMeta: currentPostsMeta,
      pageCount,
    },
  };
};

export default BlogPage;
