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

    const checkAdContent = () => {
      const insElement = insRef.current;
      const adContainer = adRef.current;
      if (!insElement || !adContainer) return;

      const adStatus =
        insElement.getAttribute('data-ad-status') ||
        insElement.getAttribute('data-adsbygoogle-status');

      if (adStatus === 'unfilled' || adStatus === 'error') {
        adContainer.style.display = 'none';
        return;
      }

      if (adStatus === 'filled' || adStatus === 'done') {
        const iframe = insElement.querySelector(
          'iframe'
        ) as HTMLIFrameElement | null;
        const hasValidIframe =
          iframe &&
          iframe.offsetHeight > 0 &&
          iframe.offsetWidth > 0 &&
          (iframe.getAttribute('src') || '').length > 10;

        const hasContent =
          hasValidIframe ||
          insElement.querySelector('img') ||
          insElement.querySelector('a') ||
          insElement.querySelector('[id^="aswift_"]');

        adContainer.style.display = hasContent ? '' : 'none';
      }
    };

    const initializeAd = () => {
      if (!insRef.current) return;

      const insElement = insRef.current;
      const intervalId = setInterval(() => {
        if (
          window.adsbygoogle &&
          insElement &&
          !insElement.hasAttribute('data-adsbygoogle-status') &&
          !insElement.hasAttribute('data-ad-status')
        ) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            clearInterval(intervalId);
          } catch (err) {
            if (process.env.NODE_ENV === 'development') {
              console.error('Error pushing ads:', err);
            }
            clearInterval(intervalId);
          }
        }
      }, 100);

      setTimeout(() => clearInterval(intervalId), 5000);
    };

    const observer = new MutationObserver(checkAdContent);
    if (insRef.current) {
      observer.observe(insRef.current, {
        attributes: true,
        attributeFilter: ['data-ad-status', 'data-adsbygoogle-status'],
        childList: true,
        subtree: true,
      });
    }

    const mountTimeout = setTimeout(initializeAd, 100);
    const checkTimeout = setTimeout(checkAdContent, 3000);

    const handleRouteChange = () => {
      observer.disconnect();
      clearTimeout(checkTimeout);
      if (insRef.current) {
        insRef.current.innerHTML = '';
      }
      setTimeout(() => {
        initializeAd();
        if (insRef.current) {
          observer.observe(insRef.current, {
            attributes: true,
            attributeFilter: ['data-ad-status', 'data-adsbygoogle-status'],
            childList: true,
            subtree: true,
          });
        }
      }, 100);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      clearTimeout(mountTimeout);
      clearTimeout(checkTimeout);
      observer.disconnect();
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
