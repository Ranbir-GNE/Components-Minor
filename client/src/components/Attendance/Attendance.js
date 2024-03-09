import React, { useState } from 'react';
import { FaLock, FaEnvelope, FaAt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Add this import

const Attendance = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        totalClasses: '',
        classesAttended: '',
    });

    const { username, email, totalClasses, classesAttended } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (totalClasses === 0) {
            console.error("Please enter correct classes ");
            return;
        }
    
        try {
            const response = await fetch('http://localhost:5000/api/auth/attendance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    totalClasses,
                    classesAttended,
                }),
            });
    
            console.log(response);
            const data = await response.json();
    
            if (response.ok) {
                console.log("Attendance Uploaded Successfully", data);
                // Redirect after successful attendance submission
                navigate('/success'); // Example route to redirect to
            } else {
                console.error("Upload failed", data);
                // Handle registration failure, display error message, etc.
            }
        } catch (error) {
            console.error("Upload error", error);
        }
    };

    return (
        <div className='wrapper'>
            <h2>Attendance</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input type="email" placeholder='Email Address' name="email" value={email} onChange={handleChange} required />
                    <FaEnvelope className='icon' />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Username' name="username" value={username} onChange={handleChange} required minLength={8} />
                    <FaAt className='icon' />
                </div>
                <div className="input-box">
                    <input type="number" placeholder='Total Classes' name="totalClasses" value={totalClasses} onChange={handleChange} />
                    <FaLock className='icon' />
                </div>
                <div className="input-box">
                    <input type="number" placeholder='Classes Attended' name="classesAttended" value={classesAttended} onChange={handleChange} />
                    <FaLock className='icon' />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Attendance;
