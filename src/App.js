import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import SignupPage from "./SignupPage";
import Leaderboard from "./Leaderboard";

function AppWrapper() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/' || location.pathname === '/signup';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
