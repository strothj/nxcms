import { Style } from 'radium';
import React from 'react';
import Headroom from 'react-headroom';
import MaterialAppBar from 'material-ui/AppBar';
import { breakpoints } from 'styles';
import AppBarTitle from './AppBarTitle';

const styles = {
  rules: {
    mediaQueries: {
      [`${breakpoints.tablet}`]: {
        // Hide menu button on larger displays.
        'button:first-child': { display: 'none !important' },
      },
    },
  },
};

const Title = <AppBarTitle />;

const AppBar = () => (
  <Headroom>
    <MaterialAppBar className="appbar" title={Title} />

    <Style scopeSelector=".appbar" rules={styles.rules} />
  </Headroom>
);

export default AppBar;
