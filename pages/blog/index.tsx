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

// TODO SWITCH FROM SERVER SIDE PROPS TO STATIC
const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const postsPerPage = 10;
  const { page = 1 } = query;
  const postsMeta = getAllPosts().map((post) => post.meta);
  const pageCount = Math.ceil(postsMeta.length / postsPerPage);

  return {
    props: {
      page,
      postsMeta,
      pageCount,
    },
  };
};

export { getServerSideProps };
export default BlogPage;
