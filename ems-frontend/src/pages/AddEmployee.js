import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddEmployee() {

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
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
    status: "ACTIVE"
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const saveEmployee = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(employee).forEach(key => {
      formData.append(key, employee[key]);
    });

    if (image) {
      formData.append("image", image);
    }

    try {

      await axios.post(
        "http://localhost:8080/employees",
        formData,
        {
          headers: {
            "Content-Type":
            "multipart/form-data"
          }
        }
      );

      alert("Employee Added Successfully");

      navigate("/employees");

    } catch (error) {

      console.log(error);

      alert("Failed To Add Employee");
    }
  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>Add Employee</h1>

      <form onSubmit={saveEmployee}>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="designation"
          placeholder="Designation"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="date"
          name="dateOfBirth"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="date"
          name="joiningDate"
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="gender"
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

        <br /><br />

        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="file"
          onChange={(e) =>
            setImage(e.target.files[0])
          }
        />

        <br /><br />

        <button type="submit">
          Save Employee
        </button>

      </form>

    </div>
  );
}

export default AddEmployee;