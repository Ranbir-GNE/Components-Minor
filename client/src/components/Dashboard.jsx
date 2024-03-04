import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';

const Dashboard = () => {
  const location = useLocation();
  const { email } = location.state || {}; // Retrieve email from location state

  return (
    <div>
      <div>
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
          {email && (
            <div>
              <h2>Welcome, {email}!</h2> {/* Display the user's email */}
            </div>
          )}
        </div>
          <Navbar />
          <Sidebar/> 
      </div>
    </div>
  );
};
export default Dashboard;
