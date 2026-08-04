import Blog from '@ui/pages/Blog';
import { getAllPosts } from '@lib/mdx';
import { rankByViews } from '@lib/popularity';
import { ArticleMeta } from '@types';
import { GetStaticProps } from 'next';

export type Props = {
  postsMeta: ArticleMeta[];
  page: number;
  pageCount: number;
};

const PopularBlogPage = (props: Props) => <Blog {...props} variant="popular" />;

export const getStaticProps: GetStaticProps = async () => {
  const postsMeta = getAllPosts().map((post) => post.meta);

  return {
    props: {
      page: 1,
      // pageCount 1 keeps the pagination control hidden - this listing is a
      // single ranked page, not a paged one.
      pageCount: 1,
      postsMeta: rankByViews(postsMeta, 'blog'),
    },
  };
};

export default PopularBlogPage;
