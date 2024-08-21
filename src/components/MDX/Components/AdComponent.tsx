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
    if (typeof window !== 'undefined' && window.adsbygoogle) {
      // Push an empty object to the adsbygoogle array to render ads
      (window.adsbygoogle = window.adsbygoogle || []).push({});
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
