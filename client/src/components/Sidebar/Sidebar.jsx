import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

 
  const dropdownItems = [
    {
      title: 'Academics',
      links: [
        { title: 'Assignments', path: '' },
        { title: 'Result', path: '' },
        { title: 'Attendance', path: '/attendance' },
      ],
    },
    // {
    //   title: 'Examinations',
    //   links: [
    //     { title: 'Datesheet', path: '' },
    //     { title: 'Admit Card', path: 'https://admitcard-edconnect.vercel.app/', target: '_blank' },
    //     { title: 'ExamForm', path: '/examination' },
    //   ],
    // },
    // Add more dropdown items as needed
  ];

  return (
    <div className='sidebar'>
      <ul>
        <li>
          <Link to="https://edconnect-dashboard.vercel.app/">Dashboard</Link>
        </li>
        {dropdownItems.map((item, index) => (
          <li key={index}>
            <div
              className={`sidebar-item ${openDropdown === index ? 'active' : ''}`}
              onClick={() => handleDropdown(index)}
            >
              {item.title}
            </div>
            {openDropdown === index && (
              <ul className="dropdown-menu">
                {item.links.map((link, linkIndex) => (
                  <Link key={linkIndex} to={link.path}>
                    <li>{link.title}</li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
        {/* Non-dropdown items */}
        <li>
          <Link to="/student">My Account</Link>
        </li>
        <li>
          <a href="https://curacare.vercel.app/" target="_blank" rel="noopener noreferrer">
            Online Session
          </a>
        </li>
        {/* <li>
          <Link to="/change-password">Change Password</Link>
        </li> */}
        <li>
          <Link to="/fees">Fees Collection</Link>
        </li>
        {/* <li>
          <Link to="/examination">Examinations</Link>
        </li>
        <li>
          <Link to="/attendance">Attendance</Link>
        </li> */}
        
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/startpage">Logout</Link>
        </li>
        
      </ul>
    </div>
  );
}

export default Sidebar;
