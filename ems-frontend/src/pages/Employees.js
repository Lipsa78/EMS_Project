import "./Employees.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { FaUsers, FaUserCheck, FaUserTimes } from "react-icons/fa";

function Employees() {

  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);

  const [keyword, setKeyword] =
    useState("");

  const [editingEmployee,
    setEditingEmployee] =
    useState(null);

  const [newEmployee,
    setNewEmployee] =
    useState({

      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      email: "",
      phone: "",
      address: "",
      designation: "",
      joiningDate: "",
      salary: "",
      status: "ACTIVE",
      image: null
    });

  useEffect(() => {

    fetchEmployees();

  }, []);

  const fetchEmployees = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(

          "http://localhost:8080/employees",

          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

      setEmployees(response.data);

    } catch (error) {

      console.log(error);

      alert(
        "Failed to fetch employees"
      );
    }
  };

  const handleChange = (e) => {

    const { name, value } =
      e.target;

    if (editingEmployee) {

      setEditingEmployee({

        ...editingEmployee,

        [name]: value
      });

    } else {

      setNewEmployee({

        ...newEmployee,

        [name]: value
      });
    }
  };

  const handleImageChange = (e) => {

    const file =
      e.target.files[0];

    if (editingEmployee) {

      setEditingEmployee({

        ...editingEmployee,

        image: file
      });

    } else {

      setNewEmployee({

        ...newEmployee,

        image: file
      });
    }
  };

  const addEmployee = async () => {

    try {

      if (
        !newEmployee.firstName ||
        !newEmployee.lastName ||
        !newEmployee.email
      ) {

        alert(
          "Please fill required fields"
        );

        return;
      }

      const token =
        localStorage.getItem("token");

      const formData =
        new FormData();

      formData.append(
        "firstName",
        newEmployee.firstName
      );

      formData.append(
        "lastName",
        newEmployee.lastName
      );

      formData.append(
        "gender",
        newEmployee.gender
      );

      formData.append(
        "dateOfBirth",
        newEmployee.dateOfBirth
      );

      formData.append(
        "email",
        newEmployee.email
      );

      formData.append(
        "phone",
        newEmployee.phone
      );

      formData.append(
        "address",
        newEmployee.address
      );

      formData.append(
        "designation",
        newEmployee.designation
      );

      formData.append(
        "joiningDate",
        newEmployee.joiningDate
      );

      formData.append(
        "salary",
        newEmployee.salary
      );

      formData.append(
        "status",
        newEmployee.status
      );

      if (newEmployee.image) {

       formData.append(
  "image",
  newEmployee.image
);
      }

      await axios.post(

        "http://localhost:8080/employees",

        formData,

        {
          headers: {

            Authorization:
              `Bearer ${token}`
          }
        }
      );

      alert(
        "Employee Added Successfully"
      );

      setNewEmployee({

        firstName: "",
        lastName: "",
        gender: "",
        dateOfBirth: "",
        email: "",
        phone: "",
        address: "",
        designation: "",
        joiningDate: "",
        salary: "",
        status: "ACTIVE",
        image: null
      });

      fetchEmployees();

    } catch (error) {

      console.log(error);

      console.log(
        error.response
      );

      alert(
        "Add Employee Failed"
      );
    }
  };

  const updateEmployee = async () => {

  try {

    const token =
      localStorage.getItem("token");

    const updatedEmployee = {

      firstName: editingEmployee.firstName,
      lastName: editingEmployee.lastName,
      gender: editingEmployee.gender,
      dateOfBirth: editingEmployee.dateOfBirth,
      email: editingEmployee.email,
      phone: editingEmployee.phone,
      address: editingEmployee.address,
      designation: editingEmployee.designation,
      joiningDate: editingEmployee.joiningDate,
      salary: editingEmployee.salary,
      status: editingEmployee.status,
      profileImage: editingEmployee.profileImage
    };

    await axios.put(

      `http://localhost:8082/employees/${editingEmployee.employeeId}`,

      updatedEmployee,

      {
        headers: {
          Authorization:
            `Bearer ${token}`,
          "Content-Type":
            "application/json"
        }
      }
    );

    alert(
      "Employee Updated Successfully"
    );

    setEditingEmployee(null);

    fetchEmployees();

  } catch (error) {

    console.log(error);

    alert("Update Failed");
  }
};

  const deleteEmployee = async (id) => {

    try {

      const token =
        localStorage.getItem("token");

      await axios.delete(

        `http://localhost:8082/employees/${id}`,

        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      alert(
        "Employee Deleted Successfully"
      );

      fetchEmployees();

    } catch (error) {

      console.log(error);
    }
  };

  const searchEmployee = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await axios.get(

          `http://localhost:8082/employees/search?keyword=${keyword}`,

          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

      setEmployees(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  const filterEmployee =
    async (status) => {

      try {

        const token =
          localStorage.getItem("token");

        if (status === "") {

          fetchEmployees();

          return;
        }

        const response =
          await axios.get(

            `http://localhost:8082/employees/status?status=${status}`,

            {
              headers: {
                Authorization:
                  `Bearer ${token}`
              }
            }
          );

        setEmployees(
          response.data
        );

      } catch (error) {

        console.log(error);
      }
    };

  return (

 <div style={{
  display: "flex"
}}>

  <Sidebar />

  <div style={{
  flex: 1,
  padding: "20px",
  background: "#f5f7fb"
}}>
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }}
>
  <h1>Employee Management</h1>

  <button
    onClick={() => navigate("/add-employee")}
    style={{
      background: "#2563eb",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer"
    }}
  >
    + Add Employee
  </button>
</div>

      <div style={{
  display: "flex",
  gap: "20px",
  marginBottom: "20px"
}}>

<div style={{
  flex: 1,
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
}}>

  <div style={{
    display:"flex",
    alignItems:"center",
    gap:"15px"
  }}>

    <FaUsers
      size={35}
      color="#2563eb"
    />

    <div>
      <h3>Total Employees</h3>
      <h2>{employees.length}</h2>
    </div>

  </div>

</div>

 <div style={{
  flex: 1,
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
}}>

  <div style={{
    display:"flex",
    alignItems:"center",
    gap:"15px"
  }}>

    <FaUserCheck
      size={35}
      color="green"
    />

    <div>
      <h3>Active Employees</h3>

      <h2>
        {
          employees.filter(
            emp => emp.status === "ACTIVE"
          ).length
        }
      </h2>
    </div>

  </div>

</div>

  <div style={{
    flex: 1,
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
  }}>
    <div style={{
  flex: 1,
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
}}>

  <div style={{
    display:"flex",
    alignItems:"center",
    gap:"15px"
  }}>

    <FaUserTimes
      size={35}
      color="red"
    />

    <div>
      <h3>Inactive Employees</h3>

      <h2>
        {
          employees.filter(
            emp => emp.status === "INACTIVE"
          ).length
        }
      </h2>
    </div>

  </div>

</div>
    <h2>
      {
        employees.filter(
          emp => emp.status === "INACTIVE"
        ).length
      }
    </h2>
  </div>

</div>
      <div style={{
  marginBottom: "20px",
  display: "flex",
  justifyContent: "flex-end"
}}>
  <input
    type="text"
    placeholder="Search employee..."
    value={keyword}
    onChange={(e) => setKeyword(e.target.value)}
    style={{
      padding: "10px",
      width: "250px"
    }}
  />

  <button
    onClick={searchEmployee}
    style={{
      marginLeft: "10px"
    }}
  >
    Search
  </button>
 </div>
      {/* FORM */}
<div style={{
  display: "none"
}}>

        <h2>

          {editingEmployee
            ? "Edit Employee"
            : "Add Employee"}

        </h2>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={
            editingEmployee
              ? editingEmployee.firstName
              : newEmployee.firstName
          }
          onChange={handleChange}
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={
            editingEmployee
              ? editingEmployee.lastName
              : newEmployee.lastName
          }
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="gender"
          value={
            editingEmployee
              ? editingEmployee.gender
              : newEmployee.gender
          }
          onChange={handleChange}
        >

          <option value="">
            Select Gender
          </option>

          <option value="Male">
            Male
          </option>

          <option value="Female">
            Female
          </option>

        </select>

        <input
          type="date"
          name="dateOfBirth"
          value={
            editingEmployee
              ? editingEmployee.dateOfBirth
              : newEmployee.dateOfBirth
          }
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={
            editingEmployee
              ? editingEmployee.email
              : newEmployee.email
          }
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={
            editingEmployee
              ? editingEmployee.phone
              : newEmployee.phone
          }
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={
            editingEmployee
              ? editingEmployee.address
              : newEmployee.address
          }
          onChange={handleChange}
        />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={
            editingEmployee
              ? editingEmployee.designation
              : newEmployee.designation
          }
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="date"
          name="joiningDate"
          value={
            editingEmployee
              ? editingEmployee.joiningDate
              : newEmployee.joiningDate
          }
          onChange={handleChange}
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={
            editingEmployee
              ? editingEmployee.salary
              : newEmployee.salary
          }
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="status"
          value={
            editingEmployee
              ? editingEmployee.status
              : newEmployee.status
          }
          onChange={handleChange}
        >

          <option value="ACTIVE">
            ACTIVE
          </option>

          <option value="INACTIVE">
            INACTIVE
          </option>

        </select>

        <br /><br />

        <input
          type="file"
          onChange={handleImageChange}
        />

        <br /><br />

        {editingEmployee ? (

          <div>

            <button
              onClick={
                updateEmployee
              }
            >

              Update Employee

            </button>

            <button

              onClick={() =>
                setEditingEmployee(
                  null
                )
              }

              style={{
                marginLeft:
                  "10px"
              }}
            >

              Cancel

            </button>

          </div>

        ) : (

          <button
            onClick={
              addEmployee
            }
          >

            Add Employee

          </button>
        )}

      </div>

      {/* TABLE */}
  <div
  style={{
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    overflowX: "auto",
    marginTop: "20px"
  }}
>
   <table
  style={{
    width: "100%",
    borderCollapse: "collapse"
  }}
>
<thead
  style={{
    background: "#2563eb",
    color: "white",
    height: "55px"
  }}
>

          <tr>

            <th>ID</th>
            <th>Profile</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Designation</th>
            <th>Joining Date</th>
            <th>Salary</th>
            <th>Status</th>
            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {employees.map((emp) => (

           <tr
  key={emp.employeeId}
  style={{
    borderBottom: "1px solid #e5e7eb"
  }}
>
<td
  style={{
    padding: "12px",
    textAlign: "center"
  }}
>
  {emp.employeeId}
</td>
              <td>
<img
  src={`http://localhost:8082${emp.profileImage}`}
  alt="profile"
  width="50"
  height="50"
  style={{
    borderRadius: "50%",
    objectFit: "cover"
  }}
/>

              </td>

           <td
  style={{
    padding: "12px",
    textAlign: "center"
  }}
>
  {emp.firstName}
</td>

            <td
  style={{
    padding: "12px",
    textAlign: "center"
  }}
>
  {emp.lastName}
</td>

              <td>
                {emp.gender}
              </td>

              <td>
                {emp.dateOfBirth}
              </td>

              <td>
                {emp.email}
              </td>

              <td>
                {emp.phone}
              </td>

              <td>
                {emp.address}
              </td>

              <td>
                {emp.designation}
              </td>

              <td>
                {emp.joiningDate}
              </td>

              <td>
                ₹{emp.salary}
              </td>

             <td>
  <span
    style={{
      background:
        emp.status === "ACTIVE"
          ? "#dcfce7"
          : "#fee2e2",
      color:
        emp.status === "ACTIVE"
          ? "#166534"
          : "#991b1b",
      padding: "6px 12px",
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: "bold"
    }}
  >
    {emp.status}
  </span>
</td>
              <td>
<button
  onClick={() =>
    setEditingEmployee(emp)
  }
  style={{
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  }}
>
  Edit
</button>

                <button

                  onClick={() =>
                    deleteEmployee(
                      emp.employeeId
                    )
                  }

               style={{
  marginLeft: "10px",
  background: "#dc2626",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "6px",
  cursor: "pointer"
}}
                >

                  Delete

                </button>

              </td>

            </tr>

          ))}

        </tbody>

     </table>

  </div>
  </div>
  </div>

  );
}

export default Employees;