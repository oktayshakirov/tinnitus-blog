import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { Global } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Nunito } from 'next/font/google';
import SEO_CONFIG from '../next-seo.config';
import { global } from '@theme/global';
import { theme } from '@theme/theme';
import { GA_TRACKING_ID } from '@const/general';
import * as gtag from '@lib/gtag';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
});

if (typeof window !== 'undefined') {
  window.adsbygoogle = window.adsbygoogle || [];
}

const AdsWrapper = () => {
  useEffect(() => {
    const appFlag = document.documentElement.classList.contains('is-app');

    if (appFlag) {
      localStorage.setItem('isApp', 'true');
    } else {
      if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
        const script = document.createElement('script');
        script.async = true;
        script.src =
          'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5852582960793521';
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }
      localStorage.removeItem('isApp');
    }
  }, []);

  return null;
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
      <style jsx global>{`
        html {
          font-family: ${nunito.style.fontFamily};
        }

        .is-app .isApp {
          display: none !important;
        }
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/fontisto@3.0.4/css/fontisto/fontisto.min.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/fontisto@3.0.4/css/fontisto/fontisto.min.css"
          media="print"
          onLoad={(e) => {
            (e.target as HTMLLinkElement).media = 'all';
          }}
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/fontisto@3.0.4/css/fontisto/fontisto.min.css"
          />
        </noscript>
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
