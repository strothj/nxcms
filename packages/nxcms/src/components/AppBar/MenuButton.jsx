import Radium from 'radium';
import React from 'react';
import { breakpoints } from 'styles';
import AppBarIconButton from './AppBarIconButton';

const style = {
  [`@media ${breakpoints.tablet}`]: { display: 'none' },
};

const MenuButton = () => (
  <div style={style}>
    <AppBarIconButton icon="menu" />
  </div>
);

export default Radium(MenuButton);
