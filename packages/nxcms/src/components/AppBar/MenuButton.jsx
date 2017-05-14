import Radium from 'radium';
import React from 'react';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import { breakpoints } from 'styles';

const style = {
  [`@media ${breakpoints.tablet}`]: { display: 'none' },
};

const MenuButton = props => (
  <div style={style}>
    <IconButton iconStyle={props.style}>
      <NavigationMenu />
    </IconButton>
  </div>
);

export default Radium(MenuButton);
