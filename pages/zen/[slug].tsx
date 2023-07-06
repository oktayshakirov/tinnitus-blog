import fs from 'fs';
import path from 'path';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemoteProps } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import ZenPost from '@ui/pages/ZenPost';
import rehypeSlug from 'rehype-slug';
import { getAllZen } from '@lib/mdx';
import { Article } from '@types';

export type Props = {
  content: MDXRemoteProps;
  slug: string;
  prev: Article | null;
  next: Article | null;
  createdAt: string;
  updatedAt: string;
};
const ZenPostPage = (props: Props) => <ZenPost {...props} />;

const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('content', 'zen'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.split('.')[0],
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params || {};
  const filePath = path.join('content', 'zen', slug + '.mdx');

  const zen = getAllZen();
  const zenIndex = zen.findIndex((zenPost) => zenPost.meta.slug === slug);
  const prev = zen[zenIndex - 1] || null;
  const next = zen[zenIndex + 1] || null;

  const markdown = fs.readFileSync(filePath, 'utf-8');
  const content = await serialize(markdown, {
    parseFrontmatter: true,
    scope: {},
    mdxOptions: {
      development: false,
      remarkPlugins: [],
      rehypePlugins: [rehypeSlug],
    },
  });

  const { birthtime: createdAt, mtime: updatedAt } = fs.statSync(filePath);

  return {
    props: {
      slug,
      content,
      prev,
      next,
      createdAt: createdAt.toString(),
      updatedAt: updatedAt.toString(),
    },
  };
};

export { getStaticProps, getStaticPaths };
export default ZenPostPage;
