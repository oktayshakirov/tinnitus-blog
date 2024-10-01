import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const PrivacySEO = () => {
  const title = `Privacy Policy | ${DOMAIN_NAME}`;
  const description =
    'Read our Privacy Policy to learn how TinnitusHelp.me collects, uses and protects your personal information. We prioritize your privacy and ensure transparency in our data practices.';
  const canonical = `${DOMAIN}/privacy`;
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

export default PrivacySEO;
