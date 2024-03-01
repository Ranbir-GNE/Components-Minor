import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './RegisterForm.css'
import { FaUserAlt, FaLock, FaEnvelope, FaMobile, FaCalendar, FaAt } from "react-icons/fa"

const LoginForm = () => {
  const navigate = useNavigate()
  return (
      <div className='wrapper'>
          <form action="">
              <h1>Registration</h1>
              <div className="input-box">
                  <input type="text" placeholder='Name' required/>
                  <FaUserAlt className='icon'/>
              </div>
              <div className="input-box">
                  <input type="email" placeholder='Email Address' required />
                  <FaEnvelope className='icon'/>
              </div>
              <div className="input-box">
                  <input type="tel" placeholder='Mobile Number'required maxLength={10}/>
                  <FaMobile className='icon'/>
              </div>
              <div className="input-box">
                  <input type="text" placeholder='Username' required minLength={8}/>
                  <FaAt className='icon'/>
              </div>
              <div className="input-box">
                  <input type="password" placeholder='Password' required minLength={12}/>
                  <FaLock className='icon'/>
              </div>
              <div className="input-box">
                  <input type="date" required/>
                  <FaCalendar className='icon'/>
              </div>
          </form>

          <div className="select-box">
                    <select value required>
                        <option value="">Select Role</option>
                        <option value="student">Student</option>
                        <option value="faculty">Faculty</option>
                        <option value="admin">Admin</option>
                    </select>
            </div>

          <button type="submit" onClick={() => navigate('/login')}>Register</button>            
          
          <div className="register-link">
              <p>Already have an Account? <Link to="/login">Login</Link></p>
          </div>
      </div>
  )
}

export default LoginForm;