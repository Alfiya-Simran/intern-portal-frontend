import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import SignupPage from "./SignupPage";
import Leaderboard fron "./Leaderboard";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
