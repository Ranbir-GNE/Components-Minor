// src/components/Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you have different routes/pages

import styled from 'styled-components';

const SidebarWrapper = styled.div`
  /* Add your styling for the sidebar here */
`;

const SidebarItem = styled(Link)`
  /* Add styling for individual sidebar items */
  color: #333;
  text-decoration: none;
  padding: 10px;
  display: block;

  &:hover {
    color: #007bff; /* Change font color on hover */
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarItem to="/">Dashboard</SidebarItem>
      <SidebarItem to="/academics">Academics</SidebarItem>
      <SidebarItem to="/student">Student</SidebarItem>
      <SidebarItem to="/settings">Settings</SidebarItem>
      {/* Add more sidebar items as needed */}
    </SidebarWrapper>
  );
};

export default Sidebar;
