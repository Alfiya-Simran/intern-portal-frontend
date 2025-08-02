// src/components/Navbar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  // Show navbar only on /dashboard or /leaderboard
  const showNav = ["/dashboard", "/leaderboard"].includes(location.pathname);

  if (!showNav) return null;

  return (
    <nav className="navbar">
      <div className="navbar-logo">Intern Portal</div>
      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </div>
    </nav>
  );
};

export default Navbar;
