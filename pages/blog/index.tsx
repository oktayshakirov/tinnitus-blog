import Blog from '@ui/pages/Blog';
import { getAllPosts } from '@lib/mdx';
import { ArticleMeta } from '@types';
import { GetStaticProps } from 'next';

export type Props = {
  postsMeta: ArticleMeta[];
  page: number;
  pageCount: number;
};

const POSTS_PER_PAGE = 6;

const BlogIndexPage = (props: Props) => <Blog {...props} />;

export const getStaticProps: GetStaticProps = async () => {
  const postsMeta = getAllPosts().map((post) => post.meta);
  const pageCount = Math.ceil(postsMeta.length / POSTS_PER_PAGE);
  const currentPostsMeta = postsMeta.slice(0, POSTS_PER_PAGE);

  return {
    props: {
      page: 1,
      postsMeta: currentPostsMeta,
      pageCount,
    },
  };
};

export default BlogIndexPage;
