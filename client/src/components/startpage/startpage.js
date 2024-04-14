import React from 'react';
import LoginForm from '../LoginForm/LoginForm.js';// Dashboard.js
import './startpage.css';
import RegisterForm from '../RegisterForm/RegisterForm.js';

const Startpage = () => {
  return (
    <div>
      <div className='title'>
        <h1>Ed-Connect</h1>
        <p></p>
      </div>
       <div className='contents'>
      <div className="wrapper">
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
        <LoginForm />
        <RegisterForm />
      </div>

    </div>
   
  );
};

export default Startpage;
