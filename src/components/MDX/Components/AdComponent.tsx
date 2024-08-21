import { useEffect } from 'react';
interface AdsByGoogle {
  push: () => void;
}

declare global {
  interface Window {
    adsbygoogle: AdsByGoogle[];
  }
}

const AdComponent = () => {
  useEffect(() => {
    if (window.adsbygoogle && window.adsbygoogle.length > 0) {
      window.adsbygoogle[0].push();
    }
  }, []);

  return (
    <div style={{ margin: '20px 0' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="pub-5852582960793521"
        data-ad-slot="f08c47fec0942fa0"
        data-ad-format="auto"
      ></ins>
    </div>
  );
};

export default AdComponent;
