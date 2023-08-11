import { GetServerSideProps } from 'next';
import Blog from '@ui/pages/Blog';
import { getAllPosts } from '@lib/mdx';
import { ArticleMeta } from '@types';

export type Props = {
  postsMeta: ArticleMeta[];
  page: number;
  pageCount: number;
};

const BlogPage = (props: Props) => <Blog {...props} />;

const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const postsPerPage = 6;
  const { page = 1 } = query;
  const currentPage = Number(page);

  const postsMeta = getAllPosts().map((post) => post.meta);
  const pageCount = Math.ceil(postsMeta.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPostsMeta = postsMeta.slice(startIndex, endIndex);

  return {
    props: {
      page: currentPage,
      postsMeta: currentPostsMeta,
      pageCount,
    },
  };
};

export { getServerSideProps };
export default BlogPage;
