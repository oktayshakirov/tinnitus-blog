import { useEffect, useState, useRef } from 'react';

const AdComponent: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);
  const isProduction = process.env.NODE_ENV === 'production';
  const [shouldRenderAd, setShouldRenderAd] = useState<boolean>(false);

  useEffect(() => {
    const appFlag =
      document.documentElement.classList.contains('is-app') ||
      localStorage.getItem('isApp') === 'true';

    if (!appFlag && isProduction) {
      setShouldRenderAd(true);
    } else {
      setShouldRenderAd(false);
    }
  }, [isProduction]);

  useEffect(() => {
    if (shouldRenderAd && adRef.current) {
      try {
        if (typeof window.adsbygoogle !== 'undefined') {
          window.adsbygoogle.push({});
        } else {
          console.warn(
            'AdSense script not yet loaded, ad will not be pushed by AdComponent.'
          );
        }
      } catch (e) {
        console.error('Adsbygoogle.push({}) error in AdComponent:', e);
      }
    }
  }, [shouldRenderAd]);

  if (!shouldRenderAd) {
    return null;
  }

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
          Ad Example (Layout AdComponent)
        </div>
      )}
    </div>
  );
};

export default AdComponent;
