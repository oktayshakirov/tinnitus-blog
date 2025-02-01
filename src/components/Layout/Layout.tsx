import { ReactNode, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Footer from '@components/Footer';

const Header = dynamic(() => import('@components/Header'), { ssr: false });

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
  const [hasMounted, setHasMounted] = useState(false);
  const [isApp, setIsApp] = useState(false);

  useEffect(() => {
    const flag = getIsAppFlag();
    if (flag) {
      setIsApp(true);
      localStorage.setItem('isApp', 'true');
    }
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      {!isApp && <Header />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
