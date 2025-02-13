import { DefaultSeoProps } from 'next-seo';
import { DOMAIN, DOMAIN_NAME } from '@const/general';

const config: DefaultSeoProps = {
  titleTemplate: `%s`,
  canonical: DOMAIN,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: DOMAIN,
    siteName: DOMAIN_NAME,
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content:
        'tinnitus, tinnitus relief, tinnitus management, tinnitus treatments, hearing health',
    },
  ],
};

export default config;
