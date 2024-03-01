import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css'
import { FaLock, FaAt } from "react-icons/fa";
// import './components/Dashboard/Dashboard';


const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Login successful", data);
        // Redirect or handle successful login
        navigate('/dashboard');
      } else {
        console.error("Login failed", data);
        // Handle login failure, display error message, etc.
      }
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div className='wrapper'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
          <div className='input-box'>
            <input type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required />
            <FaAt className='icon'/>

          </div>
          <div className='input-box'>
            <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required />
            <FaLock className='icon'/>

          </div>
          <button type="submit">Login</button>

      </form>
      <div className='register-link'>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default LoginForm;
