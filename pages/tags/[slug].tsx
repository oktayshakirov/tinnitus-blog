import type { GetStaticPaths, GetStaticProps } from 'next';
import TagDetails from '@ui/pages/TagDetails';
import { getAllTags } from '@lib/mdx';
import { kebabize } from '@lib/strings';

export type Props = {
  slug: string;
};
const TagPage = (props: Props) => <TagDetails {...props} />;

const getStaticPaths: GetStaticPaths = async () => {
  const tags = getAllTags();

  const paths = tags.map((tag) => ({
    params: {
      slug: kebabize(tag),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params || {};

  return {
    props: {
      slug,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default TagPage;
