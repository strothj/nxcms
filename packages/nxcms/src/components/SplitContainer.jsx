import Radium from 'radium';
import React from 'react';
import { breakpoints } from 'styles';

const styles = {
  container: {
    [`@media ${breakpoints.tablet}`]: { display: 'flex' },
  },
  half: {
    [`@media ${breakpoints.tablet}`]: {
      flex: 1,
      paddingRight: 24,
    },
  },
};

const SplitContainer = props => (
  <div style={styles.container}>
    <div style={styles.half}>{props.children[0]}</div>
    <div style={styles.half}>{props.children[1]}</div>
  </div>
);

export default Radium(SplitContainer);
