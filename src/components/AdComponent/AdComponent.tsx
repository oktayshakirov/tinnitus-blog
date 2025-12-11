import { useEffect, useState, useRef, useCallback } from 'react';
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
  const checkTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    const appFlag =
      document.documentElement.classList.contains('is-app') ||
      localStorage.getItem('isApp') === 'true';
    setShouldRenderAd(!appFlag);
  }, []);

  const checkAdContent = useCallback(() => {
    const insElement = insRef.current;
    const adContainer = adRef.current;

    if (!insElement || !adContainer) {
      return;
    }

    const adStatus = insElement.getAttribute('data-adsbygoogle-status');

    if (adStatus === 'unfilled' || adStatus === 'error') {
      adContainer.style.display = 'none';
      return;
    }

    if (adStatus === 'done' || adStatus === 'filled') {
      const iframe = insElement.querySelector(
        'iframe'
      ) as HTMLIFrameElement | null;

      if (iframe) {
        if (iframe.offsetHeight === 0 && iframe.offsetWidth === 0) {
          adContainer.style.display = 'none';
          return;
        }
        adContainer.style.display = '';
        return;
      }

      if (
        !insElement.querySelector('img') &&
        !insElement.querySelector('a, div, span') &&
        insElement.innerHTML.trim().length < 50
      ) {
        adContainer.style.display = 'none';
        return;
      }

      adContainer.style.display = '';
    }
  }, []);

  const debouncedCheck = useCallback(() => {
    if (checkTimeoutRef.current) {
      clearTimeout(checkTimeoutRef.current);
    }
    checkTimeoutRef.current = setTimeout(checkAdContent, 100);
  }, [checkAdContent]);

  useEffect(() => {
    if (!shouldRenderAd) {
      return;
    }

    const initializeAd = () => {
      const insElement = insRef.current;
      if (!insElement) {
        return;
      }

      if (adRef.current) {
        adRef.current.style.display = '';
      }

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

      setTimeout(() => clearInterval(intervalId), 5000);
    };

    observerRef.current = new MutationObserver(debouncedCheck);

    if (insRef.current) {
      observerRef.current.observe(insRef.current, {
        attributes: true,
        attributeFilter: ['data-adsbygoogle-status'],
        childList: true,
        subtree: true,
      });
    }

    const mountTimeout = setTimeout(initializeAd, 100);
    const contentCheckInterval = setInterval(checkAdContent, 1000);
    const stopCheckingTimeout = setTimeout(() => {
      clearInterval(contentCheckInterval);
      checkAdContent();
    }, 8000);

    const handleRouteChange = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearInterval(contentCheckInterval);
      clearTimeout(stopCheckingTimeout);

      const insElement = insRef.current;
      if (insElement) {
        if (insElement.hasAttribute('data-adsbygoogle-status')) {
          insElement.removeAttribute('data-adsbygoogle-status');
        }
        insElement.innerHTML = '';
      }

      if (adRef.current) {
        adRef.current.style.display = '';
      }

      setTimeout(() => {
        initializeAd();
        if (insRef.current && observerRef.current) {
          observerRef.current.observe(insRef.current, {
            attributes: true,
            attributeFilter: ['data-adsbygoogle-status'],
            childList: true,
            subtree: true,
          });
        }
      }, 100);
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      clearTimeout(mountTimeout);
      clearTimeout(stopCheckingTimeout);
      if (checkTimeoutRef.current) {
        clearTimeout(checkTimeoutRef.current);
      }
      clearInterval(contentCheckInterval);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [shouldRenderAd, checkAdContent, debouncedCheck]);

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
