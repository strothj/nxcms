import Radium from 'radium';
import React from 'react';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import MenuItem from 'material-ui/MenuItem';
import HomeIcon from 'material-ui/svg-icons/action/home';
import FaceIcon from 'material-ui/svg-icons/action/face';

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
    </Drawer>
  </div>
);

const mapStateToProps = ({ showSideBar }) => ({ showSideBar });

export default connect(mapStateToProps)(Radium(DashboardDrawer));
