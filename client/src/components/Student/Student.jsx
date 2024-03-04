import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import './Student.css';

const Student = () => {
    return (
      <div>
        <Navbar/>
        <Sidebar/>
      <div className="student-wrapper">
      <div className="profile-picture">
        {/* Add student profile picture here */}
      </div>
      <div className="student-details">
        <h2>Student Details</h2>
        <p>First Name: John</p>
        <p>University Roll Number: 123456</p>
        <p>Class Roll Number: 7890</p>
        <p>Semester: 5</p>
        <p>Section: A</p>
        <p>Program: Computer Science</p>
        <p>Course Details: {/* Add program opted course details here */}</p>
        <p>Address: 123 Main Street, City, State</p>
        <p>Father's Name: Michael</p>
        <p>Mobile Number: 9876543210</p>
      </div>
      </div>
    </div>
  );
};

export default Student;



