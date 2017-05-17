import Radium from 'radium';
import React from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';
import HomeIcon from 'material-ui/svg-icons/action/home';
import FaceIcon from 'material-ui/svg-icons/action/face';
import TextFieldsIcon from 'material-ui/svg-icons/editor/text-fields';
import PeopleIcon from 'material-ui/svg-icons/social/people';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

import { actions } from 'store';
import { breakpoints } from 'styles';
import Link from '../shared/Link';

const styles = {
  mobile: {},
  tablet: {
    // Hide the tablet version of the drawer when viewed on mobile.
    [`@media ${breakpoints.phoneOnly}`]: { display: 'none' },
  },
  appBar: {
    style: { backgroundColor: 'white' },
    titleStyle: { color: 'black' },
  },
};

const DashboardDrawer = props => (
  <div style={props.mobile ? styles.mobile : styles.tablet}>
    <Drawer
      docked={!props.mobile}
      open={!props.mobile || props.showSideBar}
      onRequestChange={() => props.dispatch(actions.hideSideBar())}
    >
      <Subheader>Dashboard</Subheader>
      <Link to="/dashboard">
        <MenuItem leftIcon={<HomeIcon />}>Home</MenuItem>
      </Link>
      <Link to="/dashboard/profile">
        <MenuItem leftIcon={<FaceIcon />}>Profile</MenuItem>
      </Link>
      <MenuItem leftIcon={<TextFieldsIcon />}>Posts</MenuItem>
      {props.profile.isAdmin &&
        <div style={{ paddingTop: 32 }}>
          <Divider />
          <Subheader>Admin</Subheader>
          <MenuItem leftIcon={<PeopleIcon />}>Editors</MenuItem>
          <MenuItem leftIcon={<SettingsIcon />}>Site Settings</MenuItem>
        </div>}
    </Drawer>
  </div>
);

const mapStateToProps = ({ profile, showSideBar }) => ({
  profile,
  showSideBar,
});

export default connect(mapStateToProps)(Radium(DashboardDrawer));
