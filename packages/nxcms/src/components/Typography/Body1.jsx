import Radium from 'radium';
import React from 'react';
import { breakpoints } from 'styles';

const baseStyle = {
  fontSize: 14,
  [`@media ${breakpoints.desktop}`]: { fontSize: 13 },
};

const Body1 = ({ style, children, ...props }) => (
  <p style={[baseStyle, style]} {...props}>{children}</p>
);

export default Radium(Body1);
