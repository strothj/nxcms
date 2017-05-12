import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, profile, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      profile
        ? <Component {...props} />
        : <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />}
  />
);

const mapStateToProps = ({ profile }) => ({ profile });

export default connect(mapStateToProps)(PrivateRoute);
