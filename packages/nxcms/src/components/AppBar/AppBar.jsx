import React from 'react';
import Headroom from 'react-headroom';
import MaterialAppBar from 'material-ui/AppBar';

import AppBarTitle from './AppBarTitle';
import MenuButton from './MenuButton';
import ProfileMenu from './ProfileMenu';
import AuthenticationDialog from './AuthenticationDialog';

const styles = {
  headroom: { zIndex: 100 },
  title: {
    flex: 'none',
    fontFamily: 'PT Sans Narrow, sans-serif',
  },
};

const AppBar = () => (
  <Headroom style={styles.headroom}>
    <MaterialAppBar
      title={<AppBarTitle />}
      titleStyle={styles.title}
      iconElementLeft={<MenuButton />}
      iconElementRight={<ProfileMenu />}
      zDepth={2}
    />
    <AuthenticationDialog />
  </Headroom>
);

export default AppBar;
