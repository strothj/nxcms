import React from 'react';
import { Link } from 'react-router-dom';
import MaterialAppBar from 'material-ui/AppBar';
import { blue500 } from 'material-ui/styles/colors';
import { breakpoints } from 'styles';

const styles = {
  titleStyle: { fontFamily: 'PT Sans Narrow, sans-serif' },
};

const AppBar = () => {
  const title = (
    <h1>
      <Link to="/">javascript-blog</Link>

      <style jsx>{`
        h1 :global(a) {
          color: inherit;
          text-decoration: none;
        }
        h1 { margin: 0; }
        h1:before { content: "<"; }
        h1:after { content: "/>"; }
        h1:before, h1:after {
          color: ${blue500};
          font-size: .5em;
          font-family: 'Roboto', sans-serif;
        }
        @media ${breakpoints.tablet} { h1 { font-size: 2.6rem; } }
        @media ${breakpoints.phoneOnly} {
          h1 {
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            text-align: center;
            font-size: 1.8rem;
          }
        }
      `}</style>
    </h1>
  );

  return (
    <div>
      <MaterialAppBar title={title} {...styles} />

      <style jsx>{`
        @media ${breakpoints.tablet} {
          div :global(button:first-child) { display: none !important; }
          div :global(h1) { margin-left: 24px !important; }
        }
      `}</style>
    </div>
  );
};

export default AppBar;
