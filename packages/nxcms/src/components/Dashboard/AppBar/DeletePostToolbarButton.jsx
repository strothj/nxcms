import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DeleteForeverIcon from 'material-ui/svg-icons/action/delete-forever';

import { actions } from 'store';
import ResponsiveToolbarButton from './ResponsiveToolbarButton';

class DeletePostToolbarButton extends Component {
  state = { open: false };

  requestDeletePost = () => {
    this.setState({ open: true });
  };

  close = () => {
    this.setState({ open: false });
  };

  deletePost = () => {
    this.close();
    this.props.dispatch(actions.deleteArticle(this.props.selectedArticle));
  };

  render() {
    const actionButtons = [
      <FlatButton label="Cancel" primary onTouchTap={this.close} />,
      <FlatButton label="Delete" primary onTouchTap={this.deletePost} />,
    ];

    return (
      <div>
        <ResponsiveToolbarButton
          label="Delete"
          icon={<DeleteForeverIcon />}
          phoneVisible
          onTouchTap={this.requestDeletePost}
        />

        <Dialog
          actions={actionButtons}
          modal={false}
          open={this.state.open}
          onRequestClose={this.close}
          bodyStyle={{ color: 'black' }}
        >
          Are you sure?
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = ({ selectedArticle }) => ({ selectedArticle });

export default connect(mapStateToProps)(DeletePostToolbarButton);
