import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const AboutSEO = () => {
  const title = `About Us | ${DOMAIN_NAME}`;
  const description =
    'Learn more about TinnitusHelp.me, our mission and the team behind our tinnitus resources. We are dedicated to providing support and reliable information to help manage tinnitus effectively.';
  const canonical = `${DOMAIN}/about`;
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

export default AboutSEO;
