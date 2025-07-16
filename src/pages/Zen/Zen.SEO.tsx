import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const ZenSEO = ({ page = 1 }: { page?: number }) => {
  const title = `${DOMAIN_NAME} | Sound Therapy - Relaxing Sounds for Tinnitus Relief`;
  const description =
    'Discover sound therapy for tinnitus relief with calming sounds and white noise. Available on Spotify, YouTube and Apple Music to help mask tinnitus and relax.';
  const canonical = page === 1 ? `${DOMAIN}/zen` : `${DOMAIN}/zen/page/${page}`;
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

export default ZenSEO;
