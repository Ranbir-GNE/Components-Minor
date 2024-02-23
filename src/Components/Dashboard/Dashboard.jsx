import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="container">
      <div className="header">
        <h1>College Name</h1>
      </div>
      <div className="main">
        <div className="notice">
          <h2>Notices</h2>
          <p>Notice 1</p>
          <p>Notice 2</p>
          <p>Notice 3</p>
        </div>
        <div className="content">
          <p>Hello GUys</p>
        </div>
        <div className="stuff">
          <h2>Stuff</h2>
          <p>Stuff 1</p>
          <p>Stuff 2</p>
          <p>Stuff 3</p>
        </div>
      </div>
      <div className="footer">
        {/* Add footer content here */}
      </div>
    </div>
  );
}

export default Dashboard;