import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from 'components/Layout';
import theme from './theme';

const SharedStyles = props => (
  <div>
    {props.children}
    <style jsx global>{`
      html {
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
      }

      *, *:before, *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
      }

      /* Internet Explorer Flexbox "flex-direction: column" fix */
      div#root > div { display: flex; }
    `}</style>
  </div>
);

const App = () => (
  <MuiThemeProvider muiTheme={theme}>
    <SharedStyles>
      <Router>
        <Layout />
      </Router>
    </SharedStyles>
  </MuiThemeProvider>
);

export default App;
