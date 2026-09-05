import { NextSeo } from 'next-seo';
import { DOMAIN, DOMAIN_NAME } from '@const/general';

const NotFoundSEO = () => {
  const title = `Page Not Found | ${DOMAIN_NAME}`;
  const description =
    "The page you're looking for doesn't exist or may have moved.";
  const canonical = `${DOMAIN}/404`;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      noindex
      nofollow
    />
  );
};

export default NotFoundSEO;
