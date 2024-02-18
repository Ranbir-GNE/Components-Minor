import React from 'react';
import './Dashboard.css';
/*import './Rectangles.css';*/
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
      <div className="sidebar">
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/student">Student</Link></li>
          <li><Link to="/academics">Academics</Link></li>
          <li><Link to="/fees-collection">Fees Collection</Link></li>
          <li><Link to="/examinations">Examinations</Link></li>
          <li><Link to="/attendance">Attendance</Link></li>
          <li><Link to="/communicate">Communicate</Link></li>
          <li><Link to="/my-account">My Account</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/change-password">Change Password</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </div>
  );
};
const Rectangle = () => {
  return (
      <div className="rectangle">
        <h1>Dashboard</h1>
        <p>Welcome to the Dashboard</p>
      </div>
  );
};

export default Dashboard;Rectangles;