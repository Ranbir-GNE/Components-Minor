import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleBurgerClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button className="burger-menu" onClick={handleBurgerClick}>
        <div></div>
        <div></div>
        <div></div>
      </button>
      <aside className={`sidebar ${show ? 'show' : ''}`}>
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
        {/* Add more links as needed */}
      </ul>
    </aside>
    </div>
  );
}

export default Sidebar;