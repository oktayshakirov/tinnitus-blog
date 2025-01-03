import { useEffect, useRef } from 'react';

const AdComponent: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadAdsScript = () => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src =
          'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5852582960793521';
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const initializeAds = () => {
      try {
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      } catch (e) {
        console.error('Adsbygoogle initialization error:', e);
      }
    };

    const setupAds = async () => {
      try {
        if (typeof window !== 'undefined' && !window.adsbygoogle) {
          await loadAdsScript();
        }
        initializeAds();
      } catch (e) {
        console.error('Ad script load error:', e);
      }
    };

    const observeAdSlot = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setupAds();
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
    };

    observeAdSlot();

    return () => {
      const adsScript = document.querySelector('script[src*="adsbygoogle"]');
      if (adsScript) {
        document.body.removeChild(adsScript);
      }
    };
  }, []);

  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <div ref={adRef}>
      {isProduction ? (
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
