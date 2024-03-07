import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
// Dashboard.js

const Startpage = () => {
  return (
    <div>
      <div>
        <h2></h2>
        <div className="wrapper">
        <div>
          <h1>About Us</h1>
          <p>Welcome to our college. We are a prestigious institution offering a variety of courses for our students.</p>
          <h2>Our Mission</h2>
          <p>Our mission is to provide quality education and foster the growth of our students.</p>
          <h2>Our Vision</h2>
          <p>Our vision is to be a leading educational institution, recognized for the excellence of its students and faculty.</p>
          <h2>Contact Us</h2>
          <p>Address: 123 College Street, City, State, Country</p>
          <p>Email: info@college.edu</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className='register-link'></div>
        <Link to="/login">
          <button>Login</button>
        </Link>
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
