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
import localFont from 'next/font/local';
import SEO_CONFIG from '../next-seo.config';
import { global } from '@theme/global';
import { theme } from '@theme/theme';
import { GA_TRACKING_ID } from '@const/general';
import * as gtag from '@lib/gtag';
import JsonLd from '@components/JsonLd';
import { buildGraph, organizationSchema, websiteSchema } from '@lib/schema';

const SITE_GRAPH = buildGraph([organizationSchema(), websiteSchema()]);

// Committed rather than fetched by next/font/google at build time: that fetch
// failed two crypto-wiki production builds in a row on 2026-10-06. Google's
// Nunito v32 latin variable font, the full 200-1000 range it served before.
const nunito = localFont({
  src: '../src/fonts/nunito-latin.woff2',
  weight: '200 1000',
  display: 'swap',
});

// Remembers the app across full reloads that drop the ?isApp=true flag. The
// AdSense library is loaded by the first ad slot that needs it (useAdSlot).
const AppFlag = () => {
  useEffect(() => {
    if (document.documentElement.classList.contains('is-app')) {
      localStorage.setItem('isApp', 'true');
    } else {
      localStorage.removeItem('isApp');
    }
  }, []);

  return null;
};

const DynamicAppFlag = dynamic(() => Promise.resolve(AppFlag), {
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
      <JsonLd id="site-graph" data={SITE_GRAPH} />
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
      <DynamicAppFlag />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Global styles={global} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
