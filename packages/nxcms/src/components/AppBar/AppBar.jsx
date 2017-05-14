import React from 'react';
import Headroom from 'react-headroom';
import MaterialAppBar from 'material-ui/AppBar';
import { blueGrey600 } from 'material-ui/styles/colors';

import AppBarTitle from './AppBarTitle';
import MenuButton from './MenuButton';
import AuthenticationButton from './AuthenticationButton';

const styles = {
  appBar: {
    color: 'green',
  },
  title: {
    flex: 'none',
    fontFamily: 'PT Sans Narrow, sans-serif',
  },
  icon: { color: blueGrey600 },
};

const AppBar = () => (
  <Headroom>
    <MaterialAppBar
      style={styles.appBar}
      title={<AppBarTitle />}
      titleStyle={styles.title}
      iconElementLeft={<MenuButton style={styles.icon} />}
      iconElementRight={<AuthenticationButton style={styles.icon} />}
    />
  </Headroom>
);

export default AppBar;
