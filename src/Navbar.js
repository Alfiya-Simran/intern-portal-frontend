// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // optional styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>Intern Portal</h3>
      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
