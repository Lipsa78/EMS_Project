import React from "react";
import Sidebar from "../components/Sidebar";
import "./Dashboard.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

import {
  FaUsers,
  FaBuilding,
  FaClock,
  FaCalendarAlt,
  FaMoneyBillWave
} from "react-icons/fa";

const employeeData = [
  { day: "Mon", employees: 80 },
  { day: "Tue", employees: 95 },
  { day: "Wed", employees: 100 },
  { day: "Thu", employees: 120 },
  { day: "Fri", employees: 110 },
  { day: "Sat", employees: 90 }
];

const departmentData = [
  { name: "IT", value: 35 },
  { name: "HR", value: 20 },
  { name: "Finance", value: 20 },
  { name: "Sales", value: 25 }
];

const COLORS = [
  "#2563eb",
  "#22c55e",
  "#f59e0b",
  "#a855f7"
];

function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-content">

        <h1 className="dashboard-title">
          Dashboard
        </h1>

        {/* Top Cards */}

        <div className="cards">

          <div className="card">

            <div className="card-header">
  <FaUsers size={25} color="#2563eb" />
</div>

            <h3>Total Employees</h3>
            <p>5</p>
          </div>

          <div className="card">

            <div className="card-header">
  <FaBuilding size={25} color="#22c55e" />
</div>
            <h3>Departments</h3>
            <p>5</p>
          </div>

          <div className="card">

            <div className="card-header">
  <FaClock size={25} color="#f59e0b" />
</div>
            <h3>Attendance</h3>
            <p>90%</p>
          </div>

          <div className="card">

            <div className="card-header">
  <FaCalendarAlt size={25} color="#ef4444" />
</div>
            <h3>Pending Leaves</h3>
            <p>3</p>
          </div>

          <div className="card">

            <div className="card-header">
  <FaMoneyBillWave size={25} color="#8b5cf6" />
</div>
            <h3>Payroll Summary</h3>
            <p>₹5,00,000</p>
          </div>

        </div>

        {/* Charts */}

        <div className="chart-row">

          <div className="chart-box">

            <h2>Employee Overview</h2>

            <ResponsiveContainer
              width="100%"
              height={250}
            >
              <LineChart data={employeeData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="employees"
                  stroke="#2563eb"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>

          </div>

          <div className="chart-box">

            <h2>Employees by Department</h2>

            <ResponsiveContainer width="100%" height={250}>
  <PieChart>

    <Pie
      data={departmentData}
      dataKey="value"
      nameKey="name"
      cx="40%"
      cy="50%"
      innerRadius={50}
      outerRadius={80}
    >
      {departmentData.map((entry, index) => (
        <Cell
          key={index}
          fill={COLORS[index]}
        />
      ))}
    </Pie>

    <Legend
      layout="vertical"
      align="right"
      verticalAlign="middle"
    />

    <Tooltip />

  </PieChart>
</ResponsiveContainer>

          </div>

        </div>

        {/* Tables */}

        <div className="table-row">

          <div className="table-box">

            <h2>Recent Employees</h2>

            <table>

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Role</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>1</td>
                  <td>Rahul</td>
                  <td>IT</td>
                  <td>Developer</td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>Priya</td>
                  <td>HR</td>
                  <td>Manager</td>
                </tr>

              </tbody>

            </table>

          </div>

          <div className="table-box">

            <h2>Leave Requests</h2>

            <table>

              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>

                <tr>
                  <td>Amit</td>
                  <td>Casual Leave</td>
                  <td>Pending</td>
                </tr>

                <tr>
                  <td>Neha</td>
                  <td>Sick Leave</td>
                  <td>Approved</td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;