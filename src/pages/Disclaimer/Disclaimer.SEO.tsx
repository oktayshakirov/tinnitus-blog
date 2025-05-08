import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const DisclaimerSEO = () => {
  const title = `Medical Disclaimer | ${DOMAIN_NAME}`;
  const description =
    'Important medical disclaimer for TinnitusHelp.me. This website provides informational content about tinnitus and is not a substitute for professional medical advice. Always consult healthcare providers for medical decisions.';
  const canonical = `${DOMAIN}/disclaimer`;
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

export default DisclaimerSEO;
