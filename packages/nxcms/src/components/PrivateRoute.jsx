import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'store';

const PrivateRoute = ({ component: Component, profile, dispatch, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (profile) return <Component {...props} />;

      dispatch(actions.showLoginDialog());
      return (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      );
    }}
  />
);

const mapStateToProps = ({ profile }) => ({ profile });

export default connect(mapStateToProps)(PrivateRoute);
