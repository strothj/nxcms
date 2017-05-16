import Radium from 'radium';
import React from 'react';
import { connect } from 'react-redux';

import { actions } from 'store';
import { breakpoints } from 'styles';
import AppBar from 'components/shared/AppBar';
import Toolbar from './Toolbar';

const styles = {
  dashboard: {
    position: 'fixed',
    width: '100%',
    [`@media ${breakpoints.tablet}`]: {
      paddingLeft: 256,
    },
  },
  toolbarContainer: {
    marginLeft: 8,
    marginTop: 0,
  },
};

const DashboardAppBar = ({ dispatch }) => (
  <div style={styles.dashboard}>
    <AppBar
      onLeftIconButtonTouchTap={() => dispatch(actions.showSideBar())}
      iconElementLeft={<Toolbar />}
      iconStyleLeft={styles.toolbarContainer}
    />
  </div>
);

export default connect()(Radium(DashboardAppBar));
