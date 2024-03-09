import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';

import './Dashboard.css';
import { Link } from 'react-router-dom';

export default function Branch({ branch, linkSuffix }) {
	return (
		<div>
      <Navbar />
      <Sidebar />
		</div>
	);
}
