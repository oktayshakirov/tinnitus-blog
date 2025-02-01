import { ReactNode, useEffect, useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

function getIsAppFlag(): boolean {
  if (typeof window === 'undefined') return false;
  const urlParams = new URLSearchParams(window.location.search);
  return (
    urlParams.get('isApp') === 'true' ||
    !!window.isApp ||
    localStorage.getItem('isApp') === 'true'
  );
}

const Layout = ({ children }: { children: ReactNode }) => {
  const [isApp, setIsApp] = useState<boolean>(() => getIsAppFlag());

  useEffect(() => {
    const flag = getIsAppFlag();
    if (flag) {
      setIsApp(true);
      localStorage.setItem('isApp', 'true');
    }
  }, []);

  return (
    <>
      {!isApp && <Header />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
