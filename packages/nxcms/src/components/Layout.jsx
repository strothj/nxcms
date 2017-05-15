import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Footer from 'components/Footer';
import Routes from 'components/Routes';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '100vh',
  },

  main: {
    flex: 1,
    minHeight: 600,
  },
};

const Layout = () => (
  <div style={styles.container}>
    <header>
      <AppBar />
    </header>
    <main style={styles.main}>
      <Routes />
    </main>
    <footer>
      <Switch>
        <Route path="/dashboard" />
        <Route component={Footer} />
      </Switch>
    </footer>
  </div>
);

export default Layout;
