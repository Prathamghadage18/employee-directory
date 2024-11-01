import React, { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import "./App.css";

const employees = [
  {
    id: 1,
    name: "Johnson Wood",
    role: "Front End Developer",
    email: "johnsonwood@microsoft.com",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Team Lead",
    email: "johndoe@microsoft.com",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Fakhar Naveed",
    role: "UI/UX Designer",
    email: "fakhar@microsoft.com",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Alex Made",
    role: "Front End Developer",
    email: "alexmade@microsoft.com",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Johnson Wood",
    role: "Front End Developer",
    email: "johnsonwood@microsoft.com",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "John Doe",
    role: "Team Lead",
    email: "johndoe@microsoft.com",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <div className="profile">
          <img
            src="https://randomuser.me/api/portraits/men/0.jpg"
            alt="Profile"
            className="profile-image"
          />
          <span>Fakhar Naveed</span>
        </div>
      </header>
      <h1>Employees</h1>
      <div className="filter-buttons">
        <button className="filter-button active">All</button>
        <button className="filter-button">Active</button>
        <button className="filter-button">Inactive</button>
      </div>
      <div className="employee-grid">
        {filteredEmployees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
}

export default App;
