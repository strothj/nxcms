import React from 'react';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
import { actions } from 'store';
import AppBar from '../shared/AppBar';
import AppBarTitle from './AppBarTitle';

const styles = {
  headroom: { zIndex: 100 },
  title: {
    flex: 'none',
    fontFamily: 'PT Sans Narrow, sans-serif',
  },
};

const BlogAppBar = ({ dispatch }) => (
  <Headroom style={styles.headroom}>
    <AppBar
      title={<AppBarTitle />}
      titleStyle={styles.title}
      onLeftIconButtonTouchTap={() => dispatch(actions.showSideBar())}
    />
  </Headroom>
);

export default connect()(BlogAppBar);
