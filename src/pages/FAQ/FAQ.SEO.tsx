import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const FAQSEO = () => {
  const title = `FAQ | ${DOMAIN_NAME}`;
  const description =
    'Find answers to common questions about tinnitus, treatments and our services. Our FAQ page provides helpful information to guide you through tinnitus management and relief.';
  const canonical = `${DOMAIN}/faq`;
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

export default FAQSEO;
