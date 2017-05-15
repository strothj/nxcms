import Radium from 'radium';
import React from 'react';
import { breakpoints } from 'styles';
import Container from '../Container';
import Drawer from './Drawer';

const styles = {
  main: {
    paddingTop: 70,
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
        <p>Dashboard</p>
      </Container>
    </main>
  </div>
);

export default Radium(Dashboard);
