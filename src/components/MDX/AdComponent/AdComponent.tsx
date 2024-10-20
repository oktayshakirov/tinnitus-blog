import { useEffect, useRef } from 'react';

const AdComponent: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadAdsScript = () => {
      const script = document.createElement('script');
      script.src =
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5852582960793521';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.body.appendChild(script);
    };

    const initializeAds = () => {
      try {
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      } catch (e) {
        console.error('Adsbygoogle error:', e);
      }
    };

    const handleAdVisibility = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        if (typeof window !== 'undefined' && !window.adsbygoogle) {
          loadAdsScript();
        }
        initializeAds();
      }
    };

    const observer = new IntersectionObserver(handleAdVisibility, {
      threshold: 0.1,
    });

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => {
      observer.disconnect();
      const adsScript = document.querySelector('script[src*="adsbygoogle"]');
      if (adsScript) {
        document.body.removeChild(adsScript);
      }
    };
  }, []);

  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <>
      {isProduction ? (
        <div ref={adRef}>
          <ins
            className="adsbygoogle"
            style={{
              display: 'block',
              boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
              borderRadius: '25px',
              overflow: 'hidden',
            }}
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-5852582960793521"
            data-ad-slot="3845515975"
          ></ins>
        </div>
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
    </>
  );
};

export default AdComponent;
