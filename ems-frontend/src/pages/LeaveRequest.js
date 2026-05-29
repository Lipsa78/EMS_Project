import React, { useState, useEffect } from "react";

import axios from "axios";

const LeaveRequest = () => {

  // FORM DATA

  const [leaveData, setLeaveData] = useState({

    employee: {
      employeeId: ""
    },

    leaveType: "",

    startDate: "",

    endDate: "",

    reason: ""
  });

  // ALL LEAVES

  const [leaves, setLeaves] = useState([]);

  // TOKEN

  const token = localStorage.getItem("token");

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    const { name, value } = e.target;

    setLeaveData({

      ...leaveData,

      [name]: value
    });
  };

  // HANDLE EMPLOYEE ID

  const handleEmployeeId = (e) => {

    setLeaveData({

      ...leaveData,

      employee: {
        employeeId: e.target.value
      }
    });
  };

  // GET ALL LEAVES

  const getAllLeaves = async () => {

    try {

      const response = await axios.get(

        "http://localhost:8080/leaves",

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setLeaves(response.data);

    } catch (error) {

      console.error(error);
    }
  };

  // LOAD LEAVES ON PAGE LOAD

  useEffect(() => {

    getAllLeaves();

  }, []);

  // APPLY LEAVE

  const applyLeave = async () => {

    try {

      const response = await axios.post(

        "http://localhost:8080/leaves",

        leaveData,

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Leave Applied Successfully");

      console.log(response.data);

      // REFRESH LEAVE LIST

      getAllLeaves();

      // CLEAR FORM

      setLeaveData({

        employee: {
          employeeId: ""
        },

        leaveType: "",

        startDate: "",

        endDate: "",

        reason: ""
      });

    } catch (error) {

      console.error(error);

      alert("Error Applying Leave");
    }
  };

  // APPROVE LEAVE

  const approveLeave = async (id) => {

    try {

      await axios.put(

        `http://localhost:8080/leaves/approve/${id}`,

        {},

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Leave Approved");

      getAllLeaves();

    } catch (error) {

      console.error(error);
    }
  };

  // REJECT LEAVE

  const rejectLeave = async (id) => {

    try {

      await axios.put(

        `http://localhost:8080/leaves/reject/${id}`,

        {},

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Leave Rejected");

      getAllLeaves();

    } catch (error) {

      console.error(error);
    }
  };

  return (

    <div style={{ padding: "20px" }}>

      <h2>Apply Leave</h2>

      {/* EMPLOYEE ID */}

      <input
        type="number"
        placeholder="Employee ID"
        value={leaveData.employee.employeeId}
        onChange={handleEmployeeId}
      />

      <br /><br />

      {/* LEAVE TYPE */}

      <input
        type="text"
        name="leaveType"
        placeholder="Leave Type"
        value={leaveData.leaveType}
        onChange={handleChange}
      />

      <br /><br />

      {/* START DATE */}

      <input
        type="date"
        name="startDate"
        value={leaveData.startDate}
        onChange={handleChange}
      />

      <br /><br />

      {/* END DATE */}

      <input
        type="date"
        name="endDate"
        value={leaveData.endDate}
        onChange={handleChange}
      />

      <br /><br />

      {/* REASON */}

      <textarea
        name="reason"
        placeholder="Reason"
        value={leaveData.reason}
        onChange={handleChange}
      />

      <br /><br />

      {/* APPLY BUTTON */}

      <button onClick={applyLeave}>

        Apply Leave

      </button>

      <hr />

      {/* ALL LEAVES */}

      <h2>All Leaves</h2>

      {

        leaves.map((leave) => (

          <div

            key={leave.leaveId}

            style={{
              border: "1px solid black",
              padding: "10px",
              marginBottom: "10px"
            }}
          >

            <p>
              <b>Leave ID:</b>
              {leave.leaveId}
            </p>

            <p>
              <b>Employee ID:</b>
              {leave.employee?.employeeId}
            </p>

            <p>
              <b>Leave Type:</b>
              {leave.leaveType}
            </p>

            <p>
              <b>Start Date:</b>
              {leave.startDate}
            </p>

            <p>
              <b>End Date:</b>
              {leave.endDate}
            </p>

            <p>
              <b>Reason:</b>
              {leave.reason}
            </p>

            <p>
              <b>Status:</b>
              {leave.status}
            </p>

            <button
              onClick={() =>
                approveLeave(leave.leaveId)
              }
            >
              Approve
            </button>

            <button
              style={{ marginLeft: "10px" }}

              onClick={() =>
                rejectLeave(leave.leaveId)
              }
            >
              Reject
            </button>

          </div>
        ))
      }

    </div>
  );
};

export default LeaveRequest;