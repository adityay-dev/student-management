import React from "react";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import Table from "../component/Table";
import AddStudent from "../component/Addstudent";
import Para from "../component/para";

const Dashbord = () => {
  return (
    <div className="main-layout">
      <Navbar />

      {/* Cards Section */}
      <div className="card-container">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Table Section */}
      <div className="table-container">
        <Para />
      </div>
    </div>
  );
};

export default Dashbord;
