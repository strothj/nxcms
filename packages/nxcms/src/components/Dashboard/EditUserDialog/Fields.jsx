import React, { Component } from 'react';
import TextField from './TextField';
import DisplayName from './DisplayName';
import VerifyField from './VerifyField';

class Fields extends Component {
  state = { invalidCount: 0 };

  // eslint-disable-next-line
  handleValidityUpdate = invalidCount => {
    if (invalidCount === 0) this.props.onValid();
    else this.props.onInvalid();
  };

  onInvalid = () => {
    this.setState(prevState => {
      this.handleValidityUpdate(prevState.invalidCount + 1);
      return { invalidCount: prevState.invalidCount + 1 };
    });
  };

  onValid = () => {
    this.setState(prevState => {
      this.handleValidityUpdate(prevState.invalidCount - 1);
      return { invalidCount: prevState.invalidCount - 1 };
    });
  };

  render() {
    const children = React.Children.map(
      [
        <TextField label="Username" name="username" />,
        <TextField label="First Name" name="firstName" />,
        <TextField label="Last Name" name="lastName" />,
        <DisplayName />,
        <VerifyField label="Change Password" name="password" type="password" />,
        <VerifyField label="Change Email" name="email" type="email" />,
      ],
      child =>
        React.cloneElement(child, {
          userUpdate: this.props.userUpdate,
          onChange: this.props.onChange,
          onInvalid: this.onInvalid,
          onValid: this.onValid,
        })
    );

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default Fields;
