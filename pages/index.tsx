import { GetServerSideProps } from 'next';
import Home from '@ui/pages/Home';
import { getAllPosts, getAllZen } from '@lib/mdx';
import { ArticleMeta } from '@types';

type HomePageProps = {
  latestPosts: ArticleMeta[];
  latestZen: ArticleMeta[];
};

const HomePage = ({ latestPosts, latestZen }: HomePageProps) => {
  return <Home latestPosts={latestPosts} latestZen={latestZen} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const latestPosts = getAllPosts()
    .map((post) => post.meta)
    .slice(0, 6);
  const latestZen = getAllZen()
    .map((post) => post.meta)
    .slice(0, 3);

  return {
    props: {
      latestPosts,
      latestZen,
    },
  };
};

export default HomePage;
