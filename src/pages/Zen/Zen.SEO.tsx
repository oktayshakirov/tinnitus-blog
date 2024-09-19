import { NextSeo } from 'next-seo';
import { DEFAULT_OG_IMAGE, DOMAIN, DOMAIN_NAME } from '@const/general';

const ZenSEO = () => {
  const title = `${DOMAIN_NAME} | Sound Therapy - Relaxing Sounds for Tinnitus Relief`;
  const description =
    "Sound therapy designed to relieve tinnitus symptoms. Explore calming sounds and therapeutic audio to help mask tinnitus and promote relaxation. Whether you're looking for white noise, nature sounds, or specialized tinnitus relief tones, our collection offers effective solutions to enhance your well-being.";
  const canonical = `${DOMAIN}/zen`;
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
