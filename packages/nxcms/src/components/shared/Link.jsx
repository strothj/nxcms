import React from 'react';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { actions } from 'store';

const Link = ({ dispatch, to, children }) => (
  <RouterLink
    style={{ textDecoration: 'none', color: 'inherit' }}
    onClick={() => dispatch(actions.hideSideBar())}
    to={to}
  >
    {children}
  </RouterLink>
);

export default withRouter(connect()(Link));
