// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      {/* Other dashboard content */}
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
};

export default Dashboard;
