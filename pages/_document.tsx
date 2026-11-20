import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            // App mode (no site header, footer, banners or ads) before first
            // paint. Only the app's WebView may keep it across page loads:
            // react-native-webview defines window.ReactNativeWebView there
            // from document start (both apps set onMessage), and never in a
            // browser. In a browser, ?isApp=true hides the chrome for that
            // one view only, and a stored flag - e.g. from opening a link
            // copied out of the app - is ignored and cleared, so the visitor
            // is not stuck without header and ads.
            __html: `
              (function() {
                var isApp = false;
                try {
                  var inWebView = !!window.ReactNativeWebView;
                  if (!inWebView) localStorage.removeItem('isApp');
                  isApp = new URLSearchParams(window.location.search).get('isApp') === 'true' ||
                    !!window.isApp ||
                    (inWebView && localStorage.getItem('isApp') === 'true');
                } catch(e) {}
                if (isApp) {
                  document.documentElement.classList.add('is-app');
                }
              })();
            `,
          }}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
