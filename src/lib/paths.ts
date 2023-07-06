import { ArticleType } from '@enums/articles';
import { kebabize } from '@lib/strings';

export const getArticlesPath = (type: ArticleType, slug?: string) => {
  const path = slug ? `/${slug}` : '';
  if (type === ArticleType.POST) return `/blog${path}`;
  if (type === ArticleType.ZEN) return `/zen${path}`;

  throw new Error('Unknown article type!');
};

export const getTagsPath = (tag?: string) => {
  if (tag) {
    tag = kebabize(tag);
  }
  const path = tag ? `/${tag}` : '';
  return `/tags${path}`;
};
