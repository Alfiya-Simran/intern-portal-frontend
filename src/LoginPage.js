import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { Link } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login success
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h2>Intern Portal Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p>Don’t have an account? <Link to="/signup">Sign up here</Link></p>
      </form>
    </div>
  );
}

export default LoginPage;
