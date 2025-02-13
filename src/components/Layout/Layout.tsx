import { ReactNode, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Footer from '@components/Footer';

const Header = dynamic(() => import('@components/Header'), { ssr: true });

function getIsAppFlag(): boolean {
  if (typeof window === 'undefined') return false;
  const urlParams = new URLSearchParams(window.location.search);
  return (
    urlParams.get('isApp') === 'true' ||
    !!window.isApp ||
    localStorage.getItem('isApp') === 'true'
  );
}

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [isApp, setIsApp] = useState(false);

  useEffect(() => {
    const flag = getIsAppFlag();
    if (flag) {
      setIsApp(true);
      localStorage.setItem('isApp', 'true');
    }
  }, []);

  return (
    <>
      <div className={isApp ? 'header-hidden' : ''}>
        <Header />
      </div>
      <main>{children}</main>
      <Footer isApp={isApp} />
    </>
  );
};

export default Layout;
