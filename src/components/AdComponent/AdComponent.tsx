import { useEffect, useRef, useState } from 'react';

const AdComponent: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);
  const [isAdVisible, setIsAdVisible] = useState(false);

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

    const observeAdContent = () => {
      if (adRef.current) {
        const mutationObserver = new MutationObserver(() => {
          const adElement = adRef.current?.querySelector('ins.adsbygoogle');
          if (adElement && adElement.childElementCount > 0) {
            setIsAdVisible(true);
          } else {
            setIsAdVisible(false);
          }
        });

        mutationObserver.observe(adRef.current, {
          childList: true,
          subtree: true,
        });

        return () => mutationObserver.disconnect();
      }
    };

    observeAdSlot();
    const mutationObserverCleanup = observeAdContent();

    return () => {
      mutationObserverCleanup?.();
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
        <div style={{ display: isAdVisible ? 'block' : 'none' }}>
          <ins
            className="adsbygoogle"
            style={{
              display: 'block',
              boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
              borderRadius: '25px',
              overflow: 'hidden',
            }}
            data-ad-client="ca-pub-5852582960793521"
            data-ad-slot="3785001294"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </div>
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
    </div>
  );
};

export default AdComponent;
