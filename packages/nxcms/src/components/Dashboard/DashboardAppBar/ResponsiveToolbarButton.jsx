import Radium from 'radium';
import React from 'react';
import FlatButton from 'material-ui/FlatButton';

import { breakpoints } from 'styles';

const styles = {
  phone: { [`@media ${breakpoints.tablet}`]: { display: 'none' } },
  phoneButton: { minWidth: 36 },
  tablet: { [`@media ${breakpoints.phoneOnly}`]: { display: 'none' } },
};

const ResponsiveToolbarButton = props => (
  <div>
    <div style={styles.phone}>
      <FlatButton icon={props.icon} style={styles.phoneButton} />
    </div>
    <div style={styles.tablet}>
      <FlatButton icon={props.icon} label={props.label} />
    </div>
  </div>
);

export default Radium(ResponsiveToolbarButton);
