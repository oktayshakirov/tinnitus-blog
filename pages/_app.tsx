import { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { Global } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import SEO_CONFIG from '../next-seo.config';
import { global } from '@theme/global';
import { theme } from '@theme/theme';
import { GA_TRACKING_ID } from '@const/general';
import * as gtag from '@lib/gtag';

const AdsWrapper = () => {
  const [isApp, setIsApp] = useState<boolean>(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const appFlag =
      urlParams.get('isApp') === 'true' ||
      !!window.isApp ||
      localStorage.getItem('isApp') === 'true';
    setIsApp(appFlag);
    if (appFlag) {
      localStorage.setItem('isApp', 'true');
    }
  }, []);
  if (isApp) return null;
  return (
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5852582960793521"
      crossOrigin="anonymous"
    />
  );
};
const DynamicAdsWrapper = dynamic(() => Promise.resolve(AdsWrapper), {
  ssr: false,
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <DefaultSeo {...SEO_CONFIG} />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <DynamicAdsWrapper />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Global styles={global} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
