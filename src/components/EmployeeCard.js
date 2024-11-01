import React from "react";
import "./EmployeeCard.css";

function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">
      <img
        src={employee.image}
        alt={employee.name}
        className="employee-image"
      />
      <h3>{employee.name}</h3>
      <p>{employee.role}</p>
      <p>Email: {employee.email}</p>
      <div className="card-buttons">
        <button className="block-button">Block</button>
        <button className="details-button">Details</button>
      </div>
    </div>
  );
}

export default EmployeeCard;
