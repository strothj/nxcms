import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes';

const routesWithLayouts = routes.map(route => (
  <Route
    key={route.key}
    path={route.path}
    exact={route.exact}
    render={() => <route.layout component={route.component} />}
  />
));

const SharedStyles = props => (
  <div>
    {props.children}
    <style jsx global>{`
      html {
        box-sizing: border-box;
      }

      *, *:before, *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
      }
    `}</style>
  </div>
);

const App = () => (
  <MuiThemeProvider>
    <SharedStyles>
      <Router>
        <Switch>
          {routesWithLayouts}
        </Switch>
      </Router>
    </SharedStyles>
  </MuiThemeProvider>
);

export default App;
