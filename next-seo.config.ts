import { DefaultSeoProps } from 'next-seo';
import { DOMAIN, DOMAIN_NAME } from '@const/general';

const config: DefaultSeoProps = {
  titleTemplate: `${DOMAIN_NAME} | %s`,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: DOMAIN,
    siteName: DOMAIN_NAME,
  },
};

export default config;
