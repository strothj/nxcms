import Radium from 'radium';
import React from 'react';
import { breakpoints } from 'styles';

const style = {
  margin: '0 auto',
  maxWidth: 1000,
  padding: '0 16px',
  [`@media ${breakpoints.tablet}`]: { padding: '0 24px' },
};

const Container = props => (
  <div style={style}>
    {props.children}
  </div>
);

export default Radium(Container);
