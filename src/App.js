import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import Navbar from './Components/Dashboard/Navbar';
import LoginForm from './Components/LoginForm/LoginForm';
import Dashboard from './Components/Dashboard/Dashboard';
import Sidebar from './Components/Dashboard/Sidebar';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleBurgerClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Router>
      <div className="App">
        <Sidebar show={showSidebar} onBurgerClick={handleBurgerClick} />
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/" element={<RegisterForm />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;