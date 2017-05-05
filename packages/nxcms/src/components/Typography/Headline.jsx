import React from 'react';

const Headline = props => (
  <p style={props.style}>
    {props.children}
    <style jsx>{`
      p {
        margin: 0;
        font-size: 24px;
        letter-spacing: .1rem;
      }
  `}</style>
  </p>
);

export default Headline;
