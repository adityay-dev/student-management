import axios from "axios";

// 🌐 Live Backend URL (Railway)
const API_BASE = "https://student-management-production-bbfe.up.railway.app";

/**
 * Add new student
 */
export const addStudent = (student) => {
  return axios.post(`${API_BASE}/students`, student);
};

/**
 * Get student by ID
 */
export const getStudentById = (id) => {
  return axios.get(`${API_BASE}/students/${id}`);
};

/**
 * Update student
 */
export const updateStudent = (id, student) => {
  return axios.put(`${API_BASE}/students/${id}`, student);
};

/**
 * Delete student
 */
export const deleteStudent = (id) => {
  return axios.delete(`${API_BASE}/students/${id}`);
};

/**
 * Get all students
 */
export const getAllStudents = () => {
  return axios.get(`${API_BASE}/students`);
};

/**
 * Get total student count
 */
export const getStudentCount = () => {
  return axios.get(`${API_BASE}/students/count`);
};