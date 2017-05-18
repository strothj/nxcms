import React, { Component } from 'react';
import { List, ListItem } from 'material-ui/List';
import NestedTextField from './NestedTextField';

const styles = {
  listItem: { paddingLeft: 0, paddingRight: 0 },
};

class VerifyField extends Component {
  state = { value: '', verifyValue: '', errorText: '' };

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value)
      this.setState({
        value: nextProps.value,
        verifyValue: nextProps.value,
        errorText: '',
      });
  }

  onChange = (field, value) => {
    this.setState(prevState => {
      const newState = { ...prevState, [field]: value };
      if (newState.value !== newState.verifyValue) {
        newState.errorText = 'Verify field must match';
        if (!prevState.errorText) this.props.onInvalid();
      } else {
        newState.errorText = '';
        this.props.onChange({ [this.props.name]: value });
        this.props.onValid();
      }
      return newState;
    });
  };

  render() {
    const labelText = `${this.props.name
      .charAt(0)
      .toUpperCase()}${this.props.name.slice(1)}`;

    const textFields = [
      <NestedTextField
        type={this.props.type}
        key={0}
        floatingLabelText={labelText}
        fullWidth
        onChange={(e, value) => this.onChange('value', value)}
      />,
      <NestedTextField
        type={this.props.type}
        key={1}
        floatingLabelText={`Verify ${labelText}`}
        fullWidth
        onChange={(e, value) => this.onChange('verifyValue', value)}
        errorText={this.state.errorText}
      />,
    ];

    return (
      <List>
        <ListItem
          innerDivStyle={styles.listItem}
          primaryText={this.props.label}
          primaryTogglesNestedList
          nestedItems={textFields}
          // Dialog box doesn't resize automatically without this
          onNestedListToggle={() => {
            window.dispatchEvent(new Event('resize'));
          }}
        />
      </List>
    );
  }
}

export default VerifyField;
