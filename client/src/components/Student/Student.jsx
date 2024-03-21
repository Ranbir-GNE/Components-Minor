import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import './Student.css';

const Student = () => {
  const [student, setStudent] = useState({});

  useEffect(() => {
    fetch('mongodb+srv://gundeepsinghm:collegepassword@cluster0.rnnuthn.mongodb.net/?retryWrites=true&w=majority')
      .then(response => response.json())
      .then(data => setStudent(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <div className="student-wrapper">
        <div className="profile-picture">
          {/* Add student profile picture here */}
        </div>
        <div className="student-details">
          <h2>Student Details</h2>
          <p>Username: {student.username}</p>
          <p>Email: {student.email}</p>
          <p>Phone Number: {student.phoneNumber}</p>
          <p>D.O.B: {student.dateOfBirth}</p>
          <p>Role: {student.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Student;
