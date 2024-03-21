import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import './Settings.css';


const Settings = () => {
return (
    <div className="settings">
        <div className="settings-row">
            <div className="settings-block">
                <h3>My Details</h3>
                <div className="settings-row">
                    <div className="settings-block"><p>First Name</p></div>
                    <div className="settings-block"><p>Last Name</p></div>
                    <div className="settings-contain"><p>Email</p></div>
                    <div className="settings-block"><p>Phone Number</p></div>
                </div>
            </div>
            <div className="settings-block">
                <h3>Profile</h3>
                <div className="settings-row">
                    <div className="settings-block"><p>Current Course</p></div>
                    <div className="settings-block"><p>Father's Contact</p></div>
                    <div className="settings-block"><p>Mother's Contact</p></div>
                    <div className="settings-contain"><p>Address</p></div>
                </div>
            </div>
            <div className="settings-block">
                <h3>Contact Us</h3>
                <p><a href="https://www.gndec.ac.in/">College Website</a></p>
                <p>Address : Guru Nanak Dev Engineering College</p>
                <p>Gill Park, Gill Road, Ludhiana 141006, Punjab(India).</p>
                <p>Phone No. 0161 5064501,</p>
                <p>Email: principal@gndec.ac.in</p>
                <p>Academic/Admission:0161 5064704</p>
                <p>Testing and Consultancy: 0161 5064709</p>
            </div>
        </div>
        <div className="settings-block">
                <h3>Feedback</h3>
                <div className="feedback-form">
                    <div className="form-group">
                        <label htmlFor="department">Addressing Department</label>
                        <select id="department" name="department">
                            <option value="mech">Mechanical Engineering</option>
                            <option value="civil">Civil Engineering</option>
                            <option value="cse">Computer Science and Engineering</option>
                            <option value="electrical">Electrical Engineering</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="issue">Describe the Issue</label>
                        <textarea id="issue" name="issue" rows="4" cols="50"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="picture">Upload Picture</label>
                        <input type="file" id="picture" name="picture" accept="image/*" />
                    </div>
                    <button type="submit">Submit</button>
                </div>
        </div>
        
        <Navbar />
        {/* <Sidebar /> */}
    </div>
);
};

export default Settings;