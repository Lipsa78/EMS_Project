import React from "react";

import {
  BrowserRouter,
  Routes,
  Route
}
from "react-router-dom";

import Login
from "./pages/Login";

import Dashboard
from "./pages/Dashboard";

import ProtectedRoute
from "./routes/ProtectedRoute";
import Department
from "./pages/Department";
import Attendance from "./pages/Attendance";
import Employees from "./pages/Employees";
import LeaveRequest from "./pages/LeaveRequest";
function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Login Page */}

        <Route
          path="/"
          element={<Login />}
        />

        {/* Protected Dashboard */}

        <Route
          path="/dashboard"

          element={
            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />
<Route

 path="/departments"

 element={

   <ProtectedRoute>

      <Department />

   </ProtectedRoute>
 }
/>
        <Route
        path="/employees"
        element={<Employees />}
        />
        <Route
        path="/attendance"
        element={<Attendance />}
      />
<Route
 path="/leaves"
 element={<LeaveRequest />}
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;