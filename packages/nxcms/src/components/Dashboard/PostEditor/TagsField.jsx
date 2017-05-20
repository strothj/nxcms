import React, { Component } from 'react';
import { FormField } from 'react-form';
import ChipInput from 'material-ui-chip-input';

class TagsComponent extends Component {
  getValue = () => {
    const values = this.props.formApi.getValue();
    return values || [];
  };

  getErrorText = () => {
    const { getTouched, getError } = this.props.formApi;
    return getTouched() && getError();
  };

  setTouched = () => {
    this.props.formApi.setTouched();
  };

  addTag = newTag => {
    const values = this.getValue().slice();
    const cleanedValue = newTag.trim().toLowerCase();
    if (this.getValue().indexOf(cleanedValue) === -1) {
      values.push(cleanedValue);
      this.props.formApi.setValue(values);
    }
  };

  removeTag = tag => {
    const { setValue } = this.props.formApi;
    const values = this.getValue().filter(v => v !== tag);
    if (values.length === 0) {
      setValue(null);
      return;
    }
    setValue(values);
  };

  render() {
    return (
      <ChipInput
        floatingLabelText="Tags"
        value={this.getValue()}
        onRequestAdd={this.addTag}
        onRequestDelete={this.removeTag}
        onBlur={this.setTouched}
        errorText={this.getErrorText()}
        fullWidth
      />
    );
  }
}

const TagsField = () => (
  <FormField field="tags">
    {formApi => <TagsComponent formApi={formApi} />}
  </FormField>
);

export default TagsField;
