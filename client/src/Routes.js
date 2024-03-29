import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';
import Startpage from './components/startpage/startpage';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings/Settings';
import FeeDetails from './components/FeeDetails/FeeDetails';
import Student from './components/Student/Student';
import ExamForm from './components/Examination/ExamForm';
import Academics from './components/Academics/Academics';
import Attendance from './components/Attendance/Attendance';



// Routes.js

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Startpage />} />
        {/* <Route path="/register" element={<RegisterForm />} /> */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/startpage" element={<Startpage />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/academics' element={<Academics />} />
        <Route path="/student" element={<Student />} />
        <Route path="/fees" element={<FeeDetails />} />
        <Route path="/examination" element={<ExamForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path="/attendance" element={<Attendance />} />      
      </Routes>
    </Router>
  );
};

export default AppRoutes;
