import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to my Dashboard</h1>

      <nav>
        <Link to="profile">Profile</Link>
        {' | '}
        <Link to="settings">Settings</Link>
      </nav>

      <hr />

      {/* Child components render here */}
      <Outlet />
    </div>
  );
};

export default Dashboard;