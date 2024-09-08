import { DefaultSeoProps } from 'next-seo';
import { DOMAIN, DOMAIN_NAME } from '@const/general';

const config: DefaultSeoProps = {
  titleTemplate: `${DOMAIN_NAME} | %s`,
  defaultTitle: `${DOMAIN_NAME} | Your Guide to Tinnitus Relief`,
  description:
    'Discover everything you need to know about tinnitus management, treatments, and relief techniques.',
  canonical: DOMAIN,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: DOMAIN,
    siteName: DOMAIN_NAME,
    images: [
      {
        url: `${DOMAIN}/meta-image.png`,
        width: 1200,
        height: 630,
        alt: 'TinnitusHelp.me - Modern Tinnitus Management Guide',
        type: 'image/png',
      },
    ],
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content:
        'tinnitus, tinnitus relief, tinnitus management, tinnitus treatments, hearing health',
    },
    {
      name: 'author',
      content: 'TinnitusHelp.me',
    },
  ],
};

export default config;
