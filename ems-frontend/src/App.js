import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Department from "./pages/Department";
import Attendance from "./pages/Attendance";
import Employees from "./pages/Employees";
import LeaveRequest from "./pages/LeaveRequest";
import AddEmployee from "./pages/AddEmployee";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Login */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Employees */}
        <Route
          path="/employees"
          element={
            <ProtectedRoute>
              <Employees />
            </ProtectedRoute>
          }
        />

        {/* Departments */}
        <Route
          path="/departments"
          element={
            <ProtectedRoute>
              <Department />
            </ProtectedRoute>
          }
        />

        {/* Attendance */}
        <Route
          path="/attendance"
          element={
            <ProtectedRoute>
              <Attendance />
            </ProtectedRoute>
          }
        />

        {/* Leave */}
        <Route
          path="/leaves"
          element={
            <ProtectedRoute>
              <LeaveRequest />
            </ProtectedRoute>
          }
        />

        <Route
  path="/add-employee"
  element={
    <ProtectedRoute>
      <AddEmployee />
    </ProtectedRoute>
  }
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;