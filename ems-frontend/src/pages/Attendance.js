import React from "react";

import axios from "axios";

const Attendance = () => {

  // TOKEN localStorage ru neuchi

  const token = localStorage.getItem("token");

  // CHECK-IN FUNCTION

  const checkIn = async () => {
 console.log("Button Clicked");

  console.log(token);
    try {

      const response = await axios.post(

        "http://localhost:8080/attendance/checkin",

        {
          employee: {
            employeeId: 2
          }
        },

        {
          headers: {
            Authorization:
            `Bearer ${token}`
          }
        }
      );

      console.log(response.data);

      alert("Check-In Successful");

    } catch(error) {

   console.log(error);

   if(error.response) {

      alert(error.response.data);

   } else {

      alert("Backend not responding");
   }
}
  };

  const checkOut = async () => {

  try {

    const response = await axios.put(

      "http://localhost:8080/attendance/checkout/7",

      {},

      {
        headers: {
          Authorization:
          `Bearer ${token}`
        }
      }
    );

    console.log(response.data);

    alert("Check-Out Successful");

  } catch(error) {

    console.log(error);

    alert("Error");
  }
};

  return (

    <div>

      <h1>Attendance Page</h1>

      <button onClick={checkIn}>

        Check-In

      </button>

      <button onClick={checkOut}>

  Check-Out

</button>

    </div>
  );
};

export default Attendance;