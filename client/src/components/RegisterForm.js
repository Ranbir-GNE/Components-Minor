import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

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

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          role,
          dateOfBirth
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Registration successful", data);
        // Redirect or handle successful registration
        < Navigate to = '/login' replace={true}/>
      } else {
        console.error("Registration failed", data);
        // Handle registration failure, display error message, etc.
      }
    } catch (error) {
      console.error("Registration error", error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={username} onChange={handleChange} placeholder="Username" required />
        <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required />
        <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" minLength="8" required />
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder="Confirm Password" minLength="8" required />
        <input type="date" name="dateOfBirth" value={dateOfBirth} onChange={handleChange} required />
        <select name="role" value={role} onChange={handleChange} required>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default RegisterForm;
