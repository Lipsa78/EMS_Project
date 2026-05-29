import React,
{
 useEffect,
 useState
}
from "react";

import axios from "axios";

function Department() {

  // STATES

  const [departments,
  setDepartments]
  = useState([]);

  const [departmentName,
  setDepartmentName]
  = useState("");

  const [managerName,
  setManagerName]
  = useState("");

  const [search,
  setSearch]
  = useState("");

  const [editingId,
  setEditingId]
  = useState(null);

  // FETCH DATA

  useEffect(() => {

    fetchDepartments();

  }, []);

  const fetchDepartments =
  async () => {

    try {

      const token =
      localStorage.getItem(
        "token"
      );

      const response =
      await axios.get(

        "http://localhost:8080/departments",

        {
          headers: {
            Authorization:
            `Bearer ${token}`
          }
        }

      );

      setDepartments(
        response.data
      );

    } catch(error) {

      console.log(error);
    }
  };

  // ADD OR UPDATE

  const handleSubmit =
  async () => {

    try {

      const token =
      localStorage.getItem(
        "token"
      );

      const data = {

        departmentName,
        managerName
      };

      // UPDATE

      if(editingId) {

        await axios.put(

          `http://localhost:8080/departments/${editingId}`,

          data,

          {
            headers: {
              Authorization:
              `Bearer ${token}`
            }
          }

        );

        alert("Department Updated");

      }

      // ADD

      else {

        await axios.post(

          "http://localhost:8080/departments",

          data,

          {
            headers: {
              Authorization:
              `Bearer ${token}`
            }
          }

        );

        alert("Department Added");
      }

      // RESET

      setDepartmentName("");
      setManagerName("");
      setEditingId(null);

      fetchDepartments();

    } catch(error) {

      console.log(error);
    }
  };

  // DELETE

  const deleteDepartment =
  async (id) => {

    try {

      const token =
      localStorage.getItem(
        "token"
      );

      await axios.delete(

        `http://localhost:8080/departments/${id}`,

        {
          headers: {
            Authorization:
            `Bearer ${token}`
          }
        }

      );

      alert("Department Deleted");

      fetchDepartments();

    } catch(error) {

      console.log(error);
    }
  };

  // EDIT

  const editDepartment =
  (department) => {

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

  // SEARCH FILTER

  const filteredDepartments =
  departments.filter((department)=>

    department.departmentName
    .toLowerCase()

    .includes(
      search.toLowerCase()
    )
  );

  return (

    <div style={{
      padding: "20px"
    }}>

      <h1>Departments</h1>

      {/* SEARCH */}

      <input

        type="text"

        placeholder="Search Department"

        value={search}

        onChange={(e)=>
        setSearch(e.target.value)}

      />

      <br /><br />

      {/* FORM */}

      <input

        type="text"

        placeholder="Department Name"

        value={departmentName}

        onChange={(e)=>
        setDepartmentName(
          e.target.value
        )}

      />

      <br /><br />

      <input

        type="text"

        placeholder="Manager Name"

        value={managerName}

        onChange={(e)=>
        setManagerName(
          e.target.value
        )}

      />

      <br /><br />

      <button
      onClick={handleSubmit}>

        {
          editingId
          ? "Update"
          : "Add"
        }

      </button>

      <hr />

      {/* TABLE */}

      <table
      border="1"
      cellPadding="10">

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
            (department) => (

              <tr
              key={
                department.departmentId
              }>

                <td>
                  {
                  department.departmentId
                  }
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

                  onClick={()=>
                  editDepartment(
                    department
                  )}

                  >

                    Edit

                  </button>

                  <button

                  onClick={()=>
                  deleteDepartment(
                    department.departmentId
                  )}

                  >

                    Delete

                  </button>

                </td>

              </tr>
            ))
          }

        </tbody>

      </table>

    </div>
  );
}

export default Department;