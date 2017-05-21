import Radium from 'radium';
import React, { cloneElement } from 'react';
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
  right: {
    [`@media ${breakpoints.tablet}`]: {
      paddingRight: 0,
    },
  },
};

const SplitContainer = props => {
  const itemsLeft = props.itemsLeft.map((c, index) =>
    cloneElement(c, { key: index })
  );
  const itemsRight = props.itemsRight.map((c, index) =>
    cloneElement(c, { key: index })
  );

  return (
    <div style={styles.container}>
      <div style={styles.half}>{itemsLeft}</div>
      <div style={[styles.half, styles.right]}>{itemsRight}</div>
    </div>
  );
};

export default Radium(SplitContainer);
