import React from 'react';
import './Dashboard.css';
import './Navbar.jsx';
import Sidebar from '../Sidebar.jsx';
import Navbar from '../Navbar.jsx';
import Sidebar from '../Sidebar.jsx';

function Dashboard() {
  return (
    <div>
      <Navbar />
      <Sidebar/>
    </div>
  );
}

export default Dashboard;