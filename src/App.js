import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import Navbar from './Components/Dashboard/Navbar/Navbar';
import LoginForm from './Components/LoginForm/LoginForm';
import Student from './Components/Dashboard/Student/Student';
import Academics from './Components/Dashboard/Academics/Academics';
import Dashboard from './Components/Dashboard/Dashboard';
import FeeDetails from './Components/Dashboard/FeeDetails/FeeDetails';
import ExamForm from './Components/Dashboard/Examination/ExamForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/dashboard" element={
          <>
          <Navbar/>
          <Dashboard/>
          </>
          } />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/" element={<RegisterForm />} /> {/* Default route */}
          <Route path="/student" element={<><Student /> <Navbar/></>} />
          <Route path="/academics" element={<><Academics /> <Navbar/></>} /> 
          <Route path="/fees" element={<><FeeDetails /> <Navbar/></>} /> 
          <Route path="/examinations" element={<><ExamForm /> <Navbar/></>} /> 



        </Routes>
      </div>
    </Router>
  );
}

export default App;