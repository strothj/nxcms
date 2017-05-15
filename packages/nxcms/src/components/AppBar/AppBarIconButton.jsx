import React, { Component } from 'react';
import { blueGrey400 } from 'material-ui/styles/colors';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import LoginIcon from './LoginIcon';

const style = {
  color: blueGrey400,
  hoverColor: '#fff',
};

const types = {
  menu: NavigationMenu,
  login: LoginIcon,
  moreVert: MoreVertIcon,
};

// Can't use stateless component here due to how IconMenu in ProfileMenu uses
// refs.
// eslint-disable-next-line
class AppBarIconButton extends Component {
  render() {
    const { icon, ...props } = this.props;
    const Icon = types[icon];

    return (
      <IconButton {...props}>
        <Icon {...style} />
      </IconButton>
    );
  }
}

export default AppBarIconButton;
