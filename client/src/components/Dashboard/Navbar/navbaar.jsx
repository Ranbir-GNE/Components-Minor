import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <nav className="navbar">
      <ul>
      <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <li><Link to="/student">Student</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/fees">Fees Collection</Link></li>
            <li><Link to="/examinations">Examinations</Link></li>
            <li><Link to="/attendance">Attendance</Link></li>
            <button><a href="https://curacare.vercel.app/" target="_blank" rel="noopener noreferrer">Communicate</a></button>
            <li><Link to="/my-account">My Account</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/change-password">Change Password</Link></li>
            <li><Link to="/logout">Logout</Link></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;