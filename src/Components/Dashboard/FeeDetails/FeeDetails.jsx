import React from 'react';
// import { useNavigate} from 'react-router-dom'
import './FeeDetails.css';

const FeeDetails = () => {
    // const navigate = useNavigate()
    return (
        <div className="fee-wrapper">
            <div className="student-details">
                <h2>Student Details</h2>
                <p>First Name: John</p>
                <p>Last Name: Doe</p>
                <p>Roll Number: 123456</p>
                <p>Program: Computer Science</p>
                <p>Batch: 2022</p>
            </div>
            <div className="payment-details">
                <h2>Last Payment Receipt</h2>
                <p>Receipt Number: 789012</p>
                <p>Payment Date: 2022-01-01</p>
                <p>Amount Paid: $1000</p>
            </div>
            <div className="scholarship-details">
                <h2>Scholarship Eligibility</h2>
                <p>Eligible for Scholarship: Yes</p>
                <p>Scholarships Availed: 2</p>
                <p>Scholarship Amount: $2000</p>
            </div>
        </div>
    );
};

export default FeeDetails;
