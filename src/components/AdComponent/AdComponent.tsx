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
  const [isAdEmpty, setIsAdEmpty] = useState<boolean>(false);

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
    if (!shouldRenderAd || !insRef.current) {
      return;
    }

    const checkAdStatus = () => {
      if (!insRef.current) {
        return;
      }

      const insElement = insRef.current;
      const adStatus = insElement.getAttribute('data-adsbygoogle-status');

      if (adStatus === 'unfilled' || adStatus === 'error') {
        setIsAdEmpty(true);
        if (adRef.current) {
          adRef.current.style.display = 'none';
        }
      } else if (adStatus === 'done') {
        const hasContent =
          insElement.children.length > 0 ||
          insElement.innerHTML.trim().length > 0;
        if (!hasContent) {
          setIsAdEmpty(true);
          if (adRef.current) {
            adRef.current.style.display = 'none';
          }
        } else {
          setIsAdEmpty(false);
          if (adRef.current) {
            adRef.current.style.display = '';
          }
        }
      }
    };

    const initializeAd = () => {
      if (!insRef.current) {
        return;
      }

      try {
        const insElement = insRef.current;
        setIsAdEmpty(false);
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
      } catch (e) {
        console.error('Adsbygoogle.push({}) error in AdComponent:', e);
      }
    };

    const observer = new MutationObserver(() => {
      checkAdStatus();
    });

    if (insRef.current) {
      observer.observe(insRef.current, {
        attributes: true,
        attributeFilter: ['data-adsbygoogle-status'],
        childList: true,
        subtree: true,
      });
    }

    const mountTimeout = setTimeout(() => {
      initializeAd();
    }, 100);

    const statusCheckInterval = setInterval(() => {
      checkAdStatus();
    }, 500);

    setTimeout(() => {
      clearInterval(statusCheckInterval);
    }, 10000);

    const handleRouteChange = () => {
      observer.disconnect();
      clearInterval(statusCheckInterval);

      if (insRef.current) {
        const insElement = insRef.current;
        if (insElement.hasAttribute('data-adsbygoogle-status')) {
          insElement.removeAttribute('data-adsbygoogle-status');
        }
        insElement.innerHTML = '';
      }

      setIsAdEmpty(false);
      if (adRef.current) {
        adRef.current.style.display = '';
      }

      setTimeout(() => {
        initializeAd();
        if (insRef.current) {
          observer.observe(insRef.current, {
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
      clearInterval(statusCheckInterval);
      observer.disconnect();
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [shouldRenderAd]);

  if (!shouldRenderAd || isAdEmpty) {
    return null;
  }

  return (
    <div
      ref={adRef}
      style={{
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        margin: '10px 0',
      }}
    >
      {isProduction ? (
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{
            display: 'block',
            borderRadius: '25px',
            overflow: 'hidden',
            width: '100%',
            maxWidth: '100%',
            minHeight: '0',
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
