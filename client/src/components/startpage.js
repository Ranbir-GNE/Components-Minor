import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';
// Dashboard.js

const Startpage = () => {
  return (
    <div>
      <div>
        <h2></h2>
        <div className="wrapper">
          <p>Hello Guys</p>
        <Link to="/register">
          <button>Register</button>
        </Link>
        </div>

        <Navbar /> {/* Render the Navbar component here */}
        <Sidebar/>
      </div>
    </div>
  );
};

export default Startpage;
