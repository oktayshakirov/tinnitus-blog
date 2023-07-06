import fs from 'fs';
import path from 'path';
import { GetStaticProps } from 'next';
import Home from '@ui/pages/Home';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import { MDXRemoteProps } from 'next-mdx-remote';

export type Props = {
  content: MDXRemoteProps;
};
const HomePage = (props: Props) => <Home {...props} />;

const getStaticProps: GetStaticProps = async () => {
  const fileName = 'index';
  const filePath = path.join('content', fileName + '.mdx');

  const markdown = fs.readFileSync(filePath, 'utf-8');

  const content = await serialize(markdown, {
    parseFrontmatter: false,
    scope: {},
    mdxOptions: {
      development: false,
      remarkPlugins: [],
      rehypePlugins: [rehypeSlug],
    },
  });

  return {
    props: {
      content,
    },
  };
};

export { getStaticProps };
export default HomePage;
