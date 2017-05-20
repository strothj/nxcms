import React, { Component } from 'react';
import { FormField } from 'react-form';
import getSlug from 'speakingurl';
import TextField from './TextField';

class SlugGenerator extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.titleValue !== this.props.titleValue) {
      const slug = getSlug(nextProps.titleValue);
      this.props.setValue(slug);
    }
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

const SlugField = ({ titleValue }) => (
  <FormField field="slug">
    {({ setValue }) => (
      <SlugGenerator titleValue={titleValue} setValue={setValue}>
        <TextField field="slug" floatingLabelText="Slug" />
      </SlugGenerator>
    )}
  </FormField>
);

export default SlugField;
