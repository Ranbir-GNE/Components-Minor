import React from 'react';
import { useNavigate} from 'react-router-dom'
import './ExamForm.css';

const ExamForm = () => {
    const navigate = useNavigate()
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Exam Form</h1>
                <div className="input-box">
                    <input type="text" placeholder='University Roll Number' required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Username' required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                </div>
                <div className="select-box">
                    <select required>
                        <option value="">Select Course</option>
                        <option value="mechanical">Mechanical Eng</option>
                        <option value="civil">Civil</option>
                        <option value="electrical">Electrical</option>
                        <option value="it">Information Tech</option>
                        <option value="cs">Computer Sciences</option>
                        <option value="production">Production</option>
                        <option value="automobile">Automobile</option>
                    </select>
                </div>
                <div className="select-box">
                    <select required>
                        <option value="">Select Year</option>
                        {Array.from({ length: new Date().getFullYear() - 2017 }, (_, i) => (
                            <option key={i} value={new Date().getFullYear() - i}>
                                {new Date().getFullYear() - i}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="select-box">
                    <label>
                        <input type="radio" name="examType" value="regular" required/> Regular
                    </label>
                    <label>
                        <input type="radio" name="examType" value="reappear" required/> Re-appear
                    </label>
                </div>
            </form>

            <button type="submit" onClick={() => navigate('/print-admit-card')}>Print Admit Card</button>            
            </div>
    );
};

export default ExamForm;
