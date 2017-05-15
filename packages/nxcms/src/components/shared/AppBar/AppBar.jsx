import React from 'react';
import MaterialAppBar from 'material-ui/AppBar';

import MenuButton from './MenuButton';
import ProfileMenu from './ProfileMenu';

const AppBar = props => (
  <MaterialAppBar
    iconElementLeft={<MenuButton />}
    iconElementRight={<ProfileMenu />}
    zDepth={2}
    {...props}
  />
);

export default AppBar;
