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
      '.CodeMirror-fullscreen.CodeMirror-sided, .editor-preview-side': {
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

  getErrorText = () =>
    this.props.formApi.getTouched() && this.props.formApi.getError();

  setValue = value => {
    this.props.formApi.setValue(value);
  };

  setTouched = () => {
    console.log('touched'); // eslint-disable-line no-console
    this.props.formApi.setTouched();
  };

  render() {
    return (
      <div className="post-content-control" onBlur={this.setTouched}>
        <SimpleMDE
          value={this.getValue()}
          onChange={this.setValue}
          options={this.getOptions()}
        />

        {this.getErrorText() &&
          <div
            style={{
              bottom: 15,
              color: '#f44336',
              fontSize: 12,
              position: 'relative',
              lineHeight: '36px',
              transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
            }}
          >
            {this.getErrorText()}
          </div>}

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
