import React from 'react';
import AppBar from '../components/AppBar';

const MainLayout = props => (
  <div>
    <header className="appbar">
      <AppBar />
    </header>
    <main>
      {props.component}
    </main>

    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
      }
    `}</style>
  </div>
);

export default MainLayout;
