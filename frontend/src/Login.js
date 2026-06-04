import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import Header from "./Header";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( email === "" || password === "") {
      setError("All fields are required");
    } else {
      setError("");
      axios
        .post("http://localhost:2407/api/register", { email, password })
        .then((response) => {
          alert("Registration Successful");
          navigate("/");
        })
        .catch((error) => {
          setError("Registration Failed");
        });
    }
  };


  return (
  <>
    <Header />

    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Login</h2>

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

        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  </>
);
}

export default Login;
