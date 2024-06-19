import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const BlogSEO = () => {
  const title = 'TinnitusHelp.me | Blog';
  const description =
    "Living with tinnitus can be challenging, but you're not alone. Discover valuable tips and resources to manage and cope with tinnitus. Explore treatment options, lifestyle adjustments and support. Empower yourself with comprehensive resources. Everyone's experience with tinnitus is unique. Find strategies that suit your needs.";
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
