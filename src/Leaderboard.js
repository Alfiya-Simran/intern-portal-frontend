import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "https://intern-portal-backend-wuk4.onrender.com";

const Leaderboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/leaderboard`).then((res) => setData(res.data));
  }, []);

  return (
    <div className="card p-4 shadow-sm">
      <h2 className="mb-3">Leaderboard</h2>
      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Donations</th>
          </tr>
        </thead>
        <tbody>
          {data.map((intern, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{intern.name}</td>
              <td>₹{intern.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;

