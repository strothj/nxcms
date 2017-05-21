/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class StaticEditorSelect extends Component {
  componentDidMount() {
    this.props.formApi.setValue(this.props.profile._id);
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = ({ profile }) => ({ profile });

export default connect(mapStateToProps)(StaticEditorSelect);
