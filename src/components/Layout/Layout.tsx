import { ReactNode, useState } from 'react';
import dynamic from 'next/dynamic';
import Footer from '@components/Footer';

const Header = dynamic(() => import('@components/Header'), { ssr: true });

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [isApp] = useState<boolean>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('is-app');
    }
    return false;
  });

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <main>{children}</main>
      <Footer isApp={isApp} />
    </>
  );
};

export default Layout;
