import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
// import { FaUserAlt, FaLock, FaEnvelope,  FaCalendar, FaAt } from "react-icons/fa"

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    dateOfBirth: ''
  });

  const { username, email, password, confirmPassword, role, dateOfBirth } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    if (!dateOfBirth) {
      console.error("Date of birth is required");
      return;
    }

  try {
    const response = await fetch('https://edconnect-nine.vercel.app/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Headers': '*',
                  'Access-Control-Allow-Credentials': 'true'
      },
      body: JSON.stringify({
        username,
        email,
        password,
        confirmPassword,
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
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input type="email" placeholder='Email Address' name="email" value={email} onChange={handleChange} required />
          {/* <FaEnvelope className='icon' /> */}
        </div>
        <div className="input-box">
          <input type="text" placeholder='Username' name="username" value={username} onChange={handleChange} required minLength={8} />
          {/* <FaAt className='icon' /> */}
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' name="password" value={password} onChange={handleChange} required minLength={12} />
          {/* <FaLock className='icon' /> */}
        </div>
        <div className="input-box">
          <input type="password" placeholder=' Confirm Password' name="confirmPassword" value={confirmPassword} onChange={handleChange} required minLength={12} />
          {/* <FaLock className='icon' /> */}
        </div>
        <div className="input-box">
          <input type="date" name="dateOfBirth" value={dateOfBirth} onChange={handleChange} required />
          {/* <FaCalendar className='icon' /> */}
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