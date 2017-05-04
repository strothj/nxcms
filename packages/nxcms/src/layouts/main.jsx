import React from 'react';
import Layout from 'react-toolbox/lib/layout/Layout';
import Panel from 'react-toolbox/lib/layout/Panel';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';

// eslint-disable-next-line
const MainLayout = props => (
  <Layout>
    <Panel>
      <AppBar title="test" />
      <div>
        {props.component}
      </div>
    </Panel>
  </Layout>
);

export default MainLayout;
