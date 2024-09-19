import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const HomeSEO = () => {
  const title = `${DOMAIN_NAME} | The Ultimate Guide to Tinnitus Relief`;
  const description =
    "Discover the causes, symptoms, and treatments for tinnitus in our comprehensive guide. Learn how to manage tinnitus effectively and find relief through modern strategies, expert advice, and the latest research. Whether you're new to tinnitus or seeking advanced solutions, this guide offers actionable insights to help you improve your quality of life.";
  const canonical = `${DOMAIN}`;
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

export default HomeSEO;
