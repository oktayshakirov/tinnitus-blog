import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';
import {
  paginatedTitle,
  paginatedDescription,
  isRedundantSortPage,
} from '@lib/pagination';

type Props = {
  page?: number;
  variant?: 'latest' | 'popular';
};

const ZenSEO = ({ page = 1, variant = 'latest' }: Props) => {
  const popular = variant === 'popular';
  const baseTitle = popular
    ? `Most Popular Sound Therapy Tracks | ${DOMAIN_NAME}`
    : `${DOMAIN_NAME} | Sound Therapy - Relaxing Sounds for Tinnitus Relief`;
  const baseDescription = popular
    ? 'The most-played sound therapy tracks on Tinnitus Help - the white noise, nature and calming sounds listeners use most to mask tinnitus.'
    : 'Discover sound therapy for tinnitus relief with calming sounds and white noise. Available on Spotify, YouTube and Apple Music to help mask tinnitus and relax.';
  const title = paginatedTitle(baseTitle, page);
  const description = paginatedDescription(baseDescription, page);
  // Self-canonical: see the note in Blog.SEO.tsx.
  const canonical = popular
    ? page === 1
      ? `${DOMAIN}/zen/popular`
      : `${DOMAIN}/zen/popular/page/${page}`
    : page === 1
    ? `${DOMAIN}/zen`
    : `${DOMAIN}/zen/page/${page}`;
  const imageUrl = `${DOMAIN}${DEFAULT_OG_IMAGE}`;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      noindex={isRedundantSortPage(variant, page)}
      nofollow={false}
      openGraph={{
        url: canonical,
        title: title,
        description: description,
        images: [{ url: imageUrl, type: 'image/jpeg' }],
        siteName: DOMAIN_NAME,
      }}
    />
  );
};

export default ZenSEO;
