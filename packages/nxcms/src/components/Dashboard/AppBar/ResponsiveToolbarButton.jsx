import Radium from 'radium';
import React from 'react';
import FlatButton from 'material-ui/FlatButton';

import { breakpoints } from 'styles';

const styles = {
  phone: { [`@media ${breakpoints.tablet}`]: { display: 'none' } },
  phoneButton: { minWidth: 36 },
  phoneHidden: { display: 'none' },
  tablet: { [`@media ${breakpoints.phoneOnly}`]: { display: 'none' } },
};

const ResponsiveToolbarButton = props => (
  <div>
    <div style={props.phoneVisible ? styles.phone : styles.phoneHidden}>
      <FlatButton
        icon={props.icon}
        style={styles.phoneButton}
        onTouchTap={props.onTouchTap}
      />
    </div>
    <div style={styles.tablet}>
      <FlatButton
        icon={props.icon}
        label={props.label}
        onTouchTap={props.onTouchTap}
      />
    </div>
  </div>
);

export default Radium(ResponsiveToolbarButton);
