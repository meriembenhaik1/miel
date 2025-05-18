import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="pt-28 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;