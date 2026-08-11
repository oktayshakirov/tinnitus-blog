import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

type Props = {
  page?: number;
  variant?: 'latest' | 'popular';
};

const BlogSEO = ({ page = 1, variant = 'latest' }: Props) => {
  const popular = variant === 'popular';
  const title = popular
    ? `Most Popular Tinnitus Articles | ${DOMAIN_NAME}`
    : `${DOMAIN_NAME} Blog | Tips, Treatments & Resources for Relief`;
  const description = popular
    ? 'The most-read articles on Tinnitus Help: the guides, treatments and coping strategies our readers turn to most for tinnitus relief.'
    : 'Explore our Tinnitus Help Blog for expert advice, proven treatments, and lifestyle tips. Discover research-backed strategies to manage tinnitus relief.';
  // /blog/popular is its own curated list, so it is self-canonical rather than
  // pointing at /blog - a canonical to a page with different content is a hint
  // Google ignores, and it put the page in the sitemap as non-canonical.
  const canonical = popular
    ? `${DOMAIN}/blog/popular`
    : page === 1
    ? `${DOMAIN}/blog`
    : `${DOMAIN}/blog/page/${page}`;
  const imageUrl = `${DOMAIN}${DEFAULT_OG_IMAGE}`;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        url: canonical,
        title: title,
        description: description,
        images: [{ url: imageUrl, type: 'image/jpeg' }],
        siteName: DOMAIN_NAME,
      }}
      twitter={{
        cardType: 'summary_large_image',
        site: '@TinnitusHelp_me',
      }}
    />
  );
};

export default BlogSEO;
