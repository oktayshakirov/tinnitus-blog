import { useEffect, useRef, useState } from 'react';
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

    // Check if adsbygoogle script is loaded and ready
    const isAdSenseReady = (): boolean => {
      return (
        typeof window !== 'undefined' &&
        window.adsbygoogle &&
        Array.isArray(window.adsbygoogle) &&
        document.querySelector('script[src*="adsbygoogle.js"]') !== null
      );
    };

    const initializeAd = () => {
      if (!insRef.current) {
        return;
      }

      try {
        const insElement = insRef.current;

        // Check if ad is already initialized
        if (insElement.hasAttribute('data-adsbygoogle-status')) {
          return;
        }

        // Wait for AdSense script to be ready
        const checkAndInitialize = () => {
          if (!isAdSenseReady()) {
            return false;
          }

          try {
            if (
              insElement &&
              !insElement.hasAttribute('data-adsbygoogle-status')
            ) {
              (window.adsbygoogle = window.adsbygoogle || []).push({});
              return true;
            }
          } catch (err) {
            if (process.env.NODE_ENV === 'development') {
              console.error('Error pushing ads in MDX AdComponent:', err);
            }
          }
          return false;
        };

        // Try immediately if ready
        if (checkAndInitialize()) {
          return;
        }

        // Otherwise poll until ready
        let attempts = 0;
        const maxAttempts = 50; // 5 seconds max (50 * 100ms)
        const intervalId = setInterval(() => {
          attempts++;
          if (checkAndInitialize() || attempts >= maxAttempts) {
            clearInterval(intervalId);
          }
        }, 100);
      } catch (e) {
        console.error('Adsbygoogle.push({}) error in MDX AdComponent:', e);
      }
    };

    // Listen for script load event
    const handleScriptLoad = () => {
      initializeAd();
    };

    window.addEventListener('adsbygoogle-loaded', handleScriptLoad);

    // Initial mount - wait a bit for DOM to be ready
    const mountTimeout = setTimeout(() => {
      initializeAd();
    }, 300);

    const handleRouteChange = () => {
      if (insRef.current) {
        const insElement = insRef.current;
        
        // Reset the ad element state
        if (insElement.hasAttribute('data-adsbygoogle-status')) {
          insElement.removeAttribute('data-adsbygoogle-status');
        }
        insElement.innerHTML = '';
      }

      // Wait longer for route change to ensure DOM is ready and script is loaded
      setTimeout(() => {
        initializeAd();
      }, 500);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      clearTimeout(mountTimeout);
      Router.events.off('routeChangeComplete', handleRouteChange);
      window.removeEventListener('adsbygoogle-loaded', handleScriptLoad);
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
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-5852582960793521"
          data-ad-slot="3845515975"
        ></ins>
      ) : (
        <div
          style={{
            textAlign: 'center',
            padding: '80px',
            marginTop: '10px',
            border: '1px dashed #fff',
            color: '#fff',
          }}
        >
          Ad Example (Content)
        </div>
      )}
    </div>
  );
};

export default AdComponent;
