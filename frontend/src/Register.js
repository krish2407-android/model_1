import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Header from "./Header";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const validateForm = () => {
    if (!name.trim()) {
      return "Name is required";
    }

    if (name.trim().length < 3) {
      return "Name must be at least 3 characters";
    }

    if (!/^[A-Za-z ]+$/.test(name)) {
      return "Name should contain only letters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      return "Email is required";
    }

    if (!emailRegex.test(email)) {
      return "Enter valid email address";
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!password) {
      return "Password is required";
    }

    if (!passwordRegex.test(password)) {
      return "Password must contain 8+ chars, uppercase, lowercase, number & special character";
    }

    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      await axios.post("http://localhost:2407/api/register", {
        name: name.trim(),
        email: email.trim(),
        password,
      });

      alert("Registration Successful");

      setName("");
      setEmail("");
      setPassword("");

      navigate("/Login");
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Registration Failed");
      }
    }
  };

  return (
    <>
      <Header />

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

          {error && (
            <p
              style={{
                color: "red",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              {error}
            </p>
          )}

          <button type="submit" className="submit-btn">
            Register
          </button>

          <div className="register-links">
            <p>
              Already have an account?{" "}
              <span className="link-text" onClick={() => navigate("/")}>
                Login Now
              </span>
            </p>

            <p>
              <span
                className="link-text"
                onClick={() => navigate("/ForgotPassword")}
              >
                Forgot Password?
              </span>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;