import React, { useState } from "react";
import "./add.css";
import { addStudent } from "../server/api";

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    course: "",
    email: "",
    gender: "",
    dob: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await addStudent(student);

      console.log("Saved:", res.data);
      alert("Student Added Successfully ✔");

      // 🔥 IMPORTANT: notify Card to refresh
      window.dispatchEvent(new Event("studentAdded"));

      // reset form
      setStudent({
        name: "",
        course: "",
        email: "",
        gender: "",
        dob: "",
      });
    } catch (error) {
      console.log("Error:", error);
      alert("Something went wrong ❌");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={student.course}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          value={student.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="date"
          name="dob"
          value={student.dob}
          onChange={handleChange}
          required
        />

        <button type="submit">Save Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
