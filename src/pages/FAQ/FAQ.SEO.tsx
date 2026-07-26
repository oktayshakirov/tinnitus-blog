import { NextSeo } from 'next-seo';
import JsonLd from '@components/JsonLd';
import {
  DEFAULT_OG_IMAGE,
  DOMAIN,
  DOMAIN_NAME,
  TWITTER_HANDLE,
} from '@const/general';
import { SITE_FAQ } from '@const/faq';
import { breadcrumbSchema, buildGraph, faqSchema } from '@lib/schema';

const FAQSEO = () => {
  const title = 'Tinnitus FAQ: Straight Answers to 10 Common Questions';
  const description =
    'Does white noise help? Is tinnitus hereditary? Can it be cured? Clear, source-backed answers to the questions people ask most about tinnitus.';
  const canonical = `${DOMAIN}/faq`;
  const imageUrl = `${DOMAIN}${DEFAULT_OG_IMAGE}`;

  const graph = buildGraph([
    faqSchema(
      SITE_FAQ.map(({ question, answer }) => ({ question, answer }))
    ),
    breadcrumbSchema([
      { name: 'Home', url: DOMAIN },
      { name: 'FAQ', url: canonical },
    ]),
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
      <JsonLd id="faq-page" data={graph} />
    </>
  );
};

export default FAQSEO;
