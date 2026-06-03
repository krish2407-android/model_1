import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css"; 

function Register() {
  const navigate = useNavigate();

   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setError("All fields are required");
    } else {
      setError("");
      axios
        .post("http://localhost:2407/api/register", { name, email, password })
        .then((response) => {
          alert("Registration Successful");
          navigate("/Login");
        })
        .catch((error) => {
          setError("Registration Failed");
        });
    }
  };


  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register Form</h2>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}

export default Register;
