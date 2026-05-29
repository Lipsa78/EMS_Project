import React, { useState }
from "react";

import axios from "axios";

import { useNavigate }
from "react-router-dom";

function Login() {

  const [email, setEmail] =
  useState("");

  const [password, setPassword] =
  useState("");

  // HERE ONLY ✅
  const navigate = useNavigate();

  const login = async () => {

    try {

      const response =
      await axios.post(

        "http://localhost:8080/auth/login",

        {
          email,
          password
        }

      );

      localStorage.setItem(
        "token",
        response.data
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch(error) {

      alert("Invalid Credentials");
    }
  };

  return (

    <div>

      <h2>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button onClick={login}>
        Login
      </button>

    </div>
  );
}

export default Login;