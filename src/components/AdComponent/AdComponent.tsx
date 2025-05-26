import { useEffect, useState, useRef } from 'react';

const AdComponent: React.FC = () => {
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

    const initializeRealAds = () => {
      const adSlot = adInsRef.current;
      if (
        adSlot &&
        window.adsbygoogle &&
        !adSlot.hasAttribute('data-adsbygoogle-status')
      ) {
        try {
          window.adsbygoogle.push({});
        } catch (e) {
          console.error('Adsbygoogle push error (Layout Ad):', e);
        }
      }
    };

    if (window.adsbygoogle) {
      initializeRealAds();
    } else {
      console.warn(
        'AdSense script (adsbygoogle) not found for Layout Ad in production. Ensure it is loaded globally in _app.tsx.'
      );
    }
  }, [isAppFlag, isProduction]);
  if (isAppFlag === null) {
    return null;
  }

  if (isAppFlag) {
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
          Ad Example (Layout)
        </div>
      )}
    </div>
  );
};

export default AdComponent;
