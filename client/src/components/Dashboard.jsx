import React from 'react';
import { Link } from 'react-router-dom'; // Correct import for Link

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
    <Link to={"/student"} className="backButton">
        student
      </Link>	
    </div>
  );
};

export default Dashboard;