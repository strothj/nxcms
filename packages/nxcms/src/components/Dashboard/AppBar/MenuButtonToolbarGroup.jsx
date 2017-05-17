import Radium from 'radium';
import React from 'react';
import { connect } from 'react-redux';
import MaterialToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';

import { breakpoints } from 'styles';
import { actions } from 'store';
import MenuButton from 'components/shared/AppBar/MenuButton';

// Wrap ToolbarGroup so that it supports media queries
const ToolbarGroup = Radium(MaterialToolbarGroup);

// Hide ToolbarGroup on tablet/desktop displays
const style = {
  [`@media ${breakpoints.tablet}`]: { display: 'none' },
};

const MenuButtonToolbarGroup = ({ dispatch }) => (
  <ToolbarGroup firstChild style={style}>
    <MenuButton onTouchTap={() => dispatch(actions.showSideBar())} />
  </ToolbarGroup>
);

export default connect()(MenuButtonToolbarGroup);
