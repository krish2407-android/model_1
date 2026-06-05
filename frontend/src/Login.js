import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and Password are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:2407/api/login", {
        email,
        password,
      });

      alert("Login Successful");

      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate("/Home");
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Login Failed");
      }
    }
  };

  return (
    <>
      <Header />

      <div className="register-container">
        <form onSubmit={handleLogin} className="register-form">
          <h2>Login Form</h2>

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

          {error && (
            <p style={{ color: "red", textAlign: "center" }}>
              {error}
            </p>
          )}

          <button type="submit" className="submit-btn">
            Login
          </button>
          <div
  style={{
    marginTop: "15px",
    textAlign: "center",
  }}
>
  <p style={{ margin: "8px 0" }}>
    <span
      onClick={() => navigate("/#")}
      style={{
        color: "#007bff",
        cursor: "pointer",
        fontWeight: "600",
      }}
    >
      Forgot Password?
    </span>
  </p>

  <p style={{ margin: "8px 0" }}>
    Don't have an account?{" "}
    <span
      onClick={() => navigate("/Register")}
      style={{
        color: "#007bff",
        cursor: "pointer",
        fontWeight: "600",
      }}
    >
      Register Now
    </span>
  </p>
</div>
        </form>
      </div>
    </>
  );
}

export default Login;