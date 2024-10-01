import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const TermsSEO = () => {
  const title = `Terms and Conditions | ${DOMAIN_NAME}`;
  const description =
    'Review the Terms and Conditions of using TinnitusHelp.me: Understand the guidelines, legal policies, and user responsibilities when accessing our resources and services.';
  const canonical = `${DOMAIN}/terms`;
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

export default TermsSEO;
