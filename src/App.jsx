import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
} from 'react-router-dom';

import Home from './Components/Home.jsx';
import Dashboard from './Components/Dashboard.jsx';
import Profile from './Components/Profile.jsx';
import Settings from './Components/Settings.jsx';

const App = () => {
  return (
    <BrowserRouter>
      {/* Global navigation */}
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/dashboard">Dashboard</Link> |{' '}
        <Link to="/dashboard/profile">Profile</Link> |{' '}
        <Link to="/dashboard/settings">Settings</Link>
      </nav>

      <Routes>
        {/* Home page */}
        <Route path="/" element={<Home />} />

        {/* Parent route */}
        <Route path="/dashboard" element={<Dashboard />}>
          {/* Redirect /dashboard to /dashboard/profile */}
          <Route
            index
            element={<Navigate to="profile" replace />}
          />

          {/* Nested child routes */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
