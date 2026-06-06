import Sidebar from "../components/Sidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Department.css";

import {
  FaBuilding,
  FaUsers,
  FaUserTie,
  FaCheckCircle
} from "react-icons/fa";

function Department() {

  const [departments, setDepartments] = useState([]);
  const [departmentName, setDepartmentName] = useState("");
  const [managerName, setManagerName] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:8080/departments",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setDepartments(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {

    try {

      const token = localStorage.getItem("token");

      const data = {
        departmentName,
        managerName
      };

      if (editingId) {

        await axios.put(
          `http://localhost:8082/departments/${editingId}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        alert("Department Updated");

      } else {

        await axios.post(
          "http://localhost:8080/departments",
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        alert("Department Added");
      }

      setDepartmentName("");
      setManagerName("");
      setEditingId(null);

      fetchDepartments();

    } catch (error) {
      console.log(error);
    }
  };

  const deleteDepartment = async (id) => {

    try {

      const token = localStorage.getItem("token");

      await axios.delete(
        `/departments/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Department Deleted");

      fetchDepartments();

    } catch (error) {
      console.log(error);
    }
  };

  const editDepartment = (department) => {

    setDepartmentName(
      department.departmentName
    );

    setManagerName(
      department.managerName
    );

    setEditingId(
      department.departmentId
    );
  };

  const filteredDepartments =
    departments.filter((department) =>
      department.departmentName
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (

  <div
    style={{
      display: "flex",
      width: "100%",
      overflowX: "hidden"
    }}
  >

    <Sidebar />

    <div className="department-container">

      <h1 className="department-title">
        Department Management
      </h1>

      <div className="department-cards">

       <div className="department-card">
          <FaBuilding className="card-icon building-icon" />
          <h3>Total Departments</h3>
          <p>{departments.length}</p>
       </div>

        <div className="department-card">
           <FaUserTie className="card-icon manager-icon" />
           <h3>Managers</h3>
           <p>{departments.length}</p>
        </div>

        <div className="department-card">
           <FaCheckCircle className="card-icon active-icon" />
           <h3>Active Departments</h3>
          <p>{departments.length}</p>
        </div>

        <div className="department-card">
           <FaUsers className="card-icon employee-icon" />
           <h3>Employees</h3>
           <p>5</p>
          </div>

      </div>

      <div className="form-box">

        <input
          type="text"
          placeholder="Search Department"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Department Name"
          value={departmentName}
          onChange={(e) =>
            setDepartmentName(
              e.target.value
            )
          }
        />

        <input
          type="text"
          placeholder="Manager Name"
          value={managerName}
          onChange={(e) =>
            setManagerName(
              e.target.value
            )
          }
        />

        <button onClick={handleSubmit}>
          {editingId
            ? "Update Department"
            : "Add Department"}
        </button>

      </div>

      <div className="table-container">

        <table>

          <thead>

            <tr>
              <th>ID</th>
              <th>Department</th>
              <th>Manager</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {
             filteredDepartments.map(
                 (department, index) => (

                  <tr
                    key={
                      department.departmentId
                    }
                  >

                  <td>
                    {department.departmentId}
                  </td>

                    <td>
                      {
                        department.departmentName
                      }
                    </td>

                    <td>
                      {
                        department.managerName
                      }
                    </td>

                    <td>

                      <button
                        className="edit-btn"
                        onClick={() =>
                          editDepartment(
                            department
                          )
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          deleteDepartment(
                            department.departmentId
                          )
                        }
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                )
              )
            }

          </tbody>

      </table>

    </div>

  </div>

</div>

  );
}

export default Department;