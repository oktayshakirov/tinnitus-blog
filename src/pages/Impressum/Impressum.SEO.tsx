import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const ImpressumSEO = () => {
  const title = `Impressum / Legal Notice | ${DOMAIN_NAME}`;
  const description = `Legal notice (Impressum) for ${DOMAIN_NAME}, including the site operator, contact details, and the person responsible for editorial content under section 18 MStV.`;
  const canonical = `${DOMAIN}/impressum`;
  const imageUrl = `${DOMAIN}${DEFAULT_OG_IMAGE}`;

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      // Reachable and fully readable on the site as required by section 5 DDG,
      // but kept out of search results so the operator's postal address is not
      // surfaced by name.
      noindex
      nofollow={false}
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

export default ImpressumSEO;
