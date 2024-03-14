import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import './Dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-row">
        <div className="dashboard-block">Course Schedule</div>
        <div className="dashboard-block">Materials</div>
        <div className="dashboard-block">Grades</div>
      </div>
      <div className="dashboard-row">
        <div className="dashboard-block">Messages</div>
        <div className="dashboard-block">Payments</div>
        <div className="dashboard-block">Petitions and decisions</div>
      </div>
		<Navbar />
		<Sidebar />
	</div>
  );
};

export default Dashboard;