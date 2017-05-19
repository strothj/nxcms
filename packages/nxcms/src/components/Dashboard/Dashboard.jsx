import Radium from 'radium';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { breakpoints } from 'styles';
import Container from '../Container';
import Drawer from './Drawer';
import Profile from './Profile';
import ProfileEditDialog from './ProfileEditDialog';
import Posts from './Posts';
import FloatingActionButtons from './FloatingActionButtons';

const styles = {
  main: {
    paddingTop: 70 /* App Bar */ + 48,
    marginBottom: 64,
    [`@media ${breakpoints.tablet}`]: {
      marginLeft: 256,
    },
  },
};

const Dashboard = () => (
  <div>
    <nav>
      <Drawer />
      <Drawer mobile />
    </nav>
    <main style={styles.main}>
      <Container>
        <Switch>
          <Route path="/dashboard/profile" component={Profile} />
          <Route path="/dashboard/posts" component={Posts} />
          <Route render={() => <p>Dashboard</p>} />
        </Switch>
      </Container>
    </main>
    <nav>
      <FloatingActionButtons />
    </nav>
    <aside>
      <ProfileEditDialog />
    </aside>
  </div>
);

export default Radium(Dashboard);
