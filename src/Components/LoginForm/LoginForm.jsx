import React from 'react';
import { useNavigate, Link } from 'react-router-dom'
import './LoginForm.css';
import { FaLock, FaAt } from "react-icons/fa";

const LoginForm = () => {
    const navigate = useNavigate()
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                    <FaAt className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>
                </div>
            </form>

            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot Password</a> 
            </div>

            <button type="submit" onClick={() => navigate('/dashboard')}>Login</button>            

            <div className="register-link">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default LoginForm;
