import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import './Dashboard.css';

function Dashboard() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="dashboard">
      {windowWidth > 768 && <Navbar />}
      {windowWidth <= 768 && windowWidth > 400 && <Sidebar />}
    </div>
    );
}
export default Dashboard;