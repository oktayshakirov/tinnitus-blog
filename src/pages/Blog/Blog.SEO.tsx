import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const BlogSEO = () => {
  const title = `${DOMAIN_NAME} | Blog - Tips, Treatments, and Resources for Tinnitus Management`;
  const description =
    'Explore our Tinnitus Help Blog for practical tips, treatments, and expert advice. Find relief with research-backed strategies, lifestyle tips, and proven solutions to manage tinnitus.';
  const canonical = `${DOMAIN}/blog`;
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
    />
  );
};

export default BlogSEO;
