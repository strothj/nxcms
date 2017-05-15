import Radium from 'radium';
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { breakpoints } from 'styles';

const style = {
  mobile: {},
  tablet: {
    [`@media ${breakpoints.phoneOnly}`]: {
      display: 'none',
    },
  },
};

@Radium class DashboardDrawer extends Component {
  state = { open: false };

  render() {
    return (
      <div style={this.props.mobile ? style.mobile : style.tablet}>
        <Drawer docked={!this.props.mobile}>
          <AppBar title="Dashboard" showMenuIconButton={false} />
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default DashboardDrawer;
