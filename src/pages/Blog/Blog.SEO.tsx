import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const BlogSEO = ({ page = 1 }: { page?: number }) => {
  const title = `${DOMAIN_NAME} Blog | Tips, Treatments & Resources for Relief`;
  const description =
    'Explore our Tinnitus Help Blog for expert advice, proven treatments, and lifestyle tips. Discover research-backed strategies to manage tinnitus relief.';
  const canonical =
    page === 1 ? `${DOMAIN}/blog` : `${DOMAIN}/blog/page/${page}`;
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
