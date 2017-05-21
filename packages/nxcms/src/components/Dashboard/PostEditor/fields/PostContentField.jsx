import Radium, { Style } from 'radium';
import React, { Component } from 'react';
import { FormField } from 'react-form';
import SimpleMDE from 'react-simplemde-editor';
import 'simplemde/dist/simplemde.min.css';
import { breakpoints, keyLines } from 'styles';

// Adjust for fixed side drawer on tablet/desktop
const styles = {
  mediaQueries: {
    [breakpoints.tablet]: {
      '.CodeMirror-fullscreen, .editor-toolbar.fullscreen': {
        left: `${keyLines.drawerWidth}px !important`,
        zIndex: '9999 !important',
      },
      '.CodeMirror-fullscreen, .editor-preview-side': {
        width: `calc(50% - ${keyLines.drawerWidth / 2}px) !important`,
      },
    },
  },
};

@Radium class PostContentControl extends Component {
  getOptions = () => ({
    spellChecker: true,
    initialValue: this.getValue(),
  });

  getValue = () => this.props.formApi.getValue();

  setValue = value => {
    this.props.formApi.setValue(value);
  };

  render() {
    return (
      <div className="post-content-control">
        <SimpleMDE
          value={this.getValue()}
          onChange={this.setValue}
          options={this.getOptions()}
        />

        <Style scopeSelector=".post-content-control" rules={styles} />
      </div>
    );
  }
}

const PostContentField = () => (
  <FormField field="content">
    {formApi => <PostContentControl formApi={formApi} />}
  </FormField>
);

export default PostContentField;
