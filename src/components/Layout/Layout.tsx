import { ReactNode, useEffect, useState } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [isApp, setIsApp] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const isAppQuery = urlParams.get('isApp');
      if (isAppQuery === 'true' || window.isApp) {
        setIsApp(true);
        localStorage.setItem('isApp', 'true');
      } else {
        const storedIsApp = localStorage.getItem('isApp');
        if (storedIsApp === 'true') {
          setIsApp(true);
        }
      }
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
