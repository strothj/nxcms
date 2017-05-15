import React from 'react';
import DashboardDrawer from './DashboardDrawer';

const Dashboard = () => (
  <div>
    <nav>
      <DashboardDrawer />
      <DashboardDrawer mobile />
    </nav>
    <main>
      <p>Dashboard</p>
    </main>
  </div>
);

export default Dashboard;
