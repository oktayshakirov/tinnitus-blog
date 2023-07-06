import fs from 'fs';
import path from 'path';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemoteProps } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import BlogPost from '@ui/pages/BlogPost';
import rehypeSlug from 'rehype-slug';
import rehypeToc from 'rehype-toc';
import { getAllPosts } from '@lib/mdx';
import { Article } from '@types';

export type Props = {
  slug: string;
  content: MDXRemoteProps;
  prev: Article | null;
  next: Article | null;
  createdAt: string;
  updatedAt: string;
};
const BlogArticlePage = (props: Props) => <BlogPost {...props} />;

const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('content', 'posts'));

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
  const filePath = path.join('content', 'posts', slug + '.mdx');
  const posts = getAllPosts();
  const postIndex = posts.findIndex((post) => post.meta.slug === slug);
  const prev = posts[postIndex - 1] || null;
  const next = posts[postIndex + 1] || null;

  const markdown = fs.readFileSync(filePath, 'utf-8');
  const content = await serialize(markdown, {
    parseFrontmatter: true,
    scope: {},
    mdxOptions: {
      development: false,
      remarkPlugins: [],
      rehypePlugins: [rehypeSlug, [rehypeToc]],
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
export default BlogArticlePage;
