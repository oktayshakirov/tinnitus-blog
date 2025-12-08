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

    const initializeAd = () => {
      if (!insRef.current) {
        return;
      }

      try {
        const insElement = insRef.current;

        // Wait for adsbygoogle to be available and element to be ready
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
              console.error('Error pushing ads in MDX AdComponent:', err);
            }
            clearInterval(intervalId);
          }
        }, 100);

        // Cleanup interval after 5 seconds if it hasn't cleared
        setTimeout(() => clearInterval(intervalId), 5000);
      } catch (e) {
        console.error('Adsbygoogle.push({}) error in MDX AdComponent:', e);
      }
    };

    // Initialize ad on mount
    // Small delay to ensure DOM is ready
    const mountTimeout = setTimeout(() => {
      initializeAd();
    }, 100);

    // Handle route changes
    const handleRouteChange = () => {
      // Reset the ad element by removing status attribute to allow re-initialization
      if (insRef.current) {
        const insElement = insRef.current;
        if (insElement.hasAttribute('data-adsbygoogle-status')) {
          insElement.removeAttribute('data-adsbygoogle-status');
        }
        // Clear content to allow fresh ad load
        insElement.innerHTML = '';
      }

      // Re-initialize after a short delay to ensure route change is complete
      setTimeout(() => {
        initializeAd();
      }, 100);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      clearTimeout(mountTimeout);
      Router.events.off('routeChangeComplete', handleRouteChange);
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
