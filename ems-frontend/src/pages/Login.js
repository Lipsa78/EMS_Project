import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data);
      alert("Login Successful");
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>EMS</h1>
        <p className="subtitle">
          Employee Management System
        </p>

        <h2>Login</h2>

        <input
          className="login-input"
          type="email"
          placeholder="admin@gmail.com"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          className="login-input"
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="login-btn"
          onClick={login}
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;