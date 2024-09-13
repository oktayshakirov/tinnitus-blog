import { GetServerSideProps } from 'next';
import Home from '@ui/pages/Home';
import { getFeaturedPosts, getAllPosts, getAllZen } from '@lib/mdx';
import { ArticleMeta } from '@types';

type HomePageProps = {
  latestPosts: ArticleMeta[];
  latestZen: ArticleMeta[];
  featuredPosts: ArticleMeta[]; // Make sure the type here is correct
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

export const getServerSideProps: GetServerSideProps = async () => {
  const latestPosts = getAllPosts()
    .map((post) => post.meta)
    .slice(0, 3);
  const latestZen = getAllZen()
    .map((post) => post.meta)
    .slice(0, 3);
  const featuredPosts = getFeaturedPosts().map((post) => post.meta); // Ensure you're calling the function

  return {
    props: {
      latestPosts,
      latestZen,
      featuredPosts,
    },
  };
};

export default HomePage;
