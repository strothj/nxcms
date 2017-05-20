import React, { Component } from 'react';
import { FormField } from 'react-form';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import moment from 'moment';

class PublishDateControl extends Component {
  setDate = (e, date) => {
    const epoch = parseInt(moment(date).format('x'), 10);
    this.props.formApi.setValue(epoch);
  };

  getDate = () => {
    if (!this.props.formApi.getValue()) return null;
    return moment(this.props.formApi.getValue()).toDate();
  };

  togglePublish = (e, checked) => {
    if (!checked) {
      this.props.formApi.setValue(null);
      return;
    }
    this.setDate(null, new Date());
  };

  render() {
    const { getValue } = this.props.formApi;

    return (
      <div>
        <Toggle
          label="Publish"
          labelPosition="right"
          toggled={Boolean(getValue())}
          onToggle={this.togglePublish}
        />
        <DatePicker
          hintText="Publish Date"
          style={{ width: '100%' }}
          textFieldStyle={{ width: '100%' }}
          onChange={this.setDate}
          value={this.getDate() || new Date()}
        />
      </div>
    );
  }
}

const PublishDateField = () => (
  <FormField field="publishDate">
    {formApi => <PublishDateControl formApi={formApi} />}
  </FormField>
);

export default PublishDateField;
