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
