import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';

import './Dashboard.css';
import { Link } from 'react-router-dom';

export default function Branch({ branch, linkSuffix }) {
	return (
		<div className="big-wrapper">
			{[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
				<div id={sem} className="small-wrapper">
					<h3><Link to={`${linkSuffix}-${sem}`}>Semester {sem}</Link></h3>
				</div>
			))}
      <Navbar />
      <Sidebar />
		</div>
	);
}
