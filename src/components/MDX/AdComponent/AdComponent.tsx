import { useEffect, useRef, useState } from 'react';

const AdComponent: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    const isApp =
      typeof window !== 'undefined' &&
      (new URLSearchParams(window.location.search).get('isApp') === 'true' ||
        !!window.isApp ||
        localStorage.getItem('isApp') === 'true');

    if (isApp) {
      setIsLoading(false);
      return;
    }

    const checkAdStatus = (insEl: HTMLElement) => {
      const status = insEl.getAttribute('data-adsbygoogle-status');
      const adStatus = insEl.getAttribute('data-ad-status');
      const height = insEl.style.height;
      const minHeight = insEl.style.minHeight;

      // Check if ad is actually loaded and visible
      if (
        status === 'done' &&
        adStatus !== 'unfilled' &&
        height !== '0px' &&
        minHeight !== '0px'
      ) {
        setIsLoading(false);
        return true;
      }
      return false;
    };

    const initializeAds = () => {
      try {
        if (window.adsbygoogle) {
          const insEl = adRef.current?.querySelector(
            'ins.adsbygoogle'
          ) as HTMLElement;
          if (insEl && !insEl.getAttribute('data-adsbygoogle-status')) {
            // Clear any existing content
            insEl.innerHTML = '';

            // Set initial dimensions
            insEl.style.minHeight = '100px';
            insEl.style.height = 'auto';
            insEl.style.display = 'block';
            insEl.style.width = '100%';

            // Initialize the ad
            window.adsbygoogle.push({});

            // Set a timeout to check if the ad loaded
            setTimeout(() => {
              if (!checkAdStatus(insEl)) {
                if (retryCount < maxRetries) {
                  setRetryCount((prev) => prev + 1);
                } else {
                  setIsLoading(false);
                }
              }
            }, 2000);
          }
        } else if (retryCount < maxRetries) {
          setTimeout(() => {
            setRetryCount((prev) => prev + 1);
          }, 1000);
        } else {
          setIsLoading(false);
        }
      } catch (e) {
        console.error('Adsbygoogle initialization error:', e);
        if (retryCount < maxRetries) {
          setTimeout(() => {
            setRetryCount((prev) => prev + 1);
          }, 1000);
        } else {
          setIsLoading(false);
        }
      }
    };

    // Try to initialize immediately
    initializeAds();

    // Also set up an observer for when the ad comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && retryCount < maxRetries) {
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

    return () => {
      observer.disconnect();
    };
  }, [retryCount]);

  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <div
      ref={adRef}
      style={{
        minHeight: isLoading ? '100px' : 'auto',
        position: 'relative',
        width: '100%',
        margin: '20px 0',
      }}
    >
      {isProduction ? (
        <>
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
          {isLoading && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#666',
                fontSize: '14px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '8px 16px',
                borderRadius: '4px',
                zIndex: 1,
              }}
            >
              Loading ad...
            </div>
          )}
        </>
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
