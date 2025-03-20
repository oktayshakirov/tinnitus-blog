import { useEffect, useRef, useState } from 'react';

const AdComponent: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);
  const initializationAttempted = useRef(false);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    const isApp =
      typeof window !== 'undefined' &&
      (new URLSearchParams(window.location.search).get('isApp') === 'true' ||
        !!window.isApp ||
        localStorage.getItem('isApp') === 'true');

    if (isApp) return;

    const checkAdStatus = (insEl: HTMLElement) => {
      const status = insEl.getAttribute('data-adsbygoogle-status');
      const adStatus = insEl.getAttribute('data-ad-status');

      if (status === 'done' && adStatus === 'unfilled') {
        setShouldShow(false);
      }
    };

    const initializeDisplayAd = () => {
      if (initializationAttempted.current) return;

      try {
        if (window.adsbygoogle) {
          const insEl = adRef.current?.querySelector(
            'ins.adsbygoogle'
          ) as HTMLElement;
          if (insEl && !insEl.getAttribute('data-adsbygoogle-status')) {
            initializationAttempted.current = true;
            window.adsbygoogle.push({});

            const checkInterval = setInterval(() => {
              if (insEl.getAttribute('data-adsbygoogle-status') === 'done') {
                checkAdStatus(insEl);
                clearInterval(checkInterval);
              }
            }, 100);

            setTimeout(() => {
              clearInterval(checkInterval);
            }, 5000);
          }
        }
      } catch (e) {
        console.error('Display ad initialization error:', e);
        setShouldShow(false);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            initializeDisplayAd();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const isProduction = process.env.NODE_ENV === 'production';

  if (!shouldShow) return null;

  return (
    <div ref={adRef} style={{ position: 'relative' }}>
      {isProduction ? (
        <ins
          className="adsbygoogle"
          style={{
            display: 'block',
            borderRadius: '25px',
            overflow: 'hidden',
            minHeight: '100px',
            height: 'auto',
          }}
          data-ad-client="ca-pub-5852582960793521"
          data-ad-slot="3785001294"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
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
          Display Ad
        </div>
      )}
    </div>
  );
};

export default AdComponent;
