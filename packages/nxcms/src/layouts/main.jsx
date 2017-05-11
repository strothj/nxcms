import React from 'react';
import AppBar from 'components/AppBar';
import Footer from 'components/Footer';

const MainLayout = props => (
  <div>
    <header>
      <AppBar />
    </header>
    <main>
      {props.component}
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
      }
    `}</style>
  </div>
);

export default MainLayout;
