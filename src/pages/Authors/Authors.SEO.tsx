import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const AuthorsSEO = () => {
  const title = `Authors | ${DOMAIN_NAME}`;
  const description =
    'Meet the people behind TinnitusHelp.me. Learn who writes and curates the tinnitus articles, resources and tools on this site.';
  const canonical = `${DOMAIN}/authors`;
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

export default AuthorsSEO;
