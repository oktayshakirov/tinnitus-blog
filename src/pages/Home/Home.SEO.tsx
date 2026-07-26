import { NextSeo } from 'next-seo';
import JsonLd from '@components/JsonLd';
import {
  DEFAULT_OG_IMAGE,
  DOMAIN,
  DOMAIN_NAME,
  TWITTER_HANDLE,
} from '@const/general';
import { breadcrumbSchema, buildGraph } from '@lib/schema';

const HomeSEO = () => {
  const title = `${DOMAIN_NAME} | Free Relief Sounds, Guides & Tinnitus App`;
  const description =
    'Living with ringing in your ears? Free masking soundscapes, an iOS and Android app, and honest, source-backed guides on what actually helps tinnitus.';
  const canonical = `${DOMAIN}`;
  const imageUrl = `${DOMAIN}${DEFAULT_OG_IMAGE}`;

  const graph = buildGraph([
    breadcrumbSchema([{ name: 'Home', url: DOMAIN }]),
  ]);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={canonical}
        openGraph={{
          url: canonical,
          title: title,
          description: description,
          images: [{ url: imageUrl, type: 'image/png' }],
          siteName: DOMAIN_NAME,
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: TWITTER_HANDLE,
        }}
      />
      <JsonLd id="home-page" data={graph} />
    </>
  );
};

export default HomeSEO;
