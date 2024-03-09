import React, { useState } from 'react';
import { FaLock, FaEnvelope, FaAt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'; // Add this import

const Attendance = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [totalClasses, setTotalClasses] = useState(0)
    const [classesAttended, setClassesAttended] = useState(0)

    const handleChange = (e) => {
        //setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email)
        console.log(username)
        console.log(totalClasses)
        console.log(classesAttended)

        /*if (totalClasses === 0) {
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
        }*/
    };

    return (
        <div className='wrapper'>
            <h2>Attendance</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input type="email" placeholder='Email Address' name="E-Mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <FaEnvelope className='icon' />
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Username' name="Username" value={username} onChange={(e) => setUsername(e.target.value)} required minLength={8} />
                    <FaAt className='icon' />
                </div>
                <div className="input-box">
                    <input type="number" placeholder='Total Classes' name="Total Classes" value={totalClasses} onChange={(e) => setTotalClasses(e.target.value)} />
                    <FaLock className='icon' />
                </div>
                <div className="input-box">
                    <input type="number" placeholder='Classes Attended' name="Classes Attended" value={classesAttended} onChange={(e) => setClassesAttended(e.target.value)} />
                    <FaLock className='icon' />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Attendance;