import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const AppSEO = () => {
  const title = `TinnitusHelp.me App | ${DOMAIN_NAME}`;
  const description =
    'Discover a calmer world with TinnitusHelp.me - your personalized companion for managing tinnitus. Our app offers educational articles, relaxing soundscapes, mindfulness practices, lifestyle tips, and fun facts to help you regain control and find moments of peace.';
  const canonical = `${DOMAIN}/app`;
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

export default AppSEO;
