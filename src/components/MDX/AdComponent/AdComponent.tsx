import { useEffect, useRef } from 'react';

const AdComponent: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isApp =
      typeof window !== 'undefined' &&
      (new URLSearchParams(window.location.search).get('isApp') === 'true' ||
        !!window.isApp ||
        localStorage.getItem('isApp') === 'true');

    if (isApp) return;

    const initializeAds = () => {
      try {
        if (window.adsbygoogle) {
          const insEl = adRef.current?.querySelector(
            'ins.adsbygoogle'
          ) as HTMLElement;
          if (insEl && !insEl.getAttribute('data-adsbygoogle-status')) {
            window.adsbygoogle.push({});
          }
        }
      } catch (e) {
        console.error('Adsbygoogle initialization error:', e);
      }
    };

    initializeAds();

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

    return () => observer.disconnect();
  }, []);

  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <div ref={adRef} style={{ position: 'relative', margin: '20px 0' }}>
      {isProduction ? (
        <ins
          className="adsbygoogle"
          style={{
            display: 'block',
            borderRadius: '25px',
            overflow: 'hidden',
            minHeight: '100px',
            height: 'auto',
            width: '100%',
            backgroundColor: '#f5f5f5',
          }}
          data-ad-layout="in-article"
          data-ad-format="fluid"
          data-ad-client="ca-pub-5852582960793521"
          data-ad-slot="3845515975"
        />
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
          Ad Example
        </div>
      )}
    </div>
  );
};

export default AdComponent;
