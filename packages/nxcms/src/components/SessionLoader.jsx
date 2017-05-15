import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'store';

class SessionLoader extends Component {
  componentDidMount() {
    this.props.dispatch(actions.loadSession());
  }

  render() {
    return <div />;
  }
}

export default connect()(SessionLoader);
