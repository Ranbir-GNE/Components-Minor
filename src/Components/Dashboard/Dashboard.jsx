import React, { useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='parent'>
      <div className="flexbox1">
        <div className="sidebar">
          {/* Burger Menu */}
          <div className="burger-menu" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          {/* End Burger Menu */}
          {/* Navbar */}
          <ul className={`navbar ${showMenu ? 'active' : ''}`}>
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
          {/* End Navbar */}
        </div>
      </div>
      <div className="flexbox2">
        <div className='container1'>
          <h1>Dashboard</h1>
          <p>Welcome to the Dashboard</p>
        </div>
        <div className='container1'>
          <h1>Dashboard</h1>
          <p>Welcome to the Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
