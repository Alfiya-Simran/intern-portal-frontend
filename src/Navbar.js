import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Optional: Your styles

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: Clear any localStorage/sessionStorage here if used
    navigate('/');
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        <li style={{ marginLeft: 'auto' }}>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
