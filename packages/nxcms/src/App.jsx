import { Style, StyleRoot } from 'radium';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from 'components/Layout';
import SessionLoader from 'components/SessionLoader';
import theme from './theme';

const rules = {
  html: {
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14,
  },

  '*, *:before, *:after': {
    boxSizing: 'inherit',
  },

  body: {
    margin: 0,
  },

  // Internet Explorer Flexbox "flex-direction: column" fix
  '.flex-fix': { display: 'flex' },
};

const App = () => (
  <StyleRoot>
    <MuiThemeProvider muiTheme={theme}>
      <div className="flex-fix">
        <Router>
          <Layout />
        </Router>
        <SessionLoader />
        <Style rules={rules} />
      </div>
    </MuiThemeProvider>
  </StyleRoot>
);

export default App;
