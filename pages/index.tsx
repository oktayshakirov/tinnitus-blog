import { GetStaticProps } from 'next';
import Home from '@ui/pages/Home';
import { getFeaturedPosts, getAllPosts, getAllZen } from '@lib/mdx';
import { ArticleMeta } from '@types';

type HomePageProps = {
  latestPosts: ArticleMeta[];
  latestZen: ArticleMeta[];
  featuredPosts: ArticleMeta[];
};

const HomePage = ({ latestPosts, latestZen, featuredPosts }: HomePageProps) => {
  return (
    <Home
      latestPosts={latestPosts}
      latestZen={latestZen}
      featuredPosts={featuredPosts}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const latestPosts = getAllPosts()
    .map((post) => post.meta)
    .slice(0, 6);
  const latestZen = getAllZen()
    .map((post) => post.meta)
    .slice(0, 6);
  const featuredPosts = getFeaturedPosts().map((post) => post.meta);

  return {
    props: {
      latestPosts,
      latestZen,
      featuredPosts,
    },
  };
};

export default HomePage;
