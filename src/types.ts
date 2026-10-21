import { ArticleType } from '@enums/articles';

export type ArticleMeta = {
  slug: string;
  excerpt: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  image: string;
  type: ArticleType;
  featured: boolean;
};

export type Article = {
  content: string;
  meta: ArticleMeta;
};

declare global {
  interface Window {
    adsbygoogle: unknown[];
    ReactNativeWebView?: {
      postMessage: (message: string) => void;
    };
    isApp?: boolean;
  }
}
