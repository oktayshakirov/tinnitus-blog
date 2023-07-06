import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const BlogSEO = () => {
  const title = "The Modern Man's Handbook | Blog";
  const description =
    'Do you struggle as a man in the modern society? Level up your game now with our collection of masculinity blog posts. Learn how to build confidence, gain power and achieve success in your life.';
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
