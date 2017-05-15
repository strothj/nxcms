import Radium from 'radium';
import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'store';
import { breakpoints } from 'styles';
import AppBar from '../shared/AppBar';

const style = {
  position: 'fixed',
  width: '100%',
  [`@media ${breakpoints.tablet}`]: {
    paddingLeft: 256,
  },
};

const DashboardAppBar = ({ dispatch }) => (
  <div style={style}>
    <AppBar
      zDepth={0}
      onLeftIconButtonTouchTap={() => dispatch(actions.showSideBar())}
    />
  </div>
);

export default connect()(Radium(DashboardAppBar));
