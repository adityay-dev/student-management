import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashbord from "./pages/Dashbord";
import Student from "./pages/Student";
import AddStudent from "./component/Addstudent";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/students" element={<Student />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<AddStudent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
