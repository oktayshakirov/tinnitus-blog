import { GetStaticProps } from 'next';
import Home from '@ui/pages/Home';
import { getFeaturedPosts, getAllPosts, getAllZen } from '@lib/mdx';
import { rankByViews } from '@lib/popularity';
import { ArticleMeta } from '@types';

// One clean row. The homepage already carries Latest, Must Read and Zen, so
// this is a taste that sends people to /blog/popular rather than a fourth wall
// of cards.
const MOST_VIEWED_COUNT = 3;

type HomePageProps = {
  latestPosts: ArticleMeta[];
  latestZen: ArticleMeta[];
  featuredPosts: ArticleMeta[];
  mostViewedPosts: ArticleMeta[];
};

const HomePage = ({
  latestPosts,
  latestZen,
  featuredPosts,
  mostViewedPosts,
}: HomePageProps) => {
  return (
    <Home
      latestPosts={latestPosts}
      latestZen={latestZen}
      featuredPosts={featuredPosts}
      mostViewedPosts={mostViewedPosts}
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

  // Skip anything the other two rows already show, so every section on the page
  // carries something different.
  const alreadyShown = new Set([
    ...latestPosts.map((post) => post.slug),
    ...featuredPosts.map((post) => post.slug),
  ]);
  const mostViewedPosts = rankByViews(
    getAllPosts().map((post) => post.meta),
    'blog'
  )
    .filter((post) => !alreadyShown.has(post.slug))
    .slice(0, MOST_VIEWED_COUNT);

  return {
    props: {
      latestPosts,
      latestZen,
      featuredPosts,
      mostViewedPosts,
    },
  };
};

export default HomePage;
