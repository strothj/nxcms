import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from '../assets/react-toolbox/theme';
import '../assets/react-toolbox/theme.css';
import routes from './routes';

const routesWithLayouts = (
  <div>
    {routes.map(route => (
      <Route
        key={route.key}
        path={route.path}
        exact={route.exact}
        render={() => <route.layout component={route.component} />}
      />
    ))}
  </div>
);

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      {routesWithLayouts}
    </Router>
  </ThemeProvider>
);

export default App;
