import React from 'react';

const Caption = props => (
  <small style={props.style}>
    {props.children}
    <style jsx>{`
      small {
        display: block;
        font-size: 12px;
        letter-spacing: .09rem;
      }
    `}</style>
  </small>
);

export default Caption;
