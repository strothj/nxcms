import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardAppBar from './Dashboard/DashboardAppBar';
import BlogAppBar from './Blog/BlogAppBar';
import AuthenticationDialog from './AuthenticationDialog';
import Footer from './Footer';
import Routes from './Routes';

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
    <AuthenticationDialog />
    <header>
      <Switch>
        <Route path="/dashboard" component={DashboardAppBar} />
        <Route component={BlogAppBar} />
      </Switch>
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
