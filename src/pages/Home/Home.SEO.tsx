import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const HomeSEO = () => {
  const title = `${DOMAIN_NAME} | The Ultimate Guide to Tinnitus Relief`;
  const description =
    'Discover helpful tips to manage tinnitus, reduce ringing in ears and explore sound therapies. Learn effective ways to find lasting relief.';
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
