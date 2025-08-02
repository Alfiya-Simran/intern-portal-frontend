import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "https://intern-portal-backend-wuk4.onrender.com";

const Dashboard = () => {
  const [intern, setIntern] = useState(null);

  useEffect(() => {
    axios.get(`${API_BASE}/intern`).then((res) => setIntern(res.data));
  }, []);

  return (
    <div className="card p-4 shadow-sm mb-4">
      <h2 className="mb-3">Dashboard</h2>
      {intern ? (
        <div>
          <p><strong>Name:</strong> {intern.name}</p>
          <p><strong>Referral Code:</strong> {intern.referralCode}</p>
          <p><strong>Donations Raised:</strong> ₹{intern.donationsRaised}</p>

          <div className="mt-3">
            <h5>🎁 Rewards/Unlockables</h5>
            <ul>
              <li>🎖️ Bronze Badge at ₹500</li>
              <li>🥈 Silver Badge at ₹1000</li>
              <li>🏆 Gold Badge at ₹1500</li>
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading intern data...</p>
      )}
    </div>
  );
};

export default Dashboard;
