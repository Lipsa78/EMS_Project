import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaUsers,
  FaBuilding,
  FaClock,
  FaMoneyBill,
  FaChartBar,
  FaCog,
  FaUser,
  FaSignOutAlt
} from "react-icons/fa";

function Sidebar() {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const menuStyle = {
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 15px",
    marginBottom: "10px",
    borderRadius: "8px",
    fontSize: "15px"
  };

  return (
    <div style={sidebarStyle}>

      <div style={{ marginBottom: "25px" }}>
        <h1 style={{ color: "white", margin: 0 }}>
          EMS
        </h1>

        <p
          style={{
            color: "#b8c1d9",
            fontSize: "12px",
            marginTop: "5px"
          }}
        >
          Employee Management System
        </p>
      </div>

      <hr
        style={{
          borderColor: "#22345f",
          marginBottom: "20px"
        }}
      />

      <NavLink
        to="/dashboard"
        style={({ isActive }) => ({
          ...menuStyle,
          backgroundColor: isActive ? "#2563eb" : "transparent"
        })}
      >
        <FaHome />
        Dashboard
      </NavLink>

      <NavLink
        to="/employees"
        style={({ isActive }) => ({
          ...menuStyle,
          backgroundColor: isActive ? "#2563eb" : "transparent"
        })}
      >
        <FaUsers />
        Employees
      </NavLink>

      <NavLink
        to="/departments"
        style={({ isActive }) => ({
          ...menuStyle,
          backgroundColor: isActive ? "#2563eb" : "transparent"
        })}
      >
        <FaBuilding />
        Departments
      </NavLink>

      <NavLink
        to="/attendance"
        style={({ isActive }) => ({
          ...menuStyle,
          backgroundColor: isActive ? "#2563eb" : "transparent"
        })}
      >
        <FaClock />
        Attendance
      </NavLink>

      <NavLink
        to="/leaves"
        style={({ isActive }) => ({
          ...menuStyle,
          backgroundColor: isActive ? "#2563eb" : "transparent"
        })}
      >
        <FaUsers />
        Leave Management
      </NavLink>

      <NavLink
        to="/payroll"
        style={({ isActive }) => ({
          ...menuStyle,
          backgroundColor: isActive ? "#2563eb" : "transparent"
        })}
      >
        <FaMoneyBill />
        Payroll
      </NavLink>

      <NavLink
        to="/reports"
        style={({ isActive }) => ({
          ...menuStyle,
          backgroundColor: isActive ? "#2563eb" : "transparent"
        })}
      >
        <FaChartBar />
        Reports
      </NavLink>

      <NavLink
        to="/settings"
        style={({ isActive }) => ({
          ...menuStyle,
          backgroundColor: isActive ? "#2563eb" : "transparent"
        })}
      >
        <FaCog />
        Settings
      </NavLink>

      <NavLink
        to="/users"
        style={({ isActive }) => ({
          ...menuStyle,
          backgroundColor: isActive ? "#2563eb" : "transparent"
        })}
      >
        <FaUsers />
        Users
      </NavLink>

      <NavLink
        to="/profile"
        style={({ isActive }) => ({
          ...menuStyle,
          backgroundColor: isActive ? "#2563eb" : "transparent"
        })}
      >
        <FaUser />
        Profile
      </NavLink>

      <button
        onClick={logout}
        style={logoutBtn}
      >
        <FaSignOutAlt />
        Logout
      </button>

    </div>
  );
}

const sidebarStyle = {
  width: "260px",
  minWidth: "260px",
  minHeight: "100vh",
  background: "#071a45",
  padding: "20px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column"
};

const logoutBtn = {
  marginTop: "auto",
  width: "100%",
  padding: "12px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  fontSize: "15px"
};

export default Sidebar;