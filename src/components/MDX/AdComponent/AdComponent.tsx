import { useEffect, useRef, useState } from 'react';

const AdComponentMDX: React.FC = () => {
  const adInsRef = useRef<HTMLModElement>(null);
  const isProduction = process.env.NODE_ENV === 'production';
  const [isAppFlag, setIsAppFlag] = useState<boolean | null>(null);

  useEffect(() => {
    const isApp =
      typeof window !== 'undefined' &&
      (new URLSearchParams(window.location.search).get('isApp') === 'true' ||
        !!window.isApp ||
        localStorage.getItem('isApp') === 'true');
    setIsAppFlag(isApp);
  }, []);

  useEffect(() => {
    if (isAppFlag === null || isAppFlag || !isProduction) {
      return;
    }

    const initializeAds = () => {
      const adSlot = adInsRef.current;
      if (
        adSlot &&
        window.adsbygoogle &&
        !adSlot.hasAttribute('data-adsbygoogle-status')
      ) {
        try {
          window.adsbygoogle.push({});
        } catch (e) {
          console.error('Adsbygoogle MDX push error:', e);
        }
      }
    };

    if (window.adsbygoogle) {
      initializeAds();
    } else {
      console.warn(
        'AdSense MDX: adsbygoogle not found. Ensure it is loaded globally in _app.tsx.'
      );
    }
  }, [isAppFlag, isProduction]);

  if (isAppFlag === null || isAppFlag) {
    return null;
  }

  return (
    <div>
      {isProduction ? (
        <ins
          ref={adInsRef}
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
          Ad Example
        </div>
      )}
    </div>
  );
};

export default AdComponentMDX;
