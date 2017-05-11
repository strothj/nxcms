import React from 'react';
import MaterialAppBar from 'material-ui/AppBar';

const styles = {
  style: { height: 70 },
  titleStyle: {
    height: 70,
    lineHeight: '70px',
    fontFamily: 'Miriam Libre, sans-serif',
    fontSize: '2.2rem',
  },
};

const AppBar = () => <MaterialAppBar title="<CodeCraft />" {...styles} />;

export default AppBar;
