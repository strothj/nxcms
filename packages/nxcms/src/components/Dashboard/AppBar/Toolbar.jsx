import React from 'react';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';

import MenuButtonToolbarGroup from './MenuButtonToolbarGroup';
import NavigationToolbarGroup from '../NavigationToolbarGroup';

const toolbarTheme = getMuiTheme({
  palette: { textColor: '#fff' },
  toolbar: { height: 70 },
});

const style = { display: 'flex', height: 70 };

const Toolbar = () => (
  <MuiThemeProvider muiTheme={toolbarTheme}>
    <div style={style}>
      <MenuButtonToolbarGroup />
      <NavigationToolbarGroup />
    </div>
  </MuiThemeProvider>
);

export default Toolbar;
