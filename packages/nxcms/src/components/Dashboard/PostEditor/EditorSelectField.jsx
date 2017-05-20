/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormField } from 'react-form';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { actions } from 'store';
import StaticEditorSelect from './StaticEditorSelect';

class EditorSelectControl extends Component {
  componentDidMount() {
    if (!this.props.users) this.props.dispatch(actions.getUsers());
  }

  getEditors = () =>
    this.props.users.map(e => ({
      key: e._id,
      value: e._id,
      label: e.username,
      primaryText: e.firstName
        ? `${e.username} (${e.firstName} ${e.lastName})`
        : e.username,
    }));

  getValue = () => {
    const formValue = this.props.formApi.getValue();
    const editor = this.getEditors().find(e => e.key === formValue);
    return editor ? editor.value : null;
  };

  setEditor = (e, key, payload) => {
    if (payload === null) {
      this.props.formApi.setTouched();
      return;
    }
    this.props.formApi.setValue(payload);
  };

  render() {
    if (!this.props.users) return <div />;

    const menuItems = [];
    if (this.getValue() === null)
      menuItems.push(<MenuItem key="null" value={null} primaryText="" />);
    this.getEditors().forEach(e => menuItems.push(<MenuItem {...e} />));

    const { getTouched, getError } = this.props.formApi;

    return (
      <SelectField
        floatingLabelText="Editor"
        value={this.getValue()}
        onChange={this.setEditor}
        errorText={getTouched() && getError()}
        fullWidth
      >
        {menuItems}
      </SelectField>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });
const EditorSelectControlWithStore = connect(mapStateToProps)(
  EditorSelectControl
);

const EditorSelectField = ({ isAdmin }) => (
  <FormField field="editor">
    {isAdmin
      ? formApi => <EditorSelectControlWithStore formApi={formApi} />
      : formApi => <StaticEditorSelect formApi={formApi} />}
  </FormField>
);

export default EditorSelectField;
