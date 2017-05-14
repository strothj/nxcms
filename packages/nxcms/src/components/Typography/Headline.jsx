import Radium from 'radium';
import React from 'react';

const styles = {
  margin: 0,
  fontSize: 24,
  letterSpacing: '.1rem',
};

const Headline = props => (
  <p style={[styles, props.style]}>
    {props.children}
  </p>
);

export default Radium(Headline);
