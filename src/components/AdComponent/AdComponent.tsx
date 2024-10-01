import { useEffect } from 'react';

const AdComponent: React.FC = () => {
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
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      } catch (e) {
        console.error('Adsbygoogle error:', e);
      }
    };

    if (typeof window !== 'undefined' && !window.adsbygoogle) {
      loadAdsScript();
    }

    initializeAds();

    return () => {
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
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
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
            margin: '10px 0 10px 0',
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
