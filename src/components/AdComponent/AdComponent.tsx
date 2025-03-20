import { useEffect, useRef, useState } from 'react';

const AdComponent: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isApp =
      typeof window !== 'undefined' &&
      (new URLSearchParams(window.location.search).get('isApp') === 'true' ||
        !!window.isApp ||
        localStorage.getItem('isApp') === 'true');

    if (isApp) {
      setIsLoading(false);
      return;
    }

    const initializeAds = () => {
      try {
        if (window.adsbygoogle) {
          const insEl = adRef.current?.querySelector('ins.adsbygoogle');
          if (insEl && !insEl.getAttribute('data-adsbygoogle-status')) {
            window.adsbygoogle.push({});
          }
        }
      } catch (e) {
        console.error('Adsbygoogle initialization error:', e);
        setIsLoading(false);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            initializeAds();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <div ref={adRef} style={{ minHeight: isLoading ? '100px' : 'auto' }}>
      {isProduction ? (
        <>
          <ins
            className="adsbygoogle"
            style={{
              display: 'block',
              borderRadius: '25px',
              overflow: 'hidden',
              minHeight: '100px',
            }}
            data-ad-client="ca-pub-5852582960793521"
            data-ad-slot="3785001294"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
          {isLoading && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#666',
                fontSize: '14px',
              }}
            >
              Loading ad...
            </div>
          )}
        </>
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
          Ad Example
        </div>
      )}
    </div>
  );
};

export default AdComponent;
