import { useState } from "react";
import EmployeeList from "./components/EmployeeList";
import Header from "./components/Header";
import employeeData from './utils/employees.json';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeProfile from "./components/EmployeeProfile";
import EmployeeForm from "./components/EmployeeForm";

export default function App() {
  const [employees, setEmployees] = useState(employeeData.employees);

  return (
    <>
      <Header />
      <Routes>

        <Route path="/addEmployee" exact element={<EmployeeForm />} />
        <Route path="/" exact element={<EmployeeList />} />
        <Route path='/employee/:id' element={<EmployeeProfile />} key={`employee-${employees.id}`} />
      </Routes>
    </>
  )
}