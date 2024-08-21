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
        data-ad-format="auto"
      ></ins>
    </div>
  );
};

export default AdComponent;
