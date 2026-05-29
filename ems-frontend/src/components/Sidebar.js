import React from "react";

import { useNavigate }
from "react-router-dom";
import { Link }
from "react-router-dom";

function Sidebar() {

  const navigate =
  useNavigate();

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    navigate("/");
  };

  return (

    <div style={sidebarStyle}>

      <h2>EMS</h2>

      <ul style={{listStyle: "none"}}>

        <li>Dashboard</li>

        <li>Employees</li>

        <li>

  <Link to="/departments">

    Departments

  </Link>

</li>

        <li>Attendance</li>

        <li>Leaves</li>

        <li>Payroll</li>

      </ul>

      <button
        onClick={logout}
      >
        Logout
      </button>

    </div>
  );
}

const sidebarStyle = {

  width: "200px",

  height: "100vh",

  borderRight:
  "1px solid gray",

  padding: "20px"
};

export default Sidebar;