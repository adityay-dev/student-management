import React, { useEffect, useState } from "react";
import "./table.css";
import { Link, useNavigate } from "react-router-dom";
import { getAllStudents, deleteStudent } from "../server/api";

const Table = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // Load all students
  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    try {
      const response = await getAllStudents();
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE student
  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      loadStudents(); // refresh table
    } catch (error) {
      console.log(error);
    }
  };

  // UPDATE student (navigate to edit page)
  const handleUpdate = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="table-container">
      <div className="top">
        <h2>Student List</h2>

        <button>
          <Link to="/add">➕ Add Student</Link>
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Gender</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.gender}</td>
              <td>{student.email}</td>
              <td>{student.dob}</td>

              <td>
                <button onClick={() => handleDelete(student.id)}>Delete</button>

                <button onClick={() => handleUpdate(student.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
