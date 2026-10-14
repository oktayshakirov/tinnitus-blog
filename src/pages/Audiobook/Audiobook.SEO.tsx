import { NextSeo } from 'next-seo';
import JsonLd from '@components/JsonLd';
import { DOMAIN, DOMAIN_NAME } from '@const/general';
import { AUDIOBOOK } from '@const/audiobook';

const AudiobookSEO = () => {
  const title = `${AUDIOBOOK.title} | Audiobook | ${DOMAIN_NAME}`;
  const description =
    'A 58 minute audiobook on why your ears ring, why it gets louder, and how to stop it running your life. No cure promises, no supplements to buy, every claim sourced. Listen on Spotify or Google Play Books.';
  const canonical = `${DOMAIN}/audiobook`;
  const imageUrl = `${DOMAIN}${AUDIOBOOK.ogImage}`;

  // Audiobook rather than a bare WebPage: it is a product with an author, a
  // narrator and a runtime, and those are the fields a search result can show.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Audiobook',
    name: AUDIOBOOK.title,
    alternateName: `${AUDIOBOOK.title}: ${AUDIOBOOK.subtitle}`,
    description,
    url: canonical,
    image: imageUrl,
    bookFormat: 'https://schema.org/AudiobookFormat',
    inLanguage: 'en',
    datePublished: AUDIOBOOK.released,
    numberOfPages: AUDIOBOOK.chapters,
    duration: 'PT58M',
    author: { '@type': 'Person', name: AUDIOBOOK.author },
    readBy: { '@type': 'Person', name: AUDIOBOOK.narrator },
    publisher: { '@type': 'Organization', name: DOMAIN_NAME, url: DOMAIN },
    about: { '@type': 'MedicalCondition', name: 'Tinnitus' },
    offers: [AUDIOBOOK.spotify, AUDIOBOOK.googlePlay].map((url) => ({
      '@type': 'Offer',
      url,
      price: AUDIOBOOK.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    })),
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title,
          description,
          type: 'book',
          images: [{ url: imageUrl, type: 'image/jpeg' }],
          siteName: DOMAIN_NAME,
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@TinnitusHelp_me',
        }}
      />
      <JsonLd id="audiobook-schema" data={schema} />
    </>
  );
};

export default AudiobookSEO;
