import React from 'react';
import AppBar from 'components/AppBar';
import Footer from 'components/Footer';
import Routes from 'components/Routes';

const Layout = () => (
  <div>
    <header>
      <AppBar />
    </header>
    <main>
      <Routes />
    </main>
    <footer>
      <Footer />
    </footer>

    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 100vh;
      }

      main {
        flex: 1;
        min-height: 600px;
      }
    `}</style>
  </div>
);

export default Layout;
