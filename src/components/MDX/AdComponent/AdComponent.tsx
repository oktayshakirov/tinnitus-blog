import { useEffect } from 'react';

const AdComponent: React.FC = () => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error('Adsbygoogle error:', e);
    }
  }, []);

  return (
    <>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-5852582960793521"
        data-ad-slot="3845515975"
      ></ins>
    </>
  );
};

export default AdComponent;
