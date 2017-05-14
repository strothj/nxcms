import Radium from 'radium';
import React from 'react';

const styles = {
  display: 'block',
  fontSize: 12,
  letterSpacing: '.09rem',
};

const Caption = props => (
  <small style={[styles, props.style]}>
    {props.children}
  </small>
);

export default Radium(Caption);
