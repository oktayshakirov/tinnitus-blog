import { useEffect, useState, useRef } from 'react';
import Router from 'next/router';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

const AdComponent: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);
  const insRef = useRef<HTMLModElement>(null);
  const isProduction = process.env.NODE_ENV === 'production';
  const [shouldRenderAd, setShouldRenderAd] = useState<boolean>(false);

  useEffect(() => {
    const appFlag =
      document.documentElement.classList.contains('is-app') ||
      localStorage.getItem('isApp') === 'true';

    if (!appFlag) {
      setShouldRenderAd(true);
    } else {
      setShouldRenderAd(false);
    }
  }, []);

  useEffect(() => {
    if (!shouldRenderAd) {
      return;
    }

    const initializeAd = () => {
      if (!insRef.current) {
        return;
      }

      try {
        const insElement = insRef.current;

        const intervalId = setInterval(() => {
          try {
            if (
              window.adsbygoogle &&
              insElement &&
              !insElement.hasAttribute('data-adsbygoogle-status')
            ) {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
              clearInterval(intervalId);
            }
          } catch (err) {
            if (process.env.NODE_ENV === 'development') {
              console.error('Error pushing ads in AdComponent:', err);
            }
            clearInterval(intervalId);
          }
        }, 100);

        setTimeout(() => clearInterval(intervalId), 10000);
      } catch (e) {
        console.error('Adsbygoogle.push({}) error in AdComponent:', e);
      }
    };

    // Listen for script load event
    const handleScriptLoad = () => {
      initializeAd();
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('adsbygoogle-loaded', handleScriptLoad);
    }

    // Initial mount
    const mountTimeout = setTimeout(() => {
      initializeAd();
    }, 100);

    const handleRouteChange = () => {
      if (insRef.current) {
        const insElement = insRef.current;
        if (insElement.hasAttribute('data-adsbygoogle-status')) {
          insElement.removeAttribute('data-adsbygoogle-status');
        }
        insElement.innerHTML = '';
      }

      setTimeout(() => {
        initializeAd();
      }, 300);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      clearTimeout(mountTimeout);
      Router.events.off('routeChangeComplete', handleRouteChange);
      if (typeof window !== 'undefined') {
        window.removeEventListener('adsbygoogle-loaded', handleScriptLoad);
      }
    };
  }, [shouldRenderAd]);

  if (!shouldRenderAd) {
    return null;
  }

  return (
    <div ref={adRef}>
      {isProduction ? (
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{
            display: 'block',
            borderRadius: '25px',
            overflow: 'hidden',
          }}
          data-ad-client="ca-pub-5852582960793521"
          data-ad-slot="3785001294"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      ) : (
        <div
          style={{
            textAlign: 'center',
            padding: '80px',
            margin: '10px 0',
            border: '1px dashed #fff',
            color: '#fff',
          }}
        >
          Ad Example (Layout)
        </div>
      )}
    </div>
  );
};

export default AdComponent;
