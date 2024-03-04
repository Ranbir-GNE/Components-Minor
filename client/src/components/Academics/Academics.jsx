import React from 'react';
import { useNavigate} from 'react-router-dom'
import './Academics.css';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const Academics = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar/>
            <Sidebar/>
        <div className="student-wrapper">
            <div className="student-details">
                <h2>Academic Details</h2>
                <p>First Name: John</p>
                <p>Semester: 5</p>
                <p>Section: A</p>
                <p>Program: Computer Science</p>
                <p>Course Details: {/* Add program opted course details here */}</p>
                <p>Course Outcomes: {/* Add course outcomes here */}</p>
                <p>Program Details: {/* Add program details here */}</p>
                <p>Enrollment Date: {/* Add enrollment date here */}</p>
                <p>Active Courses: {/* Add active courses here */}</p>
                <p>Milestones Reached: {/* Add milestones reached here */}</p>
                <p>Attendance %: {/* Add attendance percentage here */}</p>
            </div>
        </div>
        </div>
    );
};

export default Academics;
