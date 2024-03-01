import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul>
        <li className='home'><Link to={'/'} >Home</Link></li>
        <li><Link to="/mechanical">Mechanical</Link></li>
        <li><Link to="/civil">Civil</Link></li>
        <li><Link to="/electrical">Electrical</Link></li>
        <li><Link to="/computer-science">Computer Science</Link></li>
        <li><Link to="/information-technology">Information Technology</Link></li>
      </ul>
    </div>
  );
}
export default Sidebar;
