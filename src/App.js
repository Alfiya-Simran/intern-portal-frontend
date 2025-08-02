import React from "react";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";

function App() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Intern Portal</h1>
      <Dashboard />
      <hr />
      <Leaderboard />
    </div>
  );
}

export default App;
