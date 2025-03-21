import { useEffect, useRef } from 'react';

const AdComponent: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);
  const isProduction = process.env.NODE_ENV === 'production';

  useEffect(() => {
    const isApp =
      typeof window !== 'undefined' &&
      (new URLSearchParams(window.location.search).get('isApp') === 'true' ||
        !!window.isApp ||
        localStorage.getItem('isApp') === 'true');

    if (isApp || !isProduction) {
      return;
    }

    const loadAdsScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (window.adsbygoogle) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src =
          'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5852582960793521';
        script.async = true;
        script.crossOrigin = 'anonymous';
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initializeAds = () => {
      try {
        if (window.adsbygoogle && adRef.current) {
          window.adsbygoogle.push({});
        }
      } catch (e) {
        console.error('Adsbygoogle initialization error:', e);
      }
    };

    loadAdsScript()
      .then(initializeAds)
      .catch((e) => {
        console.error('Ads script loading error:', e);
      });
  }, [isProduction]);

  return (
    <div ref={adRef}>
      {isProduction ? (
        <ins
          className="adsbygoogle"
          style={{
            display: 'block',
            borderRadius: '25px',
            overflow: 'hidden',
            minHeight: '90px',
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
          Ad Example
        </div>
      )}
    </div>
  );
};

export default AdComponent;
