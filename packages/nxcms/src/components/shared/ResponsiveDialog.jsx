import Radium, { Style } from 'radium';
import React from 'react';
import Dialog from 'material-ui/Dialog';
import { breakpoints } from 'styles';

const rules = {
  mediaQueries: {
    [breakpoints.phoneOnly]: {
      '.dialog-content': {
        position: 'fixed !important',
        left: '0 !important',
        top: '0 !important',
        width: '100vw !important',
        height: '100vh !important',
        maxWidth: 'none !important',
        transform: 'none !important',
      },
      '.dialog-content > div': {
        display: 'flex',
        flexDirection: 'column',
        height: '100% !important',
        borderRadius: '0 !important',
      },
      '.dialog-content-body': {
        flex: '1 !important',
        maxHeight: 'none !important',
      },
    },
  },
};

const ResponsiveDialog = props => (
  <div>
    <Dialog
      contentClassName="dialog-content"
      bodyClassName="dialog-content-body"
      autoScrollBodyContent
      {...props}
    />
    <Style rules={rules} />
  </div>
);

export default Radium(ResponsiveDialog);
