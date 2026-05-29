import React from "react";
import Sidebar
from "../components/Sidebar";
function Dashboard() {

  return (

    <div style={{
      display: "flex"
    }}>

      <Sidebar/>

      <h1>EMS Dashboard</h1>

      <hr />

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>

        <div style={cardStyle}>
          <h3>Total Employees</h3>
          <p>50</p>
        </div>

        <div style={cardStyle}>
          <h3>Departments</h3>
          <p>5</p>
        </div>

        <div style={cardStyle}>
          <h3>Attendance</h3>
          <p>90%</p>
        </div>

        <div style={cardStyle}>
          <h3>Pending Leaves</h3>
          <p>3</p>
        </div>

        <div style={cardStyle}>
          <h3>Payroll Summary</h3>
          <p>₹5,00,000</p>
        </div>

      </div>

    </div>
  );
}

const cardStyle = {

  border: "1px solid gray",

  padding: "20px",

  width: "200px",

  borderRadius: "10px",

  boxShadow:
  "0px 0px 5px gray"
};

export default Dashboard;