import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Dashboard</h3>

      <ul className="sidebar-menu">
        <li>
          <Link to="/">🏠 Home </Link>
        </li>
        <li>
          <Link to="/students">🎓 Students </Link>
        </li>
        <li>📚 Courses</li>
        <li>📊 Reports</li>
        <li>⚙️ Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
