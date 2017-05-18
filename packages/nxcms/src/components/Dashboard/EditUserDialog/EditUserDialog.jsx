import React, { Component } from 'react';
import mapValues from 'lodash.mapvalues';
import ResponsiveDialog from 'components/shared/ResponsiveDialog';
import { Body1 } from 'components/Typography';
import Fields from './Fields';
import ActionButtons from './ActionButtons';

class EditUserDialog extends Component {
  state = { userUpdate: {}, valid: false };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.props.open)
      this.setState({ userUpdate: { ...this.props.user }, valid: false });
  }

  onChange = update => {
    // Remove empty fields from update object
    const u = mapValues(update, f => (!f ? undefined : f));
    this.setState(prevState => ({
      userUpdate: { ...prevState.userUpdate, ...u },
    }));
    this.setState(prevState => ({
      valid: this.hasMutations(prevState.userUpdate),
    }));
  };

  onInvalid = () => {
    this.setState({ valid: false });
  };

  onValid = () => {
    this.setState(prevState => ({
      valid: this.hasMutations(prevState.userUpdate),
    }));
  };

  hasMutations = updates => {
    let changed = false;
    // eslint-disable-next-line no-restricted-syntax
    for (const field in updates) {
      if (updates[field] !== this.props.user[field]) changed = true;
    }
    return changed;
  };

  render() {
    return (
      <ResponsiveDialog
        open={this.props.open}
        contentStyle={{ maxWidth: 400 }}
        title={this.props.title}
        actions={
          <ActionButtons
            valid={this.state.valid}
            onCancel={this.props.onCancel}
            onSubmit={() => this.props.onSubmit(this.state.userUpdate)}
          />
        }
      >
        {this.props.errorMessage &&
          <Body1 style={{ color: 'red' }}>{this.props.errorMessage}</Body1>}
        <Fields
          user={this.props.user}
          userUpdate={this.state.userUpdate}
          onChange={this.onChange}
          onInvalid={this.onInvalid}
          onValid={this.onValid}
        />
      </ResponsiveDialog>
    );
  }
}

export default EditUserDialog;
