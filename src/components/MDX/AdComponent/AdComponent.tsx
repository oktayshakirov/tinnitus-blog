import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

const AdComponent: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);
  const isProduction = process.env.NODE_ENV === 'production';
  const [shouldRenderAd, setShouldRenderAd] = useState<boolean>(false);

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
    if (shouldRenderAd && adRef.current) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('Adsbygoogle.push({}) error in MDX AdComponent:', e);
      }
    }
  }, [shouldRenderAd]);

  if (!shouldRenderAd) {
    return null;
  }

  return (
    <div ref={adRef}>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5852582960793521"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      {isProduction ? (
        <ins
          className="adsbygoogle"
          style={{
            display: 'block',
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
          Ad Example (Content)
        </div>
      )}
    </div>
  );
};

export default AdComponent;
