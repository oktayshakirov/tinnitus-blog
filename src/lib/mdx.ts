import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import readingTimeLib from 'reading-time';
import { Article } from '@types';
import { ArticleType } from '@enums/articles';

const POSTS_PATH = path.join(process.cwd(), 'content', 'posts');
const ZEN_PATH = path.join(process.cwd(), 'content', 'zen');

const getSlugs = (path: string): string[] => {
  const paths = sync(`${path}/*.mdx`);

  return paths.map((path) => {
    const parts = path.split('/');
    const fileName = parts[parts.length - 1];
    const slug = fileName.split('.')[0];
    return slug;
  });
};

export const getArticleFromSlug = (
  slug: string,
  type: ArticleType
): Article => {
  const directory = type === ArticleType.ZEN ? ZEN_PATH : POSTS_PATH;
  const articlePath = path.join(directory, `${slug}.mdx`);
  const source = fs.readFileSync(articlePath);
  const { content, data } = matter(source);
  const readingTime = readingTimeLib(content);

  return {
    content,
    meta: {
      slug,
      excerpt: data.excerpt ?? '',
      title: data.title ?? slug,
      description: data.description ?? '',
      tags: (data.tags ?? []).sort(),
      date: (data.date ?? new Date()).toString(),
      image: data.image ?? '',
      type,
      readingTime,
    },
  };
};

export const getAllPosts = (): Article[] => {
  const posts = getSlugs(POSTS_PATH)
    .map((slug) => getArticleFromSlug(slug, ArticleType.POST))
    .sort((a, b) => {
      if (new Date(a.meta.date) > new Date(b.meta.date)) return 1;
      if (new Date(a.meta.date) < new Date(b.meta.date)) return -1;
      return 0;
    })
    .reverse();
  return posts;
};

export const getAllZen = (): Article[] => {
  const zen = getSlugs(ZEN_PATH)
    .map((slug) => getArticleFromSlug(slug, ArticleType.ZEN))
    .sort((a, b) => {
      if (new Date(a.meta.date) > new Date(b.meta.date)) return 1;
      if (new Date(a.meta.date) < new Date(b.meta.date)) return -1;
      return 0;
    })
    .reverse();
  return zen;
};

export const getAllTags = (): string[] => {
  const zen = getSlugs(ZEN_PATH).map((slug) =>
    getArticleFromSlug(slug, ArticleType.ZEN)
  );
  const posts = getSlugs(POSTS_PATH).map((slug) =>
    getArticleFromSlug(slug, ArticleType.POST)
  );

  const articles = [...posts, ...zen];
  return Array.from(
    new Set(
      articles
        .reduce<string[]>((acc, article) => {
          if (article?.meta?.tags) {
            return [...acc, ...article.meta.tags];
          }
          return acc;
        }, [])
        .sort((a, b) => {
          if (a > b) return 1;
          if (a < b) return -1;
          return 0;
        })
    )
  );
};
