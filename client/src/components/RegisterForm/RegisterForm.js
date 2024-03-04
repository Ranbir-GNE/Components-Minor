import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './RegisterForm.css'
import { FaUserAlt, FaLock, FaEnvelope, FaMobile, FaCalendar, FaAt } from "react-icons/fa"

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    dateOfBirth: ''
  });

  const { username, email, phoneNumber, password, confirmPassword, role, dateOfBirth } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          phoneNumber,
          password,
          role,
          dateOfBirth
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Registration successful", data);
        // Redirect or handle successful registration
        <Navigate to='/login' replace={true} />
      } else {
        console.error("Registration failed", data);
        // Handle registration failure, display error message, etc.
      }
    } catch (error) {
      console.error("Registration error", error);
    }
  };

  return (
    <div className='wrapper'>
      <h2>Registeration</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input type="text" placeholder='Name' required />
          <FaUserAlt className='icon' />
        </div>
        <div className="input-box">
          <input type="email" placeholder='Email Address' required />
          <FaEnvelope className='icon' />
        </div>
        <div className="input-box">
          <input type="tel" placeholder='Mobile Number' required maxLength={10} />
          <FaMobile className='icon' />
        </div>
        <div className="input-box">
          <input type="text" placeholder='Username' required minLength={8} />
          <FaAt className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required minLength={12} />
          <FaLock className='icon' />
        </div>
        <div className="input-box">
          <input type="date" required />
          <FaCalendar className='icon' />
        </div>
        <div className='select-box'>
          <select name="role" value={role} onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit">Register</button>
        </div>

      </form>
      <div className='register-link'>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default RegisterForm;
