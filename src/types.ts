import { ArticleType } from '@enums/articles';
import { ReadTimeResults } from 'reading-time';

export type ArticleMeta = {
  slug: string;
  excerpt: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  image: string;
  readingTime: ReadTimeResults;
  type: ArticleType;
};

export type Article = {
  content: string;
  meta: ArticleMeta;
};
