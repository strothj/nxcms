import React from 'react';

const AuthLayout = props => (
  <div>
    {props.component}
    <style jsx>{`
      div {
        height: min-height: 100vh;
      }
    `}</style>
  </div>
);

export default AuthLayout;
