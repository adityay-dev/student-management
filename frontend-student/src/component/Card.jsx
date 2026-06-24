import React, { useEffect, useState } from "react";
import axios from "axios";
import "./card.css";

// ✅ ADD THIS
const API_BASE = "https://student-management-production-bbfe.up.railway.app";

const Card = () => {
  const [totalStudents, setTotalStudents] = useState(0);

  const fetchCount = async () => {
    try {
      const res = await axios.get(`${API_BASE}/students/count`);

      const count =
        typeof res.data === "number" ? res.data : res.data.totalStudents;

      setTotalStudents(count || 0);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    fetchCount();

    window.addEventListener("studentAdded", fetchCount);

    return () => {
      window.removeEventListener("studentAdded", fetchCount);
    };
  }, []);

  return (
    <div className="card">
      <div className="card-icon">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
          alt="student"
          width="50"
        />
      </div>

      <div className="card-content">
        <h4>Total Students</h4>
        <h2>{totalStudents}</h2>
      </div>
    </div>
  );
};

export default Card;
