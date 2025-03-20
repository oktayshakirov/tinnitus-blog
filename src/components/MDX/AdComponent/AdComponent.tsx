import { useEffect, useRef, useState } from 'react';

const AD_CHECK_INTERVAL = 50;
const AD_TIMEOUT = 1500;

const AdComponent: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);
  const checkIntervalRef = useRef<NodeJS.Timeout>();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const [shouldRender, setShouldRender] = useState(true);
  const [adHeight, setAdHeight] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isApp =
      new URLSearchParams(window.location.search).get('isApp') === 'true' ||
      !!window.isApp ||
      localStorage.getItem('isApp') === 'true';

    if (isApp) {
      setShouldRender(false);
      return;
    }

    const cleanup = () => {
      if (checkIntervalRef.current) clearInterval(checkIntervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };

    const checkAdStatus = (insEl: HTMLElement) => {
      const status = insEl.getAttribute('data-adsbygoogle-status');
      const adStatus = insEl.getAttribute('data-ad-status');
      const hostEl = insEl.querySelector<HTMLElement>('[id^="aswift_"]');

      if (status === 'done') {
        cleanup();

        if (adStatus === 'unfilled' || !hostEl) {
          setShouldRender(false);
          return;
        }

        const height = hostEl.offsetHeight;
        if (height > 0) {
          setAdHeight(height);
        } else {
          setShouldRender(false);
        }
      }
    };

    const initializeAd = () => {
      try {
        if (!window.adsbygoogle) return;

        const insEl =
          adRef.current?.querySelector<HTMLElement>('ins.adsbygoogle');
        if (!insEl || insEl.getAttribute('data-adsbygoogle-status')) return;

        window.adsbygoogle.push({});

        checkIntervalRef.current = setInterval(() => {
          checkAdStatus(insEl);
        }, AD_CHECK_INTERVAL);

        timeoutRef.current = setTimeout(() => {
          cleanup();
          if (!adHeight) setShouldRender(false);
        }, AD_TIMEOUT);
      } catch (e) {
        console.error('Ad initialization error:', e);
        setShouldRender(false);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          initializeAd();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (adRef.current) observer.observe(adRef.current);

    return () => {
      cleanup();
      observer.disconnect();
    };
  }, [adHeight]);

  if (!shouldRender) return null;

  return (
    <div
      ref={adRef}
      style={{
        position: 'relative',
        margin: '20px 0',
        height: adHeight || 0,
        transition: 'height 0.2s ease-in-out',
      }}
    >
      {process.env.NODE_ENV === 'production' && (
        <ins
          className="adsbygoogle"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-5852582960793521"
          data-ad-slot="3845515975"
        />
      )}
    </div>
  );
};

export default AdComponent;
