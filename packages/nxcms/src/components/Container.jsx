import React from 'react';
import { breakpoints } from '../styles';

export default props => (
  <div>
    {props.children}
    <style jsx>{`
      div {
        margin: 0 auto;
        max-width: 1000px;
        padding: 0 16px;
      }

      @media ${breakpoints.tablet} {
        div { padding: 0 24px; }
      }
  `}</style>
  </div>
);
