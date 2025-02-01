import { ReactNode, useEffect, useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [isApp, setIsApp] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.ReactNativeWebView) {
      setIsApp(true);
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
