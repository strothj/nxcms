import Radium from 'radium';
import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import { actions } from 'store';
import { breakpoints } from 'styles';

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
      <AppBar title="Dashboard" showMenuIconButton={false} {...styles.appBar} />
      <MenuItem>Menu Item 1</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
  </div>
);

const mapStateToProps = ({ showSideBar }) => ({ showSideBar });

export default connect(mapStateToProps)(Radium(DashboardDrawer));
