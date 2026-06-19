import React from "react";
import "./Nav.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <h2 className="logo"> 🎓 Student Management System</h2>
        <Sidebar />
      </div>

      {/* RIGHT */}
      <div className="navbar-right">
        <div className="profile">
          <div className="avatar">A</div>
          <div className="profile-text">
            <span>Welcome</span>
            <strong>Admin</strong>
          </div>
          <span className="dropdown">▼</span>
        </div>

        <button className="logout">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
