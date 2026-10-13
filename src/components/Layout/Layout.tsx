import { ReactNode, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Footer from '@components/Footer';

const Header = dynamic(() => import('@components/Header'), { ssr: true });
const AppDownloadPopup = dynamic(() => import('@components/AppDownloadPopup'), {
  ssr: false,
});

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  // False on the server and on the first client render alike, so hydration
  // matches inside the app too; the real value lands right after mount. What
  // the app must never see is hidden from first paint by the `is-app` class
  // _document sets and the `.is-app .isApp` rule in _app.
  const [isApp, setIsApp] = useState(false);

  useEffect(() => {
    setIsApp(document.documentElement.classList.contains('is-app'));
  }, []);

  return (
    <>
      <div className="isApp">
        <Header />
      </div>
      <main>{children}</main>
      <Footer isApp={isApp} />
      <AppDownloadPopup isApp={isApp} />
    </>
  );
};

export default Layout;
