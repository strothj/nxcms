import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'store';

class LoginPage extends Component {
  handleSubmit = async e => {
    e.preventDefault();
    await this.props.dispatch(
      actions.login(this.username.value, this.password.value)
    );
    this.password.value = '';
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: '/dashboard' },
    };

    if (this.props.profile) return <Redirect to={from} />;

    return (
      <div>
        <p>{this.props.loginError}</p>
        <form onSubmit={this.handleSubmit}>
          <p>Username</p>
          <input
            type="text"
            ref={c => {
              this.username = c;
            }}
          />
          <p>Password</p>
          <input
            type="password"
            required
            ref={c => {
              this.password = c;
            }}
          />

          <p><button type="submit">Login</button></p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ loginError, profile }) => ({ loginError, profile });

export default connect(mapStateToProps)(LoginPage);
