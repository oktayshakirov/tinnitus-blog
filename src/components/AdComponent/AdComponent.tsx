import { useAdSlot, useAdsEnabled } from '@lib/useAdSlot';

const AdComponent: React.FC = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const shouldRenderAd = useAdsEnabled();
  const insRef = useAdSlot({ enabled: shouldRenderAd });

  if (!shouldRenderAd) {
    return null;
  }

  return (
    <div>
      {isProduction ? (
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{
            display: 'block',
            width: '100%',
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
